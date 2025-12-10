import styles from "./productCard.module.scss"
import FindProductsProps from "@/interfaces/findProducts"
import Link from "next/link"

export default function ProductCard(props: FindProductsProps) {
  return (
    <div className={styles.produtoElement} key={props.id}>
      <img src={props.imgurl} alt={`imagem de ${props.name}`} />
      <div className={styles.produtoNome}>
        <span>{props.name} - {props.unitmeasure}</span>
        <span>R${props.price.toFixed(2).toString().replace(".", ",")}</span>
      </div>
      <Link href={`/produtos/${props.id}`} className={styles.seeProduct}>Ver Produto</Link>
    </div>
  )
}