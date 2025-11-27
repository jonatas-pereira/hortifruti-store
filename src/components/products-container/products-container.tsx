"use client"

import styles from "./products-category.module.scss";
import ProductContainerProps from "./types/product-container-props";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function ProductsContainer({ category, products } : ProductContainerProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState(0);

   useEffect(() => {
    if (!sliderRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const el = entries[0].contentRect;
      setWindowSize(el.width);
    });

    observer.observe(sliderRef.current);

    return () => observer.disconnect();
  }, []);


  const scrollLeft = () => {  
    sliderRef.current?.scrollBy({
      left: -windowSize,
      behavior: "smooth"
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
        <Link href={`/`}>Ver todos</Link>
        <button className={styles.btn} onClick={scrollLeft}>
          <FaArrowLeft />
        </button>
        <button className={styles.btn} onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
      <div className={styles.slider} ref={sliderRef}>
        { 
          products.map((produto) => (
            <Link href={`/produto?id=${produto.id}`} className={styles.produtoElement} key={produto.id}>
              <img src={produto.img} alt="" />
              <div className={styles.produtoNome}>
                <span>{produto.name}</span>
                <span>R${produto.price}</span>
              </div>
              <button className={styles.seeProduct}>Ver Produto</button>
            </Link>
          ))
        }
      </div>
    </div>
  );
};
