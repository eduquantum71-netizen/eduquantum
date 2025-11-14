'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Users, 
  Star,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Award,
  Calendar,
  Menu,
  X
} from 'lucide-react'

const teachers = [
  {
    id: 1,
    name: "Dr. Sarah Wijaya, M.Pd",
    photo: "/teachers/sarah.jpg",
    qualification: "S3 Pendidikan Matematika - Universitas Indonesia",
    specialization: ["Matematika", "Olimpiade Matematika", "UTBK"],
    experience: "10 tahun",
    email: "sarah.wijaya@edquantum.id",
    phone: "+62 812-3456-7890",
    rating: 4.9,
    students: 150,
    achievements: [
      "Juara 1 Olimpiade Matematika Nasional 2020",
      "Best Teacher Award 2022",
      "Author 3 Buku Matematika"
    ],
    education: [
      "S3 Pendidikan Matematika - UI",
      "S2 Matematika - ITB",
      "S1 Pendidikan Matematika - UNJ"
    ]
  },
  {
    id: 2,
    name: "Andi Pratama, S.T., M.T.",
    photo: "/teachers/andi.jpg",
    qualification: "S2 Teknik Fisika - Institut Teknologi Bandung",
    specialization: ["Fisika", "Kimia", "Olimpiade Sains"],
    experience: "8 tahun",
    email: "andi.pratama@edquantum.id",
    phone: "+62 813-2345-6789",
    rating: 4.8,
    students: 120,
    achievements: [
      "Finalis Olimpiade Fisika Internasional",
      "Research Excellence Award 2021",
      "10+ Paper Published"
    ],
    education: [
      "S2 Teknik Fisika - ITB",
      "S1 Fisika - UGM"
    ]
  },
  {
    id: 3,
    name: "Maya Putri, S.Hum., M.Hum.",
    photo: "/teachers/maya.jpg",
    qualification: "S2 Sastra Inggris - Universitas Gadjah Mada",
    specialization: ["Bahasa Inggris", "TOEFL/IELTS", "Conversation"],
    experience: "7 tahun",
    email: "maya.putri@edquantum.id",
    phone: "+62 814-3456-7890",
    rating: 4.9,
    students: 200,
    achievements: [
      "IELTS 8.5 Certified",
      "English Teaching Excellence 2023",
      "Native Speaker Experience"
    ],
    education: [
      "S2 Sastra Inggris - UGM",
      "S1 Sastra Inggris - UNAIR"
    ]
  },
  {
    id: 4,
    name: "Budi Santoso, S.Pd., M.Pd.",
    photo: "/teachers/budi.jpg",
    qualification: "S2 Pendidikan IPA - Universitas Negeri Jakarta",
    specialization: ["Biologi", "IPA", "Bimbingan Skripsi"],
    experience: "12 tahun",
    email: "budi.santoso@edquantum.id",
    phone: "+62 815-4567-8901",
    rating: 4.7,
    students: 180,
    achievements: [
      "National Science Teacher Award",
      "Curriculum Developer Expert",
      "100+ Students to Top Universities"
    ],
    education: [
      "S2 Pendidikan IPA - UNJ",
      "S1 Biologi - UB"
    ]
  },
  {
    id: 5,
    name: "Lisa Anderson, B.A., M.A.",
    photo: "/teachers/lisa.jpg",
    qualification: "M.A TESOL - University of Melbourne",
    specialization: ["English Conversation", "Business English", "TOEFL"],
    experience: "6 tahun",
    email: "lisa.anderson@edquantum.id",
    phone: "+62 816-5678-9012",
    rating: 5.0,
    students: 95,
    achievements: [
      "Cambridge CELTA Certified",
      "Business English Expert",
      "Corporate Training Specialist"
    ],
    education: [
      "M.A TESOL - University of Melbourne",
      "B.A English Literature - UCLA"
    ]
  },
  {
    id: 6,
    name: "Ahmad Fauzi, S.Si., M.Si.",
    photo: "/teachers/ahmad.jpg",
    qualification: "S2 Matematika - Institut Teknologi Sepuluh Nopember",
    specialization: ["Matematika", "Statistik", "Data Science"],
    experience: "9 tahun",
    email: "ahmad.fauzi@edquantum.id",
    phone: "+62 817-6789-0123",
    rating: 4.8,
    students: 140,
    achievements: [
      "Data Science Professional",
      "Mathematics Competition Judge",
      "Research Publication Awards"
    ],
    education: [
      "S2 Matematika - ITS",
      "S1 Matematika - UI"
    ]
  }
]

export default function PengajarPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<typeof teachers[0] | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              <Link href="/pengajar" className="text-blue-600 font-semibold">Pengajar</Link>
              <Link href="/testimoni" className="text-gray-700 hover:text-blue-600 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
              <Link href="/karir" className="text-gray-700 hover:text-blue-600 transition-colors">Karir</Link>
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
              <Link href="/pengajar" className="block px-3 py-2 text-blue-600 font-semibold">Pengajar</Link>
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
              👨‍🏫 Tim Pengajar Profesional
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Belajar Bersama
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Pengajar Terbaik
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim pengajar kami terdiri dari para profesional berpengalaman, tersertifikasi, 
              dan berdedikasi untuk membantu Anda meraih prestasi akademik terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Pengajar Ahli</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">1000+</div>
              <div className="text-sm text-gray-600">Siswa Sukses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Teacher Photo and Basic Info */}
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-10 h-10 text-blue-600" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {teacher.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold">{teacher.rating}</span>
                          <span className="text-sm text-gray-500">({teacher.students} siswa)</span>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {teacher.qualification}
                        </p>
                      </div>
                    </div>

                    {/* Specialization */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Spesialisasi:</h4>
                      <div className="flex flex-wrap gap-1">
                        {teacher.specialization.map((spec, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{teacher.experience} pengalaman</span>
                    </div>

                    {/* Contact */}
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{teacher.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{teacher.phone}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => setSelectedTeacher(teacher)}
                      >
                        Lihat Profil
                      </Button>
                      <Button size="sm" variant="outline">
                        Hubungi
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedTeacher.name}
                    </h2>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold">{selectedTeacher.rating}</span>
                      <span className="text-gray-500">({selectedTeacher.students} siswa)</span>
                    </div>
                    <p className="text-gray-600">
                      {selectedTeacher.qualification}
                    </p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedTeacher(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Specialization */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Spesialisasi
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTeacher.specialization.map((spec, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-700">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-purple-600" />
                  Pendidikan
                </h3>
                <ul className="space-y-2">
                  {selectedTeacher.education.map((edu, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-600" />
                  Prestasi
                </h3>
                <ul className="space-y-2">
                  {selectedTeacher.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-green-600" />
                  Kontak
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{selectedTeacher.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{selectedTeacher.phone}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <BookOpen className="mr-2 w-4 h-4" />
                  Jadwalkan Les
                </Button>
                <Button variant="outline">
                  <Mail className="mr-2 w-4 h-4" />
                  Kirim Pesan
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bergabung Menjadi Pengajar
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Jadilah bagian dari tim pengajar profesional kami dan berikan dampak positif bagi pendidikan Indonesia
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
            <Users className="mr-2 w-5 h-5" />
            Lihat Lowongan Karir
          </Button>
        </div>
      </section>
    </div>
  )
}