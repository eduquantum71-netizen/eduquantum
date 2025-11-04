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
  Trophy,
  Brain,
  Zap,
  Medal
} from 'lucide-react'

const programDetails = {
  name: "Program Persiapan Olimpiade",
  category: "olimpiade",
  tagline: "Mencetak Juara Sains dan Matematika Tingkat Dunia",
  description: "Program intensif khusus untuk siswa berbakat yang ingin menguasai materi olimpiade. Dibimbing langsung oleh pelatih nasional dan alumni olimpiade berprestasi, kami siapkan Anda meraih medali di Kompetisi Sains Nasional (KSN) dan Olimpiade Internasional.",
  price: 350000,
  duration: "120 menit/sesi",
  totalSessions: "24-48 sesi",
  studentsCount: "50+ siswa terpilih",
  successRate: "90% lolos ke tingkat Provinsi/Nasional",
  
  objectives: [
    "Menguasai materi olimpiade yang kompleks dan mendalam",
    "Mengembangkan intuisi dan kreativitas dalam pemecahan masalah non-standar",
    "Meningkatkan kecepatan, akurasi, dan daya tahan mental saat kompetisi",
    "Mengenal dan menguasai berbagai strategi dan heuristik penyelesaian soal",
    "Meraih medali emas, perak, dan perunggu di ajang KSN dan Internasional"
  ],

  features: [
    {
      icon: Brain,
      title: "Materi Tingkat Lanjut",
      description: "Pembahasan mendalam materi di luar kurikulum sekolah yang sering muncul di olimpiade."
    },
    {
      icon: Target,
      title: "Drill Soal Strategis",
      description: "Latihan soal pilihan dari berbagai kompetisi, dari tingkat nasional hingga internasional."
    },
    {
      icon: Trophy,
      title: "Pelatih Berpengalaman",
      description: "Dibimbing oleh pelatih tim nasional, pemenang medali, dan dosen universitas ternama."
    },
    {
      icon: Zap,
      title: "Simulasi Kompetisi",
      description: "Tryout dengan kondisi mirip kompetisi sesungguhnya untuk melatih mental dan manajemen waktu."
    },
    {
      icon: TrendingUp,
      title: "Analisis Performa",
      description: "Evaluasi detail untuk setiap soal untuk identifikasi kelemahan dan perbaikan strategi."
    },
    {
      icon: Award,
      title: "Bootcamp Intensif",
      description: "Program camp menjelang kompetisi untuk pemantapan akhir dan persiapan mental."
    }
  ],

  modules: [
    {
      name: "Olimpiade Matematika",
      description: "Mempelajari teori bilangan, aljabar, kombinatorika, dan geometri tingkat lanjut.",
      topics: [
        "Number Theory & Modular Arithmetic",
        "Algebra (Inequalities, Polynomials)",
        "Combinatorics & Probability",
        "Geometry (Euclidean & Analytical)",
        "Functional Equations",
        "Problem Solving Heuristics"
      ],
      questionCount: "1000+ Soal",
      timeLimit: "Intensif",
      weight: "Pilihan Bidang"
    },
    {
      name: "Olimpiade Fisika",
      description: "Mendalami mekanika, termodinamika, elektromagnetik, dan fisika modern.",
      topics: [
        "Classical Mechanics",
        "Thermodynamics & Statistical Physics",
        "Electromagnetism & Circuits",
        "Optics & Waves",
        "Modern Physics",
        "Experimental Problems"
      ],
      questionCount: "800+ Soal",
      timeLimit: "Intensif",
      weight: "Pilihan Bidang"
    },
    {
      name: "Olimpiade Informatika/Komputer",
      description: "Fokus pada algoritma, struktur data, dan pemrograman kompetitif.",
      topics: [
        "Data Structures (Arrays, Trees, Graphs)",
        "Algorithms (Sorting, Searching, DP)",
        "Graph Theory (BFS, DFS, Shortest Path)",
        "Number Theory in Programming",
        "Computational Geometry",
        "Complexity Analysis"
      ],
      questionCount: "500+ Soal",
      timeLimit: "Intensif",
      weight: "Pilihan Bidang"
    },
    {
      name: "Olimpiade Kimia",
      description: "Mempelajari stoikiometri, termodinamika kimia, kimia organik, dan anorganik.",
      topics: [
        "Stoichiometry & Chemical Equilibrium",
        "Thermochemistry & Electrochemistry",
        "Organic Chemistry (Mechanisms)",
        "Inorganic Chemistry (Qualitative Analysis)",
        "Chemical Kinetics",
        "Laboratory Problems"
      ],
      questionCount: "700+ Soal",
      timeLimit: "Intensif",
      weight: "Pilihan Bidang"
    }
  ],

  specializations: [
    {
      category: "Tingkat Kabupaten/Kota",
      topics: [
        "Pemantapan Materi Dasar",
        "Strategi Pengerjaan Cepat",
        "Analisis Soal Tahun Lalu",
        "Tryout Level 1"
      ]
    },
    {
      category: "Tingkat Provinsi",
      topics: [
        "Materi Non-Standar",
        "Pengembangan Intuisi",
        "Drill Soal Tingkat Menengah",
        "Tryout Level 2"
      ]
    },
    {
      category: "Tingkat Nasional (KSN)",
      topics: [
        "Materi Tingkat Lanjut",
        "Strategi Kompetisi",
        "Mental Coaching",
        "Tryout Level 3"
      ]
    },
    {
      category: "Tingkat Internasional",
      topics: [
        "International Past Papers",
        "Advanced Problem Solving",
        "Cross-Disciplinary Topics",
        "Full Simulation"
      ]
    }
  ],

  methodology: [
    {
      phase: "Conceptual Mastery",
      description: "Membangun fondasi teori yang sangat kuat untuk setiap bidang olimpiade.",
      duration: "8-12 sesi"
    },
    {
      phase: "Strategic Problem Solving",
      description: "Mempelajari berbagai pola, trik, dan strategi untuk menyelesaikan soal sulit.",
      duration: "10-20 sesi"
    },
    {
      phase: "Intensive Drill & Simulation",
      description: "Latihan soal masif dan simulasi kompetisi untuk meningkatkan kecepatan dan akurasi.",
      duration: "4-12 sesi"
    },
    {
      phase: "Final Bootcamp",
      description: "Pemantapan akhir, persiapan mental, dan evaluasi menjelang hari-H kompetisi.",
      duration: "2-4 sesi"
    }
  ],

  schedule: [
    {
      option: "Regular Intensive",
      days: "Senin - Jumat",
      time: "16:00 - 18:00 WIB",
      frequency: "3x seminggu"
    },
    {
      option: "Weekend Bootcamp",
      days: "Sabtu - Minggu",
      time: "09:00 - 16:00 WIB",
      frequency: "2x seminggu (intensif)"
    },
    {
      option: "Holiday Camp",
      days: "Libur Sekolah",
      time: "09:00 - 21:00 WIB",
      frequency: "Program khusus 1-2 minggu"
    },
    {
      option: "Private Coaching",
      days: "Fleksibel",
      time: "Disesuaikan",
      frequency: "1-on-1 session"
    }
  ],

  pricing: [
    {
      package: "Paket Provinsi (24 sesi)",
      sessions: 24,
      pricePerSession: 350000,
      totalPrice: 8400000,
      discount: 0,
      popular: false
    },
    {
      package: "Paket Nasional (36 sesi)",
      sessions: 36,
      pricePerSession: 350000,
      totalPrice: 12600000,
      discount: 5,
      popular: true
    },
    {
      package: "Paket Internasional (48 sesi)",
      sessions: 48,
      pricePerSession: 350000,
      totalPrice: 16800000,
      discount: 10,
      popular: false
    }
  ],

  successMetrics: [
    {
      metric: "Medali Emas KSN",
      before: "0",
      after: "15+ Medali/Tahun",
      improvement: "Juara Nasional"
    },
    {
      metric: "Lolos Training Camp",
      before: "5 Siswa",
      after: "20+ Siswa",
      improvement: "+300%"
    },
    {
      metric: "Skor Tryout Rata-rata",
      before: "40/100",
      after: "85/100",
      improvement: "+45 poin"
    },
    {
      metric: "Jumlah Siswa Terpilih",
      before: "10 Siswa",
      after: "50+ Siswa",
      improvement: "Program Elite"
    }
  ],

  successStories: [
    {
      name: "Kevin Wijaya",
      position: "Siswa SMA",
      achieved: "Medali Emas KSN Matematika 2023",
      score: "Lolos Training Camp",
      testimonial: "Program ini sangat ketat dan efektif. Saya dibekali materi dan strategi yang tidak saya dapatkan di sekolah sama sekali."
    },
    {
      name: "Siti Nurhaliza",
      position: "Siswa SMP",
      achieved: "Medali Perak KSN Fisika 2023",
      score: "Top 10 Nasional",
      testimonial: "Pelatihnya adalah para ahli di bidangnya. Mereka tidak hanya mengajar materi, tapi juga cara berpikir seperti seorang juara."
    },
    {
      name: "Budi Santoso",
      position: "Siswa SMA",
      achieved: "Delegasi Indonesia untuk ISO",
      score: "International Science Olympiad",
      testimonial: "Bootcamp intensif menjelang kompetisi adalah kunci kesuksesan saya. Persiapan mental dan fisiknya sangat terukur."
    }
  ],

  testimonials: [
    {
      name: "Andi Pratama, Ayah dari Kevin",
      role: "Orang Tua Siswa",
      content: "Kami melihat transformasi besar pada anak kami. Ia menjadi lebih percaya diri, disiplin, dan memiliki kemampuan analisis yang luar biasa.",
      rating: 5,
      improvement: "Anak Menjadi Juara"
    },
    {
      name: "Maya Putri",
      role: "Siswa Pemenang Medali",
      content: "Soal-soal yang diberikan sangat menantang dan relevan dengan kompetisi sesungguhnya. Saya merasa sangat siap menghadapi KSN.",
      rating: 5,
      improvement: "Medali Emas KSN"
    },
    {
      name: "Dr. Hendra, Pelatih Nasional",
      role: "Kolaborator Program",
      content: "Program ini memiliki kurikulum yang solid dan metode pelatihan yang terstruktur dengan baik. Saya bangga bisa menjadi bagian darinya.",
      rating: 5,
      improvement: "Mencetak Atlet Terbaik"
    }
  ],

  faqs: [
    {
      question: "Apa saja kriteria untuk bisa bergabung dengan Program Olimpiade?",
      answer: "Siswa harus memiliki minat dan bakat yang besar di bidang sains/matematika, serta lolos seleksi awal (tes potensi akademik dan wawancara) untuk memastikan kesiapan mengikuti program intensif."
    },
    {
      question: "Apakah program ini terlalu berat untuk siswa yang masih sekolah reguler?",
      answer: "Program ini memang intensif dan membutuhkan komitmen tinggi. Namun, kami mengajarkan manajemen waktu efektif agar siswa tetap bisa menyeimbangkan antara sekolah dan persiapan olimpiade."
    },
    {
      question: "Apakah ada jaminan siswa akan memenangkan medali?",
      answer: "Kami tidak menjamin medali, karena prestasi juga bergantung pada performa siswa saat kompetisi. Namun, kami berjanji akan memberikan bekal, strategi, dan persiapan terbaik untuk memaksimalkan potensi mereka."
    },
    {
      question: "Bagaimana cara memilih bidang olimpiade yang tepat?",
      answer: "Pada awal program, kami akan melakukan asesmen mendalam untuk mengidentifikasi minat dan kekuatan siswa. Tim pelatih akan memberikan rekomendasi bidang yang paling sesuai."
    },
    {
      question: "Apakah materi yang diajarkan akan membantu untuk ujian sekolah atau UTBK?",
      answer: "Tentu. Materi olimpiade adalah pengembangan mendalam dari materi sekolah. Penguasaan materi olimpiade akan secara otomatis membuat siswa sangat siap menghadapi ujian sekolah dan UTBK di bidang sains/matematika."
    }
  ]
}

export default function ProgramOlimpiadePage() {
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
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                EduQuantum
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Beranda</Link>
              <Link href="/program" className="text-yellow-400 font-semibold">Program</Link>
              <Link href="/pengajar" className="text-gray-300 hover:text-yellow-400 transition-colors">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-300 hover:text-yellow-400 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="text-gray-300 hover:text-yellow-400 transition-colors">Kontak</Link>
              <Link href="/karir" className="text-gray-300 hover:text-yellow-400 transition-colors">Karir</Link>
              <Link href="/daftar">
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-semibold">
                  Daftar Seleksi
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
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-yellow-400">Beranda</Link>
              <Link href="/program" className="block px-3 py-2 text-yellow-400 font-semibold">Program</Link>
              <Link href="/pengajar" className="block px-3 py-2 text-gray-300 hover:text-yellow-400">Pengajar</Link>
              <Link href="/testimoni" className="block px-3 py-2 text-gray-300 hover:text-yellow-400">Testimoni</Link>
              <Link href="/kontak" className="block px-3 py-2 text-gray-300 hover:text-yellow-400">Kontak</Link>
              <Link href="/karir" className="block px-3 py-2 text-gray-300 hover:text-yellow-400">Karir</Link>
              <div className="px-3 py-2">
                <Link href="/daftar">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-semibold">
                    Daftar Seleksi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-white/20 text-white border-0">
                🏆 Program Persiapan Olimpiade
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
                {programDetails.name}
              </h1>
              <p className="text-xl text-slate-800 leading-relaxed font-semibold">
                {programDetails.tagline}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {programDetails.description}
              </p>
              
              <div className="flex flex-wrap gap-4 text-slate-800">
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
                  <Medal className="w-5 h-5" />
                  <span>Program Elite</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/daftar">
                  <Button size="lg" className="bg-slate-900 text-yellow-400 hover:bg-slate-800 text-lg px-8 py-6 font-semibold">
                    Ikuti Seleksi
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  Download Syllabus
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video bg-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Champion's Mindset</h3>
                    <p className="text-slate-200">Bersiaplah menjadi yang terbaik</p>
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
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-sm text-gray-400">Siswa Terpilih</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">90%</div>
              <div className="text-sm text-gray-400">Lolos ke Provinsi/Nasional</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">15+</div>
              <div className="text-sm text-gray-400">Medali Emas/Tahun</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">5.0/5</div>
              <div className="text-sm text-gray-400">Rating Pelatih</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Prestasi Membuktikan Kualitas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hasil nyata dari program pelatihan olimpiade kami
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
                      <span className="font-medium text-yellow-400">{metric.after}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
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
              Target Pembelajaran Olimpiade
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fokus kami adalah membentuk atlet sains dan matematika yang unggul
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programDetails.objectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-slate-900">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-yellow-400" />
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
              Bidang Olimpiade
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pilih bidang spesialisasi Anda dan raih prestasi tertinggi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programDetails.modules.map((module) => (
              <Card key={module.name} className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-slate-800">
                <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10">
                  <CardTitle className="text-xl font-bold text-white">
                    {module.name}
                  </CardTitle>
                  <p className="text-sm text-gray-400">{module.description}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-yellow-400">{module.questionCount}</div>
                      <div className="text-gray-500">Bank Soal</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-orange-500">{module.topics.length}</div>
                      <div className="text-gray-500">Topik</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-red-500">{module.weight}</div>
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
                    className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
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
              Jenjang Persiapan Kompetisi
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Program yang disesuaikan dengan setiap tingkat kompetisi
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
              Metode Pelatihan Kami
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pendekatan terstruktur dan terbukti untuk mencetak juara
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programDetails.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-slate-800 to-slate-900">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-yellow-400" />
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
              Dinding Juara Kami
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kisah inspiratif dari para pemenang medali
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{story.score}</div>
                    <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
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
              Tahapan Pelatihan Sistematis
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              4 fase untuk membangun seorang juara olimpiade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.methodology.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-slate-800 to-slate-900">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{phase.phase}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                  <Badge variant="outline" className="text-xs border-yellow-400 text-yellow-400">
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
              Opsi Jadwal Latihan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fleksibilitas untuk menyesuaikan dengan intensitas Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.schedule.map((schedule, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-slate-900">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-white">{schedule.option}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">{schedule.days}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">{schedule.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">{schedule.frequency}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900">
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
              Investasi Menjadi Juara
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan target kompetisi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.pricing.map((pkg, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-all border-0 ${
                pkg.popular ? 'ring-2 ring-yellow-400 bg-gradient-to-br from-yellow-400/10 to-orange-500/10' : 'bg-slate-800'
              }`}>
                <CardContent className="space-y-4 p-0">
                  {pkg.popular && (
                    <Badge className="w-fit bg-yellow-400 text-slate-900">
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
                      <span className="text-sm text-gray-300">Materi olimpiade lengkap</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-300">Simulasi kompetisi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-300">Akses ke bank soal</span>
                    </div>
                  </div>
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-semibold' 
                        : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900'
                    }`}
                    onClick={() => setSelectedPackage(index)}
                  >
                    Investasi Juara
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
              Mereka Telah Membuktikannya
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dengarkan langsung dari para juara dan kolaborator kami
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
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
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
                    <Badge variant="secondary" className="text-xs bg-yellow-400/20 text-yellow-400">
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
              FAQ Program Olimpiade
            </h2>
            <p className="text-xl text-gray-400">
              Pertanyaan umum tentang program pelatihan kami
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
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Siap Menjadi Juara Berikutnya?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Bergabunglah dengan program elite kami dan raih prestasi tertinggi di bidang sains dan matematika.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daftar">
              <Button size="lg" className="bg-slate-900 text-yellow-400 hover:bg-slate-800 text-lg px-8 py-6 font-semibold">
                <Trophy className="mr-2 w-5 h-5" />
                Daftar Seleksi Sekarang
              </Button>
            </Link>
            <Link href="/kontak">
              <Button size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-yellow-400 text-lg px-8 py-6 font-semibold">
                Konsultasi dengan Pelatih
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}