"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import styles from "./trustSec.module.css";

export default function TrustSlider() {
  const slides = [
    { src: "/images/flat-design-handyman-logo_23-2149239540 1.png", type: "normal" },
    { src: "/images/download (9) 1.png", type: "normal" },
    { src: "/images/download (12) 1.png", type: "normal" },
    { src: "/images/download (13) 1.png", type: "normal" },
    { src: "/images/images (8) 1.png", type: "normal" },
    { src: "/images/images (4) 1.png", type: "big" },
    { src: "/images/images (5) 1.png", type: "large" },
    { src: "/images/flat-design-handyman-logo_23-2149239540 2.png", type: "normal" },
    { src: "/images/download (9) 2.png", type: "normal" },
    { src: "/images/download (12) 2.png", type: "normal" },
    { src: "/images/download (13) 1.png", type: "normal" },
  ];

  return (
    <section className={styles.trustSec}>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Autoplay, FreeMode]}
          speed={10000}
          spaceBetween={50}
          loop
          slidesPerView="auto"
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={false}
          className={styles.trustslider}
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              className={
                slide.type === "big"
                  ? styles.trustBigSlide
                  : slide.type === "large"
                  ? styles.trustLargeSlide
                  : styles.trustSlide
              }
            >
              <div
                className={
                  slide.type === "big"
                    ? styles.trusSliderImgBig
                    : slide.type === "large"
                    ? styles.trusSliderImgLarge
                    : styles.trustSlideImg
                }
              >
                <Image
                  src={slide.src}
                  alt="logo"
                  width={200}
                  height={120}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
