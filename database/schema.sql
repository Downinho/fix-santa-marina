-- MARBANA Database Schema
-- Database: marbanabd.mysql.dbaas.com.br

-- Users table for admin system
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    role ENUM('admin', 'editor', 'collaborator') DEFAULT 'collaborator',
    avatar_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Blog categories
CREATE TABLE blog_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts
CREATE TABLE blog_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    excerpt TEXT,
    content LONGTEXT,
    cover_image_url TEXT,
    author_id INT NOT NULL,
    category_id INT,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    featured BOOLEAN DEFAULT FALSE,
    seo_title VARCHAR(255),
    seo_description VARCHAR(500),
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES blog_categories(id) ON DELETE SET NULL
);

-- Vessels
CREATE TABLE vessels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(100) NOT NULL,
    model VARCHAR(255),
    year INT,
    length_m DECIMAL(8,2),
    beam_m DECIMAL(8,2),
    draft_m DECIMAL(8,2),
    capacity INT,
    cabins INT,
    engines VARCHAR(255),
    horsepower INT,
    fuel VARCHAR(100),
    description LONGTEXT,
    price_sale_cents INT,
    price_day_cents INT,
    price_hour_cents INT,
    currency VARCHAR(3) DEFAULT 'BRL',
    for_sale BOOLEAN DEFAULT FALSE,
    for_rent BOOLEAN DEFAULT TRUE,
    city VARCHAR(255),
    state VARCHAR(255),
    country VARCHAR(255) DEFAULT 'Brasil',
    address TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    featured BOOLEAN DEFAULT FALSE,
    owner_name VARCHAR(255),
    owner_phone VARCHAR(50),
    owner_email VARCHAR(255),
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- Vessel images
CREATE TABLE vessel_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vessel_id INT NOT NULL,
    url TEXT NOT NULL,
    caption VARCHAR(500),
    position INT DEFAULT 0,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vessel_id) REFERENCES vessels(id) ON DELETE CASCADE
);

-- Vessel equipment/amenities
CREATE TABLE vessel_equipment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vessel_id INT NOT NULL,
    equipment_name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vessel_id) REFERENCES vessels(id) ON DELETE CASCADE
);

-- Sailors/Skippers
CREATE TABLE sailors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    bio LONGTEXT,
    experience_years INT,
    license_number VARCHAR(100),
    specialties TEXT, -- JSON array of specialties
    languages TEXT, -- JSON array of languages
    hourly_rate_cents INT,
    day_rate_cents INT,
    currency VARCHAR(3) DEFAULT 'BRL',
    city VARCHAR(255),
    state VARCHAR(255),
    country VARCHAR(255) DEFAULT 'Brasil',
    phone VARCHAR(50),
    email VARCHAR(255),
    whatsapp VARCHAR(50),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    verified BOOLEAN DEFAULT FALSE,
    available BOOLEAN DEFAULT TRUE,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- Sailor images
CREATE TABLE sailor_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sailor_id INT NOT NULL,
    url TEXT NOT NULL,
    caption VARCHAR(500),
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sailor_id) REFERENCES sailors(id) ON DELETE CASCADE
);

-- Activity logs for admin tracking
CREATE TABLE activity_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id INT,
    details JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- System settings
CREATE TABLE settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(255) UNIQUE NOT NULL,
    setting_value LONGTEXT,
    description TEXT,
    updated_by INT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Insert initial data
INSERT INTO blog_categories (name, slug, description) VALUES
('Navegação', 'navegacao', 'Dicas e técnicas de navegação'),
('Manutenção', 'manutencao', 'Manutenção e cuidados com embarcações'),
('Destinos', 'destinos', 'Destinos náuticos imperdíveis'),
('Segurança', 'seguranca', 'Segurança náutica e equipamentos'),
('Mercado', 'mercado', 'Tendências do mercado náutico');

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_vessels_status ON vessels(status);
CREATE INDEX idx_vessels_type ON vessels(type);
CREATE INDEX idx_vessels_location ON vessels(city, state);
CREATE INDEX idx_sailors_status ON sailors(status);
CREATE INDEX idx_sailors_location ON sailors(city, state);
CREATE INDEX idx_activity_logs_user_id ON activity_logs(user_id);
CREATE INDEX idx_activity_logs_created_at ON activity_logs(created_at);