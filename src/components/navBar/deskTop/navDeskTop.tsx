"use client"

import styles  from "./navDeskTop.module.scss"
import { HiHome } from "react-icons/hi"
import { FaBook } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import Link from "next/link"

export default function NavDeskTop() {
  return (
    <div className={`${styles.navContainer}`}>
      <nav>
        <Link href={`/`}>
          Entre em Contato
          <FaPhone />
        </Link>
        <Link href={`/`}>
          Quem somos
          <FaBook />
        </Link>
        <Link href={`/`}>
          Onde Nos Encontrar
          <HiHome />
        </Link>
      </nav>
    </div>
  )
}