import styles from "@/app/styles/not-found.module.scss"

import notFoundIcon from "@/../public/assets/not-found/not-found-icon.png"

import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.pageContent}>
        <Image src={notFoundIcon} alt="Imagem da página de não encontrado" width={200}/>
        <span>Página não encontrada</span>
        <Link href={`/`}>Voltar para o início</Link>
      </div>
    </div>
  )
}