import styles from "./footer.module.scss"

import Container from "../container/container"
import Logo from "@/assets/logo.png"
import Image from "next/image"
import { FaHeart } from "react-icons/fa"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.brandInfo}>
            <Image src={Logo} alt="Logo do Hortifruti São Felipe" width={90} />
            &copy; 2025 Hortifruti São Felipe. Todos os direitos reservados.
          </div>
          <div className={styles.techInfo}>
            <span>
              Desenvolvido com <FaHeart color="red" width={30}/> por Equipe Hortifruti São Felipe.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}