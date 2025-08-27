import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qobdsqwzfnbxeyvahhxw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvYmRzcXd6Zm5ieGV5dmFoaHh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NzQ4NTAsImV4cCI6MjA3MTM1MDg1MH0.WuOanGgmEN2DWVjcC3ZV6z7r_No9PW88DEd7P-uQp04';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});