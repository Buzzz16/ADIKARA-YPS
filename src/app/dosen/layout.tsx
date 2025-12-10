import Sidebar from '@/components/Sidebar';
import styles from '../dashboard.layout.module.css';

export default function DosenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <Sidebar role="dosen" />
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}
