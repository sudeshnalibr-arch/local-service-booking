"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import styles from "@/style/blogscss/blogsSlider.module.css";
import Image from "next/image";

export default function BlogsSlider() {
  return (
    <section className={`${styles.sliderSec} slider-sec`}>
      <div className="container">
        <div
          className={`${styles.sliderHeader} slider-header`}
          data-aos="fade-up"
        >
          <h2 className="title2">
            Read Our Latest <span>Blogs</span>
          </h2>
          <h4 className="title4">
            Helpful tips and expert advice to keep your home and workplace
            running smoothly.
          </h4>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Scrollbar]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // optional (nice UX)
                    }}
          speed={800}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <Card
              img="/images/blogs/Rectangle 22.png"
              title="Tips To Troubleshooting Common Plumbing Issues"
              desc="Helpful tips to spot and fix common plumbing problems like leaks and clogs, 
                    prevent costly damage, and understand when to call a professional plumbe"
            />
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <Card
              img="/images/blogs/Rectangle 23.png"
              title="Knowing When to DIY and When to Call a Pro"
              desc="Learn how to decide between DIY repairs and professional help. Knowing 
                    when to DIY and when to call a pro can save time, money, and stress."
            />
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <Card
              img="/images/blogs/Rectangle 22.png"
              title="Tips To Troubleshooting Common Plumbing Issues"
              desc="Phasellus faucibus scelerisque eleifend donec pretium vulputate. Ac orci..."
            />
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <Card
              img="/images/blogs/Rectangle 23.png"
              title="Knowing When to DIY and When to Call a Pro"
              desc="Learn how to decide between DIY repairs and professional help. Knowing 
                    when to DIY and when to call a pro can save time, money, and stress."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

/* ===== Card Component ===== */
type CardProps = {
  img: string;
  title: string;
  desc: string;
};

function Card({ img, title, desc }: CardProps) {
  return (
    <div className={`${styles.card} card`} data-aos="fade-up">
      <div className={`${styles.cardImg} card-img`}>
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 576px) 100vw, (max-width: 1200px) 50vw, 648px"
          className={styles.cardImage}
          priority={false}
        />

        <div className={`${styles.cardArrow} card-arrow`}>
          <Image
            src="/images/blogs/card-arrow.png"
            alt="card arrow"
            width={60}
            height={60}
          />
        </div>
      </div>

      <h4 style={{marginBottom: 10, fontWeight: "600"}}>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

