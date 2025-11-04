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
  FileText,
  Brain,
  PenTool
} from 'lucide-react'

const programDetails = {
  name: "Bimbingan Skripsi",
  category: "skripsi",
  tagline: "Solusi Lengkap untuk Tugas Akhir dan Thesis",
  description: "Program bimbingan komprehensif untuk penyelesaian tugas akhir, skripsi, tesis, dan disertasi. Dibimbing oleh supervisor berpengalaman dari berbagai disiplin ilmu dengan metode terstruktur untuk membantu Anda menyelesaikan karya ilmiah dengan tepat waktu dan berkualitas.",
  price: 300000,
  duration: "90 menit/sesi",
  totalSessions: "8-24 sesi",
  studentsCount: "80+ siswa aktif",
  successRate: "95% tepat waktu",
  
  objectives: [
    "Menyelesaikan skripsi/thesis dengan struktur dan metodologi penelitian yang benar",
    "Mengembangkan kemampuan menulis akademik yang berkualitas",
    "Menguasai teknik analisis data dan interpretasi hasil",
    "Membangun kemampuan presentasi dan sidang yang percaya diri",
    "Mencapai nilai optimal untuk kelulusan dengan predikat cumlaude"
  ],

  features: [
    {
      icon: GraduationCap,
      title: "Expert Supervisor Guidance",
      description: "Bimbingan langsung dari supervisor berpengalaman dari berbagai disiplin ilmu"
    },
    {
      icon: FileText,
      title: "Research Methodology",
      description: "Panduan lengkap metodologi penelitian dari proposal hingga penyelesaian"
    },
    {
      icon: Brain,
      title: "Data Analysis Support",
      description: "Bantuan analisis data dengan berbagai software statistik (SPSS, R, Python, dll)"
    },
    {
      icon: PenTool,
      title: "Writing & Editing",
      description: "Bantuan penulisan, editing, dan formatting sesuai standar akademik"
    },
    {
      icon: Target,
      title: "Presentation Coaching",
      description: "Latihan presentasi dan sidang untuk mempersiapkan pertahanan hasil karya ilmiah"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Jaminan kualitas dan orisinalitas karya ilmiah dengan plagiarism check"
    }
  ],

  services: [
    {
      name: "Bimbingan Proposal",
      description: "Panduan lengkap dari pembuatan proposal hingga persetujuan dosen pembimbing",
      scope: [
        "Identifikasi topik penelitian",
        "Penyusunan rumusan masalah",
        "Tinjauan pustaka",
        "Metodologi penelitian",
        "Jadwal penelitian",
        "Presentasi proposal"
      ],
      duration: "4-6 sesi",
      deliverables: ["Proposal lengkap", "Jadwal penelitian", "Presentasi proposal"]
    },
    {
      name: "Bimbingan Penelitian",
      description: "Bimbingan teknis selama proses penelitian dan pengumpulan data",
      scope: [
        "Pengembangan instrumen penelitian",
        "Validitas dan reliabilitas",
        "Teknik pengumpulan data",
        "Manajemen data",
        "Troubleshooting penelitian",
        "Progress monitoring"
      ],
      duration: "6-12 sesi",
      deliverables: ["Instrumen valid", "Data terstruktur", "Laporan progress"]
    },
    {
      name: "Bimbingan Analisis",
      description: "Bantuan analisis data dan interpretasi hasil penelitian",
      scope: [
        "Statistical analysis",
        "Data interpretation",
        "Visualisasi data",
        "Pembahasan hasil",
        "Koneksi dengan teori",
        "Implikasi penelitian"
      ],
      duration: "4-8 sesi",
      deliverables: ["Hasil analisis", "Visualisasi data", "Pembahasan lengkap"]
    },
    {
      name: "Bimbingan Penulisan",
      description: "Bantuan penulisan bab per bab hingga skripsi/thesis lengkap",
      scope: [
        "Struktur penulisan",
        "Writing style akademik",
        "Citation & referencing",
        "Formatting dokumen",
        "Abstract & executive summary",
        "Final editing"
      ],
      duration: "8-16 sesi",
      deliverables: ["Naskah lengkap", "Referensi terformat", "Abstract"]
    },
    {
      name: "Bimbingan Sidang",
      description: "Persiapan sidang dari slide hingga pertahanan hasil",
      scope: [
        "Slide presentation",
        "Public speaking",
        "Handling questions",
        "Defense strategy",
        "Mock sidang",
        "Confidence building"
      ],
      duration: "2-4 sesi",
      deliverables: ["Slide sidang", "Handout", "Video mock sidang"]
    },
    {
      name: "Jurnal Publication",
      description: "Bantuan publikasi artikel ilmiah ke jurnal internasional",
      scope: [
        "Journal selection",
        "Manuscript preparation",
        "Submission process",
        "Peer review handling",
        "Revision support",
        "Publication tracking"
      ],
      duration: "4-8 sesi",
      deliverables: ["Manuscript jurnal", "Cover letter", "Submission record"]
    }
  ],

  methodology: [
    {
      phase: "Initial Consultation",
      description: "Konsultasi awal untuk memahami kebutuhan dan tujuan penelitian",
      duration: "1 sesi"
    },
    {
      phase: "Planning & Proposal",
      description: "Perencanaan penelitian dan penyusunan proposal yang komprehensif",
      duration: "2-4 sesi"
    },
    {
      phase: "Research Execution",
      description: "Eksekusi penelitian dengan bimbingan teknis dan monitoring berkala",
      duration: "4-12 sesi"
    },
    {
      phase: "Writing & Defense",
      description: "Penulisan lengkap dan persiapan sidang dengan latihan intensif",
      duration: "4-8 sesi"
    }
  ],

  academicLevels: [
    {
      level: "S1 (Sarjana)",
      document: "Skripsi",
      duration: "6-12 bulan",
      chapters: "5 bab",
      pages: "80-150 halaman",
      requirements: [
        "Minimal 2 variabel",
        "Sampel 100-200 responden",
        "Literature review 20-30 sumber",
        "Metode kuantitatif/kualitatif"
      ]
    },
    {
      level: "S2 (Magister)",
      document: "Tesis",
      duration: "12-24 bulan",
      chapters: "5 bab",
      pages: "100-200 halaman",
      requirements: [
        "Minimal 2-3 variabel",
        "Sampel 200-400 responden",
        "Literature review 40-60 sumber",
        "Metode mix methods atau kualitatif"
      ]
    },
    {
      level: "S3 (Doktor)",
      document: "Disertasi",
      duration: "24-48 bulan",
      chapters: "5-6 bab",
      pages: "200-300 halaman",
      requirements: [
        "Minimal 3-4 variabel",
        "Sampel 300-500 responden",
        "Literature review 80-120 sumber",
        "Metode kualitatif atau mix methods"
      ]
    }
  ],

  schedule: [
    {
      option: "Regular Bimbingan",
      days: "Senin - Jumat",
      time: "18:00 - 20:00 WIB",
      frequency: "1x seminggu"
    },
    {
      option: "Intensive Program",
      days: "Senin - Jumat",
      time: "18:00 - 20:00 WIB",
      frequency: "2x seminggu"
    },
    {
      option: "Weekend Program",
      days: "Sabtu - Minggu",
      time: "10:00 - 12:00 WIB",
      frequency: "1x seminggu"
    },
    {
      option: "Express Service",
      days: "Fleksibel",
      time: "Disesuaikan",
      frequency: "3x seminggu (deadline oriented)"
    }
  ],

  pricing: [
    {
      package: "Paket Basic (8 sesi)",
      sessions: 8,
      pricePerSession: 300000,
      totalPrice: 2400000,
      discount: 0,
      popular: false,
      focus: "Proposal + Planning"
    },
    {
      package: "Paket Standard (12 sesi)",
      sessions: 12,
      pricePerSession: 300000,
      totalPrice: 3600000,
      discount: 5,
      popular: true,
      focus: "Full Research Cycle"
    },
    {
      package: "Paket Advanced (16 sesi)",
      sessions: 16,
      pricePerSession: 300000,
      totalPrice: 4800000,
      discount: 8,
      popular: false,
      focus: "Writing + Defense"
    },
    {
      package: "Paket Premium (24 sesi)",
      sessions: 24,
      pricePerSession: 300000,
      totalPrice: 7200000,
      discount: 12,
      popular: false,
      focus: "Complete Service + Publication"
    }
  ],

  successStories: [
    {
      name: "Andi Pratama",
      level: "S1 Teknik Informatika",
      achieved: "Cumlaude (3.75)",
      duration: "8 bulan",
      testimonial: "Bimbingan skripsi EduQuantum sangat membantu! Saya bisa menyelesaikan skripsi tepat waktu dengan nilai cumlaude."
    },
    {
      name: "Sarah Wijaya",
      level: "S2 Psikologi",
      achieved: "Cumlaude (3.80)",
      duration: "14 bulan",
      testimonial: "Supervisor-nya sangat berpengalaman di bidang psikologi. Metode analisis yang diajarkan sangat relevan."
    },
    {
      name: "Michael Chen",
      level: "S3 Manajemen",
      achieved: "Cumlaude (3.85)",
      duration: "30 bulan",
      testimonial: "Program ini sangat komprehensif. Dari proposal hingga publikasi jurnal, semua dibantu dengan baik."
    }
  ],

  testimonials: [
    {
      name: "Rizki Ahmad",
      role: "Mahasiswa S1",
      content: "Saya yang awalnya bingung dengan skripsi sekarang sudah selesai dengan nilai memuaskan. Terima kasih EduQuantum!",
      rating: 5,
      improvement: "Nilai A (3.75)"
    },
    {
      name: "Maya Putri",
      role: "Mahasiswa S2",
      content: "Bimbingan analisis data-nya sangat detail. Saya belajar banyak tentang statistical analysis yang tidak diajarkan di kampus.",
      rating: 5,
      improvement: "Cumlaude (3.80)"
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa S3",
      content: "Publikasi jurnal internasional menjadi mudah dengan bimbingan dari tim EduQuantum. Sangat recommended!",
      rating: 5,
      improvement: "2 Jurnal Scopus"
    }
  ],

  faqs: [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan skripsi?",
      answer: "Untuk S1 normalnya 6-12 bulan, S2 12-24 bulan, dan S3 24-48 bulan. Namun dengan program intensif kami, bisa lebih cepat tergantung komitmen Anda."
    },
    {
      question: "Apakah supervisor bisa membantu semua jurusan?",
      answer: "Ya, kami memiliki supervisor dari berbagai disiplin ilmu (teknik, sosial, kesehatan, ekonomi, dll). Kami akan mencocokkan supervisor dengan jurusan Anda."
    },
    {
      question: "Apakah ada jaminan skripsi selesai tepat waktu?",
      answer: "Kami memberikan jaminan penyelesaian tepat waktu dengan syarat komitmen dari mahasiswa dan mengikuti jadwal yang disepakati."
    },
    {
      question: "Bagaimana sistem bimbingannya dilakukan?",
      answer: "Bimbingan bisa dilakukan online (via Zoom/Google Meet) atau offline di kantor kami. Kami menggunakan metode kombinasi diskusi, review, dan praktik langsung."
    },
    {
      question: "Apakah bantuan analisis data termasuk software?",
      answer: "Ya, kami menyediakan bantuan analisis data dengan software seperti SPSS, R, Python, NVivo, Atlas.ti, dan software statistik lainnya."
    }
  ]
}

export default function ProgramSkripsiPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-white/20 text-white border-0">
                📚 Bimbingan Akademik
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
                  <GraduationCap className="w-5 h-5" />
                  <span>S1-S3</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/daftar">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                    Mulai Bimbingan
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  Konsultasi Gratis
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video bg-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <FileText className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Skripsi Success</h3>
                    <p className="text-blue-100">Selesaikan tugas akhir dengan nilai cumlaude</p>
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
              <div className="text-3xl font-bold text-blue-600">80+</div>
              <div className="text-sm text-gray-600">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">95%</div>
              <div className="text-sm text-gray-600">Tepat Waktu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.9/5</div>
              <div className="text-sm text-gray-600">Rating Siswa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100+</div>
              <div className="text-sm text-gray-600">Skripsi Selesai</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Target Bimbingan Skripsi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program ini dirancang untuk membantu Anda menyelesaikan tugas akhir dengan berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programDetails.objectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Layanan Bimbingan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 layanan komprehensif untuk setiap tahap penyelesaian karya ilmiah
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programDetails.services.map((service) => (
              <Card key={service.name} className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Scope:</h4>
                    <div className="space-y-1">
                      {service.scope.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>{service.deliverables.length} deliverables</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedService(service.name)}
                  >
                    Pilih {service.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tingkatan Akademik
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bimbingan untuk S1, S2, dan S3 dengan standar masing-masing
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programDetails.academicLevels.map((level) => (
              <Card key={level.level} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{level.level}</h3>
                    <Badge variant="secondary">{level.document}</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Durasi:</span>
                        <span className="font-medium">{level.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Bab:</span>
                        <span className="font-medium">{level.chapters}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Halaman:</span>
                        <span className="font-medium">{level.pages}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <div className="space-y-1">
                        {level.requirements.map((req, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Fitur Bimbingan Skripsi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nikmati berbagai fitur unggulan untuk bimbingan skripsi yang efektif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programDetails.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kisah Sukses Skripsi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alumni kami yang telah berhasil menyelesaikan skripsi dengan predikat cumlaude
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programDetails.successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{story.achieved}</div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {story.level}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">Durasi: {story.duration}</p>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Metodologi Bimbingan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 fase bimbingan sistematis untuk penyelesaian skripsi optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.methodology.map((phase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Opsi Jadwal Bimbingan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih jadwal yang sesuai dengan kebutuhan dan deadline Anda
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Paket Harga Bimbingan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investasi untuk kelulusan dengan predikat cumlaude
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDetails.pricing.map((pkg, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-all border-0 ${
                pkg.popular ? 'ring-2 ring-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-white'
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
                      <span className="text-sm text-gray-700">Focus: {pkg.focus}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Expert Supervisor</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Quality Guarantee</span>
                    </div>
                  </div>
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                        : ''
                    }`}
                    onClick={() => setSelectedPackage(index)}
                  >
                    Mulai Bimbingan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Testimoni Mahasiswa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apa kata mereka tentang Program Bimbingan Skripsi EduQuantum
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              FAQ Bimbingan Skripsi
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan umum tentang Program Bimbingan Skripsi
            </p>
          </div>

          <div className="space-y-4">
            {programDetails.faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Menyelesaikan Skripsi dengan Cumlaude?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan Program Bimbingan Skripsi dan raih predikat cumlaude
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daftar">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                <FileText className="mr-2 w-5 h-5" />
                Mulai Bimbingan Skripsi
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