import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Star, MapPin, Phone, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic';

const salons = [
  {
    id: 1,
    name: 'Bella Vita',
    rating: 4.8,
    distance: '800m',
    address: 'Rua das Flores, 123 - Centro',
    image: '/generated/salon-bella-vita.jpg',
    availableSlots: ['Hoje 14h', 'Hoje 16h', 'Hoje 18h'],
    phone: '(11) 98765-4321',
  },
  {
    id: 2,
    name: 'Glamour Studio',
    rating: 4.9,
    distance: '1.2km',
    address: 'Av. Paulista, 456 - Bela Vista',
    image: '/generated/salon-glamour-studio.jpg',
    availableSlots: ['Hoje 15h', 'Hoje 17h', 'Hoje 19h'],
    phone: '(11) 98765-1234',
  },
  {
    id: 3,
    name: 'Elegance Spa',
    rating: 4.7,
    distance: '1.5km',
    address: 'Rua Augusta, 789 - Jardins',
    image: '/generated/salon-elegance-spa.jpg',
    availableSlots: ['Amanhã 10h', 'Amanhã 14h', 'Amanhã 16h'],
    phone: '(11) 98765-5678',
  },
];

export default function Locations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-logo text-4xl text-purple">
              GlamPass
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="/#plans" className="hover:text-primary transition-colors">
                Planos
              </Link>
              <Link href="/locations" className="text-primary font-semibold">
                Localização
              </Link>
              <Link href="/bookings" className="hover:text-primary transition-colors">
                Agendamentos
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Encontre Salões Próximos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Salões parceiros com excelente avaliação e profissionais qualificados
          </p>
        </div>
      </section>

      {/* Salons List */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 text-primary">Salões Disponíveis</h2>
            <p className="text-gray-600">Todos os salões parceiros com avaliações excelentes</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {salons.map((salon) => (
              <Card key={salon.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-64 w-full">
                  <Image
                    src={salon.image}
                    alt={salon.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="h-4 w-4 fill-gold-star text-purple-star" />
                    <span className="font-semibold text-gray-800">{salon.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{salon.name}</CardTitle>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <MapPin className="h-4 w-4 text-purple" />
                    <span>{salon.distance} de você</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{salon.address}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="h-4 w-4 text-purple" />
                    <span className="text-sm">{salon.phone}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-4 w-4 text-purple" />
                      <span className="font-semibold text-sm text-gray-800">
                        Horários Disponíveis
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {salon.availableSlots.map((slot, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-secondary/30 text-primary rounded-full text-xs font-medium"
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(salon.rating)
                              ? 'fill-gold-star text-purple-star'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        ({salon.rating}/5.0)
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      &ldquo;Excelente atendimento e profissionais qualificados!&rdquo;
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-6">
                  <Button className="bg-purple-accent hover:bg-purple-600 text-white" className="w-full" size="lg" asChild>
                    <Link href={`/bookings?salon=${salon.id}`}>Agendar Agora</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Mapa de Localização
          </h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary/20 to-primary/10 rounded-[var(--radius)] h-96 flex items-center justify-center border-2 border-primary/20">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-lg text-gray-700 font-semibold">Mapa Interativo</p>
              <p className="text-sm text-gray-600 mt-2">
                Visualize todos os salões parceiros na sua região
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ainda não é assinante?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Assine agora e tenha acesso ilimitado aos melhores salões da sua região
          </p>
          <Button className="bg-purple-accent hover:bg-purple-600 text-white" size="lg" asChild>
            <Link href="/#plans">Ver Planos</Link>
          </Button>
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
                <li>
                  <Link href="/" className="hover:text-purple-light transition-colors">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link href="/#plans" className="hover:text-purple-light transition-colors">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="hover:text-purple-light transition-colors">
                    Localização
                  </Link>
                </li>
                <li>
                  <Link href="/bookings" className="hover:text-purple-light transition-colors">
                    Agendamentos
                  </Link>
                </li>
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
                <a href="#" className="hover:text-purple-light transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-purple-light transition-colors">
                  Facebook
                </a>
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
