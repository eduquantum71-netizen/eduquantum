'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Menu,
  X
} from 'lucide-react'

export default function KontakPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 812-3456-7890",
      description: "Senin - Sabtu, 08:00 - 20:00 WIB"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@edquantum.id",
      description: "Kami akan balas dalam 24 jam"
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Jl. Pendidikan No. 123, Jakarta Selatan",
      description: "Datang langsung ke kantor kami"
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin - Sabtu: 08:00 - 20:00 WIB",
      description: "Minggu: 09:00 - 17:00 WIB"
    }
  ]

  const faqs = [
    {
      question: "Bagaimana cara mendaftar les privat di EduQuantum?",
      answer: "Anda dapat mendaftar melalui website kami atau menghubungi customer service. Kami akan membantu menemukan program yang sesuai untuk Anda."
    },
    {
      question: "Apakah ada trial session sebelum memutuskan bergabung?",
      answer: "Ya, kami menyediakan sesi trial gratis untuk Anda dapat merasakan metode belajar kami sebelum memutuskan bergabung."
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Kami menerima pembayaran per sesi, per bulan, atau per paket. Pembayaran dapat dilakukan via transfer bank, e-wallet, atau kartu kredit."
    },
    {
      question: "Apakah pengajar dapat diganti jika tidak cocok?",
      answer: "Tentu saja. Jika Anda merasa pengajar tidak cocok, kami akan membantu menemukan pengajar lain yang lebih sesuai tanpa biaya tambahan."
    },
    {
      question: "Apakah ada jaminan kenaikan nilai?",
      answer: "Kami memberikan jaminan kenaikan nilai minimal 10% setelah 3 bulan belajar dengan konsistensi dan kerjasama yang baik."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduQuantum
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/program" className="text-gray-700 hover:text-blue-600 transition-colors">Program</Link>
              <Link href="/pengajar" className="text-gray-700 hover:text-blue-600 transition-colors">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-700 hover:text-blue-600 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="text-blue-600 font-semibold">Kontak</Link>
              <Link href="/karir" className="text-gray-700 hover:text-blue-600 transition-colors">Karir</Link>
              <Link href="/daftar" passHref>
                              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                Daftar Sekarang
                              </Button>
                            </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</Link>
              <Link href="/program" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Program</Link>
              <Link href="/pengajar" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pengajar</Link>
              <Link href="/testimoni" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimoni</Link>
              <Link href="/kontak" className="block px-3 py-2 text-blue-600 font-semibold">Kontak</Link>
              <Link href="/karir" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Karir</Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="w-fit bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0">
              📞 Hubungi Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Mari Berbicara
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Tentang Pendidikan Anda
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim kami siap membantu menjawab pertanyaan Anda dan menemukan solusi terbaik 
              untuk kebutuhan pendidikan Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">{info.label}</h3>
                      <p className="text-sm text-gray-900 font-medium">{info.value}</p>
                      <p className="text-xs text-gray-500">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-0 bg-white shadow-lg">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Kirim Pesan kepada Kami
                </CardTitle>
                <p className="text-gray-600">
                  Isi form di bawah ini dan kami akan segera menghubungi Anda
                </p>
              </CardHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nama Lengkap *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Nomor Telepon *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+62 812-3456-7890"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subjek *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Contoh: Informasi Program Les"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Pesan *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-6 border-0 bg-white shadow-lg">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Lokasi Kami
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto" />
                      <p className="text-gray-700 font-medium">
                        Jl. Pendidikan No. 123
                      </p>
                      <p className="text-gray-600 text-sm">
                        Jakarta Selatan, DKI Jakarta 12345
                      </p>
                      <Button variant="outline" size="sm">
                        Buka di Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6 border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Butuh Bantuan Cepat?
                  </h3>
                  <p className="text-blue-100">
                    Hubungi kami langsung melalui WhatsApp untuk respons lebih cepat
                  </p>
                  <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    <Phone className="mr-2 w-4 h-4" />
                    WhatsApp Sekarang
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-white shadow-sm">
                <CardContent className="space-y-3 p-0">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Pendidikan Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Konsultasi gratis dengan tim ahli kami untuk menemukan program yang tepat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              <Phone className="mr-2 w-5 h-5" />
              Konsultasi Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
              <BookOpen className="mr-2 w-5 h-5" />
              Lihat Program
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}