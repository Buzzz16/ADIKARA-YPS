'use client';

import { useState } from 'react';
import styles from './ComplaintForm.module.css';

export default function ComplaintForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call (FR4: success < 3s)
        await new Promise(resolve => setTimeout(resolve, 1500));

        alert('Laporan berhasil dikirim! Kami akan segera memverifikasinya.');
        setIsSubmitting(false);
        // In real app: router.push('/masyarakat/dashboard');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className={`glass-panel ${styles.formContainer}`}>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Formulir Pengaduan</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Judul Laporan</label>
                    <input
                        type="text"
                        required
                        className={styles.input}
                        placeholder="Contoh: Infrastruktur Rusak di..."
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Kategori Permasalahan (FR6)</label>
                    <select className={styles.select} required>
                        <option value="">Pilih Kategori...</option>
                        <option value="infrastruktur">Infrastruktur & Fasilitas Umum</option>
                        <option value="lingkungan">Lingkungan & Kebersihan</option>
                        <option value="keamanan">Keamanan & Ketertiban</option>
                        <option value="pelayanan">Pelayanan Publik</option>
                        <option value="akademik">Akademik & Perkuliahan</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Deskripsi Detail</label>
                    <textarea
                        required
                        className={styles.textarea}
                        placeholder="Jelaskan detail permasalahan, lokasi, dan waktu kejadian..."
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Bukti Pendukung (FR5)</label>
                    <div className={styles.fileDropzone}>
                        <input
                            type="file"
                            id="file"
                            className={styles.input}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            accept="image/*,.pdf"
                        />
                        <label htmlFor="file" style={{ cursor: 'pointer', width: '100%', display: 'block' }}>
                            {file ? (
                                <span style={{ color: 'var(--success)' }}>✅ {file.name}</span>
                            ) : (
                                <span>📂 Klik untuk unggah foto/dokumen (Maks 5MB)</span>
                            )}
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className={`glass-button ${styles.submitBtn}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Laporan'}
                </button>
            </form>
        </div>
    );
}
