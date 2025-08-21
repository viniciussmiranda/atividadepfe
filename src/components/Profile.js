import Image from "next/image";
import styles from "../styles/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.texto}>
          <h2>Vinicius Miranda</h2>
          <p>
            Estudante de Sistemas para Internet pela UNICAP, técnico em eletrônica pelo IFPE
            e Estagiário de redes no Grupo Moura.
          </p>
        </div>
        <div className={styles.foto}>
          <Image
            src="/minhafoto.jpeg"
            alt="minha foto"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
