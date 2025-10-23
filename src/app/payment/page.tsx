'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, CreditCard, Smartphone, Barcode, CheckCircle } from 'lucide-react';

const plans = {
  essencial: {
    name: 'Essencial',
    price: 'R$247',
    priceValue: 247,
    services: ['2x Manicures', '1x Escova'],
  },
  pro: {
    name: 'Pro',
    price: 'R$418',
    priceValue: 418,
    services: ['2x Manicures', '1x Pedicure', '2x Escovas'],
  },
  premium: {
    name: 'Premium',
    price: 'R$603',
    priceValue: 603,
    services: ['2x Manicures', '1x Pedicure', '2x Escovas', '1x Hidratação', '1x Design de sobrancelha'],
  },
};

type PaymentMethod = 'credit' | 'debit' | 'pix' | 'boleto' | null;

export default function Payment() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan') || 'pro';
  const selectedPlan = plans[planParam as keyof typeof plans] || plans.pro;

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-white flex items-center justify-center">
        <Card className="max-w-md w-full mx-6">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-3xl text-green-600">Pagamento Confirmado!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-700">
              Sua assinatura do plano <strong>{selectedPlan.name}</strong> foi confirmada com sucesso!
            </p>
            <p className="text-sm text-gray-600">
              Você receberá um e-mail com os detalhes da sua assinatura e instruções para começar a usar os serviços.
            </p>
            <div className="pt-4 space-y-3">
              <Button className="bg-purple-accent hover:bg-purple-600 text-white" className="w-full" size="lg" asChild>
                <Link href="/bookings">Agendar Primeiro Serviço</Link>
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
          </div>
        </div>
      </nav>

      {/* Payment Form */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Finalizar Assinatura
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="text-white">Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Plano {selectedPlan.name}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {selectedPlan.services.map((service, idx) => (
                        <li key={idx}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Subtotal:</span>
                      <span className="font-semibold">{selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-700">Taxa de adesão:</span>
                      <span className="text-green-600 font-semibold">Grátis</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold text-purple text-2xl">
                        {selectedPlan.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Cobrado mensalmente</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Methods */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Escolha o Método de Pagamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentMethod('credit')}
                      className={`p-4 border-2 rounded-[var(--radius)] flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === 'credit'
                          ? 'border-purple bg-purple-accent/5'
                          : 'border-gray-200 hover:border-purple/50'
                      }`}
                    >
                      <CreditCard className="h-8 w-8 text-primary" />
                      <span className="font-semibold">Cartão de Crédito</span>
                      <span className="text-xs text-gray-600">Até 12x sem juros</span>
                    </button>

                    <button
                      onClick={() => setPaymentMethod('debit')}
                      className={`p-4 border-2 rounded-[var(--radius)] flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === 'debit'
                          ? 'border-purple bg-purple-accent/5'
                          : 'border-gray-200 hover:border-purple/50'
                      }`}
                    >
                      <CreditCard className="h-8 w-8 text-primary" />
                      <span className="font-semibold">Cartão de Débito</span>
                      <span className="text-xs text-gray-600">Processamento imediato</span>
                    </button>

                    <button
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-4 border-2 rounded-[var(--radius)] flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === 'pix'
                          ? 'border-purple bg-purple-accent/5'
                          : 'border-gray-200 hover:border-purple/50'
                      }`}
                    >
                      <Smartphone className="h-8 w-8 text-primary" />
                      <span className="font-semibold">PIX</span>
                      <span className="text-xs text-gray-600">Confirmação instantânea</span>
                    </button>

                    <button
                      onClick={() => setPaymentMethod('boleto')}
                      className={`p-4 border-2 rounded-[var(--radius)] flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === 'boleto'
                          ? 'border-purple bg-purple-accent/5'
                          : 'border-gray-200 hover:border-purple/50'
                      }`}
                    >
                      <Barcode className="h-8 w-8 text-primary" />
                      <span className="font-semibold">Boleto</span>
                      <span className="text-xs text-gray-600">3 dias úteis</span>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Form based on selected method */}
              {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                <Card>
                  <CardHeader>
                    <CardTitle>Dados do Cartão</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Número do Cartão</Label>
                      <Input
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardName">Nome no Cartão</Label>
                      <Input
                        id="cardName"
                        placeholder="Nome como está no cartão"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Validade</Label>
                        <Input id="expiry" placeholder="MM/AA" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                    {paymentMethod === 'credit' && (
                      <div>
                        <Label htmlFor="installments">Parcelamento</Label>
                        <select
                          id="installments"
                          className="w-full mt-1 h-10 px-3 border border-input rounded-md bg-background"
                        >
                          <option>1x de {selectedPlan.price} sem juros</option>
                          <option>
                            2x de R${(selectedPlan.priceValue / 2).toFixed(2)} sem juros
                          </option>
                          <option>
                            3x de R${(selectedPlan.priceValue / 3).toFixed(2)} sem juros
                          </option>
                        </select>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {paymentMethod === 'pix' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Pagamento via PIX</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-secondary/20 p-6 rounded-[var(--radius)] text-center">
                      <div className="w-48 h-48 bg-white mx-auto mb-4 rounded-md flex items-center justify-center border-2 border-primary">
                        <span className="text-4xl">📱</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Escaneie o QR Code com seu aplicativo de banco
                      </p>
                      <p className="text-xs text-gray-500">
                        Ou copie o código PIX abaixo
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        readOnly
                        value="00020126580014BR.GOV.BCB.PIX..."
                        className="font-mono text-xs"
                      />
                      <Button variant="outline">Copiar</Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {paymentMethod === 'boleto' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Pagamento via Boleto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-[var(--radius)] p-4">
                      <p className="text-sm text-yellow-800">
                        ⚠️ O boleto será gerado após a confirmação e enviado para seu e-mail.
                        O pagamento leva até 3 dias úteis para ser confirmado.
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail para envio do boleto</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cpf">CPF</Label>
                      <Input
                        id="cpf"
                        placeholder="000.000.000-00"
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Personal Information */}
              {paymentMethod && (
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nome</Label>
                        <Input id="firstName" placeholder="Seu nome" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Sobrenome</Label>
                        <Input
                          id="lastName"
                          placeholder="Seu sobrenome"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="emailPersonal">E-mail</Label>
                      <Input
                        id="emailPersonal"
                        type="email"
                        placeholder="seu@email.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        placeholder="(11) 99999-9999"
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Action Buttons */}
              {paymentMethod && (
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    asChild
                  >
                    <Link href="/">Cancelar</Link>
                  </Button>
                  <Button
                    className="bg-purple-accent hover:bg-purple-600 text-white"
                    size="lg"
                    className="flex-1"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processando...' : 'Confirmar Pagamento'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="font-logo text-3xl text-purple mb-4">GlamPass</h3>
            <p className="text-white/80 text-sm">Beleza sem complicação, qualidade garantida.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
