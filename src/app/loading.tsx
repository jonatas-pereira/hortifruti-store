import Image from "next/image"
import styles from "./styles/loading.module.scss"

import loadingGIF from "@/../public/assets/loading/YlWC.gif"

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingContent}>
        <Image src={loadingGIF} alt="gif loading"/>
        <span>Carregando</span>
      </div>
    </div>
  )
}