"use client"

import styles from "./banner-section.module.scss"
import { useState, useEffect, useRef } from "react"

import bannerMobile1 from "@/../public/assets/bannerImg/mobileBanner/1.png"
import bannerMobile2 from "@/../public/assets/bannerImg/mobileBanner/2.png"
import bannerMobile3 from "@/../public/assets/bannerImg/mobileBanner/3.png"

import bannerDesk1 from "@/../public/assets/bannerImg/deskBanner/1.png"
import bannerDesk2 from "@/../public/assets/bannerImg/deskBanner/2.png"
import bannerDesk3 from "@/../public/assets/bannerImg/deskBanner/3.png"
import Image from "next/image"

const photos = {
  mobile: [bannerMobile1.src, bannerMobile2.src,  bannerMobile3.src],
  desk: [bannerDesk1.src, bannerDesk2.src,  bannerDesk3.src]
}

export default function BannerSection() {
  const [imgIndex, setImgIndex] = useState(0)
  const imgRefMobile = useRef<HTMLImageElement | null>(null)
  const imgRefDesk = useRef<HTMLImageElement | null>(null)
  const [imgHeightMobile, setImgHeightMobile] = useState(0)
  const [imgHeightDesk, setImgHeightDesk] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      imgIndex < photos.mobile.length-1 || imgIndex < photos.desk.length-1 
      ? setImgIndex(imgIndex+1) : setImgIndex(0)
      }, 10000)
      return () => clearTimeout(timer)
  }, [imgIndex])

  useEffect(() => {
    if (!imgRefMobile.current) return;
    const obs = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setImgHeightMobile(entry.contentRect.height);
      }
    });
    obs.observe(imgRefMobile.current);
    return () => obs.disconnect();
  }, [imgHeightMobile]);

  useEffect(() => {
    if (!imgRefDesk.current) return;
    const obs = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setImgHeightDesk(entry.contentRect.height);
      }
    });
    obs.observe(imgRefDesk.current);
    return () => obs.disconnect();
  }, [imgHeightDesk]);

  return (
    <div className={styles.bannerContainer}>
      <div 
        className={ `${styles.bannerCard} ${styles.mobile}`}
        style={{ height: `${imgHeightMobile}px` }}
      >
        {
          photos.mobile.map((photo, index) => (
            <Image 
              ref={imgRefMobile}
              src={photo} 
              alt={`Imagem de banner ${index}`}
              key={index} 
              width={1000}
              height={1000}
              className={
                `
                ${styles.imgEl}
                ${imgIndex == index ? styles.enable : ""}
                `
              }
            />
          ))
        }
      </div>
      <div 
        className={ `${styles.bannerCard} ${styles.desk}`}
        style={{ height: `${imgHeightDesk}px` }}
      >
        {
          photos.desk.map((photo, index) => (
            <Image 
              ref={imgRefDesk}
              src={photo} 
              alt={`Imagem de banner ${index}`}
              key={index} 
              width={1500}
              height={1500}
              className={
                `
                ${styles.imgEl}
                ${imgIndex == index ? styles.enable : ""}
                `
              }
            />
          ))
        }
      </div>
      <div className={styles.indicators}>
        <div 
          className={`${imgIndex == 0 ? styles.active : styles.desativited}`} 
          onClick={() => setImgIndex(0)}
        ></div>
        <div 
          className={`${imgIndex == 1 ? styles.active : styles.desativited}`} 
          onClick={() => setImgIndex(1)}
        ></div>
        <div 
          className={`${imgIndex == 2 ? styles.active : styles.desativited}`} 
          onClick={() => setImgIndex(2)}
        ></div>
      </div>
    </div>
  )
}