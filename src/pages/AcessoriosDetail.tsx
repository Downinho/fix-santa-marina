import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Truck, Shield, Heart, ShoppingCart, Plus, Minus, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const AcessoriosDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - in a real app, this would come from an API
  const accessory = {
    id: "1",
    name: "GPS Garmin GPSMAP 8610xsv",
    brand: "Garmin",
    category: "Eletrônicos",
    price: 899900, // em centavos
    originalPrice: 1199900,
    rating: 4.8,
    totalReviews: 89,
    inStock: true,
    stockQuantity: 15,
    seller: {
      name: "Náutica Premium",
      avatar: "/placeholder.svg",
      rating: 4.9,
      totalSales: 1250,
      location: "São Paulo, SP"
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "GPS chartplotter multifuncional com tela de 10 polegadas, sonar CHIRP integrado e conectividade Wi-Fi. Ideal para navegação costeira e oceânica.",
    specifications: {
      "Tela": "10.1\" colorida touchscreen",
      "Resolução": "1280 x 800 pixels",
      "Sonar": "CHIRP tradicional e ClearVü",
      "Conectividade": "Wi-Fi, Bluetooth, NMEA 2000",
      "Cartas": "BlueChart g3 incluído",
      "Resistência": "IPX7",
      "Dimensões": "27.4 x 17.8 x 6.4 cm",
      "Peso": "1.4 kg"
    },
    features: [
      "Sonar CHIRP integrado",
      "Conectividade Wi-Fi",
      "Cartas BlueChart g3",
      "Tela touchscreen HD",
      "Resistente à água IPX7",
      "Suporte para radar",
      "ActiveCaptain app"
    ],
    shipping: {
      free: true,
      estimatedDays: "3-5 dias úteis",
      regions: ["Todo o Brasil"]
    },
    warranty: "2 anos de garantia",
    reviews: [
      {
        id: 1,
        author: "Carlos Mendes",
        rating: 5,
        date: "15 Mar 2024",
        comment: "Excelente GPS! Muito fácil de usar e a qualidade da imagem do sonar é impressionante. Recomendo!"
      },
      {
        id: 2,
        author: "Ana Silva",
        rating: 5,
        date: "02 Mar 2024",
        comment: "Produto original, entrega rápida. O GPS funciona perfeitamente, muito satisfeita com a compra."
      }
    ]
  };

  const formatPrice = (priceInCents: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(priceInCents / 100);
  };

  const discount = Math.round(((accessory.originalPrice - accessory.price) / accessory.originalPrice) * 100);

  return (
    <Layout>
      <main className="pt-16 pb-12">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Início</a></li>
              <li>/</li>
              <li><a href="/acessorios" className="hover:text-primary">Acessórios</a></li>
              <li>/</li>
              <li><a href={`/acessorios?category=${accessory.category}`} className="hover:text-primary">{accessory.category}</a></li>
              <li>/</li>
              <li className="text-primary">{accessory.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img
                  src={accessory.images[selectedImage]}
                  alt={accessory.name}
                  className="w-full aspect-square object-cover rounded-lg border"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {accessory.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${accessory.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">{accessory.category}</Badge>
                <h1 className="font-display text-3xl font-bold text-primary mb-2">
                  {accessory.name}
                </h1>
                <p className="text-muted-foreground">Por {accessory.brand}</p>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{accessory.rating}</span>
                  <span className="text-muted-foreground">({accessory.totalReviews} avaliações)</span>
                </div>
                
                {accessory.inStock ? (
                  <Badge className="bg-green-100 text-green-800">
                    Em estoque ({accessory.stockQuantity} unidades)
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800">Esgotado</Badge>
                )}
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(accessory.price)}
                  </span>
                  {accessory.originalPrice > accessory.price && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        {formatPrice(accessory.originalPrice)}
                      </span>
                      <Badge className="bg-red-100 text-red-800">
                        -{discount}%
                      </Badge>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">À vista no PIX com desconto</p>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-muted transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-muted transition-colors"
                      disabled={quantity >= accessory.stockQuantity}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-gradient-hero"
                    disabled={!accessory.inStock}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "text-red-500 border-red-500" : ""}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </div>

              {/* Shipping Info */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <span className="font-semibold">
                      {accessory.shipping.free ? "Frete Grátis" : "Consultar Frete"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Entrega em {accessory.shipping.estimatedDays}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {accessory.shipping.regions.join(", ")}
                  </p>
                </CardContent>
              </Card>

              {/* Warranty */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Shield className="w-4 h-4" />
                <span>{accessory.warranty}</span>
              </div>

              {/* Seller Info */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={accessory.seller.avatar} alt={accessory.seller.name} />
                      <AvatarFallback>{accessory.seller.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold">{accessory.seller.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{accessory.seller.rating}</span>
                        <span>•</span>
                        <span>{accessory.seller.totalSales} vendas</span>
                        <span>•</span>
                        <MapPin className="w-4 h-4" />
                        <span>{accessory.seller.location}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                    Descrição
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {accessory.description}
                  </p>
                  
                  <h3 className="font-semibold text-primary mb-3">Características principais:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {accessory.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-2xl font-semibold text-primary">
                      Avaliações ({accessory.totalReviews})
                    </h2>
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold">{accessory.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {accessory.reviews.map((review) => (
                      <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{review.author}</p>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Specifications */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-primary mb-4">
                    Especificações Técnicas
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(accessory.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start gap-2">
                        <span className="text-sm font-medium text-muted-foreground">{key}:</span>
                        <span className="text-sm text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AcessoriosDetail;