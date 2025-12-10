import Link from 'next/link';
import ComplaintCard from '@/components/ComplaintCard';
import styles from './page.module.css';

// Dummy data
const complaints = [
    {
        id: '1',
        title: 'Jalan Berlubang di Jl. Merdeka',
        category: 'Infrastruktur',
        date: '10 Des 2024',
        status: 'pending' as const,
        preview: 'Terdapat lubang besar yang membahayakan pengendara motor di depan toko ABC.'
    },
    {
        id: '2',
        title: 'Sampah Menumpuk di Pasar Baru',
        category: 'Lingkungan',
        date: '08 Des 2024',
        status: 'processing' as const,
        preview: 'Sampah belum diangkut selama 3 hari, menimbulkan bau tidak sedap.'
    },
    {
        id: '3',
        title: 'Lampu Jalan Mati',
        category: 'Infrastruktur',
        date: '01 Des 2024',
        status: 'completed' as const,
        preview: 'Lampu penerangan jalan di sektor 5 mati total.'
    }
];

export default function MasyarakatDashboard() {
    return (
        <div>
            <header className={styles.header}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        Halo, <span className="title-gradient">Budi Santoso</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Selamat datang kembali di dashboard pengaduan.</p>
                </div>
                <Link href="/masyarakat/lapor" className="glass-button">
                    + Buat Laporan Baru
                </Link>
            </header>

            <section className={styles.statsGrid}>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Laporan</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 700 }}>12</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sedang Diproses</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--warning)' }}>3</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Selesai</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--success)' }}>8</p>
                </div>
            </section>

            <section className={styles.recentSection}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Riwayat Pengaduan</h2>
                <div className="grid-responsive">
                    {complaints.map(complaint => (
                        <ComplaintCard key={complaint.id} {...complaint} />
                    ))}
                </div>
            </section>
        </div>
    );
}
