import { Layout } from "@/components/Layout";

const PoliticaPrivacidade = () => {
  return (
    <Layout>
      <main id="main-content" className="pt-16">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-primary mb-8">
              Política de Privacidade
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Informações que Coletamos</h2>
                <p className="text-muted-foreground mb-4">
                  Na MARBANA, coletamos informações quando você:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Navega em nosso site</li>
                  <li>Entra em contato conosco via WhatsApp</li>
                  <li>Se inscreve em nossa newsletter</li>
                  <li>Visualiza listagens de embarcações</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Como Usamos suas Informações</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Responder suas consultas sobre embarcações</li>
                  <li>Enviar atualizações sobre novos produtos</li>
                  <li>Melhorar nossos serviços</li>
                  <li>Garantir a segurança do site</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Compartilhamento de Informações</h2>
                <p className="text-muted-foreground">
                  Não vendemos, negociamos ou transferimos suas informações pessoais para terceiros, 
                  exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Segurança</h2>
                <p className="text-muted-foreground">
                  Implementamos medidas de segurança adequadas para proteger suas informações 
                  contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Contato</h2>
                <p className="text-muted-foreground">
                  Para dúvidas sobre esta política, entre em contato conosco:
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

export default PoliticaPrivacidade;