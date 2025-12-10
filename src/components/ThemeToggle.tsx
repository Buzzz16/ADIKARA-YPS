'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            background: 'rgba(255,255,255,0.1)',
            padding: '4px',
            borderRadius: '999px',
            border: '1px solid var(--glass-border)'
        }}>
            <button
                onClick={() => setTheme('light')}
                style={{
                    padding: '6px 12px',
                    borderRadius: '999px',
                    background: theme === 'light' ? 'white' : 'transparent',
                    color: theme === 'light' ? 'black' : 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: 600
                }}
                title="Light Mode"
            >
                ☀
            </button>
            <button
                onClick={() => setTheme('dark')}
                style={{
                    padding: '6px 12px',
                    borderRadius: '999px',
                    background: theme === 'dark' ? 'rgba(0,0,0,0.5)' : 'transparent',
                    color: theme === 'dark' ? 'white' : 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: 600
                }}
                title="Dark Mode"
            >
                🌙
            </button>
            <button
                onClick={() => setTheme('large')}
                style={{
                    padding: '6px 12px',
                    borderRadius: '999px',
                    background: theme === 'large' ? 'black' : 'transparent',
                    color: theme === 'large' ? 'white' : 'var(--text-muted)',
                    fontSize: '0.9rem', // Slightly bigger icon
                    fontWeight: 700
                }}
                title="Large Text / Accessibility"
            >
                A+
            </button>
        </div>
    );
}
