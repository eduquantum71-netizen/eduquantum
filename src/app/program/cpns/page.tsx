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
  Building,
  FileText,
  Shield
} from 'lucide-react'

const programDetails = {
  name: "Preparasi CPNS",
  category: "cpns",
  tagline: "Sukses Tes CPNS dan ASN Terbaru",
  description: "Program persiapan lengkap untuk seleksi CPNS (Calon Pegawai Negeri Sipil) dan ASN (Aparatur Sipil Negara) terbaru. Dibimbing oleh tutor berpengalaman dengan materi update sesuai peraturan terbaru dan strategi terbukti untuk lolos seleksi CPNS 2024.",
  price: 225000,
  duration: "120 menit/sesi",
  totalSessions: "16-32 sesi",
  studentsCount: "150+ siswa aktif",
  successRate: "82% lolos SKD",
  
  objectives: [
    "Menguasai semua materi SKD (Seleksi Kompetensi Dasar) CPNS",
    "Mengembangkan strategi pengerjaan soal CAT yang efektif",
    "Meningkatkan kecepatan dan akurasi dalam mengerjakan soal",
    "Membangun mental dan stamina untuk menghadapi tes CAT",
    "Mencapai skor SKD yang kompetitif untuk lolos ke SKB"
  ],

  features: [
    {
      icon: FileText,
      title: "Update Materi Terkini",
      description: "Materi selalu update sesuai peraturan dan kisi-kisi CPNS terbaru"
    },
    {
      icon: Target,
      title: "Master Strategi CAT",
      description: "Strategi khusus untuk menghadapi tes Computer Assisted Test (CAT)"
    },
    {
      icon: Building,
      title: "SKD & SKB Preparation",
      description: "Persiapan lengkap untuk Seleksi Kompetensi Dasar dan Seleksi Kompetensi Bidang"
    },
    {
      icon: Shield,
      title: "Simulation Test",
      description: "Simulasi tes CAT dengan sistem yang mirip dengan tes sesungguhnya"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitoring perkembangan belajar dengan analisis detail"
    },
    {
      icon: GraduationCap,
      title: "Expert Tutors",
      description: "Tutor berpengalaman dan alumni CPNS yang berhasil lolos"
    }
  ],

  skdSubjects: [
    {
      name: "TWK (Tes Wawasan Kebangsaan)",
      description: "Menguji pemahaman tentang Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika",
      topics: [
        "Pancasila sebagai Ideologi",
        "UUD 1945 dan Amandemen",
        "NKRI dan Semangat Kebangsaan",
        "Bhinneka Tunggal Ika",
        "Sejarah Nasional",
        "Geopolitik Indonesia"
      ],
      questionCount: "30 soal",
      timeLimit: "30 menit",
      weight: "35%"
    },
    {
      name: "TIU (Tes Intelegensi Umum)",
      description: "Menguji kemampuan verbal, numerik, figural, dan analitis",
      topics: [
        "Kemampuan Verbal",
        "Kemampuan Numerik",
        "Kemampuan Figural",
        "Kemampuan Analitis",
        "Logika dan Penalaran",
        "Problem Solving"
      ],
      questionCount: "35 soal",
      timeLimit: "39 menit",
      weight: "30%"
    },
    {
      name: "TKP (Tes Karakteristik Pribadi)",
      description: "Menguji karakteristik pribadi dan perilaku kerja",
      topics: [
        "Pelayanan Publik",
        "Jejaring Kerja",
        "Sosial Budaya",
        "Teknologi Informasi",
        "Profesionalisme",
        "Anti Korupsi"
      ],
      questionCount: "35 soal",
      timeLimit: "45 menit",
      weight: "35%"
    }
  ],

  skbCategories: [
    {
      category: "Tenaga Kesehatan",
      positions: [
        "Dokter",
        "Perawat",
        "Bidan",
        "Apoteker",
        "Ahli Gizi",
        "Sanitarian"
      ]
    },
    {
      category: "Tenaga Pendidikan",
      positions: [
        "Guru",
        "Dosen",
        "Pengawas Sekolah",
        "Kepala Sekolah",
        "Konselor",
        "Pustakawan"
      ]
    },
    {
      category: "Tenaga Teknis",
      positions: [
        "Insinyur",
        "Arsitek",
        "Ahli IT",
        "Analis Sistem",
        "Programmer",
        "Teknisi"
      ]
    },
    {
      category: "Tenaga Administrasi",
      positions: [
        "Analis Kepegawaian",
        "Analis Keuangan",
        "Pranata Komputer",
        "Verifikator",
        "Arsiparis",
        "Staf Administrasi"
      ]
    }
  ],

  methodology: [
    {
      phase: "Diagnostic Test",
      description: "Tes awal untuk mengukur kemampuan dasar dan identifikasi area yang perlu diperbaiki",
      duration: "2 sesi"
    },
    {
      phase: "Foundation Building",
      description: "Pembangunan fondasi konsep dasar untuk setiap komponen SKD",
      duration: "6-12 sesi"
    },
    {
      phase: "CAT Simulation",
      description: "Simulasi tes CAT dengan strategi pengerjaan dan manajemen waktu",
      duration: "6-16 sesi"
    },
    {
      phase: "Final Preparation",
      description: "Persiapan akhir dengan tryout komprehensif dan mental coaching",
      duration: "2 sesi"
    }
  ],

  schedule: [
    {
      option: "Regular Class",
      days: "Senin - Jumat",
      time: "18:00 - 20:00 WIB",
      frequency: "2x seminggu"
    },
    {
      option: "Weekend Intensive",
      days: "Sabtu - Minggu",
      time: "09:00 - 17:00 WIB",
      frequency: "1x seminggu (4 jam)"
    },
    {
      option: "Bootcamp",
      days: "Intensive",
      time: "09:00 - 21:00 WIB",
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
      package: "Paket Basic (16 sesi)",
      sessions: 16,
      pricePerSession: 225000,
      totalPrice: 3600000,
      discount: 0,
      popular: false
    },
    {
      package: "Paket Standard (20 sesi)",
      sessions: 20,
      pricePerSession: 225000,
      totalPrice: 4500000,
      discount: 5,
      popular: true
    },
    {
      package: "Paket Advanced (24 sesi)",
      sessions: 24,
      pricePerSession: 225000,
      totalPrice: 5400000,
      discount: 8,
      popular: false
    },
    {
      package: "Paket Premium (32 sesi)",
      sessions: 32,
      pricePerSession: 225000,
      totalPrice: 7200000,
      discount: 12,
      popular: false
    }
  ],

  successMetrics: [
    {
      metric: "Passing Rate SKD",
      before: "60%",
      after: "82%",
      improvement: "+22%"
    },
    {
      metric: "Average Score",
      before: "320/500",
      after: "380/500",
      improvement: "+60 poin"
    },
    {
      metric: "CAT Speed",
      before: "60 soal/jam",
      after: "90 soal/jam",
      improvement: "+50%"
    },
    {
      metric: "Accuracy Rate",
      before: "70%",
      after: "85%",
      improvement: "+15%"
    }
  ],

  successStories: [
    {
      name: "Andi Pratama",
      position: "Guru SMA",
      achieved: "Lolos CPNS 2023",
      score: "410/500",
      testimonial: "Program CPNS EduQuantum sangat membantu! Saya bisa lolos sebagai guru SMA dengan skor yang memuaskan."
    },
    {
      name: "Sarah Wijaya",
      position: "Perawat",
      achieved: "Lolos CPNS 2023",
      score: "395/500",
      testimonial: "Materinya update dan tutor-nya sangat berpengalaman. Saya mendapatkan posisi yang saya inginkan."
    },
    {
      name: "Michael Chen",
      position: "Analis Sistem",
      achieved: "Lolos CPNS 2023",
      score: "420/500",
      testimonial: "Simulasi CAT-nya sangat mirip dengan tes sesungguhnya. Saya merasa percaya diri saat tes."
    }
  ],

  testimonials: [
    {
      name: "Rizki Ahmad",
      role: "Fresh Graduate",
      content: "Program CPNS sangat komprehensif! Saya yang awalnya tidak tahu apa-apa tentang CPNS sekarang sudah lolos.",
      rating: 5,
      improvement: "Lolos CPNS 2023"
    },
    {
      name: "Maya Putri",
      role: "Professional",
      content: "Strategi CAT yang diajarkan sangat efektif. Saya bisa menyelesaikan soal lebih cepat dan akurat.",
      rating: 5,
      improvement: "Score 410/500"
    },
    {
      name: "Budi Santoso",
      role: "PNS",
      content: "Saya mengikuti program ini untuk persiapan promosi. Materinya sangat relevan dan up-to-date.",
      rating: 5,
      improvement: "Promosi Berhasil"
    }
  ],

  faqs: [
    {
      question: "Apa perbedaan CPNS dengan PPPK?",
      answer: "CPNS adalah Pegawai Negeri Sipil dengan status tetap, sedangkan PPPK (Pegawai Pemerintah dengan Perjanjian Kerja) adalah ASN dengan status kontrak. Keduanya melalui tes yang berbeda."
    },
    {
      question: "Berapa passing grade untuk lolos SKD?",
      answer: "Passing grade bervariasi tergantung formasi dan instansi. Umumnya untuk TWK minimal 65, TIU minimal 80, dan TKP minimal 166. Total passing grade minimal 275."
    },
    {
      question: "Apakah program ini mencakup persiapan SKB?",
      answer: "Ya, kami menyediakan modul SKB untuk berbagai kategori formasi. Namun fokus utama program ini adalah persiapan SKD karena itu adalah tahap pertama."
    },
    {
      question: "Bagaimana sistem CAT bekerja?",
      answer: "CAT (Computer Assisted Test) adalah sistem tes berbasis komputer. Kami akan melatih Anda menggunakan sistem simulasi CAT yang mirip dengan tes sesungguhnya."
    },
    {
      question: "Apakah ada jaminan lolos CPNS?",
      answer: "Kami memberikan jaminan peningkatan skor minimal 50 poin. Jika target tidak tercapai, kami menyediakan program tambahan gratis."
    }
  ]
}

export default function ProgramCPNSPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-white/20 text-white border-0">
                🏛️ Program CPNS & ASN
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {programDetails.name}
              </h1>
              <p className="text-xl text-red-100 leading-relaxed">
                {programDetails.tagline}
              </p>
              <p className="text-lg text-red-100 leading-relaxed">
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
                  <Building className="w-5 h-5" />
                  <span>SKD & SKB</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/daftar">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
                    Daftar CPNS 2024
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  Info CPNS
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video bg-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">CPNS Success</h3>
                    <p className="text-red-100">Program terpercaya untuk sukses CPNS 2024</p>
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
              <div className="text-3xl font-bold text-red-600">150+</div>
              <div className="text-sm text-gray-600">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">82%</div>
              <div className="text-sm text-gray-600">Lolos SKD</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.8/5</div>
              <div className="text-sm text-gray-600">Rating Siswa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Instansi Tercapai</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hasil Nyata Program CPNS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metode kami terbukti meningkatkan skor dan passing rate CPNS
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
              Target Pembelajaran CPNS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program ini dirancang untuk membantu Anda lolos seleksi CPNS dengan skor maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programDetails.objectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SKD Subjects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Materi SKD Lengkap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 komponen utama Seleksi Kompetensi Dasar CPNS
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programDetails.skdSubjects.map((subject) => (
              <Card key={subject.name} className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {subject.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{subject.description}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-red-600">{subject.questionCount}</div>
                      <div className="text-gray-500">Soal</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-orange-600">{subject.timeLimit}</div>
                      <div className="text-gray-500">Waktu</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">{subject.weight}</div>
                      <div className="text-gray-500">Bobot</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Topik:</h4>
                    <div className="space-y-1">
                      {subject.topics.map((topic, index) => (
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
                    onClick={() => setSelectedSubject(subject.name)}
                  >
                    Lihat Detail {subject.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SKB Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kategori SKB
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Persiapan untuk berbagai formasi Seleksi Kompetensi Bidang
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programDetails.skbCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  <div className="space-y-2">
                    {category.positions.map((position, posIndex) => (
                      <div key={posIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{position}</span>
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
              Fitur Program CPNS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nikmati berbagai fitur unggulan untuk persiapan CPNS maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programDetails.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
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
              Kisah Sukses CPNS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alumni kami yang telah berhasil lolos CPNS 2023
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-r from-red-50 to-orange-50">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{story.score}</div>
                    <Badge variant="secondary" className="bg-red-100 text-red-700">
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
              Metodologi Persiapan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 fase pembelajaran sistematis untuk sukses CPNS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.methodology.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-red-50 to-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
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
              Pilih jadwal yang sesuai dengan persiapan CPNS Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.schedule.map((schedule, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-gray-900">{schedule.option}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700">{schedule.days}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700">{schedule.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-red-600" />
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
              Paket Harga CPNS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investasi untuk karir sebagai PNS yang stabil dan terjamin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.pricing.map((pkg, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-all border-0 ${
                pkg.popular ? 'ring-2 ring-red-600 bg-gradient-to-br from-red-50 to-orange-50' : 'bg-white'
              }`}>
                <CardContent className="space-y-4 p-0">
                  {pkg.popular && (
                    <Badge className="w-fit bg-red-600 text-white">
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
                      <span className="text-sm text-gray-700">3 Komponen SKD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Simulasi CAT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Materi SKB</span>
                    </div>
                  </div>
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700' 
                        : ''
                    }`}
                    onClick={() => setSelectedPackage(index)}
                  >
                    Investasi CPNS
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
              Apa kata mereka tentang Program CPNS EduQuantum
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
              FAQ Program CPNS
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan umum tentang Program Preparasi CPNS
            </p>
          </div>

          <div className="space-y-4">
            {programDetails.faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-to-r from-red-50 to-orange-50">
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Menjadi PNS?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Bergabunglah dengan Program CPNS dan wujudkan karir impian Anda sebagai PNS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daftar">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
                <Building className="mr-2 w-5 h-5" />
                Daftar CPNS 2024
              </Button>
            </Link>
            <Link href="/kontak">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-6">
                Konsultasi CPNS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}