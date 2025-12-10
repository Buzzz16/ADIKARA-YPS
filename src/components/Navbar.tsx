'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <Link href="/" className="title-gradient">SuaraKita</Link>
            </div>
            <div className={styles.navLinks}>
                <Link href="/" className={styles.link}>Beranda</Link>
                <Link href="#fitur" className={styles.link}>Fitur</Link>
                <Link href="#panduan" className={styles.link}>Panduan</Link>

                <ThemeToggle />

                <Link href="/login" className={styles.loginBtn}>
                    Masuk
                </Link>
            </div>
        </nav>
    );
}
