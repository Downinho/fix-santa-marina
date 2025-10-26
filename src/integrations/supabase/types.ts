export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      blog_categories: {
        Row: {
          id: string
          name: string
          slug: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      blog_post_categories: {
        Row: {
          category_id: string
          post_id: string
        }
        Insert: {
          category_id: string
          post_id: string
        }
        Update: {
          category_id?: string
          post_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_categories_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_post_tags: {
        Row: {
          post_id: string
          tag_id: string
        }
        Insert: {
          post_id: string
          tag_id: string
        }
        Update: {
          post_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_tags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "blog_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_profile_id: string
          content_md: string | null
          cover_image_url: string | null
          created_at: string
          excerpt: string | null
          id: string
          published_at: string | null
          slug: string
          status: Database["public"]["Enums"]["blog_status"]
          title: string
          updated_at: string
        }
        Insert: {
          author_profile_id: string
          content_md?: string | null
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug: string
          status?: Database["public"]["Enums"]["blog_status"]
          title: string
          updated_at?: string
        }
        Update: {
          author_profile_id?: string
          content_md?: string | null
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["blog_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_profile_id_fkey"
            columns: ["author_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_tags: {
        Row: {
          id: string
          name: string
          slug: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          created_at: string
          currency: string
          end_ts: string
          id: string
          payment_session_id: string | null
          renter_profile_id: string
          skipper_profile_id: string | null
          start_ts: string
          status: Database["public"]["Enums"]["booking_status"]
          total_amount_cents: number
          updated_at: string
          vessel_id: string
          with_skipper: boolean
        }
        Insert: {
          created_at?: string
          currency?: string
          end_ts: string
          id?: string
          payment_session_id?: string | null
          renter_profile_id: string
          skipper_profile_id?: string | null
          start_ts: string
          status?: Database["public"]["Enums"]["booking_status"]
          total_amount_cents: number
          updated_at?: string
          vessel_id: string
          with_skipper?: boolean
        }
        Update: {
          created_at?: string
          currency?: string
          end_ts?: string
          id?: string
          payment_session_id?: string | null
          renter_profile_id?: string
          skipper_profile_id?: string | null
          start_ts?: string
          status?: Database["public"]["Enums"]["booking_status"]
          total_amount_cents?: number
          updated_at?: string
          vessel_id?: string
          with_skipper?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "bookings_renter_profile_id_fkey"
            columns: ["renter_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_skipper_profile_id_fkey"
            columns: ["skipper_profile_id"]
            isOneToOne: false
            referencedRelation: "skipper_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_vessel_id_fkey"
            columns: ["vessel_id"]
            isOneToOne: false
            referencedRelation: "vessels"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          id: string
          profile_id: string
          vessel_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          profile_id: string
          vessel_id: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
          vessel_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_vessel_id_fkey"
            columns: ["vessel_id"]
            isOneToOne: false
            referencedRelation: "vessels"
            referencedColumns: ["id"]
          },
        ]
      }
      inquiries: {
        Row: {
          created_at: string
          email: string | null
          id: string
          message: string | null
          name: string | null
          phone: string | null
          profile_id: string | null
          vessel_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          profile_id?: string | null
          vessel_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          profile_id?: string | null
          vessel_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inquiries_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inquiries_vessel_id_fkey"
            columns: ["vessel_id"]
            isOneToOne: false
            referencedRelation: "vessels"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string
          product_id: string
          quantity: number
          unit_price_cents: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          product_id: string
          quantity?: number
          unit_price_cents: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          unit_price_cents?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          buyer_profile_id: string | null
          created_at: string
          currency: string
          id: string
          status: Database["public"]["Enums"]["order_status"]
          stripe_session_id: string | null
          total_cents: number
          updated_at: string
        }
        Insert: {
          buyer_profile_id?: string | null
          created_at?: string
          currency?: string
          id?: string
          status?: Database["public"]["Enums"]["order_status"]
          stripe_session_id?: string | null
          total_cents: number
          updated_at?: string
        }
        Update: {
          buyer_profile_id?: string | null
          created_at?: string
          currency?: string
          id?: string
          status?: Database["public"]["Enums"]["order_status"]
          stripe_session_id?: string | null
          total_cents?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_buyer_profile_id_fkey"
            columns: ["buyer_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand: string | null
          category: string | null
          cover_image_url: string | null
          created_at: string
          currency: string
          description: string | null
          id: string
          name: string
          price_cents: number
          published: boolean
          slug: string
          specifications: string | null
          stock: number
          updated_at: string
          vendor_profile_id: string
        }
        Insert: {
          brand?: string | null
          category?: string | null
          cover_image_url?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          name: string
          price_cents: number
          published?: boolean
          slug: string
          specifications?: string | null
          stock?: number
          updated_at?: string
          vendor_profile_id: string
        }
        Update: {
          brand?: string | null
          category?: string | null
          cover_image_url?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          name?: string
          price_cents?: number
          published?: boolean
          slug?: string
          specifications?: string | null
          stock?: number
          updated_at?: string
          vendor_profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_vendor_profile_id_fkey"
            columns: ["vendor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          city: string | null
          country: string | null
          created_at: string
          display_name: string | null
          id: string
          is_verified: boolean
          phone: string | null
          state: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          display_name?: string | null
          id: string
          is_verified?: boolean
          phone?: string | null
          state?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          is_verified?: boolean
          phone?: string | null
          state?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      skipper_profiles: {
        Row: {
          bio: string | null
          city: string | null
          contact_email: string | null
          contact_phone: string | null
          contact_whatsapp: string | null
          created_at: string
          day_rate_cents: number | null
          hourly_rate_cents: number | null
          id: string
          latitude: number | null
          license_number: string | null
          longitude: number | null
          profile_id: string
          published: boolean
          service_area: string | null
          specialties: string | null
          state: string | null
          updated_at: string
          verified: boolean
          years_experience: number | null
        }
        Insert: {
          bio?: string | null
          city?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          contact_whatsapp?: string | null
          created_at?: string
          day_rate_cents?: number | null
          hourly_rate_cents?: number | null
          id?: string
          latitude?: number | null
          license_number?: string | null
          longitude?: number | null
          profile_id: string
          published?: boolean
          service_area?: string | null
          specialties?: string | null
          state?: string | null
          updated_at?: string
          verified?: boolean
          years_experience?: number | null
        }
        Update: {
          bio?: string | null
          city?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          contact_whatsapp?: string | null
          created_at?: string
          day_rate_cents?: number | null
          hourly_rate_cents?: number | null
          id?: string
          latitude?: number | null
          license_number?: string | null
          longitude?: number | null
          profile_id?: string
          published?: boolean
          service_area?: string | null
          specialties?: string | null
          state?: string | null
          updated_at?: string
          verified?: boolean
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "skipper_profiles_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vessel_blackouts: {
        Row: {
          created_at: string
          end_ts: string
          id: string
          note: string | null
          start_ts: string
          vessel_id: string
        }
        Insert: {
          created_at?: string
          end_ts: string
          id?: string
          note?: string | null
          start_ts: string
          vessel_id: string
        }
        Update: {
          created_at?: string
          end_ts?: string
          id?: string
          note?: string | null
          start_ts?: string
          vessel_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vessel_blackouts_vessel_id_fkey"
            columns: ["vessel_id"]
            isOneToOne: false
            referencedRelation: "vessels"
            referencedColumns: ["id"]
          },
        ]
      }
      vessel_media: {
        Row: {
          created_at: string
          id: string
          position: number
          type: Database["public"]["Enums"]["media_type"]
          url: string
          vessel_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          position?: number
          type: Database["public"]["Enums"]["media_type"]
          url: string
          vessel_id: string
        }
        Update: {
          created_at?: string
          id?: string
          position?: number
          type?: Database["public"]["Enums"]["media_type"]
          url?: string
          vessel_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vessel_media_vessel_id_fkey"
            columns: ["vessel_id"]
            isOneToOne: false
            referencedRelation: "vessels"
            referencedColumns: ["id"]
          },
        ]
      }
      vessels: {
        Row: {
          address: string | null
          beam_m: number | null
          cabins: number | null
          capacity: number | null
          city: string | null
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          contact_whatsapp: string | null
          country: string | null
          created_at: string
          currency: string
          description: string | null
          draft_m: number | null
          engines: string | null
          for_rent: boolean
          for_sale: boolean
          fuel: string | null
          highlights: string | null
          horsepower: number | null
          id: string
          latitude: number | null
          length_m: number | null
          longitude: number | null
          name: string
          owner_profile_id: string
          price_day_cents: number | null
          price_hour_cents: number | null
          price_sale_cents: number | null
          slug: string
          state: string | null
          status: Database["public"]["Enums"]["vessel_status"]
          type: string
          updated_at: string
          year: number | null
        }
        Insert: {
          address?: string | null
          beam_m?: number | null
          cabins?: number | null
          capacity?: number | null
          city?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          contact_whatsapp?: string | null
          country?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          draft_m?: number | null
          engines?: string | null
          for_rent?: boolean
          for_sale?: boolean
          fuel?: string | null
          highlights?: string | null
          horsepower?: number | null
          id?: string
          latitude?: number | null
          length_m?: number | null
          longitude?: number | null
          name: string
          owner_profile_id: string
          price_day_cents?: number | null
          price_hour_cents?: number | null
          price_sale_cents?: number | null
          slug: string
          state?: string | null
          status?: Database["public"]["Enums"]["vessel_status"]
          type: string
          updated_at?: string
          year?: number | null
        }
        Update: {
          address?: string | null
          beam_m?: number | null
          cabins?: number | null
          capacity?: number | null
          city?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          contact_whatsapp?: string | null
          country?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          draft_m?: number | null
          engines?: string | null
          for_rent?: boolean
          for_sale?: boolean
          fuel?: string | null
          highlights?: string | null
          horsepower?: number | null
          id?: string
          latitude?: number | null
          length_m?: number | null
          longitude?: number | null
          name?: string
          owner_profile_id?: string
          price_day_cents?: number | null
          price_hour_cents?: number | null
          price_sale_cents?: number | null
          slug?: string
          state?: string | null
          status?: Database["public"]["Enums"]["vessel_status"]
          type?: string
          updated_at?: string
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vessels_owner_profile_id_fkey"
            columns: ["owner_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "buyer" | "seller" | "skipper" | "vendor"
      blog_status: "draft" | "published"
      booking_status:
        | "pending"
        | "awaiting_payment"
        | "paid"
        | "canceled"
        | "refunded"
      media_type: "image" | "video"
      order_status: "pending" | "paid" | "canceled"
      vessel_status:
        | "draft"
        | "submitted"
        | "approved"
        | "published"
        | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "buyer", "seller", "skipper", "vendor"],
      blog_status: ["draft", "published"],
      booking_status: [
        "pending",
        "awaiting_payment",
        "paid",
        "canceled",
        "refunded",
      ],
      media_type: ["image", "video"],
      order_status: ["pending", "paid", "canceled"],
      vessel_status: [
        "draft",
        "submitted",
        "approved",
        "published",
        "rejected",
      ],
    },
  },
} as const
