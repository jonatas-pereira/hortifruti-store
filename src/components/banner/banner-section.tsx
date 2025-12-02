"use client"

import styles from "./banner-section.module.scss"
import { useState, useEffect } from "react"

import bannerMobile1 from "@/assets/bannerImg/mobileBanner/1.png"
import bannerMobile2 from "@/assets/bannerImg/mobileBanner/2.png"
import bannerMobile3 from "@/assets/bannerImg/mobileBanner/3.png"

import bannerDesk1 from "@/assets/bannerImg/deskBanner/1.png"
import bannerDesk2 from "@/assets/bannerImg/deskBanner/2.png"
import bannerDesk3 from "@/assets/bannerImg/deskBanner/3.png"

interface BannerSectionProps {
  photos: {
    mobile: string[],
    desk: string[]
  } 
}

const photos = {
  mobile: [bannerMobile1.src, bannerMobile2.src,  bannerMobile3.src],
  desk: [bannerDesk1.src, bannerDesk2.src,  bannerDesk3.src]
}

export default function BannerSection() {
  const [imgIndex, setImgIndex] = useState(0)

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
      <img src={photos.mobile[imgIndex]} alt={""} className={styles.mobile} />
      <img src={photos.desk[imgIndex]}  alt={""} className={styles.desk} />
      <div className={styles.indicators}>
        <div className={`${imgIndex == 0 ? styles.active : styles.desativited}`} onClick={() => setImgIndex(0)}></div>
        <div className={`${imgIndex == 1 ? styles.active : styles.desativited}`} onClick={() => setImgIndex(1)}></div>
        <div className={`${imgIndex == 2 ? styles.active : styles.desativited}`} onClick={() => setImgIndex(2)}></div>
      </div>
    </div>
  )
}