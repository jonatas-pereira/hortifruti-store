"use client"

import styles from "./header.module.scss"
import Container  from "../container/container"
import ToggleMenu from "./toggleMenu/toggleMenu"
import NavBar from "../navBar/navBar"
import NavDeskTop from "../navBar/deskTop/navDeskTop"
import Logo from "@/../public/assets/logo.png"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(true)

  return (
    <div className={styles.headerBox}>
      <Container>
        <header className={styles.header}>
          <Link href={"/"}>
            <Image src={Logo} alt="Hortifruti São Felipe Logo" width={65}/>
          </Link>
          <ToggleMenu alterMenu={() => setIsOpenMenu(!isOpenMenu)} isActive={isOpenMenu} />
          <NavBar closeNavbar={() => setIsOpenMenu(!isOpenMenu)} isActive={isOpenMenu} />
          <NavDeskTop />
        </header>
      </Container>
    </div>
  )
}