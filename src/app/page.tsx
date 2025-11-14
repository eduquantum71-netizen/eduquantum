'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Users, 
  Award, 
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Play,
  CheckCircle,
  TrendingUp,
  Clock,
  Target
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EdQuantum
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/program" className="text-gray-700 hover:text-blue-600 transition-colors">Program</Link>
              <Link href="/pengajar" className="text-gray-700 hover:text-blue-600 transition-colors">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-700 hover:text-blue-600 transition-colors">Testimoni</Link>
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
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-700"></div>
                <div className="w-6 h-0.5 bg-gray-700"></div>
                <div className="w-6 h-0.5 bg-gray-700"></div>
              </div>
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
              <Link href="/kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</Link>
              <Link href="/karir" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Karir</Link>
              <div className="px-3 py-2">
                <Link href="/daftar">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    Daftar Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0">
                  🎓 Les Privat Online Terpercaya
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Wujudkan
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}Masa Depan
                  </span>
                  <br />
                  Pendidikan Terbaik
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Platform les privat online terdepan dengan pengajar profesional dan metode pembelajaran yang inovatif. 
                  Siap membantu meraih prestasi akademik terbaik Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/daftar">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
                    Daftar Sekarang
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  <Play className="mr-2 w-5 h-5" />
                  Lihat Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Siswa Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Pengajar Ahli</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-video bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Mulai Belajar</h3>
                      <p className="text-gray-600">Raih prestasi terbaik Anda bersama EduQuantum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 -right-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mengapa Memilih EdQuantum?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan layanan les privat berkualitas dengan berbagai keunggulan untuk mendukung kesuksesan pendidikan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pengajar Profesional</h3>
                <p className="text-gray-600">
                  Tim pengajar berpengalaman dan tersertifikasi dengan metode pembelajaran yang efektif dan menyenangkan
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Program Lengkap</h3>
                <p className="text-gray-600">
                  Berbagai pilihan program les yang disesuaikan dengan kebutuhan dan tujuan belajar Anda
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Fleksibel & Efisien</h3>
                <p className="text-gray-600">
                  Jadwal belajar yang fleksibel dapat disesuaikan dengan waktu dan kebutuhan Anda
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Progress Tracking</h3>
                <p className="text-gray-600">
                  Pemantauan perkembangan belajar secara berkala dengan laporan detail untuk orang tua
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-pink-50 to-white">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Terbukti Efektif</h3>
                <p className="text-gray-600">
                  Metode pembelajaran yang terbukti meningkatkan prestasi akademik siswa
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Garansi Kualitas</h3>
                <p className="text-gray-600">
                  Jaminan kepuasan dengan penggantian pengajar jika belum sesuai harapan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Meraih Prestasi Terbaik?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan ribuan siswa yang telah merasakan manfaat belajar di EduQuantum
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
            <Link href="/daftar" className="flex items-center">
              Daftar Sekarang
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduQuantum</span>
              </div>
              <p className="text-gray-400">
                Platform les privat online terpercaya untuk meraih prestasi akademik terbaik
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/program" className="hover:text-white transition-colors">Reguler</Link></li>
                <li><Link href="/program" className="hover:text-white transition-colors">Nasional Plus</Link></li>
                <li><Link href="/program" className="hover:text-white transition-colors">Olimpiade</Link></li>
                <li><Link href="/program" className="hover:text-white transition-colors">UTBK</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/karir" className="hover:text-white transition-colors">Karir</Link></li>
                <li><Link href="/testimoni" className="hover:text-white transition-colors">Testimoni</Link></li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span><Link href="/kontak" className="hover:text-white transition-colors">+62 812-3456-7890</Link></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span><Link href="/kontak" className="hover:text-white transition-colors">info@edquantum.id</Link></span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span><Link href="/kontak" className="hover:text-white transition-colors">Jakarta, Indonesia</Link></span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduQuantum. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  )
}