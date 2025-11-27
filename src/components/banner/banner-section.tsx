"use client"

import styles from "./banner-section.module.scss"
import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"

interface BannerSectionProps {
  photos: {
    mobile: StaticImageData[],
    desk: StaticImageData[]
  } 
}

export default function BannerSection(
  { photos } : BannerSectionProps
) {
  const [imgIndex, setImgIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
        if(imgIndex == 0) setImgIndex(1)
        else if(imgIndex == 1) setImgIndex(2)
          else setImgIndex(0)
      }, 10000)
      return () => clearTimeout(timer)
  }, [imgIndex])

  return (
    <div className={styles.imgBox}>
      <Image src={photos.mobile[imgIndex]} alt={""} className={styles.mobile} />
      <Image src={photos.desk[imgIndex]}  alt={""} className={styles.desk} />
      <div className={styles.indicators}>
        <div className={`${imgIndex == 0 ? styles.active : styles.desativited}`} onClick={() => setImgIndex(0)}></div>
        <div className={`${imgIndex == 1 ? styles.active : styles.desativited}`} onClick={() => setImgIndex(1)}></div>
        <div className={`${imgIndex == 2 ? styles.active : styles.desativited}`} onClick={() => setImgIndex(2)}></div>
      </div>
    </div>
  )
}