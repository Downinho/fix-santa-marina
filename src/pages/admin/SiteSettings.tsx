import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Globe, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SiteSettings {
  // Informações Gerais
  site_name: string;
  site_tagline: string;
  site_description: string;
  site_logo_url: string;
  hero_title: string;
  hero_subtitle: string;
  hero_video_url: string;
  
  // Contato
  contact_email: string;
  contact_phone: string;
  contact_whatsapp: string;
  contact_address: string;
  contact_city: string;
  contact_state: string;
  
  // Redes Sociais
  facebook_url: string;
  instagram_url: string;
  youtube_url: string;
  linkedin_url: string;
  
  // SEO
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  google_analytics_id: string;
  google_tag_manager_id: string;
  
  // Configurações
  maintenance_mode: boolean;
  blog_enabled: boolean;
  sailors_enabled: boolean;
  booking_enabled: boolean;
  newsletter_enabled: boolean;
  
  // Textos Customizáveis
  about_title: string;
  about_description: string;
  services_title: string;
  services_description: string;
  cta_title: string;
  cta_description: string;
  cta_button_text: string;
}

export default function SiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>({
    site_name: 'MARBANA',
    site_tagline: 'Sua Marina de Confiança',
    site_description: 'Aluguel de embarcações, serviços náuticos e marinheiros profissionais',
    site_logo_url: '',
    hero_title: 'Navegue pelos Melhores Destinos',
    hero_subtitle: 'Descubra embarcações incríveis e marinheiros experientes para sua próxima aventura',
    hero_video_url: '',
    
    contact_email: 'contato@marbana.com.br',
    contact_phone: '(11) 99999-9999',
    contact_whatsapp: '5511999999999',
    contact_address: 'Av. Exemplo, 123',
    contact_city: 'São Paulo',
    contact_state: 'SP',
    
    facebook_url: '',
    instagram_url: '',
    youtube_url: '',
    linkedin_url: '',
    
    meta_title: 'MARBANA - Aluguel de Embarcações e Serviços Náuticos',
    meta_description: 'Alugue embarcações, encontre marinheiros profissionais e descubra os melhores destinos náuticos no Brasil.',
    meta_keywords: 'aluguel embarcações, marinheiros, náutica, barcos, lanchas, veleiros',
    google_analytics_id: '',
    google_tag_manager_id: '',
    
    maintenance_mode: false,
    blog_enabled: true,
    sailors_enabled: true,
    booking_enabled: true,
    newsletter_enabled: true,
    
    about_title: 'Sobre a MARBANA',
    about_description: 'Somos especialistas em conectar pessoas apaixonadas pelo mar com as melhores embarcações e marinheiros profissionais.',
    services_title: 'Nossos Serviços',
    services_description: 'Oferecemos uma gama completa de serviços náuticos para tornar sua experiência no mar inesquecível.',
    cta_title: 'Pronto para Navegar?',
    cta_description: 'Encontre a embarcação perfeita para sua próxima aventura',
    cta_button_text: 'Ver Embarcações'
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setLoading(true);
    
    try {
      // In real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Configurações salvas!",
        description: "As configurações do site foram atualizadas com sucesso."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações."
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = (key: keyof SiteSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Configurações do Site</h1>
        <Button onClick={handleSave} disabled={loading}>
          <Save className="mr-2 h-4 w-4" />
          {loading ? 'Salvando...' : 'Salvar Alterações'}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="contact">Contato</TabsTrigger>
          <TabsTrigger value="social">Redes Sociais</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="content">Conteúdo</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Informações Gerais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="site_name">Nome do Site</Label>
                    <Input
                      id="site_name"
                      value={settings.site_name}
                      onChange={(e) => updateSetting('site_name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="site_tagline">Slogan</Label>
                    <Input
                      id="site_tagline"
                      value={settings.site_tagline}
                      onChange={(e) => updateSetting('site_tagline', e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="site_description">Descrição do Site</Label>
                  <Textarea
                    id="site_description"
                    value={settings.site_description}
                    onChange={(e) => updateSetting('site_description', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="site_logo_url">URL do Logo</Label>
                  <Input
                    id="site_logo_url"
                    value={settings.site_logo_url}
                    onChange={(e) => updateSetting('site_logo_url', e.target.value)}
                    placeholder="https://exemplo.com/logo.png"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seção Hero</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="hero_title">Título Principal</Label>
                  <Input
                    id="hero_title"
                    value={settings.hero_title}
                    onChange={(e) => updateSetting('hero_title', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="hero_subtitle">Subtítulo</Label>
                  <Textarea
                    id="hero_subtitle"
                    value={settings.hero_subtitle}
                    onChange={(e) => updateSetting('hero_subtitle', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="hero_video_url">URL do Vídeo de Fundo</Label>
                  <Input
                    id="hero_video_url"
                    value={settings.hero_video_url}
                    onChange={(e) => updateSetting('hero_video_url', e.target.value)}
                    placeholder="https://exemplo.com/video.mp4"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Funcionalidades
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="maintenance_mode">Modo Manutenção</Label>
                    <Switch
                      id="maintenance_mode"
                      checked={settings.maintenance_mode}
                      onCheckedChange={(checked) => updateSetting('maintenance_mode', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="blog_enabled">Blog Ativo</Label>
                    <Switch
                      id="blog_enabled"
                      checked={settings.blog_enabled}
                      onCheckedChange={(checked) => updateSetting('blog_enabled', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sailors_enabled">Marinheiros Ativo</Label>
                    <Switch
                      id="sailors_enabled"
                      checked={settings.sailors_enabled}
                      onCheckedChange={(checked) => updateSetting('sailors_enabled', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="booking_enabled">Reservas Ativas</Label>
                    <Switch
                      id="booking_enabled"
                      checked={settings.booking_enabled}
                      onCheckedChange={(checked) => updateSetting('booking_enabled', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="newsletter_enabled">Newsletter Ativa</Label>
                    <Switch
                      id="newsletter_enabled"
                      checked={settings.newsletter_enabled}
                      onCheckedChange={(checked) => updateSetting('newsletter_enabled', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Informações de Contato
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact_email">E-mail</Label>
                  <Input
                    id="contact_email"
                    type="email"
                    value={settings.contact_email}
                    onChange={(e) => updateSetting('contact_email', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="contact_phone">Telefone</Label>
                  <Input
                    id="contact_phone"
                    value={settings.contact_phone}
                    onChange={(e) => updateSetting('contact_phone', e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="contact_whatsapp">WhatsApp (formato: 5511999999999)</Label>
                <Input
                  id="contact_whatsapp"
                  value={settings.contact_whatsapp}
                  onChange={(e) => updateSetting('contact_whatsapp', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="contact_address">Endereço</Label>
                <Input
                  id="contact_address"
                  value={settings.contact_address}
                  onChange={(e) => updateSetting('contact_address', e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact_city">Cidade</Label>
                  <Input
                    id="contact_city"
                    value={settings.contact_city}
                    onChange={(e) => updateSetting('contact_city', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="contact_state">Estado</Label>
                  <Input
                    id="contact_state"
                    value={settings.contact_state}
                    onChange={(e) => updateSetting('contact_state', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Redes Sociais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="facebook_url" className="flex items-center gap-2">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Label>
                <Input
                  id="facebook_url"
                  value={settings.facebook_url}
                  onChange={(e) => updateSetting('facebook_url', e.target.value)}
                  placeholder="https://facebook.com/marbana"
                />
              </div>
              
              <div>
                <Label htmlFor="instagram_url" className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Label>
                <Input
                  id="instagram_url"
                  value={settings.instagram_url}
                  onChange={(e) => updateSetting('instagram_url', e.target.value)}
                  placeholder="https://instagram.com/marbana"
                />
              </div>
              
              <div>
                <Label htmlFor="youtube_url" className="flex items-center gap-2">
                  <Youtube className="h-4 w-4" />
                  YouTube
                </Label>
                <Input
                  id="youtube_url"
                  value={settings.youtube_url}
                  onChange={(e) => updateSetting('youtube_url', e.target.value)}
                  placeholder="https://youtube.com/@marbana"
                />
              </div>
              
              <div>
                <Label htmlFor="linkedin_url">LinkedIn</Label>
                <Input
                  id="linkedin_url"
                  value={settings.linkedin_url}
                  onChange={(e) => updateSetting('linkedin_url', e.target.value)}
                  placeholder="https://linkedin.com/company/marbana"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="meta_title">Título Meta (máx. 60 caracteres)</Label>
                <Input
                  id="meta_title"
                  value={settings.meta_title}
                  onChange={(e) => updateSetting('meta_title', e.target.value)}
                  maxLength={60}
                />
                <p className="text-sm text-muted-foreground">
                  {settings.meta_title.length}/60 caracteres
                </p>
              </div>
              
              <div>
                <Label htmlFor="meta_description">Descrição Meta (máx. 160 caracteres)</Label>
                <Textarea
                  id="meta_description"
                  value={settings.meta_description}
                  onChange={(e) => updateSetting('meta_description', e.target.value)}
                  maxLength={160}
                />
                <p className="text-sm text-muted-foreground">
                  {settings.meta_description.length}/160 caracteres
                </p>
              </div>
              
              <div>
                <Label htmlFor="meta_keywords">Palavras-chave (separadas por vírgula)</Label>
                <Input
                  id="meta_keywords"
                  value={settings.meta_keywords}
                  onChange={(e) => updateSetting('meta_keywords', e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="google_analytics_id">Google Analytics ID</Label>
                  <Input
                    id="google_analytics_id"
                    value={settings.google_analytics_id}
                    onChange={(e) => updateSetting('google_analytics_id', e.target.value)}
                    placeholder="G-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="google_tag_manager_id">Google Tag Manager ID</Label>
                  <Input
                    id="google_tag_manager_id"
                    value={settings.google_tag_manager_id}
                    onChange={(e) => updateSetting('google_tag_manager_id', e.target.value)}
                    placeholder="GTM-XXXXXXX"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Seção Sobre</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="about_title">Título</Label>
                  <Input
                    id="about_title"
                    value={settings.about_title}
                    onChange={(e) => updateSetting('about_title', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="about_description">Descrição</Label>
                  <Textarea
                    id="about_description"
                    value={settings.about_description}
                    onChange={(e) => updateSetting('about_description', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seção Serviços</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="services_title">Título</Label>
                  <Input
                    id="services_title"
                    value={settings.services_title}
                    onChange={(e) => updateSetting('services_title', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="services_description">Descrição</Label>
                  <Textarea
                    id="services_description"
                    value={settings.services_description}
                    onChange={(e) => updateSetting('services_description', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Call to Action</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cta_title">Título</Label>
                  <Input
                    id="cta_title"
                    value={settings.cta_title}
                    onChange={(e) => updateSetting('cta_title', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="cta_description">Descrição</Label>
                  <Textarea
                    id="cta_description"
                    value={settings.cta_description}
                    onChange={(e) => updateSetting('cta_description', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="cta_button_text">Texto do Botão</Label>
                  <Input
                    id="cta_button_text"
                    value={settings.cta_button_text}
                    onChange={(e) => updateSetting('cta_button_text', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}