"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// import styles from "./blog.module.css";
import styles from "../blog/blog.module.css"

const blogs = [
  {
    title: "How to Clean the carpet at home from stains?",
    img: "/images/Rectangle 29.png",
    author: "Crastifar",
    avatar: "/images/Ellipse 15.png",
  },
  {
    title: "Finding a trustworthy plumber, electrician, or",
    img: "/images/Rectangle 29 (1).png",
    author: "William",
    avatar: "/images/Ellipse 15 (1).png",
  },
  {
    title: "Whether your tap is leaking, your AC stopped",
    img: "/images/Rectangle 29 (2).png",
    author: "Priya",
    avatar: "/images/Ellipse 15 (2).png",
  },
  {
    title: "Finding a trustworthy plumber, electrician, or",
    img: "/images/Rectangle 29 (1).png",
    author: "William",
    avatar: "/images/Ellipse 15 (1).png",
  },
];

export default function BlogSection() {
  return (
    <section className={styles.blogSec}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.blogHeader}>
          <h2 className={styles.title2}>Interesting and useful</h2>
          <h3 className={styles.title3}>OUR BLOG</h3>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={800}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: "auto" },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className={styles.blogSwiper}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index} className={styles.blogSlide}>
              <div className={styles.blogCard}>

                {/* IMAGE */}
                <div className={styles.blogCardImg}>
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className={styles.coverImg}
                  />
                </div>

                {/* BODY */}
                <div className={styles.cardBody}>
                  <div className={styles.blogCardBox}>
                    <h5 className={styles.blogCardTitle}>
                      {blog.title}
                    </h5>

                    <div className={styles.bookmark}>
                      <Image
                        src="/images/bookmark-black.png"
                        alt="bookmark"
                        width={18}
                        height={26}
                      />
                    </div>
                  </div>

                  <div className={styles.blogImgBox}>
                    <figure className={styles.blogImg}>
                      <Image
                        src={blog.avatar}
                        alt={blog.author}
                        width={73}
                        height={73}
                      />
                    </figure>

                    <p>By {blog.author}</p>
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
