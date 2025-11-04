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
  Monitor,
  Brain,
  Zap,
  BarChart3
} from 'lucide-react'

const programDetails = {
  name: "Program Persiapan UTBK",
  category: "utbk",
  tagline: "Jalur Cepat Menuju PTN Impian",
  description: "Program persiapan UTBK paling komprehensif untuk menguasai Tes Potensi Skolastik (TPS) dan materi Saintek/Soshum. Dibimbing oleh pengajar dari UI, ITB, dan UGM dengan metode belajar berbasis data dan simulasi tes realistis untuk memastikan Anda meraih skor tertinggi.",
  price: 275000,
  duration: "120 menit/sesi",
  totalSessions: "20-40 sesi",
  studentsCount: "300+ siswa terdaftar",
  successRate: "87% lolos PTN Favorit",
  
  objectives: [
    "Menguasai semua materi TPS dan Saintek/Soshum secara menyeluruh",
    "Mengembangkan strategi pengerjaan soal yang efektif dan efisien",
    "Meningkatkan kecepatan dan akurasi dalam mengerjakan soal",
    "Membangun stamina mental untuk menghadapi tes selama 5 jam",
    "Mencapai skor UTBK yang kompetitif untuk lolos PTN favorit"
  ],

  features: [
    {
      icon: BookOpen,
      title: "Materi Lengkap TPS & Saintek/Soshum",
      description: "Pembahasan mendalam semua topik UTBK, disusun berdasarkan analisis soal tahun-tahun sebelumnya."
    },
    {
      icon: Target,
      title: "Master Strategi UTBK",
      description: "Teknik khusus untuk menjawab soal TPS, trik mengerjakan soal cepat, dan manajemen waktu optimal."
    },
    {
      icon: BarChart3,
      title: "Analisis & Prediksi Skor",
      description: "Sistem pemantauan progress untuk mengetahui kekuatan, kelemahan, dan prediksi skor akhir Anda."
    },
    {
      icon: Zap,
      title: "Drill Soal & Tryout Habis",
      description: "Ribuan bank soal dan puluhan tryout dengan tingkat kesulitan bervariasi untuk melatih insting Anda."
    },
    {
      icon: TrendingUp,
      title: "Pemantauan Progress Real-time",
      description: "Dashboard pribadi untuk melihat perkembangan nilai, peringkat, dan waktu pengerjaan setiap sesi."
    },
    {
      icon: GraduationCap,
      title: "Pengajar UI/ITB/UGM",
      description: "Dibimbing langsung oleh tutor berprestasi dari PTN terbaik yang telah berpengalaman membimbing ratusan siswa."
    }
  ],

  modules: [
    {
      name: "Tes Potensi Skolastik (TPS)",
      description: "Materi wajib untuk semua peserta UTBK yang mengukur kemampuan kognitif umum.",
      topics: [
        "Penalaran Umum",
        "Pengetahuan Kuantitatif",
        "Pengetahuan dan Pemahaman Umum",
        "Kemampuan Memahami Bacaan dan Menulis",
        "Pengetahuan Kuantitatif (Interpretasi Data & Grafik)"
      ],
      questionCount: "1000+ Soal",
      timeLimit: "Integratif",
      weight: "Wajib"
    },
    {
      name: "Saintek (Sains dan Teknologi)",
      description: "Pilihan untuk jurusan IPA dan Teknik dengan fokus pada analisis dan pemecahan masalah.",
      topics: [
        "Matematika IPA",
        "Fisika",
        "Kimia",
        "Biologi",
        "Kombinasi Soal Cerita Saintek"
      ],
      questionCount: "1500+ Soal",
      timeLimit: "Integratif",
      weight: "Pilihan"
    },
    {
      name: "Soshum (Sosial dan Humaniora)",
      description: "Pilihan untuk jurusan IPS dengan fokus pada pemahaman konsep sosial dan humaniora.",
      topics: [
        "Sosiologi",
        "Sejarah",
        "Geografi",
        "Ekonomi",
        "Kombinasi Soal Cerita Soshum"
      ],
      questionCount: "1500+ Soal",
      timeLimit: "Integratif",
      weight: "Pilihan"
    }
  ],

  specializations: [
    {
      category: "Kelas Intensif",
      topics: [
        "Fokus pada Pemantapan Materi",
        "Drill Soal High-Yield",
        "Mini Tryout Setiap Pekan",
        "Target Skor 800+"
      ]
    },
    {
      category: "Kelas Regular",
      topics: [
        "Pembahasan Materi Bertahap",
        "Latihan Soal Fundamental",
        "Tryout Bulanan",
        "Target Skor 700+"
      ]
    },
    {
      category: "Kelas Eksklusif (Private)",
      topics: [
        "Program Personalized",
        "Fokus pada Kelemahan Siswa",
        "Jadwal Fleksibel",
        "Target Skor Maksimal"
      ]
    },
    {
      category: "Bootcamp Liburan",
      topics: [
        "Program Pemantapan Akhir",
        "Full Tryout & Review",
        "Mental Coaching",
        "Persiapan Menuju H-H"
      ]
    }
  ],

  methodology: [
    {
      phase: "Diagnostic Test & Analisis",
      description: "Tes awal untuk mengetahui baseline kemampuan dan identifikasi area yang perlu diperbaiki.",
      duration: "2 sesi"
    },
    {
      phase: "Penguatan Konsep & Strategi",
      description: "Pembelajaran materi fundamental dan penerapan strategi khusus untuk setiap tipe soal.",
      duration: "10-20 sesi"
    },
    {
      phase: "Drill Soal & Simulasi",
      description: "Latihan soal masif dan simulasi tryout untuk meningkatkan kecepatan dan akurasi.",
      duration: "6-16 sesi"
    },
    {
      phase: "Pemantapan Final & Gladi Bersih",
      description: "Review keseluruhan materi, tryout final, dan persiapan mental menjelang UTBK.",
      duration: "2 sesi"
    }
  ],

  schedule: [
    {
      option: "Kelas Regular",
      days: "Senin - Jumat",
      time: "16:00 - 18:00 WIB",
      frequency: "2x seminggu"
    },
    {
      option: "Kelas Weekend",
      days: "Sabtu - Minggu",
      time: "09:00 - 17:00 WIB",
      frequency: "1x seminggu (intensif)"
    },
    {
      option: "Bootcamp Libur Sekolah",
      days: "Senin - Jumat",
      time: "09:00 - 16:00 WIB",
      frequency: "Program khusus 2 minggu"
    },
    {
      option: "Kelas Private",
      days: "Fleksibel",
      time: "Disesuaikan",
      frequency: "1-on-1 session"
    }
  ],

  pricing: [
    {
      package: "Paket Pemantap (20 sesi)",
      sessions: 20,
      pricePerSession: 275000,
      totalPrice: 5500000,
      discount: 0,
      popular: false
    },
    {
      package: "Paket Sukses (30 sesi)",
      sessions: 30,
      pricePerSession: 275000,
      totalPrice: 8250000,
      discount: 5,
      popular: true
    },
    {
      package: "Paket Maximus (40 sesi)",
      sessions: 40,
      pricePerSession: 275000,
      totalPrice: 11000000,
      discount: 10,
      popular: false
    }
  ],

  successMetrics: [
    {
      metric: "Skor UTBK Rata-rata",
      before: "550",
      after: "750+",
      improvement: "+200 poin"
    },
    {
      metric: "Lolos PTN Top 5 (UI/ITB/UGM)",
      before: "15 Siswa",
      after: "65+ Siswa",
      improvement: "+333%"
    },
    {
      metric: "Kecepatan Pengerjaan",
      before: "90 soal/jam",
      after: "120 soal/jam",
      improvement: "+33%"
    },
    {
      metric: "Akurasi Jawaban",
      before: "60%",
      after: "85%",
      improvement: "+25%"
    }
  ],

  successStories: [
    {
      name: "Rizky Ahmad",
      position: "Siswa SMA IPA 2023",
      achieved: "Lolos Teknik Informatika UI",
      score: "Skor UTBK 825",
      testimonial: "Strategi yang diajarkan sangat efektif, terutama untuk manajemen waktu. Saya bisa mengerjakan semua soal dengan tenang."
    },
    {
      name: "Siti Nurhaliza",
      position: "Siswa SMA IPS 2023",
      achieved: "Lolos Fakultas Hukum UGM",
      score: "Skor UTBK 795",
      testimonial: "Materi Soshumnya sangat detail dan lengkap. Tryout-nya mirip sekali dengan aslinya, jadi saya tidak kaget saat UTBK."
    },
    {
      name: "Andi Pratama",
      position: "Siswa SMA IPA 2023",
      achieved: "Lolos Kedokteran ITB",
      score: "Skor UTBK 850+",
      testimonial: "Program ini adalah investasi terbaik untuk masa depan saya. Tutor-tutornya luar biasa dan sabar memandu saya."
    }
  ],

  testimonials: [
    {
      name: "Budi Santoso, Ayah dari Rizky",
      role: "Orang Tua Siswa",
      content: "Kami melihat perubahan drastis pada cara belajar anak kami. Ia menjadi lebih terstruktur, disiplin, dan percaya diri menghadapi UTBK.",
      rating: 5,
      improvement: "Anak Lolos PTN Impian"
    },
    {
      name: "Maya Putri",
      role: "Siswa Lolos UI",
      content: "Bank soalnya sangat lengkap dan pembahasannya detail. Saya jadi paham konsep yang dulunya sulit. Highly recommended!",
      rating: 5,
      improvement: "Skor UTBK 800+"
    },
    {
      name: "Dr. Hendra, Dosen Universitas",
      role: "Education Observer",
      content: "Program ini memiliki kurikulum yang relevan dan metode yang teruji. Mereka tidak hanya mengajar materi, tapi juga cara berpikir kritis.",
      rating: 5,
      improvement: "Mencetak Lulusan Berkualitas"
    }
  ],

  faqs: [
    {
      question: "Kapan waktu yang ideal untuk mulai mempersiapkan UTBK?",
      answer: "Waktu ideal adalah sejak awal kelas 12, atau minimal 6-8 bulan sebelum hari-H. Persiapan lebih awal memberikan keuntungan untuk penguatan konsep yang lebih baik."
    },
    {
      question: "Apa perbedaan utama antara materi Saintek dan Soshum?",
      answer: "Saintek fokus pada Matematika, Fisika, Kimia, dan Biologi dengan soal-soal kuantitatif dan analitis. Soshum fokus pada Sosiologi, Sejarah, Geografi, dan Ekonomi dengan soal-soal yang lebih konseptual dan interpretatif."
    },
    {
      question: "Apakah program ini menjamin saya lolos PTN?",
      answer: "Kami memberikan jaminan peningkatan skor. Jika skor tryout akhir Anda tidak meningkat signifikan dari skor awal, kami akan memberikan sesi tambahan gratis. Kelulusan tergantung pada usaha dan performa Anda saat tes."
    },
    {
      question: "Bagaimana jika saya masih bingung memilih antara Saintek atau Soshum?",
      answer: "Kami akan menyediakan sesi konsultasi dan tes minat bakat di awal program untuk membantu Anda menentukan pilihan yang paling sesuai dengan passion dan potensi Anda."
    },
    {
      question: "Apakah materi yang diajarkan selalu update?",
      answer: "Ya, tim kurikulum kami secara rutin melakukan analisis terhadap soal-soal UTBK terbaru dan melakukan update materi dan strategi setiap tahun untuk memastikan relevansi."
    }
  ]
}

export default function ProgramUTBKPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-blue-900/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-blue-900" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                EduQuantum
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Beranda</Link>
              <Link href="/program" className="text-cyan-400 font-semibold">Program</Link>
              <Link href="/pengajar" className="text-gray-300 hover:text-cyan-400 transition-colors">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-300 hover:text-cyan-400 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="text-gray-300 hover:text-cyan-400 transition-colors">Kontak</Link>
              <Link href="/karir" className="text-gray-300 hover:text-cyan-400 transition-colors">Karir</Link>
              <Link href="/daftar">
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-blue-900 font-semibold">
                  Daftar Sekarang
                </Button>
              </Link>
            </div>

            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 border-t border-blue-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Beranda</Link>
              <Link href="/program" className="block px-3 py-2 text-cyan-400 font-semibold">Program</Link>
              <Link href="/pengajar" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Pengajar</Link>
              <Link href="/testimoni" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Testimoni</Link>
              <Link href="/kontak" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Kontak</Link>
              <Link href="/karir" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Karir</Link>
              <div className="px-3 py-2">
                <Link href="/daftar">
                  <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-900 font-semibold">
                    Daftar Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-white/20 text-white border-0">
                🎓 Program Persiapan UTBK 2024
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                {programDetails.name}
              </h1>
              <p className="text-xl text-cyan-100 leading-relaxed font-semibold">
                {programDetails.tagline}
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                {programDetails.description}
              </p>
              
              <div className="flex flex-wrap gap-4 text-blue-100">
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
                  <GraduationCap className="w-5 h-5" />
                  <span>Pengajar PTN Terbaik</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/daftar">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                    Daftar Program UTBK
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  Info Lengkap
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video bg-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Your Future Starts Here</h3>
                    <p className="text-blue-100">Buka pintu gerbang PTN impianmu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">300+</div>
              <div className="text-sm text-gray-400">Siswa Terdaftar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">87%</div>
              <div className="text-sm text-gray-400">Lolos PTN Favorit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">750+</div>
              <div className="text-sm text-gray-400">Skor Rata-rata</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">4.9/5</div>
              <div className="text-sm text-gray-400">Rating Siswa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bukti Kesiapan Anda Menghadapi UTBK
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hasil nyata dari program persiapan UTBK kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.successMetrics.map((metric, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-blue-800">
                <CardContent className="space-y-4 p-0 text-center">
                  <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sebelum:</span>
                      <span className="font-medium text-gray-400">{metric.before}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sesudah:</span>
                      <span className="font-medium text-cyan-400">{metric.after}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-400">
                    {metric.improvement}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Target Pembelajaran UTBK
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fokus kami adalah memastikan Anda siap 100% menghadapi UTBK
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programDetails.objectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-blue-900">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{objective}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Materi UTBK Lengkap
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kuasai semua komponen soal dalam UTBK
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programDetails.modules.map((module) => (
              <Card key={module.name} className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-blue-800">
                <CardHeader className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10">
                  <CardTitle className="text-xl font-bold text-white">
                    {module.name}
                  </CardTitle>
                  <p className="text-sm text-gray-400">{module.description}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-cyan-400">{module.questionCount}</div>
                      <div className="text-gray-500">Bank Soal</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-400">{module.topics.length}</div>
                      <div className="text-gray-500">Topik</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-indigo-400">{module.weight}</div>
                      <div className="text-gray-500">Kategori</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Fokus Materi:</h4>
                    <div className="space-y-1">
                      {module.topics.map((topic, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900"
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
      <section className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pilihan Program Belajar
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sesuaikan intensitas belajar dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programDetails.specializations.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-blue-900">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  <div className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-300">{topic}</span>
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
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Metode Belajar Terstruktur
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pendekatan sistematis untuk hasil maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programDetails.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-800 to-blue-900">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Mereka Berhasil Lolos PTN Impian
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kisah sukses dari para alumni program UTBK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{story.score}</div>
                    <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-400">
                      {story.achieved}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-white">{story.name}</h3>
                    <p className="text-sm text-gray-400">{story.position}</p>
                  </div>
                  <blockquote className="text-gray-300 text-sm leading-relaxed italic">
                    "{story.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              4 Tahap Menuju Skor Tertinggi
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Metodologi belajar yang terstruktur dan efektif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.methodology.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-800 to-blue-900">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-blue-900 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{phase.phase}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                  <Badge variant="outline" className="text-xs border-cyan-400 text-cyan-400">
                    {phase.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Options */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Opsi Jadwal Belajar
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pilih jadwal yang paling cocok untuk Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.schedule.map((schedule, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-blue-900">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-white">{schedule.option}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{schedule.days}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{schedule.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{schedule.frequency}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900">
                    Pilih Jadwal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Investasi untuk Masa Depanmu
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan target dan kebutuhanmu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.pricing.map((pkg, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-all border-0 ${
                pkg.popular ? 'ring-2 ring-cyan-400 bg-gradient-to-br from-cyan-400/10 to-blue-500/10' : 'bg-blue-800'
              }`}>
                <CardContent className="space-y-4 p-0">
                  {pkg.popular && (
                    <Badge className="w-fit bg-cyan-400 text-blue-900">
                      Paling Populer
                    </Badge>
                  )}
                  <h3 className="text-xl font-bold text-white">{pkg.package}</h3>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">
                      Rp {pkg.totalPrice.toLocaleString('id-ID')}
                    </div>
                    <div className="text-sm text-gray-400">
                      Rp {pkg.pricePerSession.toLocaleString('id-ID')}/sesi
                    </div>
                    {pkg.discount > 0 && (
                      <Badge variant="secondary" className="text-green-400">
                        Hemat {pkg.discount}%
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-300">{pkg.sessions} sesi intensif</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-300">Materi TPS & Saintek/Soshum</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-300">Tryout & Analisis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-300">Akses ke portal belajar</span>
                    </div>
                  </div>
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-blue-900 font-semibold' 
                        : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900'
                    }`}
                    onClick={() => setSelectedPackage(index)}
                  >
                    Investasi Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Apa Kata Mereka?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Testimoni langsung dari siswa dan orang tua
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-blue-900">
                <CardContent className="space-y-4 p-0">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-cyan-400 fill-current' : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <Badge variant="secondary" className="text-xs bg-cyan-400/20 text-cyan-400">
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
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              FAQ Program UTBK
            </h2>
            <p className="text-xl text-gray-400">
              Pertanyaan yang sering diajukan tentang program kami
            </p>
          </div>

          <div className="space-y-4">
            {programDetails.faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-to-r from-blue-800 to-blue-900">
                <CardContent className="space-y-3 p-0">
                  <h3 className="font-semibold text-white text-lg">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Raih Skor UTBK Tertinggi?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Bergabunglah sekarang dan pastikan tempatmu di PTN impian. Jangan tunda kesuksesanmu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daftar">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                <GraduationCap className="mr-2 w-5 h-5" />
                Daftar Program UTBK
              </Button>
            </Link>
            <Link href="/kontak">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 font-semibold">
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}