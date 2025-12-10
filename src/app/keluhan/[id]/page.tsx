import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import ChatWidget from '@/components/ChatWidget';
import StatusBadge from '@/components/StatusBadge';

export default function ComplaintDetail({ params }: { params: { id: string } }) {
    // Mock Data
    const data = {
        id: params.id,
        title: 'Jalan Berlubang di Jl. Merdeka',
        status: 'processing' as const,
        category: 'Infrastruktur',
        date: '10 Des 2024',
        description: 'Terdapat lubang besar dengan diameter sekitar 50cm di depan toko ABC. Sangat membahayakan terutama saat malam hari karena penerangan kurang.',
        timeline: [
            { date: '10 Des 2024 08:30', title: 'Laporan Dibuat', description: 'Laporan berhasil dikirim oleh pelapor.', isActive: false },
            { date: '10 Des 2024 09:15', title: 'Verifikasi Admin', description: 'Laporan valid dan telah diverifikasi.', isActive: false },
            { date: '10 Des 2024 10:00', title: 'Diproses Dosen', description: 'Dosen Pembimbing Lapangan mulai menangani.', isActive: true },
        ]
    };

    return (
        <div style={{ minHeight: '100vh' }}>
            <Navbar />

            <main className="container" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                            <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{data.category}</span>
                            <h1 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{data.title}</h1>
                            <p style={{ color: 'var(--text-muted)' }}>Dilaporkan pada {data.date}</p>
                        </div>
                        <StatusBadge status={data.status} />
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Deskripsi</h3>
                        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                            {data.description}
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                        {/* Mock Evidence Images */}
                        <div style={{ minWidth: 200, height: 150, background: '#333', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Bukti Foto 1
                        </div>
                        <div style={{ minWidth: 200, height: 150, background: '#333', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Bukti Foto 2
                        </div>
                    </div>
                </div>

                <div className="grid-responsive" style={{ alignItems: 'start' }}>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Diskusi & Tindak Lanjut</h2>
                        <ChatWidget />
                    </div>

                    <div>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Riwayat Progres (FR15)</h2>
                        <div className="glass-panel" style={{ padding: '1.5rem' }}>
                            <Timeline items={data.timeline} />
                        </div>

                        <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Dosen Penanggung Jawab</h3>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent-secondary)' }}></div>
                                <div>
                                    <h4 style={{ margin: 0 }}>Dr. Ir. Budi Santoso</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Teknik Sipil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
