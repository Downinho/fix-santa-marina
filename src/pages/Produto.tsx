import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, ArrowLeft, Plus, Minus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Produto = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, this would come from Supabase
  const product = {
    id: '1',
    name: 'Âncora Premium Inox 15kg',
    slug: 'ancora-premium-inox-15kg',
    price: 89900, // in cents
    currency: 'BRL',
    description: 'Âncora de alta qualidade em aço inoxidável, ideal para embarcações de 30 a 45 pés. Design aerodinâmico com excelente poder de fixação.',
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
    ],
    vendor: {
      name: 'Marina Premium Store',
      rating: 4.8,
      verified: true
    },
    specifications: [
      { label: 'Peso', value: '15kg' },
      { label: 'Material', value: 'Aço Inoxidável 316L' },
      { label: 'Comprimento', value: '65cm' },
      { label: 'Largura', value: '45cm' },
      { label: 'Embarcações', value: '30-45 pés' },
      { label: 'Garantia', value: '5 anos' }
    ],
    features: [
      'Resistente à corrosão marinha',
      'Design hidrodinâmico',
      'Excelente poder de fixação',
      'Acabamento premium',
      'Certificação internacional'
    ]
  };

  const formatPrice = (priceInCents: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(priceInCents / 100);
  };

  const handleAddToCart = () => {
    toast({
      title: "Produto adicionado ao carrinho",
      description: `${quantity}x ${product.name}`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Redirecionando para checkout",
      description: "Você será redirecionado para finalizar a compra",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-6">
        {/* Breadcrumb */}
        <section className="py-4 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center space-x-2 text-sm font-body text-muted-foreground">
              <span>Início</span>
              <span>/</span>
              <span>Acessórios</span>
              <span>/</span>
              <span className="text-primary">Âncoras</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <Button 
              variant="ghost" 
              className="mb-6 font-body"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-0">
                    <img 
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`border-2 rounded-lg overflow-hidden ${
                        selectedImage === index ? 'border-primary' : 'border-muted'
                      }`}
                    >
                      <img 
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="font-body">
                      {product.vendor.name}
                    </Badge>
                    {product.vendor.verified && (
                      <Badge className="bg-green-100 text-green-800 font-body">
                        Vendedor Verificado
                      </Badge>
                    )}
                  </div>
                  
                  <h1 className="font-display text-3xl font-bold text-primary mb-4">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.vendor.rating) 
                              ? 'text-yellow-500 fill-current' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground font-body ml-2">
                        {product.vendor.rating} (127 avaliações)
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-display font-bold text-primary mb-2">
                      {formatPrice(product.price)}
                    </div>
                    <div className="text-sm text-muted-foreground font-body">
                      Em estoque: {product.stock} unidades
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Quantity and Actions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="h-10 w-10"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 text-center border-0 font-body"
                        min="1"
                        max={product.stock}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        className="h-10 w-10"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      size="lg" 
                      onClick={handleBuyNow}
                      className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body font-medium"
                    >
                      Comprar Agora
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      onClick={handleAddToCart}
                      className="font-body"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="font-body">
                      <Heart className="w-4 h-4 mr-2" />
                      Favoritar
                    </Button>
                    <Button variant="ghost" size="sm" className="font-body">
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                  <div className="flex items-center space-x-2">
                    <Truck className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-body text-muted-foreground">
                      Frete grátis acima de R$ 200
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-body text-muted-foreground">
                      Garantia de 5 anos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Specifications */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    Especificações Técnicas
                  </h3>
                  <div className="space-y-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-muted">
                        <span className="font-body text-muted-foreground">
                          {spec.label}
                        </span>
                        <span className="font-body font-medium text-primary">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    Características
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center font-body">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Vendor */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                  Fale com o Vendedor
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Seu nome" className="font-body" />
                    <Input placeholder="Seu e-mail" type="email" className="font-body" />
                  </div>
                  <Input placeholder="Telefone (opcional)" className="font-body" />
                  <Textarea 
                    placeholder="Sua mensagem sobre o produto..."
                    className="font-body min-h-24"
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Produto;