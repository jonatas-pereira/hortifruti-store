import styles from "./styles/layout.module.scss"

import Container from "@/components/container/container"

import Link from "next/link"

export default function ProdutoLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <div>
      <Container>
        <div>
          <div className={styles.filtros}>
            <Link href={``}>Menor Preco</Link>
            <Link href={``}></Link>
            <Link href={``}></Link>
          </div>
          <div>
            { children }
          </div>
        </div>
      </Container>
    </div>
  )
}