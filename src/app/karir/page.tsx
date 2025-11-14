'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Users,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  DollarSign,
  Heart,
  Menu,
  X
} from 'lucide-react'

const jobOpenings = [
  {
    id: 1,
    title: "Pengajar Matematika",
    department: "Akademik",
    type: "Full Time",
    location: "Jakarta",
    experience: "Minimal 2 tahun",
    education: "S1 Pendidikan/Matematika",
    salary: "Rp 4-6 juta/bulan",
    description: "Mengajar matematika untuk tingkat SD, SMP, dan SMA dengan metode pembelajaran yang inovatif dan menyenangkan.",
    requirements: [
      "S1 Pendidikan Matematika atau Matematika murni",
      "Memiliki pengalaman mengajar minimal 2 tahun",
      "Mampu mengoperasikan komputer dan teknologi pembelajaran",
      "Sabar, komunikatif, dan menyukai anak-anak",
      "Bersedia mengikuti training dan development"
    ],
    benefits: [
      "Gaji kompetitif",
      "Bonus performa",
      "Asuransi kesehatan",
      "Pelatihan berkala",
      "Jenjang karir jelas"
    ],
    posted: "2 hari yang lalu",
    deadline: "30 Desember 2024"
  },
  {
    id: 2,
    title: "Pengajar Bahasa Inggris",
    department: "Akademik",
    type: "Full Time",
    location: "Jakarta",
    experience: "Minimal 2 tahun",
    education: "S1 Sastra Inggris/Pendidikan Bahasa",
    salary: "Rp 4-6 juta/bulan",
    description: "Mengajar bahasa Inggris dengan fokus pada conversation, grammar, dan persiapan tes TOEFL/IELTS.",
    requirements: [
      "S1 Sastra Inggris atau Pendidikan Bahasa Inggris",
      "Skor TOEFL minimal 550 atau IELTS 6.5",
      "Pengalaman mengajar minimal 2 tahun",
      "Kemampuan komunikasi yang baik",
      "Kreatif dalam membuat materi pembelajaran"
    ],
    benefits: [
      "Gaji kompetitif",
      "Bonus performa",
      "Asuransi kesehatan",
      "Pelatihan berkala",
      "Jenjang karir jelas"
    ],
    posted: "3 hari yang lalu",
    deadline: "28 Desember 2024"
  },
  {
    id: 3,
    title: "Content Creator Education",
    department: "Marketing",
    type: "Full Time",
    location: "Remote",
    experience: "Minimal 1 tahun",
    education: "S1 Semua Jurusan",
    salary: "Rp 3-5 juta/bulan",
    description: "Membuat konten edukasi menarik untuk social media, website, dan platform pembelajaran online.",
    requirements: [
      "S1 semua jurusan",
      "Pengalaman sebagai content creator minimal 1 tahun",
      "Mampu membuat video dan desain grafis dasar",
      "Memahami trend edukasi dan social media",
      "Kreatif dan inovatif"
    ],
    benefits: [
      "Work from home",
      "Gaji kompetitif",
      "Bonus kreatif",
      "Jam kerja fleksibel",
      "Peluang pengembangan diri"
    ],
    posted: "1 minggu yang lalu",
    deadline: "25 Desember 2024"
  },
  {
    id: 4,
    title: "Customer Service",
    department: "Operasional",
    type: "Full Time",
    location: "Jakarta",
    experience: "Minimal 1 tahun",
    education: "D3/S1 Semua Jurusan",
    salary: "Rp 3-4 juta/bulan",
    description: "Melayani konsultasi orang tua dan siswa, serta mengelola administrasi pendaftaran.",
    requirements: [
      "D3/S1 semua jurusan",
      "Pengalaman customer service minimal 1 tahun",
      "Komunikasi yang baik dan ramah",
      "Mampu mengoperasikan komputer",
      "Sabar dan teliti"
    ],
    benefits: [
      "Gaji kompetitif",
      "Bonus performa",
      "Asuransi kesehatan",
      "Pelatihan customer service",
      "Jenjang karir"
    ],
    posted: "4 hari yang lalu",
    deadline: "27 Desember 2024"
  }
]

const cultureValues = [
  {
    icon: Heart,
    title: "Passion for Education",
    description: "Kami mencintai pendidikan dan berdedikasi untuk membantu siswa meraih potensi terbaik mereka."
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Kami bekerja sama sebagai satu tim untuk mencapai tujuan bersama dan saling mendukung."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Kami selalu berusaha memberikan yang terbaik dalam setiap aspek pekerjaan kami."
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Kami terus belajar dan berkembang untuk memberikan layanan terbaik kepada siswa."
  }
]

export default function KarirPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    message: '',
    resume: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitError('')
    
    try {
      // Create FormData to handle file upload
      const data = new FormData()
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('phone', formData.phone)
      data.append('position', formData.position)
      data.append('experience', formData.experience)
      data.append('education', formData.education)
      data.append('message', formData.message)
      
      if (formData.resume) {
        data.append('resume', formData.resume)
      }
      
      const response = await fetch('/api/karir', {
        method: 'POST',
        body: data
      })
      
      if (response.ok) {
        setSubmitMessage('Terima kasih! Lamaran Anda telah terkirim. Kami akan menghubungi Anda jika sesuai dengan kualifikasi.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          education: '',
          message: '',
          resume: null
        })
        setSelectedJob(null)
      } else {
        const errorData = await response.json()
        setSubmitError(errorData.error || 'Terjadi kesalahan saat mengirim lamaran. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      setSubmitError('Terjadi kesalahan saat mengirim lamaran. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
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
              <Link href="/program" className="text-gray-700 hover:text-blue-600 transition-colors">Program</Link>
              <Link href="/pengajar" className="text-gray-700 hover:text-blue-600 transition-colors">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-700 hover:text-blue-600 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
              <Link href="/karir" className="text-blue-600 font-semibold">Karir</Link>
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
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <Link href="/karir" className="block px-3 py-2 text-blue-600 font-semibold">Karir</Link>
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
              💼 Bergabung dengan Tim Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Wujudkan Karir
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}di Dunia Pendidikan
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bergabunglah dengan EduQuantum dan menjadi bagian dari misi kami untuk 
              meningkatkan kualitas pendidikan di Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Nilai-Nilai Perusahaan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kami percaya bahwa budaya kerja yang positif adalah kunci kesuksesan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Lowongan Tersedia
            </h2>
            <p className="text-xl text-gray-600">
              Temukan posisi yang sesuai dengan passion dan keahlian Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="space-y-4 p-0">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.department}</p>
                    </div>
                    <Badge variant="secondary">
                      {job.type}
                    </Badge>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <GraduationCap className="w-4 h-4" />
                      <span>{job.education}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-sm text-gray-500">
                      <div>Diposting: {job.posted}</div>
                      <div>Deadline: {job.deadline}</div>
                    </div>
                    <Button 
                      onClick={() => {
                        setSelectedJob(job)
                        setFormData(prev => ({
                          ...prev,
                          position: job.title
                        }))
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Detail & Lamar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedJob.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <Badge variant="secondary">{selectedJob.type}</Badge>
                    <span>{selectedJob.location}</span>
                    <span>{selectedJob.salary}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedJob(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Deskripsi Pekerjaan</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              {/* Requirements */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Kualifikasi</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Benefit</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">{submitMessage}</p>
                </div>
              )}

              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">{submitError}</p>
                </div>
              )}

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-6 pt-6 border-t">
                <h3 className="font-semibold text-gray-900 text-lg">Form Lamaran</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nama Lengkap *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Nomor Telepon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+62 812-3456-7890"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-medium text-gray-700">
                      Posisi *
                    </label>
                    <Input
                      id="position"
                      name="position"
                      type="text"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Posisi yang dilamar"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium text-gray-700">
                      Pengalaman Kerja *
                    </label>
                    <Textarea
                      id="experience"
                      name="experience"
                      required
                      rows={3}
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Jelaskan pengalaman kerja Anda..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="education" className="text-sm font-medium text-gray-700">
                      Pendidikan *
                    </label>
                    <Textarea
                      id="education"
                      name="education"
                      required
                      rows={3}
                      value={formData.education}
                      onChange={handleInputChange}
                      placeholder="Jelaskan riwayat pendidikan Anda..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mengapa ingin bergabung dengan EduQuantum?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ceritakan motivasi Anda..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="resume" className="text-sm font-medium text-gray-700">
                    Upload CV/Resume *
                  </label>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                  />
                  <p className="text-xs text-gray-500">
                    Format: PDF, DOC, DOCX (Maks. 2MB)
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Kirim Lamaran
                      </>
                    )}
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setSelectedJob(null)}
                  >
                    Batal
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tidak Ada Posisi yang Cocok?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Kirim CV Anda dan kami akan menghubungi jika ada posisi yang sesuai
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
            <Users className="mr-2 w-5 h-5" />
            Kirim CV Spontan
          </Button>
        </div>
      </section>
    </div>
  )
}