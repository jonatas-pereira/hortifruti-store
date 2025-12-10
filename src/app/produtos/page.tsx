import styles from "./styles/produtos.module.scss"

import FindProductsProps from "@/interfaces/findProducts"
import ProductCard from "@/components/productCard/productCard"

export default async function Produtos() {

  const produtos = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products?category=verduras`, { cache: 'no-store' })
    .then(data => data.json())
    .then(res => res.data as FindProductsProps[])

  return (
    <div className={styles.list}>
      { 
        produtos.map((produto) => (
          <ProductCard
            id={produto.id} 
            imgurl={produto.imgurl} 
            name={produto.name}
            price={produto.price}
            unitmeasure={produto.unitmeasure} 
            key={produto.id}
          />
        ))
      }
    </div>
  )
}