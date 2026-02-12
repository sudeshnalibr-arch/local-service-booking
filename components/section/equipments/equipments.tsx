"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// import styles from "./equipment.module.css";
import styles from "../equipments/equipments.module.css"

const equipmentData = [
  {
    title: "Batch VAC 15",
    sub: "Cleaner",
    img: "/images/Rectangle 17.png",
  },
  {
    title: "Kacher 160",
    sub: "Cleaner",
    img: "/images/Rectangle 13.png",
  },
  {
    title: "Batch VAC 15",
    sub: "Cleaner",
    img: "/images/Rectangle 9.png",
  },
  {
    title: "705R",
    sub: "Texa AC",
    img: "/images/texa-ac-service-equipment-1571376379-5120819 1.png",
  },
  {
    title: "Boach 59hz",
    sub: "Cleaner",
    img: "/images/pngegg (30) 1.png",
  },
];

export default function EquipmentSection() {
  return (
    <section className={styles.equipmentSec}>
      <div className={styles.container}>
        <div className={styles.equipmentHeader}>
            <div className={styles.equipmentLeft}>
                <h2 className={styles.title2}>Our professional equipment</h2>
                <h3 className={styles.title3}>OUR EQUIPMENT</h3>
            </div>
            <div className={styles.Right}>
                <button className={styles.equipmentBtn}>Explore All</button>
            </div>
          
          
        </div>
      </div>

      {/* 🔥 EXACT MOVING SWIPER */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={800}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: "auto",
          },
          800: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className={styles.equipmentSwiper}
      >
        {equipmentData.map((item, index) => (
          <SwiperSlide key={index} className={styles.equipmentSlide}>
            <div className={styles.equipmentCard}>
              <div className={styles.equipmentImgBox}>
                <div className={styles.equipmentCardImg}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={250}
                  />
                </div>
              </div>

              <div className={styles.cardBody}>
                <h5 className={styles.equipmentCardTitle}>
                  {item.title}
                </h5>
                <h4 className={styles.title4}>{item.sub}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
