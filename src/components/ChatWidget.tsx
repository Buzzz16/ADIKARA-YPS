'use client';

import { useState } from 'react';
import styles from './ChatWidget.module.css';

export default function ChatWidget({ title = 'Diskusi' }: { title?: string }) {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Halo, laporan Anda sudah kami terima dan sedang diverifikasi.', sender: 'system' }
    ]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const send = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
        setInput('');
    };

    return (
        <div className={`${styles.widgetWrapper} ${isOpen ? styles.open : ''}`}>
            {!isOpen && (
                <button
                    className={styles.toggleButton}
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Chat"
                >
                    💬
                </button>
            )}

            <div className={styles.chatContainer}>
                <div className={styles.header} onClick={() => setIsOpen(false)}>
                    <div>
                        <h4>{title}</h4>
                        <span style={{ fontSize: '0.8rem', color: 'var(--success)' }}>● Online</span>
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                        className={styles.closeBtn}
                    >
                        ▼
                    </button>
                </div>

                <div className={styles.messages}>
                    {messages.map(msg => (
                        <div key={msg.id} className={`${styles.message} ${msg.sender === 'user' ? styles.sent : styles.received}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>

                <form className={styles.inputArea} onSubmit={send}>
                    <input
                        className={styles.input}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Tulis pesan..."
                    />
                    <button type="submit" className="glass-button" style={{ padding: '0.5rem 1rem' }}>
                        ➤
                    </button>
                </form>
            </div>
        </div>
    );
}
