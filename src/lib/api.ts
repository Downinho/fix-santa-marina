// API Client for MARBANA MySQL Backend
const API_BASE_URL = 'https://marbanabd.mysql.dbaas.com.br/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('admin_token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        message: 'Erro de conexão com o servidor',
      };
    }
  }

  // Auth methods
  async login(email: string, password: string) {
    const response = await this.request<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.success && response.data?.token) {
      this.token = response.data.token;
      localStorage.setItem('admin_token', this.token);
    }

    return response;
  }

  async logout() {
    this.token = null;
    localStorage.removeItem('admin_token');
    return this.request('/auth/logout', { method: 'POST' });
  }

  async getMe() {
    return this.request<any>('/auth/me');
  }

  // Blog methods
  async getBlogPosts(params?: {
    page?: number;
    limit?: number;
    status?: string;
    category?: string;
  }) {
    const query = new URLSearchParams(params as any).toString();
    return this.request<any[]>(`/blog/posts?${query}`);
  }

  async getBlogPost(id: number) {
    return this.request<any>(`/blog/posts/${id}`);
  }

  async createBlogPost(data: any) {
    return this.request<any>('/blog/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateBlogPost(id: number, data: any) {
    return this.request<any>(`/blog/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteBlogPost(id: number) {
    return this.request(`/blog/posts/${id}`, { method: 'DELETE' });
  }

  async getBlogCategories() {
    return this.request<any[]>('/blog/categories');
  }

  // Vessel methods
  async getVessels(params?: {
    page?: number;
    limit?: number;
    status?: string;
    type?: string;
  }) {
    const query = new URLSearchParams(params as any).toString();
    return this.request<any[]>(`/vessels?${query}`);
  }

  async getVessel(id: number) {
    return this.request<any>(`/vessels/${id}`);
  }

  async createVessel(data: any) {
    return this.request<any>('/vessels', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateVessel(id: number, data: any) {
    return this.request<any>(`/vessels/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteVessel(id: number) {
    return this.request(`/vessels/${id}`, { method: 'DELETE' });
  }

  // Sailor methods
  async getSailors(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }) {
    const query = new URLSearchParams(params as any).toString();
    return this.request<any[]>(`/sailors?${query}`);
  }

  async getSailor(id: number) {
    return this.request<any>(`/sailors/${id}`);
  }

  async createSailor(data: any) {
    return this.request<any>('/sailors', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateSailor(id: number, data: any) {
    return this.request<any>(`/sailors/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteSailor(id: number) {
    return this.request(`/sailors/${id}`, { method: 'DELETE' });
  }

  // File upload
  async uploadFile(file: File, path: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);

    return this.request<{ url: string }>('/upload', {
      method: 'POST',
      headers: {
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
      },
      body: formData,
    });
  }

  // Dashboard stats
  async getDashboardStats() {
    return this.request<{
      vessels: { total: number; published: number };
      sailors: { total: number; verified: number };
      blog_posts: { total: number; published: number };
      recent_activity: any[];
    }>('/dashboard/stats');
  }
}

export const api = new ApiClient(API_BASE_URL);
export default api;