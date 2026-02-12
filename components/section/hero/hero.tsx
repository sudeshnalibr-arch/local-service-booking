"use client";

import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.bannerSec} luxy-el`} data-speed="0.15">
      {/* blue polygon background */}
      <div className={styles.bannerBg} />

      <div className="container">
        <div className={styles.heroWrapper}>
          {/* LEFT CONTENT */}
          <div className={styles.bannerContent}>
            <h1 className={styles.title}>
              Quick Home Service Booking Best Local Experts –{" "}
              <span className={styles.handUnderline}>Local Pro</span>
            </h1>

            <p className={styles.desc}>
              Quick home service booking at Local Pro. Top local experts for
              plumbing, cleaning, repairs. Book in minutes, get reliable help
              fast. Schedule your pro now!
            </p>

            <div className={styles.bannerBtn}>
              <a href="tel:+912345678780" className={styles.callBtn}>
                Call Us Today
              </a>

              <a href="https://youtu.be/33pnR4A_8KE?si=J4cHYZzgO-oc7KF3" className={styles.playBtn}>
                <span className={styles.playIcon}>▶</span>
                Watch Video
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.bannerImage}>
            <div className={styles.yellowCircle} />

            <Image
              src="/images/male-worker-wearing-work-clothes 1.png"
              alt="Worker"
              width={700}
              height={800}
              className={styles.heroImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
