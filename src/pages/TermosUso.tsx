import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosUso = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-6">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-primary mb-8">
              Termos de Uso
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground">
                  Ao acessar e usar o site da MARBANA, você concorda em cumprir estes termos de uso. 
                  Se você não concordar com algum destes termos, não deve usar nosso site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Uso do Site</h2>
                <p className="text-muted-foreground mb-4">
                  Você pode usar nosso site para:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Navegar e pesquisar embarcações</li>
                  <li>Entrar em contato para consultas</li>
                  <li>Acessar informações sobre nossos serviços</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Propriedade Intelectual</h2>
                <p className="text-muted-foreground">
                  Todo o conteúdo do site, incluindo textos, imagens, logotipos e design, 
                  é propriedade da MARBANA e está protegido por direitos autorais e outras leis de propriedade intelectual.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground">
                  As informações sobre embarcações são fornecidas "como estão". 
                  A MARBANA não garante a precisão, completude ou atualidade de todas as informações.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Modificações</h2>
                <p className="text-muted-foreground">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As mudanças entrarão em vigor imediatamente após a publicação no site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Contato</h2>
                <p className="text-muted-foreground">
                  Para dúvidas sobre estes termos, entre em contato:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>WhatsApp:</strong> +55 11 94015-9202<br />
                    <strong>E-mail:</strong> contato@marbana.com.br
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermosUso;