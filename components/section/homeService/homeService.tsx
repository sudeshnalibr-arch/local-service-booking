
"use client";

import Image from "next/image";
import styles from "./homeService.module.css";

export default function HomeSection() {
  return (
    <section className={styles.homeSec}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* LEFT */}
          <div className={styles.col}>
            <div className={styles.homeImgWrapper} data-aos="zoom-in">
              <div className={styles.homeImg}>
                <Image
                  src="/images/Rectangle 7.png"
                  alt=""
                  width={588}
                  height={912}
                />

                <div className={styles.backCircle}>
                  <div className={styles.innerCircle}></div>
                </div>

                <div className={styles.imgBox}>
                  <p>Best Local Services for your business and home</p>

                  <div className={styles.iconBox}>
                    <figure className={styles.homeIcon}>
                      <Image
                        src="/images/homeicon.png"
                        alt=""
                        width={26}
                        height={26}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.col}>
            <div
              className={styles.homeCont}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <h2 className="title2">
                Professional Home Services for Maintenance & Cleaning
              </h2>
              <h3 className="title3">ABOUT COMPANY</h3>
              <p>
                We have a wide spectrum of expertise in web solutions within
                these industries, giving us the necessary skills and knowledge
                to help you increase your presence on the web.Through our
                expertise, technological knowledge, global presence and
                betspoke web solutions, we can help knowledge to help you
                increase your presence you transform your business, maximize
                performance and surpass the competition.
              </p>
            </div>

            <div className={styles.homeImgWrapper} data-aos="zoom-in">
              <div className={styles.homeSubImg}>
                <Image
                  src="/images/Rectangle 8.png"
                  alt=""
                  width={447}
                  height={558}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

