import Link from 'next/link';

export default function LoginPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Masuk</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input type="email" placeholder="Email" className="glass-button" style={{ background: 'rgba(0,0,0,0.2)', textAlign: 'left', cursor: 'text' }} />
                    <input type="password" placeholder="Password" className="glass-button" style={{ background: 'rgba(0,0,0,0.2)', textAlign: 'left', cursor: 'text' }} />

                    <Link href="/masyarakat/dashboard" className="glass-button" style={{ marginTop: '1rem', textAlign: 'center' }}>
                        Masuk sebagai Masyarakat
                    </Link>
                    <Link href="/dosen/dashboard" className="glass-button" style={{ background: 'transparent', textAlign: 'center' }}>
                        Masuk sebagai Dosen
                    </Link>
                </div>
            </div>
        </div>
    );
}
