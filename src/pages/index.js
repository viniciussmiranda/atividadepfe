import Profile from '@/components/Profile';
import styles from "../styles/Index.module.css";

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <h1>Site criado para a disciplina Programação Front-End</h1>
      </header>
      <Profile />
    </>
  );
}
