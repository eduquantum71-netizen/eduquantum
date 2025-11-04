// File: src/app/daftar/page.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  BookOpen, 
  Users,
  CheckCircle,
  Send,
  ArrowRight,
  Clock,
  Award,
  Menu,
  X
} from 'lucide-react'

const programs = [
  { id: 'reguler', name: 'Reguler', price: 150000 },
  { id: 'nasional-plus', name: 'Nasional Plus', price: 200000 },
  { id: 'olimpiade', name: 'Olimpiade', price: 250000 },
  { id: 'utbk', name: 'UTBK', price: 225000 },
  { id: 'speak-up', name: 'Speak Up (bahasa)', price: 175000 },
  { id: 'tka', name: 'TKA', price: 200000 },
  { id: 'cpns', name: 'CPNS', price: 225000 },
  { id: 'skripsi', name: 'Bimbingan Skripsi', price: 300000 }
]

const subjects = [
  'Matematika', 'B.Inggris', 'B.Indonesia', 'Fisika', 'Kimia', 'Biologi', 
  'IPA', 'IPS', 'Ekonomi', 'B.Arab', 'BTQ', 'IPAS', 'PPKn', 
  'Conversation', 'TOEFL', 'IELTS', 'Mandarin'
]

const sessionOptions = [
  { id: 8, label: '8 sesi', price: 1 },
  { id: 12, label: '12 sesi', price: 0.95 },
  { id: 16, label: '16 sesi', price: 0.9 },
  { id: 20, label: '20 sesi', price: 0.85 },
  { id: 24, label: '24 sesi', price: 0.8 }
]

export default function DaftarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  
  const [formData, setFormData] = useState({
    // Data Siswa
    namaPanggilan: '',
    namaLengkap: '',
    jenisKelamin: '',
    asalSekolah: '',
    kelas: '',
    kurikulum: '',
    
    // Kontak
    noHpOrangTua: '',
    noHpSiswa: '',
    
    // Paket Belajar
    programId: '',
    mataPelajaran: [] as string[],
    jumlahSesi: 12,
    
    // Additional
    pesanTambahan: '',
    setujuSyarat: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubjectToggle = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    )
    setFormData(prev => ({
      ...prev,
      mataPelajaran: selectedSubjects.includes(subject) 
        ? prev.mataPelajaran.filter(s => s !== subject)
        : [...prev.mataPelajaran, subject]
    }))
  }

  // === FUNGSI YANG DIPERBAIKI DAN DITAMBAHKAN VALIDASI ===
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // --- TAMBAHKAN VALIDASI CLIENT-SIDE ---
      // Cek apakah ada mata pelajaran yang dipilih
      if (formData.mataPelajaran.length === 0) {
        alert('Anda harus memilih minimal satu mata pelajaran.');
        setIsSubmitting(false);
        return; // Hentikan proses pengiriman
      }
      // --- AKHIR VALIDASI ---

      // Siapkan data yang akan dikirim ke API
      const dataToSubmit = {
        ...formData,
        // Pastikan mataPelajaran adalah string yang dipisah koma
        mataPelajaran: formData.mataPelajaran.join(', ')
      };

      // --- TAMBAHKAN LOG DEBUGGING ---
      // Cetak data yang akan dikirim ke console browser
      console.log('📤 DATA YANG AKAN DIKIRIM KE API:', dataToSubmit);

      const response = await fetch('/api/pendaftaran', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Terjadi kesalahan saat mengirim formulir.');
      }

      const result = await response.json();
      console.log('Sukses:', result);

      // Tampilkan pesan sukses
      alert('Pendaftaran berhasil! Tim kami akan segera menghubungi Anda untuk konfirmasi lebih lanjut.');
      
      // Reset form
      setCurrentStep(1)
      setFormData({
        namaPanggilan: '',
        namaLengkap: '',
        jenisKelamin: '',
        asalSekolah: '',
        kelas: '',
        kurikulum: '',
        noHpOrangTua: '',
        noHpSiswa: '',
        programId: '',
        mataPelajaran: [],
        jumlahSesi: 12,
        pesanTambahan: '',
        setujuSyarat: false
      })
      setSelectedSubjects([])

    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(`Gagal mendaftar: ${error.message}`);
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedProgram = programs.find(p => p.id === formData.programId)
  const selectedSession = sessionOptions.find(s => s.id === formData.jumlahSesi)
  
  const calculateTotal = () => {
    if (!selectedProgram || !selectedSession) return 0
    return selectedProgram.price * formData.jumlahSesi * selectedSession.price
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const steps = [
    { id: 1, title: 'Data Siswa', icon: Users },
    { id: 2, title: 'Paket Belajar', icon: BookOpen },
    { id: 3, title: 'Konfirmasi', icon: CheckCircle }
  ]

  return (
    // ... (seluruh JSX Anda tetap sama, tidak ada perubahan) ...
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
              <Link href="/karir" className="text-gray-700 hover:text-blue-600 transition-colors">Karir</Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Daftar Sekarang
              </Button>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="w-fit bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0">
              📝 Formulir Pendaftaran
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Daftar Les Privat
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Sekarang
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Isi formulir di bawah ini untuk memulai perjalanan pendidikan Anda bersama EduQuantum
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep >= step.id
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center space-x-3 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      isActive 
                        ? 'bg-blue-600 border-blue-600 text-white' 
                        : 'bg-white border-gray-300'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="font-semibold">{step.title}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden sm:block w-24 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 border-0 bg-white shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Data Siswa */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Data Siswa</h2>
                    <p className="text-gray-600">Lengkapi data diri siswa dengan benar</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="namaPanggilan" className="text-sm font-medium text-gray-700">
                        Nama Panggilan *
                      </label>
                      <Input
                        id="namaPanggilan"
                        name="namaPanggilan"
                        type="text"
                        required
                        value={formData.namaPanggilan}
                        onChange={handleInputChange}
                        placeholder="Contoh: Budi"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="namaLengkap" className="text-sm font-medium text-gray-700">
                        Nama Lengkap *
                      </label>
                      <Input
                        id="namaLengkap"
                        name="namaLengkap"
                        type="text"
                        required
                        value={formData.namaLengkap}
                        onChange={handleInputChange}
                        placeholder="Contoh: Budi Santoso"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Jenis Kelamin *
                      </label>
                      <select
                        name="jenisKelamin"
                        required
                        value={formData.jenisKelamin}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="asalSekolah" className="text-sm font-medium text-gray-700">
                        Asal Sekolah *
                      </label>
                      <Input
                        id="asalSekolah"
                        name="asalSekolah"
                        type="text"
                        required
                        value={formData.asalSekolah}
                        onChange={handleInputChange}
                        placeholder="Contoh: SMA Negeri 1 Jakarta"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="kelas" className="text-sm font-medium text-gray-700">
                        Kelas *
                      </label>
                      <select
                        id="kelas"
                        name="kelas"
                        required
                        value={formData.kelas}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Pilih Kelas</option>
                        <option value="TK">TK</option>
                        <option value="SD Kelas 1">SD Kelas 1</option>
                        <option value="SD Kelas 2">SD Kelas 2</option>
                        <option value="SD Kelas 3">SD Kelas 3</option>
                        <option value="SD Kelas 4">SD Kelas 4</option>
                        <option value="SD Kelas 5">SD Kelas 5</option>
                        <option value="SD Kelas 6">SD Kelas 6</option>
                        <option value="SMP Kelas 7">SMP Kelas 7</option>
                        <option value="SMP Kelas 8">SMP Kelas 8</option>
                        <option value="SMP Kelas 9">SMP Kelas 9</option>
                        <option value="SMA Kelas 10">SMA Kelas 10</option>
                        <option value="SMA Kelas 11">SMA Kelas 11</option>
                        <option value="SMA Kelas 12">SMA Kelas 12</option>
                        <option value="Mahasiswa">Mahasiswa</option>
                        <option value="Umum">Umum</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Kurikulum Sekolah *
                      </label>
                      <select
                        name="kurikulum"
                        required
                        value={formData.kurikulum}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Pilih Kurikulum</option>
                        <option value="Nasional (K13)">Nasional (K13)</option>
                        <option value="Nasional (Merdeka)">Nasional (Merdeka)</option>
                        <option value="Internasional">Internasional</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Kontak</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="noHpOrangTua" className="text-sm font-medium text-gray-700">
                          No HP Orang Tua *
                        </label>
                        <Input
                          id="noHpOrangTua"
                          name="noHpOrangTua"
                          type="tel"
                          required
                          value={formData.noHpOrangTua}
                          onChange={handleInputChange}
                          placeholder="+62 812-3456-7890"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="noHpSiswa" className="text-sm font-medium text-gray-700">
                          No HP Siswa
                        </label>
                        <Input
                          id="noHpSiswa"
                          name="noHpSiswa"
                          type="tel"
                          value={formData.noHpSiswa}
                          onChange={handleInputChange}
                          placeholder="+62 813-2345-6789"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Paket Belajar */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Paket Belajar</h2>
                    <p className="text-gray-600">Pilih program dan mata pelajaran yang diinginkan</p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">
                      Silakan pilih paket *
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {programs.map((program) => (
                        <div key={program.id} className="relative">
                          <input
                            type="radio"
                            name="programId"
                            id={program.id}
                            value={program.id}
                            required
                            checked={formData.programId === program.id}
                            onChange={handleInputChange}
                            className="sr-only peer"
                          />
                          <label
                            htmlFor={program.id}
                            className="block p-4 border-2 rounded-lg cursor-pointer transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-gray-400"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{program.name}</span>
                              <span className="text-sm text-gray-600">
                                Rp {program.price.toLocaleString('id-ID')}/sesi
                              </span>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">
                      Mata Pelajaran yang diambil *
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {subjects.map((subject) => (
                        <div key={subject} className="relative">
                          <input
                            type="checkbox"
                            id={subject}
                            checked={selectedSubjects.includes(subject)}
                            onChange={() => handleSubjectToggle(subject)}
                            className="sr-only peer"
                          />
                          <label
                            htmlFor={subject}
                            className="block p-3 border-2 rounded-lg cursor-pointer transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-gray-400 text-sm"
                          >
                            {subject}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">
                      Jumlah Sesi *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {sessionOptions.map((session) => (
                        <div key={session.id} className="relative">
                          <input
                            type="radio"
                            name="jumlahSesi"
                            id={`sesi-${session.id}`}
                            value={session.id}
                            checked={formData.jumlahSesi === session.id}
                            onChange={handleInputChange}
                            className="sr-only peer"
                          />
                          <label
                            htmlFor={`sesi-${session.id}`}
                            className="block p-3 border-2 rounded-lg cursor-pointer transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-gray-400 text-center"
                          >
                            <div className="font-medium">{session.label}</div>
                            {session.price < 1 && (
                              <div className="text-xs text-green-600">
                                Diskon {Math.round((1 - session.price) * 100)}%
                              </div>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="pesanTambahan" className="text-sm font-medium text-gray-700">
                      Pesan Tambahan (Opsional)
                    </label>
                    <Textarea
                      id="pesanTambahan"
                      name="pesanTambahan"
                      rows={4}
                      value={formData.pesanTambahan}
                      onChange={handleInputChange}
                      placeholder="Ceritakan kebutuhan atau tujuan belajar Anda..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Konfirmasi */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Konfirmasi Pendaftaran</h2>
                    <p className="text-gray-600">Periksa kembali data Anda sebelum mengirim</p>
                  </div>

                  <div className="space-y-6">
                    {/* Data Siswa */}
                    <Card className="p-6 border-0 bg-gray-50">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-blue-600" />
                          Data Siswa
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 space-y-3">
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Nama Lengkap:</span>
                            <p className="text-gray-900">{formData.namaLengkap}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Nama Panggilan:</span>
                            <p className="text-gray-900">{formData.namaPanggilan}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Jenis Kelamin:</span>
                            <p className="text-gray-900">{formData.jenisKelamin}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Asal Sekolah:</span>
                            <p className="text-gray-900">{formData.asalSekolah}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Kelas:</span>
                            <p className="text-gray-900">{formData.kelas}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Kurikulum:</span>
                            <p className="text-gray-900">{formData.kurikulum}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">No HP Orang Tua:</span>
                            <p className="text-gray-900">{formData.noHpOrangTua}</p>
                          </div>
                          {formData.noHpSiswa && (
                            <div>
                              <span className="font-medium text-gray-700">No HP Siswa:</span>
                              <p className="text-gray-900">{formData.noHpSiswa}</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Paket Belajar */}
                    <Card className="p-6 border-0 bg-gray-50">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                          Paket Belajar
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <span className="font-medium text-gray-700">Program:</span>
                            <p className="text-gray-900">{selectedProgram?.name}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Jumlah Sesi:</span>
                            <p className="text-gray-900">{selectedSession?.label}</p>
                          </div>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-700">Mata Pelajaran:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedSubjects.map((subject) => (
                              <Badge key={subject} variant="secondary">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {formData.pesanTambahan && (
                          <div>
                            <span className="font-medium text-gray-700">Pesan Tambahan:</span>
                            <p className="text-gray-900 mt-1">{formData.pesanTambahan}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Rincian Biaya */}
                    <Card className="p-6 border-0 bg-blue-50">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-blue-600" />
                          Rincian Biaya
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700">Harga per sesi:</span>
                          <span className="font-medium">
                            Rp {selectedProgram?.price.toLocaleString('id-ID')}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700">Jumlah sesi:</span>
                          <span className="font-medium">{formData.jumlahSesi} sesi</span>
                        </div>
                        {selectedSession && selectedSession.price < 1 && (
                          <div className="flex justify-between text-sm text-green-600">
                            <span>Diskon:</span>
                            <span className="font-medium">
                              -{Math.round((1 - selectedSession.price) * 100)}%
                            </span>
                          </div>
                        )}
                        <div className="border-t pt-3">
                          <div className="flex justify-between">
                            <span className="font-semibold text-gray-900">Total Biaya:</span>
                            <span className="font-bold text-lg text-blue-600">
                              Rp {calculateTotal().toLocaleString('id-ID')}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Persetujuan */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="setujuSyarat"
                          checked={formData.setujuSyarat}
                          onCheckedChange={(checked) => 
                            setFormData(prev => ({ ...prev, setujuSyarat: checked as boolean }))
                          }
                        />
                        <label htmlFor="setujuSyarat" className="text-sm text-gray-700 leading-relaxed">
                          Saya menyetujui syarat dan ketentuan yang berlaku dan data yang saya berikan adalah benar.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={currentStep === 1 ? 'invisible' : ''}
                >
                  Sebelumnya
                </Button>

                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Selanjutnya
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.setujuSyarat}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Kirim Pendaftaran
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}