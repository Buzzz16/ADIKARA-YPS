import Sidebar from '@/components/Sidebar';
import styles from '../dashboard.layout.module.css';

export default function MasyarakatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <Sidebar role="masyarakat" />
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}
