'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Users, 
  Clock,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'

const programs = [
  {
    id: 'reguler',
    name: 'Reguler',
    category: 'reguler',
    description: 'Program les privat standar untuk meningkatkan pemahaman dan prestasi akademik siswa',
    price: 150000,
    duration: '90 menit/sesi',
    features: [
      '1 siswa per sesi',
      'Materi disesuaikan kurikulum',
      'Rapor harian & bulanan',
      'Free konsultasi',
      'Sertifikat kelulusan'
    ],
    icon: BookOpen,
    color: 'blue',
    subjects: ['Matematika', 'B. Indonesia', 'B. Inggris', 'IPA', 'IPS']
  },
  {
    id: 'nasional-plus',
    name: 'Nasional Plus',
    category: 'nasional-plus',
    description: 'Program intensif untuk siswa yang ingin mendalami materi kurikulum nasional dengan pendekatan internasional',
    price: 200000,
    duration: '120 menit/sesi',
    features: [
      'Kurikulum nasional + internasional',
      'Bahan ajar premium',
      'Assessment berkala',
      'Portfolio development',
      'Preparasi studi lanjut'
    ],
    icon: Award,
    color: 'purple',
    subjects: ['Matematika', 'Science', 'English', 'Social Studies']
  },
  {
    id: 'olimpiade',
    name: 'Olimpiade',
    category: 'olimpiade',
    description: 'Program khusus untuk mempersiapkan siswa mengikuti kompetisi olimpiade sains dan matematika',
    price: 250000,
    duration: '120 menit/sesi',
    features: [
      'Pengajar spesialis olimpiade',
      'Modul soal kompetisi',
      'Simulasi kompetisi',
      'Strategi problem solving',
      'Track record juara'
    ],
    icon: Star,
    color: 'yellow',
    subjects: ['Matematika', 'Fisika', 'Kimia', 'Biologi', 'Komputer', 'Astronomi']
  },
  {
    id: 'utbk',
    name: 'UTBK',
    category: 'utbk',
    description: 'Program intensif untuk mempersiapkan siswa menghadapi UTBK/SNBT masuk perguruan tinggi',
    price: 225000,
    duration: '120 menit/sesi',
    features: [
      'Master strategi UTBK',
      'Ribuan bank soal',
      'Tryout berkala',
      'Analisis kemampuan',
      'Tips & trik mengerjakan soal'
    ],
    icon: Award,
    color: 'green',
    subjects: ['TPS', 'TKA Saintek', 'TKA Soshum']
  },
  {
    id: 'speak-up',
    name: 'Speak Up (Bahasa)',
    category: 'speak-up',
    description: 'Program untuk meningkatkan kemampuan berbicara dalam berbagai bahasa asing',
    price: 175000,
    duration: '90 menit/sesi',
    features: [
      'Native speaker',
      'Conversation practice',
      'Business communication',
      'Pronunciation training',
      'Cultural understanding'
    ],
    icon: Users,
    color: 'orange',
    subjects: ['English', 'Mandarin', 'Japanese', 'Korean', 'German', 'French']
  },
  {
    id: 'tka',
    name: 'Tes Kemampuan Akademik',
    category: 'tka',
    description: 'Program persiapan untuk berbagai tes kemampuan akademik masuk perguruan tinggi dan lembaga',
    price: 200000,
    duration: '120 menit/sesi',
    features: [
      'Comprehensive assessment',
      'Time management training',
      'Test taking strategies',
      'Practice tests',
      'Performance analysis'
    ],
    icon: Clock,
    color: 'red',
    subjects: ['Verbal', 'Numerical', 'Logical', 'Abstract Reasoning']
  },
  {
    id: 'cpns',
    name: 'CPNS',
    category: 'cpns',
    description: 'Program lengkap untuk mempersiapkan tes CPNS dan seleksi penerimaan pegawai negeri',
    price: 225000,
    duration: '120 menit/sesi',
    features: [
      'Update materi terkini',
      'SKD & SKB preparation',
      'Simulation test',
      'Interview coaching',
      'Study planning'
    ],
    icon: Award,
    color: 'indigo',
    subjects: ['TWK', 'TIU', 'TKP', 'SKB Bidang']
  },
  {
    id: 'skripsi',
    name: 'Bimbingan Skripsi',
    category: 'skripsi',
    description: 'Program bimbingan untuk menyelesaikan tugas akhir, skripsi, dan thesis',
    price: 300000,
    duration: '90 menit/sesi',
    features: [
      'Expert supervisor guidance',
      'Research methodology',
      'Data analysis assistance',
      'Writing & editing',
      'Presentation preparation'
    ],
    icon: BookOpen,
    color: 'pink',
    subjects: ['Semua Jurusan']
  }
]

export default function ProgramPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { id: 'all', name: 'Semua Program' },
  
  ]

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(p => p.category === selectedCategory)

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' }
    }
    return colorMap[color] || colorMap.blue
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
              <Link href="/program" className="text-blue-600 font-semibold">Program</Link>
              <Link href="/pengajar" className="text-gray-700 hover:text-blue-600 transition-colors">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-700 hover:text-blue-600 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
              <Link href="/karir" className="text-gray-700 hover:text-blue-600 transition-colors">Karir</Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Daftar Sekarang
              </Button>
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
              <Link href="/program" className="block px-3 py-2 text-blue-600 font-semibold">Program</Link>
              <Link href="/pengajar" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pengajar</Link>
              <Link href="/testimoni" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimoni</Link>
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
              📚 Program Les Privat
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Pilih Program
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Terbaik
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan program les yang sesuai dengan kebutuhan dan tujuan belajar Anda. 
              Setiap program dirancang khusus untuk membantu meraih prestasi terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                  : "border-gray-300 hover:border-blue-400"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      

      {/* Programs Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => {
              const colors = getColorClasses(program.color)
              const Icon = program.icon
              
              return (
                <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader className={`${colors.bg} ${colors.border} border-b-2`}>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <Badge variant="secondary" className="bg-white/80">
                        Rp {program.price.toLocaleString('id-ID')}/sesi
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {program.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Keunggulan:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Mata Pelajaran:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => window.location.href = `/program/${program.category}`}
                    >
                      Lihat Detail
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Butuh Bantuan Memilih Program?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Konsultasikan kebutuhan belajar Anda dengan tim ahli kami secara gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              Konsultasi Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
              <BookOpen className="mr-2 w-5 h-5" />
              Download Panduan
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}