import { google } from 'googleapis';

// Interface config tidak lagi membutuhkan email dan key terpisah
export interface GoogleSheetsConfig {
  spreadsheetId: string;
  range: string;
  karirRange: string;
  serviceAccount: any; // <-- TAMBAHKAN INI
}

// ... (interface RegistrationData dan KarirData tidak berubah) ...

export class GoogleSheetsService {
  private spreadsheetId: string;
  private range: string;
  private karirRange: string;
  private serviceAccount: any; // <-- UBAH INI

  constructor(config: GoogleSheetsConfig) {
    this.spreadsheetId = config.spreadsheetId;
    this.range = config.range;
    this.karirRange = config.karirRange;
    this.serviceAccount = config.serviceAccount; // <-- UBAH INI
  }

  private async getAuth() {
    // Gunakan objek serviceAccount langsung untuk autentikasi
    const auth = new google.auth.GoogleAuth({
      credentials: this.serviceAccount, // <-- LEBIH SEDERHANA
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    return auth;
  }

  // ... (semua metode lain seperti appendData, appendKarirData, dll. TIDAK PERLU DIUBAH) ...
  async appendData(data: RegistrationData): Promise<void> {
    const auth = await this.getAuth();
    const sheets = google.sheets({ version: 'v4', auth });
    
    const values = [
      [
        data.namaPanggilan,
        data.namaLengkap,
        data.jenisKelamin,
        data.asalSekolah,
        data.kelas,
        data.kurikulum,
        data.noHpOrangTua,
        data.noHpSiswa || '',
        data.programId,
        data.program?.nama || '',
        data.mataPelajaran,
        data.jumlahSesi,
        data.status,
        data.createdAt,
      ],
    ];
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: this.spreadsheetId,
      range: this.range,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });
  }

  async appendKarirData(data: KarirData): Promise<void> {
    const auth = await this.getAuth();
    const sheets = google.sheets({ version: 'v4', auth });
    
    const values = [
      [
        data.name,
        data.email,
        data.phone,
        data.position,
        data.experience,
        data.education,
        data.message,
        data.resume,
        data.createdAt,
      ],
    ];
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: this.spreadsheetId,
      range: this.karirRange,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });
  }

  async createHeaders(): Promise<void> {
    const auth = await this.getAuth();
    const sheets = google.sheets({ version: 'v4', auth });
    
    const headers = [
      [
        'Nama Panggilan',
        'Nama Lengkap',
        'Jenis Kelamin',
        'Asal Sekolah',
        'Kelas',
        'Kurikulum',
        'No HP Orang Tua',
        'No HP Siswa',
        'Program ID',
        'Program',
        'Mata Pelajaran',
        'Jumlah Sesi',
        'Status',
        'Tanggal Pendaftaran',
      ],
    ];
    
    await sheets.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId,
      range: 'A1:N1',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: headers },
    });
  }

  async createKarirHeaders(): Promise<void> {
    const auth = await this.getAuth();
    const sheets = google.sheets({ version: 'v4', auth });
    
    const headers = [
      [
        'Nama',
        'Email',
        'Telepon',
        'Posisi',
        'Pengalaman',
        'Pendidikan',
        'Pesan',
        'Resume',
        'Tanggal Lamaran',
      ],
    ];
    
    await sheets.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId,
      range: 'karir!A1:I1',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: headers },
    });
  }

  async getData(): Promise<any[]> {
    const auth = await this.getAuth();
    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: this.spreadsheetId,
      range: this.range,
    });
    
    const rows = response.data.values || [];
    if (rows.length === 0) return [];
    
    const headers = rows[0];
    return rows.slice(1).map(row => {
      const obj: any = {};
      headers.forEach((header, index) => {
        obj[header] = row[index] || '';
      });
      return obj;
    });
  }

  async testConnection(): Promise<boolean> {
    try {
      const auth = await this.getAuth();
      const sheets = google.sheets({ version: 'v4', auth });
      
      const res = await sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'A1:N1',
      });
      console.log('✅ Koneksi ke Google Sheets berhasil!', res.data.values);
      return true;
    } catch (error) {
      console.error('❌ Gagal koneksi ke Google Sheets:', error);
      return false;
    }
  }
}

// --- BAGIAN PALING AKHIR YANG PALING PENTING DIUBAH ---

// Baca variabel JSON dari environment
const serviceAccountJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;

// Pastikan variabelnya ada sebelum diparse
if (!serviceAccountJson) {
  throw new Error('Environment variable GOOGLE_APPLICATION_CREDENTIALS_JSON is not set.');
}

const serviceAccount = JSON.parse(serviceAccountJson);

export const googleSheetsService = new GoogleSheetsService({
  spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID || '',
  range: process.env.GOOGLE_SHEETS_RANGE || 'pendaftaran!A:N',
  karirRange: process.env.GOOGLE_SHEETS_KARIR_RANGE || 'karir!A:I',
  serviceAccount: serviceAccount, // <-- KIRIM OBJEK YANG SUDAH DI-PARSE
});