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
  Globe,
  Languages,
  Brain,
  Lightbulb
} from 'lucide-react'

const programDetails = {
  name: "Program Nasional Plus",
  category: "nasional-plus",
  tagline: "Membentuk Pemimpin Global dengan Akar Lokal",
  description: "Program pendidikan unggulan yang mengintegrasikan Kurikulum Merdeka dengan standar internasional (Cambridge). Kami menyiapkan siswa menjadi individu yang cerdas, berkarakter, dan siap bersaing di kancah global melalui lingkungan belajar bilingual dan fokus pada pengembangan holistik.",
  price: 3000000, // Harga per bulan
  duration: "6 jam/hari, 5 hari/minggu",
  totalSessions: "1 Tahun Ajaran",
  studentsCount: "500+ siswa aktif",
  successRate: "95% lulus ke PTN/Universitas Luar Negeri",
  
  objectives: [
    "Menguasai Kurikulum Nasional dan Internasional secara seimbang",
    "Mengembangkan kemampuan berbahasa Inggris secara aktif dan percaya diri",
    "Menumbuhkan karakter, jiwa kepemimpinan, dan kepedulian sosial",
    "Mempersiapkan siswa untuk jenjang pendidikan tinggi terbaik di dunia",
    "Membangun pemahaman global dengan tetap menjunjung tinggi nilai-nilai lokal"
  ],

  features: [
    {
      icon: BookOpen,
      title: "Dual Curriculum",
      description: "Integrasi Kurikulum Merdeka dengan Cambridge International untuk persiapan ujian nasional dan internasional (IGCSE/A-Level)."
    },
    {
      icon: Languages,
      title: "Lingkungan Bilingual",
      description: "Pembelajaran dalam bahasa Inggris dan Indonesia untuk mengasah kemampuan bilingual siswa sejak dini."
    },
    {
      icon: Brain,
      title: "Pembelajaran Berbasis Proyek",
      description: "Metode pembelajaran yang mendorong kreativitas, kolaborasi, dan pemecahan masalah dunia nyata."
    },
    {
      icon: Globe,
      title: "Persiapan Studi Luar Negeri",
      description: "Bimbingan khusus dan persiapan untuk melanjutkan studi ke universitas terbaik di luar negeri."
    },
    {
      icon: TrendingUp,
      title: "Penilaian Holistik",
      description: "Sistem penilaian yang komprehensif, mencakup akademis, karakter, dan pengembangan diri siswa."
    },
    {
      icon: GraduationCap,
      title: "Guru Berkualitas Internasional",
      description: "Tim pengajar profesional bersertifikat nasional dan internasional dengan pengalaman luas."
    }
  ],

  modules: [
    {
      name: "Kurikulum Nasional (Merdeka)",
      description: "Pembelajaran mendalam sesuai standar kurikulum nasional Indonesia.",
      topics: [
        "Bahasa Indonesia & Sastra",
        "Matematika",
        "Ilmu Pengetahuan Alam (IPA)",
        "Ilmu Pengetahuan Sosial (IPS)",
        "Pendidikan Pancasila & Kewarganegaraan",
        "Seni Budaya & Prakarya"
      ],
      duration: "Integratif",
      weight: "50%"
    },
    {
      name: "Kurikulum Internasional (Cambridge)",
      description: "Pembelajaran dengan standar internasional untuk persiapan IGCSE dan A-Level.",
      topics: [
        "English as First Language",
        "Mathematics",
        "Co-ordinated Sciences (Biology, Chemistry, Physics)",
        "Global Perspectives",
        "Information & Communication Technology (ICT)",
        "Business Studies / Economics"
      ],
      duration: "Integratif",
      weight: "40%"
    },
    {
      name: "Pengembangan Diri & Karakter",
      description: "Program ekstrakurikuler dan pengembangan soft skill untuk kepemimpinan.",
      topics: [
        "Leadership & Public Speaking",
        "Coding & Robotics",
        "Arts & Design",
        "Sports & Wellbeing",
        "Community Service",
        "University Counseling"
      ],
      duration: "Integratif",
      weight: "10%"
    }
  ],

  specializations: [
    {
      category: "STEM & Technology",
      topics: [
        "Robotics Club",
        "Coding & Web Development",
        "Science Olympiad",
        "Mathematics Competition"
      ]
    },
    {
      category: "Business & Leadership",
      topics: [
        "Young Entrepreneurs Club",
        "Model United Nations (MUN)",
        "Debate Club",
        "Student Council"
      ]
    },
    {
      category: "Arts & Humanities",
      topics: [
        "Band & Music Ensemble",
        "Theatre & Drama",
        "Visual Arts & Design",
        "Journalism Club"
      ]
    },
    {
      category: "Language & Culture",
      topics: [
        "Mandarin Language Class",
        "Cultural Exchange Program",
        "Book Club",
        "Toastmasters"
      ]
    }
  ],

  methodology: [
    {
      phase: "Foundation Building (Kelas 1-3 SD)",
      description: "Fokus pada literasi dasar, numerasi, dan pengenalan konsep global melalui bermain dan eksplorasi.",
      duration: "3 Tahun"
    },
    {
      phase: "Concept Exploration (Kelas 4-6 SD)",
      description: "Pendalaman materi akademik dan pengembangan proyek sederhana untuk membangun rasa ingin tahu.",
      duration: "3 Tahun"
    },
    {
      phase: "Skill Application (SMP)",
      description: "Penerapan konsep dalam konteks yang lebih kompleks dan persiapan awal untuk ujian internasional.",
      duration: "3 Tahun"
    },
    {
      phase: "Specialization & Preparation (SMA)",
      description: "Spesialisasi bidang minat, persiapan intensif untuk UTBK, IGCSE, A-Level, dan pendaftaran universitas.",
      duration: "3 Tahun"
    }
  ],

  schedule: [
    {
      option: "Regular School Day",
      days: "Senin - Jumat",
      time: "07:30 - 14:30 WIB",
      frequency: "5 hari/minggu"
    },
    {
      option: "Extracurricular Activities",
      days: "Senin - Kamis",
      time: "14:30 - 16:00 WIB",
      frequency: "4 hari/minggu"
    },
    {
      option: "Weekend Enrichment",
      days: "Sabtu",
      time: "09:00 - 12:00 WIB",
      frequency: "Opsional"
    },
    {
      option: "Holiday Programs",
      days: "Libur Sekolah",
      time: "Disesuaikan",
      frequency: "Program khusus"
    }
  ],

  pricing: [
    {
      package: "Tingkat SD",
      sessions: "1 Tahun",
      pricePerMonth: 3000000,
      totalPrice: 36000000,
      discount: 0,
      popular: false
    },
    {
      package: "Tingkat SMP",
      sessions: "1 Tahun",
      pricePerMonth: 3500000,
      totalPrice: 42000000,
      discount: 0,
      popular: true
    },
    {
      package: "Tingkat SMA",
      sessions: "1 Tahun",
      pricePerMonth: 4000000,
      totalPrice: 48000000,
      discount: 0,
      popular: false
    }
  ],

  successMetrics: [
    {
      metric: "Kelulusan Universitas",
      before: "Target Nasional",
      after: "95% ke PTN/ LN",
      improvement: "Top Tier"
    },
    {
      metric: "Profisiensi Bahasa Inggris",
      before: "Dasar",
      after: "C1 (IELTS 7.0+)",
      improvement: "Bilingual"
    },
    {
      metric: "Sertifikat Internasional",
      before: "0",
      after: "2+ Sertifikat/Siswa",
      improvement: "Globally Recognized"
    },
    {
      metric: "Kepuasan Orang Tua",
      before: "Standar",
      after: "98%",
      improvement: "Excellent"
    }
  ],

  successStories: [
    {
      name: "Alya Putri Rahman",
      position: "Alumni SMA 2023",
      achieved: "Lulus University of Melbourne",
      score: "IELTS 8.0",
      testimonial: "Program Nasional Plus membantuku meraih mimpi kuliah di luar negeri. Persiapan bahasa dan akademiknya sangat solid."
    },
    {
      name: "Rizki Ahmad Habibie",
      position: "Alumni SMA 2023",
      achieved: "Lulus UI & ITB",
      score: "UTBK 650+",
      testimonial: "Saya berhasil lolos ke PTN favorit berkat pembelajaran yang komprehensif, baik kurikulum nasional maupun internasional."
    },
    {
      name: "Keisha Aurelia",
      position: "Alumni SMP 2023",
      achieved: "Juara 1 OSN Matematika",
      score: "Medali Emas",
      testimonial: "Lingkungan belajarnya menantang dan mendukung. Saya didorong untuk berprestasi di bidang yang saya minati."
    }
  ],

  testimonials: [
    {
      name: "Budi Santoso, Ayahanda dari Rafi",
      role: "Orang Tua Siswa",
      content: "Kami melihat perkembangan signifikan pada anak kami, tidak hanya secara akademis tetapi juga karakter dan kepercayaan dirinya. Investasi terbaik untuk masa depannya.",
      rating: 5,
      improvement: "Anak Semakin Mandiri"
    },
    {
      name: "Sarah Wijaya, Ibu dari Alya",
      role: "Orang Tua Siswa",
      content: "Program ini benar-benar membuka wawasan global anak saya. Dia fasih berbahasa Inggris dan siap melanjutkan studi ke mana pun.",
      rating: 5,
      improvement: "Lulus ke Universitas Impian"
    },
    {
      name: "Dr. Hendra Pratama",
      role: "Pendidik & Orang Tua",
      content: "Sebagai pendidik, saya sangat mengapresiasi kurikulum yang seimbang ini. Anak saya tidak hanya pintar, tapi juga memiliki jiwa kepemimpinan yang kuat.",
      rating: 5,
      improvement: "Prestasi & Karakter Unggul"
    }
  ],

  faqs: [
    {
      question: "Apa perbedaan utama Program Nasional Plus dengan sekolah reguler?",
      answer: "Program Nasional Plus menggabungkan kurikulum nasional dengan internasional (seperti Cambridge), menggunakan bahasa Inggris sebagai bahasa pengantar sebagian mata pelajaran, dan fokus pada persiapan studi lanjut ke luar negeri."
    },
    {
      question: "Apakah siswa tetap mengikuti Ujian Nasional?",
      answer: "Ya, siswa kami sepenuhnya siap dan wajib mengikuti Ujian Nasional sesuai ketentuan pemerintah, selain juga mempersiapkan diri untuk ujian internasional seperti IGCSE."
    },
    {
      question: "Bagaimana jika anak saya belum fasih berbahasa Inggris?",
      answer: "Kami memiliki program pendukung (support program) untuk membantu siswa yang belum fasih, dengan fokus pada pengembangan bahasa Inggris secara bertahap dan menyenangkan."
    },
    {
      question: "Apakah ada beasiswa untuk siswa berprestasi?",
      answer: "Ya, kami menyediakan program beasiswa bagi siswa berprestasi akademik, non-akademik, atau bagi mereka yang membutuhkan bantuan finansial. Informasi lebih lanjut bisa didapatkan di bagian admisi."
    },
    {
      question: "Apa saja fasilitas yang tersedia di sekolah?",
      answer: "Kami menyediakan laboratorium sains dan komputer modern, perpustakaan bilingual, ruang kreatif, lapangan olahraga, dan ruang kelas ber-AC yang dilengkapi dengan teknologi pembelajaran terkini."
    }
  ]
}

export default function ProgramNasionalPlusPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                EduQuantum
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Beranda</Link>
              <Link href="/program" className="text-emerald-600 font-semibold">Program</Link>
              <Link href="/pengajar" className="text-gray-700 hover:text-emerald-600 transition-colors">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-700 hover:text-emerald-600 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="text-gray-700 hover:text-emerald-600 transition-colors">Kontak</Link>
              <Link href="/karir" className="text-gray-700 hover:text-emerald-600 transition-colors">Karir</Link>
              <Link href="/daftar">
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
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
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Beranda</Link>
              <Link href="/program" className="block px-3 py-2 text-emerald-600 font-semibold">Program</Link>
              <Link href="/pengajar" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Pengajar</Link>
              <Link href="/testimoni" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Testimoni</Link>
              <Link href="/kontak" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Kontak</Link>
              <Link href="/karir" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Karir</Link>
              <div className="px-3 py-2">
                <Link href="/daftar">
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600">
                    Daftar Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-white/20 text-white border-0">
                🌍 Program Nasional Plus
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {programDetails.name}
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed">
                {programDetails.tagline}
              </p>
              <p className="text-lg text-emerald-100 leading-relaxed">
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
                  <Globe className="w-5 h-5" />
                  <span>Dual Curriculum</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/daftar">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6">
                    Info Pendaftaran
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  Virtual Tour
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
                    <h3 className="text-2xl font-bold text-white">Global Excellence</h3>
                    <p className="text-emerald-100">Mencetak lulusan siap kerja dunia</p>
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
              <div className="text-3xl font-bold text-emerald-600">500+</div>
              <div className="text-sm text-gray-600">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">Kelulusan PTN/LN</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.9/5</div>
              <div className="text-sm text-gray-600">Rating Orang Tua</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">15+</div>
              <div className="text-sm text-gray-600">Program Ekstrakurikuler</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Prestasi dan Capaian Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bukti nyata komitmen kami dalam mencetak pemimpin masa depan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.successMetrics.map((metric, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{metric.metric}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Standar:</span>
                      <span className="font-medium text-gray-600">{metric.before}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Kami:</span>
                      <span className="font-medium text-emerald-600">{metric.after}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
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
              Tujuan Pembelajaran Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membangun fondasi kuat untuk kesuksesan akademis dan pribadi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programDetails.objectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-600" />
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
              Struktur Kurikulum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrasi sempurna antara kurikulum nasional dan internasional
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programDetails.modules.map((module) => (
              <Card key={module.name} className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {module.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-emerald-600">{module.duration}</div>
                      <div className="text-gray-500">Durasi</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">{module.topics.length}</div>
                      <div className="text-gray-500">Topik</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-purple-600">{module.weight}</div>
                      <div className="text-gray-500">Porsi</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mata Pelajaran:</h4>
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
                    Lihat Detail Kurikulum
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
              Program Pengembangan Minat & Bakat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wadah untuk mengeksplorasi dan mengasah potensi siswa
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
              Keunggulan Program Nasional Plus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fasilitas dan program pendukung untuk pengalaman belajar terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programDetails.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-emerald-50 to-white">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-600" />
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
              Kisah Sukses Alumni
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jejak kesuksesan alumni kami di berbagai bidang
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-r from-emerald-50 to-blue-50">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{story.score}</div>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      {story.achieved}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.position}</p>
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
              Tahapan Perkembangan Siswa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pembelajaran yang bertahap dan sesuai dengan tahap perkembangan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.methodology.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-emerald-50 to-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
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
              Struktur Kegiatan Sekolah
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jadwal yang dirancang untuk pembelajaran optimal dan holistik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.schedule.map((schedule, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-gray-900">{schedule.option}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700">{schedule.days}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700">{schedule.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700">{schedule.frequency}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Lihat Detail
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
              Investasi Pendidikan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Biaya investasi untuk masa depan cerah putra-putri Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.pricing.map((pkg, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-all border-0 ${
                pkg.popular ? 'ring-2 ring-emerald-600 bg-gradient-to-br from-emerald-50 to-blue-50' : 'bg-white'
              }`}>
                <CardContent className="space-y-4 p-0">
                  {pkg.popular && (
                    <Badge className="w-fit bg-emerald-600 text-white">
                      Paling Populer
                    </Badge>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{pkg.package}</h3>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">
                      Rp {pkg.pricePerMonth.toLocaleString('id-ID')}/bulan
                    </div>
                    <div className="text-sm text-gray-600">
                      Total Tahunan: Rp {pkg.totalPrice.toLocaleString('id-ID')}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Kurikulum Nasional & Internasional</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Lingkungan Bilingual</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Program Ekstrakurikuler</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Bimbingan Universitas</span>
                    </div>
                  </div>
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700' 
                        : ''
                    }`}
                    onClick={() => setSelectedPackage(index)}
                  >
                    Info Biaya Lengkap
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
              Testimoni Orang Tua
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepercayaan dan kepuasan orang tua adalah prioritas kami
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
              FAQ Program Nasional Plus
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan yang sering diajukan tentang program kami
            </p>
          </div>

          <div className="space-y-4">
            {programDetails.faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-to-r from-emerald-50 to-blue-50">
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Membentuk Pemimpin Global?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Bergabunglah dengan EduQuantum dan berikan pendidikan terbaik untuk masa depan anak Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daftar">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6">
                <GraduationCap className="mr-2 w-5 h-5" />
                Info Pendaftaran 2024/2025
              </Button>
            </Link>
            <Link href="/kontak">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-6">
                Jadwalkan Kunjungan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}