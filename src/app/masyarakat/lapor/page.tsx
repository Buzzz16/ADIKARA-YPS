import ComplaintForm from '@/components/ComplaintForm';

export default function LaporPage() {
    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Buat Laporan Baru</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Silakan sampaikan aspirasi atau keluhan Anda dengan data yang valid.</p>
            </div>

            <ComplaintForm />
        </div>
    );
}
