import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Star, Sparkles, Calendar, MapPin, Phone } from 'lucide-react';

export const dynamic = 'force-dynamic';

const plans = [
  {
    name: 'Essencial',
    price: 'R$247',
    services: [
      '2x Manicures por mês',
      '1x Escova por mês',
    ],
  },
  {
    name: 'Pro',
    price: 'R$418',
    services: [
      '2x Manicures por mês',
      '1x Pedicure por mês',
      '2x Escovas por mês',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: 'R$603',
    services: [
      '2x Manicures por mês',
      '1x Pedicure por mês',
      '2x Escovas por mês',
      '1x Hidratação por mês',
      '1x Design de sobrancelha por mês',
    ],
  },
];

const testimonials = [
  {
    name: 'Maria Silva',
    rating: 5,
    text: 'Melhor investimento que fiz para minha beleza! Os salões são incríveis e o atendimento é impecável.',
  },
  {
    name: 'Ana Costa',
    rating: 5,
    text: 'Praticidade e qualidade incríveis. Não preciso mais me preocupar em agendar, tudo é muito fácil!',
  },
  {
    name: 'Juliana Santos',
    rating: 5,
    text: 'Economia e conveniência! Minha rotina de beleza ficou muito mais organizada e acessível.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-logo text-4xl text-gold">
              GlamPass
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Quem Somos
              </Link>
              <Link href="#plans" className="hover:text-primary transition-colors">
                Planos
              </Link>
              <Link href="/locations" className="hover:text-primary transition-colors">
                Localização
              </Link>
              <Link href="/bookings" className="hover:text-primary transition-colors">
                Agendamentos
              </Link>
              <Link href="#reviews" className="hover:text-primary transition-colors">
                Avaliações
              </Link>
              <div className="flex items-center gap-2 text-gold font-semibold">
                <Phone className="h-4 w-4" />
                <span>0800-GLAM-PASS</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/generated/hero-beauty-treatment.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            SUBSCRIBE TO UNCOMPRMAISNG BEAUTY
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Planos Exclusivos para Você Brilhar Mais
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link href="#plans">
              <Sparkles className="h-5 w-5" />
              Ver Planos
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Quem Somos</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fundada em 2023, a <span className="font-logo text-2xl text-gold">GlamPass</span> revoluciona
            o cuidado com a beleza conectando mulheres ocupadas com salões de confiança locais através
            de planos de assinatura convenientes. Nossa missão é eliminar a preocupação com agendamentos
            individuais, garantindo cuidados consistentes com a beleza a custos previsíveis.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Nossos Planos</h2>
          <p className="text-center text-lg mb-12 text-gray-600">
            Escolha o plano perfeito para suas necessidades
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden ${
                  plan.featured
                    ? 'border-gold border-2 shadow-gold scale-105'
                    : 'border-gray-200'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-gold text-white px-4 py-1 text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <CardHeader className="bg-primary text-white text-center py-8">
                  <CardTitle className="text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-5xl font-bold text-gold">
                    {plan.price}
                  </div>
                  <p className="text-sm text-white/80 mt-2">por mês</p>
                </CardHeader>
                <CardContent className="pt-8 pb-6">
                  <ul className="space-y-4">
                    {plan.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-8">
                  <Button variant="gold" className="w-full" size="lg" asChild>
                    <Link href={`/payment?plan=${plan.name.toLowerCase()}`}>
                      Assinar
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">
            Avaliações dos Clientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold-star text-gold-star" />
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-700">4.9 de 5.0</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold-star text-gold-star" />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronta para Transformar sua Rotina de Beleza?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de mulheres que já descobriram a conveniência e qualidade da GlamPass
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="gold" size="lg" asChild>
              <Link href="#plans">
                Escolher Plano
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20" asChild>
              <Link href="/locations">
                <MapPin className="h-5 w-5" />
                Ver Salões
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
              <h3 className="font-logo text-3xl text-gold mb-4">GlamPass</h3>
              <p className="text-white/80 text-sm">
                Beleza sem complicação, qualidade garantida.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><Link href="/" className="hover:text-gold transition-colors">Quem Somos</Link></li>
                <li><Link href="#plans" className="hover:text-gold transition-colors">Planos</Link></li>
                <li><Link href="/locations" className="hover:text-gold transition-colors">Localização</Link></li>
                <li><Link href="/bookings" className="hover:text-gold transition-colors">Agendamentos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>0800-GLAM-PASS</span>
                </li>
                <li>SAC: (11) 1234-5678</li>
                <li>contato@glampass.com.br</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors">Facebook</a>
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
