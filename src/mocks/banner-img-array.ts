import bannerImg1Mobile from '@/assets/bannerImg/mobileBanner/1.png';
import bannerImg2Mobile from '@/assets/bannerImg/mobileBanner/1.png';
import bannerImg3Mobile from '@/assets/bannerImg/mobileBanner/1.png';

import bannerImg1Desk from '@/assets/bannerImg/deskBanner/1.png';
import bannerImg2Desk from '@/assets/bannerImg/deskBanner/2.png';
import bannerImg3Desk from '@/assets/bannerImg/deskBanner/3.png';
import { StaticImageData } from 'next/image';

export const bannerImgArray: { desk: StaticImageData[]; mobile: StaticImageData[]} = {
  mobile: [
    bannerImg1Mobile,
    bannerImg2Mobile,
    bannerImg3Mobile
  ],
  desk: [
    bannerImg1Desk,
    bannerImg2Desk,
    bannerImg3Desk
  ]
}