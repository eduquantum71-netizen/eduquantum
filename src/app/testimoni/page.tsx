'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
  TrendingUp,
  Menu,
  X
} from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Siswa SMA Kelas 12",
    photo: "/students/andi.jpg",
    content: "Bergabung dengan EduQuantum adalah keputusan terbaik yang saya buat. Nilai matematika saya naik dari 65 menjadi 92 dalam 3 bulan! Pengajarnya sangat sabar dan metode mengajarnya mudah dipahami.",
    rating: 5,
    program: "Program Reguler",
    achievement: "Nilai UN Matematika 92",
    duration: "3 bulan"
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Orang Tua Siswa SMP",
    photo: "/parents/sarah.jpg",
    content: "Anak saya sangat termotivasi belajar sejak bergabung dengan EduQuantum. Tidak hanya akademik yang meningkat, tapi rasa percaya dirinya juga tumbuh. Terima kasih EduQuantum!",
    rating: 5,
    program: "Nasional Plus",
    achievement: "Ranking 1 kelas",
    duration: "6 bulan"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Siswa SMA Kelas 11",
    photo: "/students/michael.jpg",
    content: "Preparasi UTBK di EduQuantum sangat membantu saya. Strategi mengerjakan soal dan latihan yang intensif membuat saya lolos UI jurusan impian. Highly recommended!",
    rating: 5,
    program: "Preparasi UTBK",
    achievement: "Lolos UI Jurusan Teknik",
    duration: "4 bulan"
  },
  {
    id: 4,
    name: "Dewi Lestari",
    role: "Siswa SMA Kelas 10",
    photo: "/students/dewi.jpg",
    content: "Saya awalnya kesulitan berbicara bahasa Inggris, tapi setelah mengikuti program Speak Up, saya jadi lebih percaya diri. Pengajarnya native speaker dan sangat friendly.",
    rating: 4,
    program: "Speak Up",
    achievement: "IELTS 7.0",
    duration: "5 bulan"
  },
  {
    id: 5,
    name: "Budi Santoso",
    role: "Orang Tua Siswa SD",
    photo: "/parents/budi.jpg",
    content: "Anak saya yang awalnya malas belajar jadi semangat setelah les di EduQuantum. Metode belajarnya fun dan interaktif. Progress report-nya juga detail untuk orang tua.",
    rating: 5,
    program: "Program Reguler",
    achievement: "Semua nilai di atas 80",
    duration: "8 bulan"
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Siswa SMA Kelas 12",
    photo: "/students/lisa.jpg",
    content: "Program Olimpiade Fisika di EduQuantum luar biasa! Saya berhasil meraih medali emas di tingkat provinsi. Materi yang diberikan sangat mendalam dan pengajarnya expert.",
    rating: 5,
    program: "Preparasi Olimpiade",
    achievement: "Juara 1 Olimpiade Fisika Provinsi",
    duration: "7 bulan"
  },
  {
    id: 7,
    name: "Ahmad Fauzi",
    role: "Mahasiswa",
    photo: "/students/ahmad.jpg",
    content: "Bimbingan skripsi di EduQuantum sangat membantu saya. Dari awal sampai sidang, dibantu banget. Alhamdulillah sidang dapat nilai A. Recommended banget!",
    rating: 5,
    program: "Bimbingan Skripsi",
    achievement: "Sidang Skripsi Nilai A",
    duration: "3 bulan"
  },
  {
    id: 8,
    name: "Maya Putri",
    role: "Siswa SMA Kelas 11",
    photo: "/students/maya.jpg",
    content: "Program TKA sangat membantu persiapan tes masuk perguruan tinggi. Soal-soal latihannya mirip dengan tes asli. Saya berhasil lolos 3 PTN sekaligus!",
    rating: 5,
    program: "Tes Kemampuan Akademik",
    achievement: "Lolos 3 PTN",
    duration: "4 bulan"
  }
]

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Siswa Aktif",
    description: "Bergabung dan meraih prestasi"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Rating Kepuasan",
    description: "Dari ribuan ulasan positif"
  },
  {
    icon: Award,
    value: "95%",
    label: "Tingkat Keberhasilan",
    description: "Siswa mencapai target"
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Peningkatan Nilai",
    description: "Rata-rata kenaikan nilai"
  }
]

export default function TestimoniPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.program.toLowerCase().includes(filter.toLowerCase()))

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

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
              <Link href="/testimoni" className="text-blue-600 font-semibold">Testimoni</Link>
              <Link href="/kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
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
              <Link href="/testimoni" className="block px-3 py-2 text-blue-600 font-semibold">Testimoni</Link>
              <Link href="/kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</Link>
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
              💬 Testimoni Siswa
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Apa Kata Mereka
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Tentang EduQuantum
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengarkan langsung pengalaman para siswa dan orang tua yang telah merasakan 
              manfaat belajar bersama EduQuantum
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center p-6 border-0 bg-white shadow-sm">
                  <CardContent className="space-y-3 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.description}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Card className="p-8 md:p-12 border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="space-y-6 p-0">
                <div className="flex justify-center">
                  <Quote className="w-12 h-12 text-blue-600" />
                </div>
                
                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-1">
                    {renderStars(filteredTestimonials[currentIndex]?.rating || 5)}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    "{filteredTestimonials[currentIndex]?.content}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900">
                      {filteredTestimonials[currentIndex]?.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {filteredTestimonials[currentIndex]?.role}
                    </div>
                    <div className="flex justify-center space-x-4 text-sm">
                      <Badge variant="secondary">
                        {filteredTestimonials[currentIndex]?.program}
                      </Badge>
                      <Badge variant="outline">
                        {filteredTestimonials[currentIndex]?.achievement}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <div className="flex items-center space-x-2">
                    {filteredTestimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={filter === 'all' ? "default" : "outline"}
              onClick={() => setFilter('all')}
              className={filter === 'all' 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                : "border-gray-300 hover:border-blue-400"
              }
            >
              Semua Testimoni
            </Button>
            <Button
              variant={filter === 'reguler' ? "default" : "outline"}
              onClick={() => setFilter('reguler')}
              className={filter === 'reguler' 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                : "border-gray-300 hover:border-blue-400"
              }
            >
              Program Reguler
            </Button>
            <Button
              variant={filter === 'utbk' ? "default" : "outline"}
              onClick={() => setFilter('utbk')}
              className={filter === 'utbk' 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                : "border-gray-300 hover:border-blue-400"
              }
            >
              UTBK
            </Button>
            <Button
              variant={filter === 'olimpiade' ? "default" : "outline"}
              onClick={() => setFilter('olimpiade')}
              className={filter === 'olimpiade' 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                : "border-gray-300 hover:border-blue-400"
              }
            >
              Olimpiade
            </Button>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.program}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.duration}
                      </Badge>
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      🏆 {testimonial.achievement}
                    </div>
                  </div>
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
            Siap Menjadi Testimoni Berikutnya?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan ratusan siswa yang telah meraih kesuksesan bersama EduQuantum
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
            <BookOpen className="mr-2 w-5 h-5" />
            Daftar Sekarang
          </Button>
        </div>
      </section>
    </div>
  )
}