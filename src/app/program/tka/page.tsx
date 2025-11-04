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
  BarChart3,
  Puzzle
} from 'lucide-react'

const programDetails = {
  name: "Program Persiapan Tes Kemampuan Akademik",
  category: "tka",
  tagline: "Tingkatkan Logika & Daya Analisis Anda",
  description: "Program pelatihan komprehensif untuk menguasai Tes Kemampuan Akademik (Verbal, Numerik, Logika). Ideal untuk persiapan berbagai tes seleksi masuk sekolah/kuliah, beasiswa, hingga rekrutmen kerja. Dilatih oleh ahli psikometri untuk meningkatkan kecepatan, akurasi, dan kemampuan berpikir kritis Anda.",
  price: 250000,
  duration: "90 menit/sesi",
  totalSessions: "12-24 sesi",
  studentsCount: "400+ peserta",
  successRate: "Rata-rata skor naik 35%",
  
  objectives: [
    "Menguasai berbagai tipe soal TKA (verbal, numerik, dan logika)",
    "Melatih kecepatan berpikir dan akurasi dalam menganalisis masalah",
    "Mengembangkan intuisi dan strategi pemecahan masalah yang efektif",
    "Meningkatkan kepercayaan diri menghadapi berbagai tes seleksi",
    "Mencapai skor TKA yang kompetitif untuk berbagai keperluan"
  ],

  features: [
    {
      icon: Brain,
      title: "Materi Verbal, Numerik & Logika",
      description: "Pembahasan lengkap tiga pilar utama TKA dengan contoh soal dan strategi jitu."
    },
    {
      icon: Target,
      title: "Strategi Pengerjaan Efektif",
      description: "Teknik manajemen waktu, trik menjawab cepat, dan cara mengatasi soal sulit."
    },
    {
      icon: BarChart3,
      title: "Tracking & Analisis Progress",
      description: "Sistem pemantauan progress untuk mengetahui kekuatan, kelemahan, dan perkembangan Anda."
    },
    {
      icon: Zap,
      title: "Drill Soal Cepat & Tepat",
      description: "Ribuan bank soal dengan tingkat kesulitan bervariasi untuk melatih reflek berpikir Anda."
    },
    {
      icon: Puzzle,
      title: "Peningkatan Daya Nalar",
      description: "Latihan khusus untuk meningkatkan kemampuan penalaran abstrak dan logika."
    },
    {
      icon: GraduationCap,
      title: "Ahli Psikometri & Pengajar Berpengalaman",
      description: "Dibimbing oleh praktisi psikometri dan tutor berpengalaman di bidang asesmen."
    }
  ],

  modules: [
    {
      name: "Tes Kemampuan Verbal",
      description: "Mengukur kemampuan menggunakan bahasa, memahami teks, dan menganalisis hubungan kata.",
      topics: [
        "Analogi (Hubungan Kata)",
        "Sinonim & Antonim",
        "Pemahaman Bacaan",
        "Analisis Logika Bahasa",
        "Kosakata Umum & Spesifik",
        "Penalaran Verbal"
      ],
      questionCount: "800+ Soal",
      timeLimit: "Integratif",
      weight: "Inti"
    },
    {
      name: "Tes Kemampuan Numerik",
      description: "Menguji kemampuan berhitung, logika matematika, dan analisis data kuantitatif.",
      topics: [
        "Aritmetika & Operasi Hitung",
        "Deret Angka & Huruf",
        "Logika Matematika",
        "Soal Cerita (Word Problems)",
        "Interpretasi Data & Grafik",
        "Penalaran Kuantitatif"
      ],
      questionCount: "1000+ Soal",
      timeLimit: "Integratif",
      weight: "Inti"
    },
    {
      name: "Tes Kemampuan Logika",
      description: "Mengukur kemampuan berpikir logis, analitis, dan spasial untuk menemukan pola.",
      topics: [
        "Logika Umum & Analisis Pernyataan",
        "Penalaran Gambar & Spasial",
        "Pola Hubungan Antar Gambar",
        "Logika Aritmetika",
        "Pencocokan Gambar",
        "Abstraksi & Generalisasi"
      ],
      questionCount: "700+ Soal",
      timeLimit: "Integratif",
      weight: "Inti"
    }
  ],

  specializations: [
    {
      category: "Seleksi Masuk Sekolah/Kuliah",
      topics: [
        "Persiapan Masuk Sekolah Unggulan",
        "Tes Masuk Perguruan Tinggi Swasta",
        "Program Akselerasi & Kelas Internasional",
        "Tes Potensi Akademik Masuk PTN"
      ]
    },
    {
      category: "Program Beasiswa",
      topics: [
        "Persiapan Beasiswa LPDP",
        "Tes Beasiswa Swasta & Yayasan",
        "Beasiswa Luar Negeri",
        "Afirmasi & Prestasi"
      ]
    },
    {
      category: "Rekrutmen Kerja",
      topics: [
        "Tes Rekrutmen BUMN",
        "Seleksi Perusahaan Swasta",
        "Tes Masuk CPNS/PPPK",
        "Program Management Trainee"
      ]
    },
    {
      category: "Pengembangan Diri",
      topics: [
        "Meningkatkan Daya Ingat",
        "Melatih Fokus & Konsentrasi",
        "Meningkatkan Kecepatan Berpikir",
        "Asah Kemampuan Problem Solving"
      ]
    }
  ],

  methodology: [
    {
      phase: "Diagnostic Test & Profiling",
      description: "Tes awal untuk memetakan kemampuan dasar dan profil kekuatan/kelemahan Anda.",
      duration: "1-2 sesi"
    },
    {
      phase: "Penguatan Konsep & Strategi",
      description: "Pembelajaran materi fundamental dan penerapan strategi untuk setiap tipe soal.",
      duration: "6-12 sesi"
    },
    {
      phase: "Drill Soal & Simulasi",
      description: "Latihan soal masif dan simulasi tes untuk meningkatkan kecepatan dan akurasi.",
      duration: "4-8 sesi"
    },
    {
      phase: "Evaluasi Akhir & Gladi Bersih",
      description: "Tryout komprehensif dan review akhir untuk memastikan Anda siap menghadapi tes.",
      duration: "1-2 sesi"
    }
  ],

  schedule: [
    {
      option: "Kelas Regular",
      days: "Senin - Jumat",
      time: "18:00 - 19:30 WIB",
      frequency: "2x seminggu"
    },
    {
      option: "Kelas Weekend",
      days: "Sabtu - Minggu",
      time: "09:00 - 16:00 WIB",
      frequency: "1x seminggu (intensif)"
    },
    {
      option: "Bootcamp Liburan",
      days: "Senin - Jumat",
      time: "09:00 - 15:00 WIB",
      frequency: "Program khusus 1 minggu"
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
      package: "Paket Fundamental (12 sesi)",
      sessions: 12,
      pricePerSession: 250000,
      totalPrice: 3000000,
      discount: 0,
      popular: false
    },
    {
      package: "Paket Komprehensif (18 sesi)",
      sessions: 18,
      pricePerSession: 250000,
      totalPrice: 4500000,
      discount: 5,
      popular: true
    },
    {
      package: "Paket Maksimal (24 sesi)",
      sessions: 24,
      pricePerSession: 250000,
      totalPrice: 6000000,
      discount: 10,
      popular: false
    }
  ],

  successMetrics: [
    {
      metric: "Skor TKA Rata-rata",
      before: "Rata-rata 55/100",
      after: "Rata-rata 90/100",
      improvement: "+35 poin"
    },
    {
      metric: "Kecepatan Pengerjaan",
      before: "15 soal/menit",
      after: "25 soal/menit",
      improvement: "+67%"
    },
    {
      metric: "Akurasi Jawaban",
      before: "60%",
      after: "90%",
      improvement: "+30%"
    },
    {
      metric: "Tingkat Kepercayaan Diri",
      before: "Rendah",
      after: "Tinggi",
      improvement: "Signifikan"
    }
  ],

  successStories: [
    {
      name: "Rina Saputri",
      position: "Fresh Graduate",
      achieved: "Lolos Tes Rekrutmen BUMN",
      score: "Skor TKA 92/100",
      testimonial: "Program ini sangat membantu saya yang awalnya grogi menghadapi tes kerja. Materinya relevan dan strateginya efektif."
    },
    {
      name: "Budi Santoso",
      position: "Siswa SMA",
      achieved: "Lolos Beasiswa LPDP",
      score: "Skor TKA 95/100",
      testimonial: "Saya berhasil lolos seleksi beasiswa berkat latihan dari sini. Soal-soal latihannya mirip dengan tes aslinya."
    },
    {
      name: "Andi Pratama",
      position: "Profesional Muda",
      achieved: "Diterima di Program Magang",
      score: "Top 5% Tes",
      testimonial: "Saya menggunakan program ini untuk persiapan tes masuk kerja. Hasilnya, daya analisis saya meningkat drastis."
    }
  ],

  testimonials: [
    {
      name: "Siti Wijaya, Ibu dari Budi",
      role: "Orang Tua Siswa",
      content: "Anak saya menjadi lebih percaya diri dan terstruktur dalam mengerjakan soal. Program ini adalah investasi yang sangat berharga.",
      rating: 5,
      improvement: "Anak Lolos Beasiswa"
    },
    {
      name: "Ahmad Fauzi",
      role: "Peserta Program BUMN",
      content: "Metode pengajarannya sistematis dan mudah dipahami. Saya jadi tahu cara mengatur waktu dan menjawab soal dengan cerdas.",
      rating: 5,
      improvement: "Lolos ke Tahap Interview"
    },
    {
      name: "Dr. Larasati, Psikolog",
      role: "Praktisi HR",
      content: "Program ini dirancang dengan sangat baik untuk mengasal keterampilan kognitif yang dicari oleh perusahaan dan institusi pendidikan.",
      rating: 5,
      improvement: "Mencetak Kandidat Terbaik"
    }
  ],

  faqs: [
    {
      question: "Apa itu Tes Kemampuan Akademik (TKA)?",
      answer: "TKA adalah tes yang dirancang untuk mengukur potensi seseorang dalam bidang akademis, yang mencakup kemampuan verbal, numerik, dan logika. Tes ini sering digunakan untuk seleksi pendidikan dan kerja."
    },
    {
      question: "Apakah program ini hanya untuk siswa?",
      answer: "Tidak, program ini terbuka untuk siapa saja yang ingin meningkatkan kemampuan akademisnya, mulai dari siswa SMP/SMA, mahasiswa, fresh graduate, hingga profesional yang ingin melamar kerja."
    },
    {
      question: "Bagaimana cara meningkatkan kecepatan berpikir?",
      answer: "Kami mengajarkan berbagai teknik, seperti latihan terstruktur, drill soal dengan timer, dan strategi untuk mengenali pola soal dengan cepat. Konsistensi latihan adalah kuncinya."
    },
    {
      question: "Apakah materi ini relevan untuk tes kerja?",
      answer: "Sangat relevan. Banyak perusahaan, terutama BUMN dan perusahaan besar, menggunakan TKA sebagai tahap awal seleksi. Kemampuan yang diajarkan juga merupakan soft skill yang berharga di dunia kerja."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk melihat peningkatan?",
      answer: "Peningkatan bisa terlihat setelah 4-6 sesi, namun untuk hasil yang maksimal dan konsisten, kami merekomendasikan mengikuti satu paket program lengkap (12-24 sesi)."
    }
  ]
}

export default function ProgramTKAPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                EduQuantum
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Beranda</Link>
              <Link href="/program" className="text-emerald-400 font-semibold">Program</Link>
              <Link href="/pengajar" className="text-gray-300 hover:text-emerald-400 transition-colors">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-300 hover:text-emerald-400 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="text-gray-300 hover:text-emerald-400 transition-colors">Kontak</Link>
              <Link href="/karir" className="text-gray-300 hover:text-emerald-400 transition-colors">Karir</Link>
              <Link href="/daftar">
                <Button className="bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-emerald-500 hover:to-blue-600 text-slate-900 font-semibold">
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
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Beranda</Link>
              <Link href="/program" className="block px-3 py-2 text-emerald-400 font-semibold">Program</Link>
              <Link href="/pengajar" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Pengajar</Link>
              <Link href="/testimoni" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Testimoni</Link>
              <Link href="/kontak" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Kontak</Link>
              <Link href="/karir" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Karir</Link>
              <div className="px-3 py-2">
                <Link href="/daftar">
                  <Button className="w-full bg-gradient-to-r from-emerald-400 to-blue-500 text-slate-900 font-semibold">
                    Daftar Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-500 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-white/20 text-white border-0">
                🧠 Program Persiapan Tes Kemampuan Akademik
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                {programDetails.name}
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed font-semibold">
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
                  <Target className="w-5 h-5" />
                  <span>Untuk Berbagai Tes</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/daftar">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                    Daftar Program TKA
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
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Unlock Your Potential</h3>
                    <p className="text-blue-100">Asah kemampuan kognitif Anda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">400+</div>
              <div className="text-sm text-gray-400">Peserta Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">35%</div>
              <div className="text-sm text-gray-400">Rata-rata Kenaikan Skor</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">2500+</div>
              <div className="text-sm text-gray-400">Bank Soal</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">4.9/5</div>
              <div className="text-sm text-gray-400">Rating Peserta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bukti Peningkatan Kognitif Anda
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hasil nyata dari program pelatihan TKA kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.successMetrics.map((metric, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-slate-800">
                <CardContent className="space-y-4 p-0 text-center">
                  <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sebelum:</span>
                      <span className="font-medium text-gray-400">{metric.before}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sesudah:</span>
                      <span className="font-medium text-emerald-400">{metric.after}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-400/20 text-emerald-400">
                    {metric.improvement}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Target Pembelajaran TKA
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fokus kami adalah meningkatkan kemampuan berpikir Anda secara menyeluruh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programDetails.objectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-slate-900">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{objective}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Materi Inti Tes Kemampuan Akademik
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kuasai tiga pilar utama dalam setiap TKA
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programDetails.modules.map((module) => (
              <Card key={module.name} className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-slate-800">
                <CardHeader className="bg-gradient-to-r from-emerald-400/10 to-blue-500/10">
                  <CardTitle className="text-xl font-bold text-white">
                    {module.name}
                  </CardTitle>
                  <p className="text-sm text-gray-400">{module.description}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-emerald-400">{module.questionCount}</div>
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
                    className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
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
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Program Disesuaikan dengan Tujuan Anda
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pilih fokus belajar yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programDetails.specializations.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-slate-900">
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
      <section className="py-20 bg-slate-900">
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
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-slate-800 to-slate-900">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-400" />
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
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Mereka Telah Membuktikannya
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kisah sukses dari para peserta program TKA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-r from-emerald-400/10 to-blue-500/10">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">{story.score}</div>
                    <Badge variant="secondary" className="bg-emerald-400/20 text-emerald-400">
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
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              4 Tahap Meningkatkan Kemampuan Akademik
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Metodologi belajar yang terstruktur dan efektif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.methodology.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-slate-800 to-slate-900">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{phase.phase}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                  <Badge variant="outline" className="text-xs border-emerald-400 text-emerald-400">
                    {phase.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Options */}
      <section className="py-20 bg-slate-800">
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
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-slate-900">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-white">{schedule.option}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300">{schedule.days}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300">{schedule.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300">{schedule.frequency}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900">
                    Pilih Jadwal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Investasi untuk Kecerdasan Anda
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan target dan kebutuhanmu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.pricing.map((pkg, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-all border-0 ${
                pkg.popular ? 'ring-2 ring-emerald-400 bg-gradient-to-br from-emerald-400/10 to-blue-500/10' : 'bg-slate-800'
              }`}>
                <CardContent className="space-y-4 p-0">
                  {pkg.popular && (
                    <Badge className="w-fit bg-emerald-400 text-slate-900">
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
                      <span className="text-sm text-gray-300">Materi Verbal, Numerik, Logika</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-300">Drill Soal & Analisis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-300">Akses ke portal belajar</span>
                    </div>
                  </div>
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-emerald-500 hover:to-blue-600 text-slate-900 font-semibold' 
                        : 'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900'
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
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Apa Kata Mereka?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Testimoni langsung dari peserta dan mitra kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-slate-900">
                <CardContent className="space-y-4 p-0">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-emerald-400 fill-current' : 'text-gray-600'
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
                    <Badge variant="secondary" className="text-xs bg-emerald-400/20 text-emerald-400">
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
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              FAQ Program TKA
            </h2>
            <p className="text-xl text-gray-400">
              Pertanyaan yang sering diajukan tentang program kami
            </p>
          </div>

          <div className="space-y-4">
            {programDetails.faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-to-r from-slate-800 to-slate-900">
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
      <section className="py-20 bg-gradient-to-r from-emerald-500 via-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Meningkatkan Kemampuan Akademik Anda?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Bergabunglah sekarang dan buktikan peningkatan daya analisis dan logika Anda. Jangan biarkan potensi Anda terbatas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daftar">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                <Brain className="mr-2 w-5 h-5" />
                Daftar Program TKA
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