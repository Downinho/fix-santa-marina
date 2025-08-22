
-- ENUMS
create type public.app_role as enum ('admin', 'buyer', 'seller', 'skipper', 'vendor');
create type public.blog_status as enum ('draft', 'published');
create type public.vessel_status as enum ('draft', 'submitted', 'approved', 'published', 'rejected');
create type public.media_type as enum ('image', 'video');
create type public.booking_status as enum ('pending', 'awaiting_payment', 'paid', 'canceled', 'refunded');
create type public.order_status as enum ('pending', 'paid', 'canceled');

-- PERFIS E ROLES
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  phone text,
  city text,
  state text,
  country text,
  avatar_url text,
  is_verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  unique (user_id, role),
  created_at timestamptz not null default now()
);
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

-- RLS policies para profiles
create policy "select_own_profile_or_admin" on public.profiles
for select
using (id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "update_own_profile_or_admin" on public.profiles
for update
using (id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "insert_profiles_admin_only" on public.profiles
for insert to authenticated
with check (public.has_role(auth.uid(), 'admin'));

-- RLS policies para user_roles
create policy "select_own_roles_or_admin" on public.user_roles
for select
using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "users_can_add_their_own_roles" on public.user_roles
for insert to authenticated
with check (user_id = auth.uid());

create policy "users_can_remove_their_own_roles" on public.user_roles
for delete to authenticated
using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

-- Trigger para criar profile automaticamente ao cadastrar usuário
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', ''));
  -- Concede papel 'buyer' por padrão
  insert into public.user_roles (user_id, role) values (new.id, 'buyer')
  on conflict (user_id, role) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- SUBSCRIBERS (Stripe)
create table public.subscribers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  email text not null unique,
  stripe_customer_id text,
  subscribed boolean not null default false,
  subscription_tier text,
  subscription_end timestamptz,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
alter table public.subscribers enable row level security;

create policy "select_own_subscription" on public.subscribers
for select
using (user_id = auth.uid() or email = auth.email());

create policy "insert_subscription" on public.subscribers
for insert
with check (true);

create policy "update_subscription" on public.subscribers
for update
using (true);

-- BLOG
create table public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique
);
alter table public.blog_categories enable row level security;

create table public.blog_tags (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique
);
alter table public.blog_tags enable row level security;

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  author_profile_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  slug text not null unique,
  excerpt text,
  content_md text,
  cover_image_url text,
  status public.blog_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.blog_posts enable row level security;

create table public.blog_post_categories (
  post_id uuid not null references public.blog_posts(id) on delete cascade,
  category_id uuid not null references public.blog_categories(id) on delete cascade,
  primary key (post_id, category_id)
);
alter table public.blog_post_categories enable row level security;

create table public.blog_post_tags (
  post_id uuid not null references public.blog_posts(id) on delete cascade,
  tag_id uuid not null references public.blog_tags(id) on delete cascade,
  primary key (post_id, tag_id)
);
alter table public.blog_post_tags enable row level security;

-- Policies Blog
create policy "blog_categories_select_all" on public.blog_categories
for select using (true);
create policy "blog_tags_select_all" on public.blog_tags
for select using (true);

create policy "blog_posts_public_or_author_or_admin" on public.blog_posts
for select
using (
  status = 'published'
  or author_profile_id = auth.uid()
  or public.has_role(auth.uid(), 'admin')
);

create policy "blog_posts_insert_author_or_admin" on public.blog_posts
for insert to authenticated
with check (author_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "blog_posts_update_author_or_admin" on public.blog_posts
for update to authenticated
using (author_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "blog_posts_delete_author_or_admin" on public.blog_posts
for delete to authenticated
using (author_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

-- Join policies (autor/admin controla)
create policy "post_categories_manage_by_author_or_admin" on public.blog_post_categories
for all to authenticated
using (
  exists (
    select 1 from public.blog_posts p
    where p.id = blog_post_categories.post_id
      and (p.author_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
)
with check (
  exists (
    select 1 from public.blog_posts p
    where p.id = blog_post_categories.post_id
      and (p.author_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
);

create policy "post_tags_manage_by_author_or_admin" on public.blog_post_tags
for all to authenticated
using (
  exists (
    select 1 from public.blog_posts p
    where p.id = blog_post_tags.post_id
      and (p.author_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
)
with check (
  exists (
    select 1 from public.blog_posts p
    where p.id = blog_post_tags.post_id
      and (p.author_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
);

-- EMBARCAÇÕES
create table public.vessels (
  id uuid primary key default gen_random_uuid(),
  owner_profile_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  slug text not null unique,
  type text not null, -- Lancha, Iate, Veleiro, Catamarã, Jet Ski etc.
  description text,
  year int,
  length_m numeric,
  beam_m numeric,
  draft_m numeric,
  capacity int,
  cabins int,
  engines text,
  horsepower int,
  fuel text,
  for_sale boolean not null default false,
  for_rent boolean not null default true,
  price_sale_cents int,
  price_hour_cents int,
  price_day_cents int,
  currency text not null default 'BRL',
  address text,
  city text,
  state text,
  country text,
  latitude numeric,
  longitude numeric,
  status public.vessel_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.vessels enable row level security;

create index vessels_owner_idx on public.vessels(owner_profile_id);
create index vessels_status_idx on public.vessels(status);
create index vessels_city_state_idx on public.vessels(city, state);

create policy "vessels_public_published" on public.vessels
for select
using (
  status = 'published'
  or owner_profile_id = auth.uid()
  or public.has_role(auth.uid(), 'admin')
);

create policy "vessels_owner_insert" on public.vessels
for insert to authenticated
with check (owner_profile_id = auth.uid());

create policy "vessels_owner_update" on public.vessels
for update to authenticated
using (owner_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "vessels_owner_delete" on public.vessels
for delete to authenticated
using (owner_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

-- Mídia das embarcações
create table public.vessel_media (
  id uuid primary key default gen_random_uuid(),
  vessel_id uuid not null references public.vessels(id) on delete cascade,
  type public.media_type not null,
  url text not null,
  position int not null default 0,
  created_at timestamptz not null default now()
);
alter table public.vessel_media enable row level security;

create policy "vessel_media_select_published_or_owner" on public.vessel_media
for select
using (
  exists (
    select 1 from public.vessels v
    where v.id = vessel_media.vessel_id
      and (
        v.status = 'published'
        or v.owner_profile_id = auth.uid()
        or public.has_role(auth.uid(), 'admin')
      )
  )
);

create policy "vessel_media_manage_owner_or_admin" on public.vessel_media
for all to authenticated
using (
  exists (
    select 1 from public.vessels v
    where v.id = vessel_media.vessel_id
      and (v.owner_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
)
with check (
  exists (
    select 1 from public.vessels v
    where v.id = vessel_media.vessel_id
      and (v.owner_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
);

-- Indisponibilidades (blackouts)
create table public.vessel_blackouts (
  id uuid primary key default gen_random_uuid(),
  vessel_id uuid not null references public.vessels(id) on delete cascade,
  start_ts timestamptz not null,
  end_ts timestamptz not null,
  note text,
  created_at timestamptz not null default now()
);
alter table public.vessel_blackouts enable row level security;

create policy "vessel_blackouts_owner_or_admin" on public.vessel_blackouts
for all to authenticated
using (
  exists (
    select 1 from public.vessels v
    where v.id = vessel_blackouts.vessel_id
      and (v.owner_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
)
with check (
  exists (
    select 1 from public.vessels v
    where v.id = vessel_blackouts.vessel_id
      and (v.owner_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
);

-- Skipper (Marinheiro)
create table public.skipper_profiles (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references public.profiles(id) on delete cascade,
  bio text,
  license_number text,
  years_experience int,
  hourly_rate_cents int,
  day_rate_cents int,
  service_area text,
  city text,
  state text,
  latitude numeric,
  longitude numeric,
  published boolean not null default false,
  verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.skipper_profiles enable row level security;

create policy "skipper_public_or_owner_or_admin" on public.skipper_profiles
for select
using (published = true or profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "skipper_owner_manage" on public.skipper_profiles
for all to authenticated
using (profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
with check (profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

-- Reservas (com ou sem marinheiro)
create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  vessel_id uuid not null references public.vessels(id) on delete cascade,
  renter_profile_id uuid not null references public.profiles(id) on delete cascade,
  start_ts timestamptz not null,
  end_ts timestamptz not null,
  with_skipper boolean not null default false,
  skipper_profile_id uuid references public.skipper_profiles(id) on delete set null,
  total_amount_cents int not null,
  currency text not null default 'BRL',
  status public.booking_status not null default 'pending',
  payment_session_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.bookings enable row level security;

create index bookings_vessel_idx on public.bookings(vessel_id);
create index bookings_renter_idx on public.bookings(renter_profile_id);

create policy "bookings_view_renter_owner_admin" on public.bookings
for select
using (
  renter_profile_id = auth.uid()
  or exists (
    select 1 from public.vessels v
    where v.id = bookings.vessel_id
      and v.owner_profile_id = auth.uid()
  )
  or public.has_role(auth.uid(), 'admin')
);

create policy "bookings_insert_by_renter" on public.bookings
for insert to authenticated
with check (renter_profile_id = auth.uid());

create policy "bookings_update_renter_or_admin" on public.bookings
for update to authenticated
using (renter_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

-- Favoritos
create table public.favorites (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  vessel_id uuid not null references public.vessels(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (profile_id, vessel_id)
);
alter table public.favorites enable row level security;

create policy "favorites_select_own" on public.favorites
for select to authenticated
using (profile_id = auth.uid());

create policy "favorites_insert_own" on public.favorites
for insert to authenticated
with check (profile_id = auth.uid());

create policy "favorites_delete_own" on public.favorites
for delete to authenticated
using (profile_id = auth.uid());

-- Leads / Contatos
create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete set null,
  vessel_id uuid references public.vessels(id) on delete set null,
  name text,
  email text,
  phone text,
  message text,
  created_at timestamptz not null default now()
);
alter table public.inquiries enable row level security;

-- permitir criação por anônimos (formulário público)
create policy "inquiries_insert_public" on public.inquiries
for insert
to anon, authenticated
with check (true);

-- leitura apenas para dono da embarcação, autor do lead ou admin
create policy "inquiries_select_owner_or_author_or_admin" on public.inquiries
for select
using (
  (profile_id is not distinct from auth.uid())
  or exists (
    select 1 from public.vessels v
    where v.id = inquiries.vessel_id and v.owner_profile_id = auth.uid()
  )
  or public.has_role(auth.uid(), 'admin')
);

-- Loja de Acessórios
create table public.products (
  id uuid primary key default gen_random_uuid(),
  vendor_profile_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  slug text not null unique,
  description text,
  price_cents int not null,
  currency text not null default 'BRL',
  stock int not null default 0,
  published boolean not null default false,
  cover_image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.products enable row level security;

create policy "products_public_or_vendor_or_admin" on public.products
for select
using (published = true or vendor_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "products_vendor_manage" on public.products
for all to authenticated
using (vendor_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
with check (vendor_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  buyer_profile_id uuid references public.profiles(id) on delete set null,
  status public.order_status not null default 'pending',
  total_cents int not null,
  currency text not null default 'BRL',
  stripe_session_id text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.orders enable row level security;

create policy "orders_select_buyer_or_admin" on public.orders
for select
using (buyer_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "orders_insert_buyer" on public.orders
for insert to authenticated
with check (buyer_profile_id = auth.uid());

create policy "orders_update_admin_only" on public.orders
for update to authenticated
using (public.has_role(auth.uid(), 'admin'));

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  quantity int not null default 1,
  unit_price_cents int not null,
  created_at timestamptz not null default now()
);
alter table public.order_items enable row level security;

create policy "order_items_access_through_order" on public.order_items
for all to authenticated
using (
  exists (
    select 1 from public.orders o
    where o.id = order_items.order_id
      and (o.buyer_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
)
with check (
  exists (
    select 1 from public.orders o
    where o.id = order_items.order_id
      and (o.buyer_profile_id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  )
);

-- STORAGE BUCKETS
insert into storage.buckets (id, name, public) values
  ('avatars', 'avatars', true),
  ('vessels', 'vessels', true),
  ('blog', 'blog', true),
  ('products', 'products', true)
on conflict (id) do nothing;

-- Políticas de leitura pública
create policy "Public read avatars" on storage.objects
for select using (bucket_id = 'avatars');

create policy "Public read vessels" on storage.objects
for select using (bucket_id = 'vessels');

create policy "Public read blog" on storage.objects
for select using (bucket_id = 'blog');

create policy "Public read products" on storage.objects
for select using (bucket_id = 'products');

-- Políticas de escrita para autenticados nos próprios objetos
create policy "Authenticated upload avatars" on storage.objects
for insert to authenticated
with check (bucket_id = 'avatars' and owner = auth.uid());

create policy "Authenticated update avatars" on storage.objects
for update to authenticated
using (bucket_id = 'avatars' and owner = auth.uid());

create policy "Authenticated delete avatars" on storage.objects
for delete to authenticated
using (bucket_id = 'avatars' and owner = auth.uid());

create policy "Authenticated upload vessels" on storage.objects
for insert to authenticated
with check (bucket_id = 'vessels' and owner = auth.uid());

create policy "Authenticated update vessels" on storage.objects
for update to authenticated
using (bucket_id = 'vessels' and owner = auth.uid());

create policy "Authenticated delete vessels" on storage.objects
for delete to authenticated
using (bucket_id = 'vessels' and owner = auth.uid());

create policy "Authenticated upload blog" on storage.objects
for insert to authenticated
with check (bucket_id = 'blog' and owner = auth.uid());

create policy "Authenticated update blog" on storage.objects
for update to authenticated
using (bucket_id = 'blog' and owner = auth.uid());

create policy "Authenticated delete blog" on storage.objects
for delete to authenticated
using (bucket_id = 'blog' and owner = auth.uid());

create policy "Authenticated upload products" on storage.objects
for insert to authenticated
with check (bucket_id = 'products' and owner = auth.uid());

create policy "Authenticated update products" on storage.objects
for update to authenticated
using (bucket_id = 'products' and owner = auth.uid());

create policy "Authenticated delete products" on storage.objects
for delete to authenticated
using (bucket_id = 'products' and owner = auth.uid());
