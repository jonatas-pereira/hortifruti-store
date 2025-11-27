import styles from "./navBar.module.scss";
import { FaBook, FaPhone } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import Link from "next/link";

interface NavBarProp {
  closeNavbar?: () => void;
  isActive?: boolean;
}

export default function NavBar({closeNavbar, isActive}: NavBarProp) {
  return (
    <nav className={`${styles.container} ${!isActive && styles.active}`}>
      <ul>
        <Link href={"/"} onClick={closeNavbar}>
          Entre em Contato
          <FaPhone />
        </Link>
        <Link href={"/"} onClick={closeNavbar}>
          Quem somos
          <FaBook />
        </Link>
        <Link href={"/"} onClick={closeNavbar}>
          Onde Nos Encontrar
          <HiHome />
        </Link>
      </ul>
    </nav>
  )
}