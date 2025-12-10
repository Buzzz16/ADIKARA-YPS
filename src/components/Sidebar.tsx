'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

interface SidebarProps {
    role: 'masyarakat' | 'dosen';
}

export default function Sidebar({ role }: SidebarProps) {
    const pathname = usePathname();

    const links = role === 'masyarakat' ? [
        { href: '/masyarakat/dashboard', label: 'Dashboard', icon: '📊' },
        { href: '/masyarakat/lapor', label: 'Buat Laporan', icon: '📝' },
        { href: '/masyarakat/profil', label: 'Profil Saya', icon: '👤' },
    ] : [
        { href: '/dosen/dashboard', label: 'Dashboard', icon: '📊' },
        { href: '/dosen/profil', label: 'Profil Keahlian', icon: '🎓' },
    ];

    return (
        <aside className={styles.sidebar}>
            <Link href="/" className={styles.brand} style={{ textDecoration: 'none' }}>
                <div style={{ width: 24, height: 24, background: 'var(--accent-gradient)', borderRadius: 6 }}></div>
                SuaraKita
            </Link>

            <nav className={styles.nav}>
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                        >
                            <span>{link.icon}</span>
                            {link.label}
                        </Link>
                    );
                })}

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                    <Link href="/" className={styles.navItem}>
                        <span>🏠</span>
                        Kembali ke Beranda
                    </Link>
                </div>
            </nav>

            <div className={styles.userProfile}>
                <div className={styles.avatar}>
                    {role === 'masyarakat' ? 'M' : 'D'}
                </div>
                <div className={styles.userInfo}>
                    <h4>{role === 'masyarakat' ? 'Masyarakat' : 'Dosen'}</h4>
                    <p>{role === 'masyarakat' ? 'Warga' : 'Fakultas Teknik'}</p>
                </div>
            </div>
        </aside>
    );
}
