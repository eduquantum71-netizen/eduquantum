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
  Mic,
  Video,
  Zap,
  MessageSquare
} from 'lucide-react'

const programDetails = {
  name: "Program Speak-up",
  category: "speak-up",
  tagline: "Berbicara dengan Percaya Diri dan Mempesona",
  description: "Program pelatihan public speaking terpadu untuk mengatasi rasa takut berbicara di depan umum dan menguasai seni komunikasi yang persuasif. Dibimbing oleh profesional komunikasi dan public speaker berpengalaman, kami akan membantu Anda menemukan suara dan memukau audiens.",
  price: 350000,
  duration: "120 menit/sesi",
  totalSessions: "8-16 sesi",
  studentsCount: "250+ peserta",
  successRate: "95% merasa lebih percaya diri",
  
  objectives: [
    "Mengatasi rasa takut dan cemas saat berbicara di depan umum (stage fright)",
    "Mempelajari cara menyusun pidato atau presentasi yang terstruktur dan persuasif",
    "Menguasai bahasa tubuh, kontak mata, dan variasi suara untuk performa maksimal",
    "Melatih kemampuan berbicara spontan (impromptu speaking) dengan percaya diri",
    "Mampu menyampaikan ide dan pesan dengan jelas, berdampak, dan berkarisma"
  ],

  features: [
    {
      icon: Mic,
      title: "Praktik & Feedback Intensif",
      description: "Anda akan berbicara di setiap sesi dan mendapatkan feedback langsung yang konstruktif dari instruktur dan sesama peserta."
    },
    {
      icon: Video,
      title: "Analisis Video Rekaman",
      description: "Sesi Anda akan direkam untuk dianalisis bersama, membantu Anda melihat area perbaikan dari perspektif audiens."
    },
    {
      icon: Target,
      title: "Kurikulum Berbasis Psikologi",
      description: "Materi dirancang tidak hanya untuk teknik, tetapi juga untuk membangun mindset dan kepercayaan diri dari dalam."
    },
    {
      icon: Zap,
      title: "Simulasi Dunia Nyata",
      description: "Latihan dalam berbagai skenario: presentasi bisnis, wawancara kerja, pidato, hingga debat informal."
    },
    {
      icon: MessageSquare,
      title: "Kelas Interaktif & Dinamis",
      description: "Metode belajar yang engaging dan fun dengan berbagai games dan aktivitas untuk melatih komunikasi."
    },
    {
      icon: Award,
      title: "Instruktur Profesional & Berpengalaman",
      description: "Dibimbing oleh public speaker, trainer komunikasi, dan ahli psikologi yang telah berpengalaman di bidangnya."
    }
  ],

  modules: [
    {
      name: "Modul 1: Fundamen Public Speaking",
      description: "Membangun fondasi mental dan fisik untuk menjadi seorang pembicara yang percaya diri.",
      topics: [
        "Mengenal & Mengatasi Stage Fright",
        "Teknik Pernapasan & Relaksasi",
        "Mindset Seorang Public Speaker",
        "Latihan Pemanasan (Vocal & Physical)",
        "Membangun Koneksi dengan Audiens"
      ],
      duration: "3-4 sesi",
      focusArea: "Mindset & Basics",
      output: "Self-Introduction 1 menit"
    },
    {
      name: "Modul 2: Struktur & Konten",
      description: "Mempelajari cara merangkai ide menjadi pesan yang jelas, logis, dan persuasif.",
      topics: [
        "Struktur Pidato: Pembuka, Isi, Penutup",
        "Seni Storytelling dalam Presentasi",
        "Menemukan 'Big Idea' Pesan Anda",
        "Penelitian Audiens & Penyesuaian Konten",
        "Membuat Slide yang Mendukung, Bukan Mengganggu"
      ],
      duration: "3-6 sesi",
      focusArea: "Content & Structure",
      output: "Presentasi Terstruktur 5 menit"
    },
    {
      name: "Modul 3: Performa & Delivery",
      description: "Mengasah semua elemen performa untuk tampil memukau dan berkarisma.",
      topics: [
        "Power of Body Language & Gestures",
        "Vocal Variety: Intonasi, Volume, & Kecepatan",
        "Seni Menggunakan Jeda (The Power of Pause)",
        "Mengelola Q&A Session dengan Cerdik",
        "Impromptu Speaking: Berbicara Tanpa Persiapan"
      ],
      duration: "2-6 sesi",
      focusArea: "Performance & Delivery",
      output: "Final Presentation 7 menit"
    }
  ],

  specializations: [
    {
      category: "Profesional & Eksekutif",
      topics: [
        "Executive Presence",
        "Pitching Ideas to Investors/Clients",
        "Leading & Facilitating Meetings",
        "Crisis Communication"
      ]
    },
    {
      category: "Pelajar & Mahasiswa",
      topics: [
        "Presentasi Tugas & Skripsi",
        "Debate Club & Competition",
        "Leadership Communication",
        "Public Speaking for Academic Purposes"
      ]
    },
    {
      category: "Job Seeker",
      topics: [
        "Mastering Interview Sessions",
        "Elevator Pitch",
        "Personal Branding Communication",
        "Negotiation Skills"
      ]
    },
    {
      category: "Personal Development",
      topics: [
        "Storytelling for Personal Branding",
        "Social Confidence & Networking",
        "Wedding Speech or Toast",
        "Commemorative Speeches"
      ]
    }
  ],

  methodology: [
    {
      phase: "Awareness & Mindset Shift",
      description: "Mengidentifikasi akar masalah ketakutan dan membangun fondasi mental yang positif untuk berbicara di depan umum.",
      duration: "1-2 sesi"
    },
    {
      phase: "Skill Acquisition & Practice",
      description: "Mempelajari teknik-teknik fundamental dan langsung mempraktikkannya dalam lingkungan yang aman dan suportif.",
      duration: "4-10 sesi"
    },
    {
      phase: "Integration & Refinement",
      description: "Menggabungkan semua teknik (konten, bahasa tubuh, suara) menjadi sebuah performa yang utuh dan memukau.",
      duration: "2-4 sesi"
    },
    {
      phase: "Real-World Application",
      description: "Simulasi akhir dengan skenario nyata dan feedback komprehensif untuk memastikan Anda siap tampil di mana saja.",
      duration: "1 sesi"
    }
  ],

  schedule: [
    {
      option: "Kelas Regular",
      days: "Senin - Rabu",
      time: "18:30 - 20:30 WIB",
      frequency: "2x seminggu"
    },
    {
      option: "Weekend Workshop",
      days: "Sabtu",
      time: "09:00 - 16:00 WIB",
      frequency: "1x seminggu (intensif)"
    },
    {
      option: "Intensive Bootcamp",
      days: "Senin - Jumat",
      time: "09:00 - 17:00 WIB",
      frequency: "Program khusus 1 minggu"
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
      package: "Paket Basic (8 sesi)",
      sessions: 8,
      pricePerSession: 350000,
      totalPrice: 2800000,
      discount: 0,
      popular: false
    },
    {
      package: "Paket Pro (12 sesi)",
      sessions: 12,
      pricePerSession: 350000,
      totalPrice: 4200000,
      discount: 5,
      popular: true
    },
    {
      package: "Paket Premier (16 sesi)",
      sessions: 16,
      pricePerSession: 350000,
      totalPrice: 5600000,
      discount: 10,
      popular: false
    }
  ],

  successMetrics: [
    {
      metric: "Tingkat Kepercayaan Diri",
      before: "Ragu & Cemas",
      after: "Percaya Diri & Tenang",
      improvement: "Signifikan"
    },
    {
      metric: "Kemampuan Impromptu",
      before: "Gugup & Tersendat",
      after: "Lancar & Terstruktur",
      improvement: "Terlatih"
    },
    {
      metric: "Struktur Presentasi",
      before: "Acak-acakan",
      after: "Jelas & Persuasif",
      improvement: "Mastery"
    },
    {
      metric: "Engagement Audiens",
      before: "Pasif",
      after: "Terhubung & Antusias",
      improvement: "High Impact"
    }
  ],

  successStories: [
    {
      name: "Andi Pratama",
      position: "Software Engineer",
      achieved: "Promosi Jabatan",
      score: "Setelah Presentasi Proyek",
      testimonial: "Saya selalu grogi saat presentasi. Setelah ikut program ini, saya bisa mempresentasikan ide saya dengan jelas dan akhirnya dipromosikan. Investasi terbaik!"
    },
    {
      name: "Siti Nurhaliza",
      position: "Mahasiswi",
      achieved: "Juara 1 Debat",
      score: "Kompetisi Tingkat Nasional",
      testimonial: "Modul impromptu speaking-nya luar biasa! Saya jadi lebih percaya diri mengemukakan argumen dan berhasil membawa tim saya menang."
    },
    {
      name: "Budi Santoso",
      position: "Sales Manager",
      achieved: "Closing Deal Besar",
      score: "Setelah Pitching ke Klien",
      testimonial: "Teknik storytelling yang diajarkan membuat presentasi sales saya jauh lebih menarik. Klien terkesan dan deal akhirnya kami dapatkan."
    }
  ],

  testimonials: [
    {
      name: "Rina Wijaya, HR Manager",
      role: "Corporate Trainer",
      content: "Saya merekomendasikan program ini untuk karyawan kami. Transformasi kepercayaan diri mereka sangat luar biasa dan berdampak langsung pada performa kerja.",
      rating: 5,
      improvement: "Tim Lebih Percaya Diri"
    },
    {
      name: "Ahmad Fauzi",
      role: "Peserta Program",
      content: "Lingkungan belajarnya sangat aman dan suportif. Saya tidak takut untuk mencoba dan membuat kesalahan. Itu kunci dari kemajuan saya.",
      rating: 5,
      improvement: "Berani Berbicara"
    },
    {
      name: "Maya Putri",
      role: "Entrepreneur",
      content: "Sebagai entrepreneur, kemampuan 'pitching' itu penting. Program ini memberikan saya kerangka kerja dan kepercayaan diri untuk meyakinkan investor.",
      rating: 5,
      improvement: "Pitching yang Efektif"
    }
  ],

  faqs: [
    {
      question: "Saya sangat pemalu dan takut berbicara di depan umum. Apakah program ini cocok untuk saya?",
      answer: "Tentu saja! Program ini dirancang khusus untuk membantu Anda mengatasi rasa takut tersebut. Kami akan memulai dari langkah paling dasar dalam lingkungan yang sangat suportif."
    },
    {
      question: "Apakah saya perlu memiliki pengalaman public speaking sebelumnya?",
      answer: "Tidak perlu sama sekali. Kami menerima peserta dari berbagai tingkatan, dari pemula hingga yang ingin mempertajam kemampuan yang sudah ada."
    },
    {
      question: "Apakah sesi saya akan direkam? Saya malu jika videonya tersebar.",
      answer: "Ya, sesi akan direkam untuk tujuan analisis dan pembelajaran pribadi. Kami menjamin kerahasiaan video tersebut dan tidak akan dibagikan ke publik tanpa izin Anda."
    },
    {
      question: "Apa saja yang perlu saya siapkan untuk mengikuti kelas?",
      answer: "Cukup bawa diri Anda, notebook, dan pena. Jika kelas online, pastikan Anda memiliki kamera dan mikrofon yang baik. Kami akan menyediakan semua materi lainnya."
    },
    {
      question: "Bagaimana jika saya tidak merasa ada kemajuran setelah beberapa sesi?",
      answer: "Komitmen kami adalah kesuksesan Anda. Jika Anda merasa tidak ada kemajuan, instruktur akan memberikan perhatian khusus dan menyesuaikan metode pembelajaran untuk Anda."
    }
  ]
}

export default function ProgramSpeakUpPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EduQuantum
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Beranda</Link>
              <Link href="/program" className="text-purple-600 font-semibold">Program</Link>
              <Link href="/pengajar" className="text-gray-700 hover:text-purple-600 transition-colors">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-700 hover:text-purple-600 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
              <Link href="/karir" className="text-gray-700 hover:text-purple-600 transition-colors">Karir</Link>
              <Link href="/daftar">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Beranda</Link>
              <Link href="/program" className="block px-3 py-2 text-purple-600 font-semibold">Program</Link>
              <Link href="/pengajar" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Pengajar</Link>
              <Link href="/testimoni" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Testimoni</Link>
              <Link href="/kontak" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Kontak</Link>
              <Link href="/karir" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Karir</Link>
              <div className="px-3 py-2">
                <Link href="/daftar">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    Daftar Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-white/20 text-white border-0">
                🎤 Program Speak-up
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {programDetails.name}
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed font-semibold">
                {programDetails.tagline}
              </p>
              <p className="text-lg text-pink-100 leading-relaxed">
                {programDetails.description}
              </p>
              
              <div className="flex flex-wrap gap-4 text-pink-100">
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
                  <span>Praktik Intensif</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/daftar">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                    Temukan Suara Anda
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  Tonton Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video bg-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Mic className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Find Your Voice</h3>
                    <p className="text-purple-100">Mulai perjalanan menjadi pembicara yang hebat</p>
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
              <div className="text-3xl font-bold text-purple-600">250+</div>
              <div className="text-sm text-gray-600">Peserta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">95%</div>
              <div className="text-sm text-gray-600">Lebih Percaya Diri</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">4.9/5</div>
              <div className="text-sm text-gray-600">Rating Peserta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-gray-600">Sesi Praktik</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Transformasi Nyata, Hasil Maksimal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat perubahan signifikan pada kemampuan komunikasi Anda
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
              Target Pembelajaran Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fokus kami adalah membentuk pembicara yang percaya diri dan berdampak
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programDetails.objectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
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
              3 modul utama untuk transformasi public speaking Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programDetails.modules.map((module) => (
              <Card key={module.name} className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {module.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-purple-600">{module.duration}</div>
                      <div className="text-gray-500">Durasi</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-pink-600">{module.topics.length}</div>
                      <div className="text-gray-500">Topik</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-orange-500">{module.focusArea}</div>
                      <div className="text-gray-500">Fokus</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Materi:</h4>
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
                    Output: {module.output}
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
              Program Disesuaikan dengan Kebutuhan Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih fokus belajar yang paling relevan dengan tujuan Anda
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
              Metode Belajar Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pendekatan praktis dan psikologis untuk hasil yang bertahan lama
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programDetails.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-white">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-600" />
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
              Mereka Telah Menemukan Suaranya
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kisah inspiratif dari para peserta program Speak-up
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-r from-purple-50 to-pink-50">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{story.score}</div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
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
              4 Tahap Menjadi Pembicara Hebat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologi belajar yang terstruktur dan holistik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.methodology.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold">
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
              Pilih jadwal yang paling cocok dengan rutinitas Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.schedule.map((schedule, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <h3 className="text-xl font-bold text-gray-900">{schedule.option}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700">{schedule.days}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700">{schedule.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-purple-600" />
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
              Investasi untuk Diri Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan target dan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.pricing.map((pkg, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-all border-0 ${
                pkg.popular ? 'ring-2 ring-purple-600 bg-gradient-to-br from-purple-50 to-pink-50' : 'bg-white'
              }`}>
                <CardContent className="space-y-4 p-0">
                  {pkg.popular && (
                    <Badge className="w-fit bg-purple-600 text-white">
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
                      <span className="text-sm text-gray-700">{pkg.sessions} sesi intensif</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Praktik & feedback</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Analisis video</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Sertifikat kelulusan</span>
                    </div>
                  </div>
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                        : ''
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Apa Kata Mereka?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni langsung dari peserta dan mitra kami
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
              FAQ Program Speak-up
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan yang sering diajukan tentang program kami
            </p>
          </div>

          <div className="space-y-4">
            {programDetails.faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-to-r from-purple-50 to-pink-50">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Menjadi Pembicara yang Menginspirasi?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Bergabunglah sekarang dan temukan suara Anda untuk mencapai kesuksesan yang lebih tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daftar">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                <Mic className="mr-2 w-5 h-5" />
                Daftar Program Speak-up
              </Button>
            </Link>
            <Link href="/kontak">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6 font-semibold">
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}