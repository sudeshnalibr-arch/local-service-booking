"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// import styles from "./testimonials.module.css";
import styles from "../testimonials/testimonials.module.css"

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "CEO, Company",
    text:
      "I booked a plumber through the website, and the technician arrived within 30 minutes. He fixed the leakage quickly and explained everything clearly. Really satisfied with the service!",
    img: "/images/Ellipse 1.png",
  },
  {
    name: "Priya Mehra",
    role: "",
    text:
      "I often struggle to find reliable handymen, but this platform solved the problem. The technician arrived on time and completed the job perfectly.",
    img: "/images/Ellipse 1 (1).png",
  },
  {
    name: "Ankita Das",
    role: "",
    text:
      "I booked a plumber through the website, and the technician arrived within 30 minutes. He fixed the leakage quickly and explained everything clearly. Really satisfied with the service!",
    img: "/images/Ellipse 1 (2).png",
  },
  {
    name: "Rohit Kumar",
    role: "",
    text:
      "I booked a plumber through the website, and the technician arrived within 30 minutes. He fixed the leakage quickly and explained everything clearly. Really satisfied with the service!",
    img: "/images/Ellipse 1 (3).png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSec}>
      <div className={`${styles.container} ${styles.testimonialsContainer}`}>

        {/* HEADER */}
        <div className={styles.testimonialsHeader}>
          <h2 className={styles.title2}>
            The best client are our clients!
          </h2>
          <h3 className={styles.title3}>REVIEWS</h3>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className={styles.mySwiper}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.sliderCard}>

                {/* TOP IMAGES */}
                <div className={styles.cardImgCont}>
                  <div className={styles.cardTopImg}>
                    <Image
                      src="/images/speai.png"
                      alt="quote"
                      width={103}
                      height={103}
                    />
                  </div>

                  <div className={styles.sliderCardImg}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={150}
                      height={150}
                    />
                  </div>
                </div>

                {/* BODY */}
                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>
                    {item.name}
                    {item.role && <p>{item.role}</p>}
                  </div>

                  <p className={styles.cardText}>
                    “{item.text}”
                  </p>

                  <div className={styles.starCard}>
                    ★★★★<span>★</span>
                  </div>
                </div>

                {/* RIGHT ICON */}
                <div className={styles.cardCont}>
                  <div className={styles.cardRightImg}>
                    <Image
                      src="/images/icon.png"
                      alt="icon"
                      width={103}
                      height={103}
                    />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
