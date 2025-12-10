"use client"

import styles from "./products-category.module.scss";
import ProductContainerProps from "./types/product-container-props";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ProductsContainer({ category, products } : ProductContainerProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    if (!sliderRef.current) return

    const observer = new ResizeObserver((entries) => {
      const el = entries[0].contentRect
      setWindowSize(el.width)
    });

    observer.observe(sliderRef.current)

    return () => observer.disconnect()
  }, [])


  const scrollLeft = () => {  
    sliderRef.current?.scrollBy({
      left: -windowSize,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: windowSize,
      behavior: "smooth"
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnContainer}>
        <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/produtos?categoria=${category}`}>Ver todos</Link>
        <button className={styles.btn} onClick={scrollLeft}>
          <FaArrowLeft />
        </button>
        <button className={styles.btn} onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
      <Link href={`/`} className={styles.allProducts}>Ver todos</Link>
      <div className={styles.slider} ref={sliderRef}>
        { 
          products.map((product) => (
            <div className={styles.produtoElement} key={product.id}>
              <img src={product.imgurl} alt={`imagem de ${product.name}`} />
              <div className={styles.produtoNome}>
                <span>{product.name} - {product.unitmeasure}</span>
                <span>R${product.price.toFixed(2).toString().replace(".", ",")}</span>
              </div>
              <Link href={`/produtos/${product.id}`} className={styles.seeProduct}>Ver Produto</Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};
