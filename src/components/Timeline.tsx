import styles from './Timeline.module.css';

interface TimelineItem {
    date: string;
    title: string;
    description: string;
    isActive?: boolean;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <div className={styles.timeline}>
            {items.map((item, index) => (
                <div key={index} className={`${styles.item} ${item.isActive ? styles.active : ''}`}>
                    <div className={styles.dot} />
                    <div className={styles.content}>
                        <span className={styles.date}>{item.date}</span>
                        <h4 className={styles.title}>{item.title}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
