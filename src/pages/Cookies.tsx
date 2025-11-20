import { Layout } from "@/components/Layout";

const Cookies = () => {
  return (
    <Layout>
      <main id="main-content" className="pt-16">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-primary mb-8">
              Política de Cookies
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">O que são Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies são pequenos arquivos de texto que são colocados no seu computador ou dispositivo móvel 
                  quando você visita nosso site. Eles nos ajudam a tornar o site mais funcional e melhorar sua experiência.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Como Usamos Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos cookies para:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Lembrar suas preferências de navegação</li>
                  <li>Analisar como você usa nosso site</li>
                  <li>Melhorar a funcionalidade do site</li>
                  <li>Personalizar conteúdo e publicidade</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Tipos de Cookies</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Cookies Essenciais</h3>
                    <p className="text-muted-foreground">
                      Necessários para o funcionamento básico do site. Não podem ser desabilitados.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Cookies de Performance</h3>
                    <p className="text-muted-foreground">
                      Coletam informações sobre como você usa o site para nos ajudar a melhorá-lo.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Cookies de Funcionalidade</h3>
                    <p className="text-muted-foreground">
                      Lembram suas escolhas para proporcionar uma experiência personalizada.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Controle de Cookies</h2>
                <p className="text-muted-foreground">
                  Você pode controlar e/ou deletar cookies como desejar. Você pode deletar todos os cookies 
                  que já estão no seu computador e configurar a maioria dos navegadores para impedir que sejam colocados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Contato</h2>
                <p className="text-muted-foreground">
                  Para dúvidas sobre nosso uso de cookies:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>WhatsApp:</strong> +55 11 94787-9662<br />
                    <strong>E-mail:</strong> contato@marbana.com.br
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Cookies;