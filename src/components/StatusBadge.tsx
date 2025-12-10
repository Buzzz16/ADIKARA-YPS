import styles from './StatusBadge.module.css';

type Status = 'pending' | 'processing' | 'completed' | 'rejected';

interface StatusBadgeProps {
    status: Status;
}

const statusConfig = {
    pending: { label: 'Menunggu', class: styles.pending },
    processing: { label: 'Diproses', class: styles.processing },
    completed: { label: 'Selesai', class: styles.completed },
    rejected: { label: 'Ditolak', class: styles.rejected },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    const config = statusConfig[status];
    return (
        <span className={`${styles.badge} ${config.class}`}>
            {config.label}
        </span>
    );
}
