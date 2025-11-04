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
  X,
  Target,
  TrendingUp,
  Calendar,
  DollarSign,
  GraduationCap,
  Play,
  ChevronRight,
  Zap,
  User,
  BarChart3
} from 'lucide-react'

const programDetails = {
  name: "Les Privat [Nama Mata Pelajaran]",
  category: "regular",
  tagline: "Tingkatkan Prestasi Belajar Anda",
  description: "Program les privat online yang dirancang khusus untuk membantu siswa memahami materi secara mendalam, meningkatkan nilai, dan mencapai target akademis. Dibimbing oleh tutor berpengalaman dengan metode pengajaran yang adaptif dan menyenangkan.",
  price: 150000,
  duration: "90 menit/sesi",
  totalSessions: "8-24 sesi",
  studentsCount: "200+ siswa aktif",
  successRate: "Rata-rata nilai naik 25%",
  
  objectives: [
    "Memahami konsep dasar materi secara menyeluruh",
    "Meningkatkan kemampuan pemecahan masalah",
    "Mengembangkan strategi belajar yang efektif",
    "Meningkatkan kepercayaan diri dalam menghadapi ujian",
    "Mencapai target nilai akademis yang diinginkan"
  ],

  features: [
    {
      icon: BookOpen,
      title: "Materi Komprehensif",
      description: "Materi pembelajaran yang disesuaikan dengan kurikulum dan kebutuhan siswa"
    },
    {
      icon: Target,
      title: "Program Personalized",
      description: "Program belajar yang disesuaikan dengan kekuatan dan kelemahan siswa"
    },
    {
      icon: BarChart3,
      title: "Evaluasi Berkala",
      description: "Pemantauan perkembangan belajar dengan tes dan analisis berkala"
    },
    {
      icon: Award,
      title: "Sertifikat Kelulusan",
      description: "Sertifikat kelulusan program sebagai bukti pencapaian belajar"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitoring perkembangan belajar dengan analisis detail"
    },
    {
      icon: GraduationCap,
      title: "Expert Tutors",
      description: "Tutor berpengalaman dan bersertifikat di bidangnya"
    }
  ],

  modules: [
    {
      name: "Konsep Dasar",
      description: "Pemahaman fundamental dan teori dasar mata pelajaran",
      topics: [
        "Pengenalan Konsep",
        "Teori Inti",
        "Contoh Dasar",
        "Aplikasi Sederhana",
        "Latihan Fundamental",
        "Diskusi Konseptual"
      ],
      duration: "2-4 sesi",
      weight: "30%"
    },
    {
      name: "Pemecahan Masalah",
      description: "Teknik dan strategi untuk menyelesaikan berbagai jenis soal",
      topics: [
        "Analisis Soal",
        "Strategi Pengerjaan",
        "Latihan Soal Variatif",
        "Teknik Efisiensi Waktu",
        "Pemahaman Pola Soal",
        "Tips & Trik"
      ],
      duration: "4-10 sesi",
      weight: "40%"
    },
    {
      name: "Praktik & Aplikasi",
      description: "Penerapan konsep dalam soal-soal kompleks dan kasus nyata",
      topics: [
        "Soal Aplikasi",
        "Studi Kasus",
        "Proyek Mini",
        "Diskusi Kelompok",
        "Presentasi",
        "Evaluasi Praktik"
      ],
      duration: "2-10 sesi",
      weight: "30%"
    }
  ],

  specializations: [
    {
      category: "Persiapan Ujian",
      topics: [
        "Ujian Tengah Semester",
        "Ujian Akhir Semester",
        "Ujian Nasional",
        "Ujian Masuk PTN",
        "Tryout"
      ]
    },
    {
      category: "Pemantapan Materi",
      topics: [
        "Pemahaman Konsep",
        "Pemecahan Masalah",
        "Latihan Soal",
        "Kuis Interaktif"
      ]
    },
    {
      category: "Bantuan Tugas",
      topics: [
        "Tugas Sekolah",
        "PR Harian",
        "Proyek Sekolah",
        "Tugas Besar"
      ]
    },
    {
      category: "Program Intensif",
      topics: [
        "Bootcamp Liburan",
        "Program Akhir Pekan",
        "Kelas Remidi",
        "Program Akselerasi"
      ]
    }
  ],

  methodology: [
    {
      phase: "Asesmen Awal",
      description: "Tes awal untuk mengukur kemampuan dasar dan identifikasi area yang perlu diperbaiki",
      duration: "1 sesi"
    },
    {
      phase: "Pembangunan Fondasi",
      description: "Pembangunan fondasi konsep dasar untuk setiap topik pembelajaran",
      duration: "2-6 sesi"
    },
    {
      phase: "Pendalaman Materi",
      description: "Pendalaman materi dengan latihan soal dan aplikasi konsep",
      duration: "4-16 sesi"
    },
    {
      phase: "Evaluasi Akhir",
      description: "Evaluasi komprehensif dan persiapan untuk ujian akhir",
      duration: "1 sesi"
    }
  ],

  schedule: [
    {
      option: "Regular Class",
      days: "Senin - Jumat",
      time: "16:00 - 17:30 WIB",
      frequency: "2x seminggu"
    },
    {
      option: "Weekend Class",
      days: "Sabtu - Minggu",
      time: "09:00 - 10:30 WIB",
      frequency: "1x seminggu"
    },
    {
      option: "Intensive Program",
      days: "Senin - Jumat",
      time: "Disesuaikan",
      frequency: "Program khusus 2 minggu"
    },
    {
      option: "Private Class",
      days: "Fleksibel",
      time: "Disesuaikan",
      frequency: "1-on-1 session"
    }
  ],

  pricing: [
    {
      package: "Paket Lite (8 sesi)",
      sessions: 8,
      pricePerSession: 150000,
      totalPrice: 1200000,
      discount: 0,
      popular: false
    },
    {
      package: "Paket Standar (16 sesi)",
      sessions: 16,
      pricePerSession: 150000,
      totalPrice: 2400000,
      discount: 5,
      popular: true
    },
    {
      package: "Paket Premium (20 sesi)",
      sessions: 20,
      pricePerSession: 150000,
      totalPrice: 3000000,
      discount: 8,
      popular: false
    },
    {
      package: "Paket Intensif (24 sesi)",
      sessions: 24,
      pricePerSession: 150000,
      totalPrice: 3600000,
      discount: 10,
      popular: false
    }
  ],

  successMetrics: [
    {
      metric: "Peningkatan Nilai",
      before: "Rata-rata 65",
      after: "Rata-rata 85",
      improvement: "+20 poin"
    },
    {
      metric: "Pemahaman Konsep",
      before: "60%",
      after: "90%",
      improvement: "+30%"
    },
    {
      metric: "Kecepatan Belajar",
      before: "1 topik/2 sesi",
      after: "1 topik/sesi",
      improvement: "+100%"
    },
    {
      metric: "Kepercayaan Diri",
      before: "Rendah",
      after: "Tinggi",
      improvement: "Signifikan"
    }
  ],

  successStories: [
    {
      name: "Rina Saputri",
      position: "Siswa SMA",
      achieved: "Nilai Matematika Naik",
      score: "85 (dari 60)",
      testimonial: "Program ini sangat membantu saya memahami matematika yang dulunya sulit. Tutor-nya sabar dan metodenya efektif."
    },
    {
      name: "Budi Santoso",
      position: "Siswa SMP",
      achieved: "Lulus Ujian",
      score: "Nilai Rata-rata 8.5",
      testimonial: "Dengan bantuan tutor, saya bisa lulus ujian dengan nilai memuaskan. Materinya disampaikan dengan menarik."
    },
    {
      name: "Siti Nurhaliza",
      position: "Mahasiswa",
      achieved: "Lulus Mata Kuliah",
      score: "A",
      testimonial: "Saya akhirnya bisa lulus mata kuliah yang sulit dengan bantuan program ini. Highly recommended!"
    }
  ],

  testimonials: [
    {
      name: "Ahmad Fauzi",
      role: "Orang Tua Siswa",
      content: "Anak saya menjadi lebih percaya diri dengan pelajaran setelah mengikuti program ini. Nilainya juga meningkat drastis.",
      rating: 5,
      improvement: "Nilai Naik 30 Poin"
    },
    {
      name: "Dewi Lestari",
      role: "Siswa SMA",
      content: "Metode belajarnya menyenangkan dan tidak membosankan. Saya jadi semangat belajar.",
      rating: 5,
      improvement: "Ranking Kelas Naik"
    },
    {
      name: "Rizky Pratama",
      role: "Mahasiswa",
      content: "Tutor-nya sangat profesional dan menguasai materi. Saya jadi paham konsep yang dulunya sulit.",
      rating: 5,
      improvement: "Lulus Mata Kuliah"
    }
  ],

  faqs: [
    {
      question: "Bagaimana cara memulai program les privat ini?",
      answer: "Anda bisa mendaftar melalui website kami, setelah itu tim kami akan menghubungi Anda untuk melakukan asesmen awal dan penentuan jadwal."
    },
    {
      question: "Apakah jadwal belajar bisa disesuaikan?",
      answer: "Ya, kami menawarkan opsi jadwal yang fleksibel, termasuk kelas regular, akhir pekan, dan privat yang bisa disesuaikan dengan kebutuhan Anda."
    },
    {
      question: "Bagaimana jika saya tidak puas dengan tutor?",
      answer: "Kami menyediakan opsi untuk mengganti tutor jika Anda merasa tidak cocok dengan metode pengajaran yang diberikan."
    },
    {
      question: "Apakah ada garansi peningkatan nilai?",
      answer: "Kami memberikan jaminan peningkatan pemahaman materi. Jika setelah 4 sesi tidak ada perkembangan signifikan, kami akan memberikan sesi tambahan gratis."
    },
    {
      question: "Apakah program ini tersedia untuk semua mata pelajaran?",
      answer: "Ya, kami menyediakan tutor untuk berbagai mata pelajaran, mulai dari SD hingga tingkat universitas. Silakan hubungi kami untuk informasi lebih lanjut."
    }
  ]
}

export default function ProgramRegularPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

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
              <Link href="/daftar">
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
              <Link href="/program" className="block px-3 py-2 text-blue-600 font-semibold">Program</Link>
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-white/20 text-white border-0">
                📚 Program Les Privat Online
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {programDetails.name}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                {programDetails.tagline}
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                {programDetails.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{programDetails.studentsCount}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>{programDetails.successRate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{programDetails.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Personalized Learning</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/daftar">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                    Daftar Sekarang
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  Info Program
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video bg-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Learning Excellence</h3>
                    <p className="text-blue-100">Program terpercaya untuk sukses akademik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">200+</div>
              <div className="text-sm text-gray-600">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">25%</div>
              <div className="text-sm text-gray-600">Rata-rata Kenaikan Nilai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.9/5</div>
              <div className="text-sm text-gray-600">Rating Siswa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-sm text-gray-600">Tutor Profesional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hasil Nyata Program Les Privat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metode kami terbukti meningkatkan pemahaman dan prestasi akademik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.successMetrics.map((metric, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{metric.metric}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sebelum:</span>
                      <span className="font-medium text-red-600">{metric.before}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sesudah:</span>
                      <span className="font-medium text-green-600">{metric.after}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {metric.improvement}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Target Pembelajaran
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program ini dirancang untuk membantu Anda mencapai target akademis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programDetails.objectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Struktur Pembelajaran
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 modul utama untuk pembelajaran yang komprehensif
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programDetails.modules.map((module) => (
              <Card key={module.name} className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {module.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">{module.duration}</div>
                      <div className="text-gray-500">Durasi</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-purple-600">{module.topics.length}</div>
                      <div className="text-gray-500">Topik</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">{module.weight}</div>
                      <div className="text-gray-500">Porsi</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Topik:</h4>
                    <div className="space-y-1">
                      {module.topics.map((topic, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedModule(module.name)}
                  >
                    Lihat Detail {module.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Spesialisasi Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program yang disesuaikan dengan kebutuhan belajar Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programDetails.specializations.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  <div className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Fitur Program Les Privat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nikmati berbagai fitur unggulan untuk pengalaman belajar yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programDetails.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kisah Sukses Siswa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siswa kami yang telah berhasil meningkatkan prestasinya
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{story.score}</div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {story.achieved}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">Position: {story.position}</p>
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed italic">
                    "{story.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Metodologi Pembelajaran
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 fase pembelajaran sistematis untuk hasil optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.methodology.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {phase.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Opsi Jadwal Belajar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih jadwal yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.schedule.map((schedule, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-gray-900">{schedule.option}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{schedule.days}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{schedule.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{schedule.frequency}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Pilih Jadwal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Paket Harga Les Privat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investasi untuk masa depan akademik yang lebih cerah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.pricing.map((pkg, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-all border-0 ${
                pkg.popular ? 'ring-2 ring-blue-600 bg-gradient-to-br from-blue-50 to-purple-50' : 'bg-white'
              }`}>
                <CardContent className="space-y-4 p-0">
                  {pkg.popular && (
                    <Badge className="w-fit bg-blue-600 text-white">
                      Paling Populer
                    </Badge>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{pkg.package}</h3>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">
                      Rp {pkg.totalPrice.toLocaleString('id-ID')}
                    </div>
                    <div className="text-sm text-gray-600">
                      Rp {pkg.pricePerSession.toLocaleString('id-ID')}/sesi
                    </div>
                    {pkg.discount > 0 && (
                      <Badge variant="secondary" className="text-green-600">
                        Hemat {pkg.discount}%
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{pkg.sessions} sesi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Materi Komprehensif</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Evaluasi Berkala</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Sertifikat</span>
                    </div>
                  </div>
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : ''
                    }`}
                    onClick={() => setSelectedPackage(index)}
                  >
                    Investasi Belajar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Testimoni Siswa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apa kata mereka tentang Program Les Privat EduQuantum
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.improvement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              FAQ Program Les Privat
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan umum tentang Program Les Privat Online
            </p>
          </div>

          <div className="space-y-4">
            {programDetails.faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="space-y-3 p-0">
                  <h3 className="font-semibold text-gray-900 text-lg">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
            Siap Tingkatkan Prestasi Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan Program Les Privat dan wujudkan target akademis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daftar">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                <BookOpen className="mr-2 w-5 h-5" />
                Daftar Sekarang
              </Button>
            </Link>
            <Link href="/kontak">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}