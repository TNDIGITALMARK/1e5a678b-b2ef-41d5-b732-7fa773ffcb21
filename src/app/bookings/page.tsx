'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Phone, Calendar, Clock, MapPin, Star, CheckCircle } from 'lucide-react';

const salons = [
  {
    id: 1,
    name: 'Bella Vita',
    address: 'Rua das Flores, 123 - Centro',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Glamour Studio',
    address: 'Av. Paulista, 456 - Bela Vista',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Elegance Spa',
    address: 'Rua Augusta, 789 - Jardins',
    rating: 4.7,
  },
];

const services = [
  { id: 'manicure', name: 'Manicure', duration: '45min' },
  { id: 'pedicure', name: 'Pedicure', duration: '60min' },
  { id: 'escova', name: 'Escova', duration: '40min' },
  { id: 'hidratacao', name: 'Hidratação', duration: '90min' },
  { id: 'sobrancelha', name: 'Design de Sobrancelha', duration: '30min' },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
];

export default function Bookings() {
  const searchParams = useSearchParams();
  const salonParam = searchParams.get('salon');
  const initialSalon = salonParam ? parseInt(salonParam) : null;

  const [selectedSalon, setSelectedSalon] = useState<number | null>(initialSalon);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmBooking = () => {
    if (selectedSalon && selectedService && selectedDate && selectedTime) {
      setIsConfirmed(true);
    }
  };

  const salon = salons.find((s) => s.id === selectedSalon);
  const service = services.find((s) => s.id === selectedService);

  if (isConfirmed && salon && service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-white flex items-center justify-center">
        <Card className="max-w-md w-full mx-6">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-3xl text-green-600">Agendamento Confirmado!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-secondary/20 p-4 rounded-[var(--radius)] space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary">{salon.name}</p>
                  <p className="text-sm text-gray-600">{salon.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <p className="text-gray-700">{selectedDate}</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <p className="text-gray-700">{selectedTime} - {service.name}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center">
              Você receberá uma confirmação por e-mail com os detalhes do seu agendamento.
            </p>
            <div className="pt-4 space-y-3">
              <Button className="bg-purple-accent hover:bg-purple-600 text-white" className="w-full" size="lg" asChild>
                <Link href="/bookings">Fazer Novo Agendamento</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/">Voltar ao Início</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              <Link href="/locations" className="hover:text-primary transition-colors">
                Localização
              </Link>
              <Link href="/bookings" className="text-primary font-semibold">
                Agendamentos
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Agende Seus Serviços</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Escolha o salão, serviço e horário mais convenientes para você
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            {/* Step 1: Select Salon */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  Escolha o Salão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {salons.map((salon) => (
                    <button
                      key={salon.id}
                      onClick={() => setSelectedSalon(salon.id)}
                      className={`p-4 border-2 rounded-[var(--radius)] text-left transition-all ${
                        selectedSalon === salon.id
                          ? 'border-purple bg-purple-accent/5'
                          : 'border-gray-200 hover:border-purple/50'
                      }`}
                    >
                      <h3 className="font-semibold text-primary mb-1">{salon.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">{salon.address}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-gold-star text-purple-star" />
                        <span className="text-sm font-semibold">{salon.rating}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Select Service */}
            {selectedSalon && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    Escolha o Serviço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 border-2 rounded-[var(--radius)] text-left transition-all ${
                          selectedService === service.id
                            ? 'border-purple bg-purple-accent/5'
                            : 'border-gray-200 hover:border-purple/50'
                        }`}
                      >
                        <h3 className="font-semibold text-primary mb-1">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {service.duration}
                        </p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Select Date & Time */}
            {selectedService && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    Escolha Data e Horário
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="date" className="mb-2 block">
                      Data
                    </Label>
                    <input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full h-10 px-3 border border-input rounded-md bg-background"
                    />
                  </div>

                  {selectedDate && (
                    <div>
                      <Label className="mb-3 block">Horário Disponível</Label>
                      <div className="grid grid-cols-5 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 border-2 rounded-[var(--radius)] text-sm font-medium transition-all ${
                              selectedTime === time
                                ? 'border-purple bg-purple-accent text-white'
                                : 'border-gray-200 hover:border-purple/50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Confirmation Summary */}
            {selectedSalon && selectedService && selectedDate && selectedTime && (
              <Card className="border-purple border-2">
                <CardHeader className="bg-purple-accent/5">
                  <CardTitle className="text-primary">Resumo do Agendamento</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-primary">{salon?.name}</p>
                        <p className="text-sm text-gray-600">{salon?.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <p className="text-gray-700">{selectedDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <p className="text-gray-700">{selectedTime} - {service?.name}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setSelectedSalon(null);
                        setSelectedService(null);
                        setSelectedDate('');
                        setSelectedTime(null);
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      className="bg-purple-accent hover:bg-purple-600 text-white"
                      size="lg"
                      className="flex-1"
                      onClick={handleConfirmBooking}
                    >
                      Confirmar Agendamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-16">
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
