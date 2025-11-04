import { google } from 'googleapis';

export interface GoogleSheetsConfig {
  spreadsheetId: string;
  range: string;
  karirRange: string;
  serviceAccountEmail?: string;
  privateKey?: string;
}

export interface RegistrationData {
  namaPanggilan: string;
  namaLengkap: string;
  jenisKelamin: string;
  asalSekolah: string;
  kelas: string;
  kurikulum: string;
  noHpOrangTua: string;
  noHpSiswa?: string;
  programId: string;
  program?: any;
  mataPelajaran: string;
  jumlahSesi: number;
  status: string;
  createdAt: string;
}

export interface KarirData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  message: string;
  resume: string;
  createdAt: string;
}

export class GoogleSheetsService {
  private spreadsheetId: string;
  private range: string;
  private karirRange: string;
  private serviceAccountEmail: string;
  private privateKey: string;

  constructor(config: GoogleSheetsConfig) {
    this.spreadsheetId = config.spreadsheetId;
    this.range = config.range;
    this.karirRange = config.karirRange;
    this.serviceAccountEmail = config.serviceAccountEmail || '';
    this.privateKey = config.privateKey || '';
  }

  private async getAuth() {
    const auth = new google.auth.JWT({
      email: this.serviceAccountEmail,
      key: this.privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    await auth.authorize();
    return auth;
  }

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

export const googleSheetsService = new GoogleSheetsService({
  spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID || '',
  range: process.env.GOOGLE_SHEETS_RANGE || 'pendaftaran!A:N',
  karirRange: process.env.GOOGLE_SHEETS_KARIR_RANGE || 'karir!A:I',
  serviceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
  privateKey: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
});