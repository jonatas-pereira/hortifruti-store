"use client"

import styles from "./toggleMenu.module.scss"

interface ToggleMenuProps {
  alterMenu: () => void;
  isActive: boolean;
}

export default function ToggleMenu({ alterMenu, isActive }: ToggleMenuProps) {
  return (
    <div onClick={() => alterMenu()} className={`${styles.menuContainer} ${!isActive && styles.active}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}