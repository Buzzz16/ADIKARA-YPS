import Link from 'next/link';
import StatusBadge from './StatusBadge';
import styles from './ComplaintCard.module.css';

interface ComplaintCardProps {
    id: string;
    title: string;
    category: string;
    date: string;
    status: 'pending' | 'processing' | 'completed' | 'rejected';
    preview: string;
}

export default function ComplaintCard({ id, title, category, date, status, preview }: ComplaintCardProps) {
    return (
        <Link href={`/keluhan/${id}`}>
            <div className={`glass-panel ${styles.card}`}>
                <div>
                    <span className={styles.category}>{category}</span>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                    </div>
                    <p className={styles.preview}>{preview}</p>
                </div>

                <div className={styles.footer}>
                    <span className={styles.date}>{date}</span>
                    <StatusBadge status={status} />
                </div>
            </div>
        </Link>
    );
}
