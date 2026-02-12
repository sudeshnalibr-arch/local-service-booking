"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// import styles from "./team.module.css";
import styles from "../team/team.module.css"

const teamData = [
  {
    title: "Cleaner",
    desc: "Reliable cleaning services for homes, offices, and commercial spaces",
    img: "/images/team-img2.png",
    icon: "/images/pump-img.png",
  },
  {
    title: "Electrician",
    desc: "Licensed electricians for wiring, repairs, and electrical installations",
    // img: "/images/team-img2.png",
     img: "/images/team-img3.png",
    icon: "/images/team-icon2.png",
  },
  {
    title: "Painter",
    desc: "Expert painters for interior and exterior painting projects",
    // img: "/images/team-img3.png",
     img: "/images/team-img4.png",
    icon: "/images/team-icon3.png",
  },
  {
    title: "Mechanic",
    desc: "Specialized mechanical services for mission-critical equipment and repairs",
    // img: "/images/team-img4.png",
     img: "/images/team-img5.png",
    icon: "/images/team-icon-img4 (2).png",
  },
  {
    title: "Gardener",
    desc: "Lawn care, landscaping, and garden maintenance services",
    // img: "/images/team-img5.png",
    img: "/images/team-img6.png",
    icon: "/images/team-icon-img5.png",
  },
  {
    title: "AC Technician",
    desc: "Expert air conditioning system installation and maintenance",
    // img: "/images/team-img6.png",
    img: "/images/team-img7.png",
    icon: "/images/team-icon-img7.png",
  },
  {
    title: "Plumber",
    desc: "Professional plumbing services for repairs and installations",
    img: "/images/team-img.png",
    // img: "/images/team-img.png",
    icon: "/images/pump-img.png",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSec}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.headerRow}>
          <div>
            <h2 className={styles.title2}>Meet Our Service team</h2>
            <h3 className={styles.title3}>Our Skilled Team</h3>
          </div>

          <a href="/index8" className={styles.exploreBtn}>
            Explore All
          </a>
        </div>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView="auto"
        spaceBetween={18}
        speed={3500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        observer
        observeParents
        resizeObserver
        watchSlidesProgress
        grabCursor
        className={styles.teamSwiper}
      >
        {teamData.map((item, index) => (
          <SwiperSlide key={index} className={styles.teamSlide}>
            <div className={styles.teamCard}>
              <div className={styles.teamCardImg}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.coverImg}
                />

                <div className={styles.teamIconCircle}>
                  <Image src={item.icon} alt="icon" width={34} height={34} />
                </div>
              </div>

              <div className={styles.teamCardBody}>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>

                <a href="/index8" className={styles.viewBtn}>
                  View Services
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
