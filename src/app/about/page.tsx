import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Shield, Star } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-logo text-4xl text-purple">
              GlamPass
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="hover:text-primary transition-colors font-semibold text-primary">
                Quem Somos
              </Link>
              <Link href="/#plans" className="hover:text-primary transition-colors">
                Planos
              </Link>
              <Link href="/locations" className="hover:text-primary transition-colors">
                Localização
              </Link>
              <Link href="/bookings" className="hover:text-primary transition-colors">
                Agendamentos
              </Link>
              <Link href="/#reviews" className="hover:text-primary transition-colors">
                Avaliações
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Quem Somos</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-purple-100">
            Revolucionando o cuidado com a beleza através de assinaturas convenientes e acessíveis
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Origin Story */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary text-center">Nossa História</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fundada em 2023, a <span className="font-logo text-2xl text-purple">GlamPass</span> nasceu
              da percepção de uma necessidade real no mercado de beleza brasileiro. Observamos que mulheres
              ocupadas enfrentavam constantes desafios para manter seus cuidados de beleza: agendamentos
              complicados, preços imprevisíveis e dificuldade em encontrar salões de confiança.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Decidimos revolucionar esse cenário criando uma ponte entre mulheres modernas e salões de
              qualidade através de planos de assinatura convenientes. Assim nasceu a GlamPass - uma solução
              que elimina a preocupação com agendamentos individuais e garante cuidados consistentes com a
              beleza a custos previsíveis.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-secondary/20 to-purple-100 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary text-center">Nossa Missão</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Tornar a beleza acessível, conveniente e previsível para todas as mulheres,
              conectando-as aos melhores salões locais através de planos de assinatura flexíveis
              e transparentes.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-primary text-center">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Excelência</h3>
                <p className="text-gray-600">
                  Trabalhamos apenas com salões certificados e profissionais qualificados para garantir
                  a melhor experiência.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Confiança</h3>
                <p className="text-gray-600">
                  Transparência em preços, processos e qualidade. Você sabe exatamente o que está recebendo.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Conveniência</h3>
                <p className="text-gray-600">
                  Simplicidade em cada etapa - do agendamento ao pagamento, tudo pensado para facilitar sua vida.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-primary text-white rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nosso Impacto</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-purple-light">5000+</div>
                <p className="text-white/80">Clientes Satisfeitas</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-purple-light">50+</div>
                <p className="text-white/80">Salões Parceiros</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-purple-light">4.9</div>
                <p className="text-white/80">Avaliação Média</p>
              </div>
            </div>
          </div>

          {/* Team Philosophy */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary text-center">Nossa Equipe</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              Somos um time apaixonado por beleza e tecnologia, trabalhando todos os dias para
              melhorar a experiência de nossas clientes e parceiros. Nossa equipe é composta por
              profissionais de beleza, desenvolvedores, designers e especialistas em atendimento
              ao cliente, todos unidos pela missão de tornar a beleza mais acessível.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Faça Parte da Nossa História</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de mulheres que já transformaram sua rotina de beleza com a GlamPass
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-white text-purple-600 hover:bg-purple-50" size="lg" asChild>
              <Link href="/#plans">
                <Sparkles className="h-5 w-5" />
                Ver Planos
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20" asChild>
              <Link href="/locations">
                Ver Salões Parceiros
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-logo text-3xl text-purple-light mb-4">GlamPass</h3>
              <p className="text-white/80 text-sm">
                Beleza sem complicação, qualidade garantida.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><Link href="/about" className="hover:text-purple-light transition-colors">Quem Somos</Link></li>
                <li><Link href="/#plans" className="hover:text-purple-light transition-colors">Planos</Link></li>
                <li><Link href="/locations" className="hover:text-purple-light transition-colors">Localização</Link></li>
                <li><Link href="/bookings" className="hover:text-purple-light transition-colors">Agendamentos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>SAC: (11) 1234-5678</li>
                <li>contato@glampass.com.br</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-purple-light transition-colors">Instagram</a>
                <a href="#" className="hover:text-purple-light transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>© 2025 GlamPass. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
