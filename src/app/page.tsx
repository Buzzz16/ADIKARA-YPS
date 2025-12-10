import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Sampaikan Aspirasi<br />
            <span className="title-gradient">Wujudkan Perubahan</span>
          </h1>
          <p className={styles.subtitle}>
            Layanan pengaduan masyarakat yang transparan dan terpercaya.
            Hubungkan aspirasi Anda langsung dengan pihak yang berwenang.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/masyarakat/lapor" className="glass-button">
              Lapor Sekarang
            </Link>
            <Link href="#cara-kerja" style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              border: '1px solid var(--glass-border)',
              fontWeight: 600
            }}>
              Pelajari Cara Kerja
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features} id="fitur">
        <div className="container">
          <div className="grid-responsive">
            <div className={`glass-panel ${styles.featureCard}`}>
              <div className={styles.featureIcon}>📝</div>
              <h3>Tulis Laporan</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Laporkan keluhan atau aspirasi Anda dengan jelas dan lampirkan bukti pendukung.
              </p>
            </div>
            <div className={`glass-panel ${styles.featureCard}`}>
              <div className={styles.featureIcon}>🔍</div>
              <h3>Proses Verifikasi</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Laporan Anda akan diverifikasi oleh admin dan diteruskan kepada dosen terkait.
              </p>
            </div>
            <div className={`glass-panel ${styles.featureCard}`}>
              <div className={styles.featureIcon}>✅</div>
              <h3>Tindak Lanjut</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Pantau progres penyelesaian masalah secara realtime melalui dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <p>© 2024 Sistem Pengaduan Masyarakat. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
