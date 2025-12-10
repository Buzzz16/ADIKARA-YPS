import Link from 'next/link';
import ComplaintCard from '@/components/ComplaintCard';
import styles from './page.module.css';

// Mock Data
const recommendations = [
    {
        id: '4',
        title: 'Kerusakan Jembatan Desa',
        category: 'Infrastruktur',
        date: '10 Des 2024',
        status: 'pending' as const,
        preview: 'Jembatan penghubung desa mengalami keretakan di pondasi utama.'
    },
    {
        id: '5',
        title: 'Saluran Irigasi Mampet',
        category: 'Lingkungan',
        date: '09 Des 2024',
        status: 'pending' as const,
        preview: 'Saluran irigasi sawah tertimbun sampah plastik.'
    }
];

const activeCases = [
    {
        id: '1',
        title: 'Jalan Berlubang di Jl. Merdeka',
        category: 'Infrastruktur',
        date: '10 Des 2024',
        status: 'processing' as const,
        preview: 'Terdapat lubang besar yang membahayakan pengendara motor...'
    }
];

export default function DosenDashboard() {
    return (
        <div>
            <header className={styles.header}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        Halo, <span className="title-gradient">Dr. Budi</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Berikut adalah keluhan yang sesuai dengan keahlian Anda (Infrastruktur).</p>
                </div>
            </header>

            <section className={styles.statsGrid}>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sedang Ditangani</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--warning)' }}>1</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Selesai</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--success)' }}>15</p>
                </div>
            </section>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Rekomendasi Keluhan (FR9)</h2>
            <div className="grid-responsive" style={{ marginBottom: '3rem' }}>
                {recommendations.map(complaint => (
                    <div key={complaint.id} style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: -10, right: 10, background: 'var(--accent-primary)', padding: '0.25rem 0.5rem', borderRadius: 4, zIndex: 10, fontSize: '0.75rem', fontWeight: 'bold' }}>
                            95% Cocok
                        </div>
                        <ComplaintCard {...complaint} />
                    </div>
                ))}
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Sedang Ditangani</h2>
            <div className="grid-responsive">
                {activeCases.map(complaint => (
                    <ComplaintCard key={complaint.id} {...complaint} />
                ))}
            </div>
        </div>
    );
}
