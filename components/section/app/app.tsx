"use client";

import Image from "next/image";
// import styles from "./app.module.css";
import styles from "../app/app.module.css"

export default function AppSection() {
  return (
    <section className={styles.appSec}>
      <div className={styles.container}>
        <div className={styles.row}>

          {/* LEFT CONTENT */}
          <div className={styles.leftCol}>
            <div className={styles.appCont}>
              <h2 className={styles.title2}>
                Trust us for services and order
              </h2>

              <div className={styles.appBox}>
                <div className={styles.playStoreImg}>
                  <a
                    href="https://play.google.com/store/apps/details?id=ca.homedepot.proreferral"
                    target="_blank"
                  >
                    <Image
                      src="/images/Group 84.png"
                      alt="Google Play"
                      width={193}
                      height={58}
                    />
                  </a>
                </div>

                <div className={styles.appleStoreImg}>
                  <a
                    href="https://apps.apple.com/ca/app/local-pro/id1434304989"
                    target="_blank"
                  >
                    <Image
                      src="/images/Group 85.png"
                      alt="App Store"
                      width={193}
                      height={58}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.rightCol}>
            <div className={styles.mobileImg}>
              <Image
                src="/images/iPhone 15.png"
                alt="Mobile App"
                width={427}
                height={650}
              />

              {/* RATING BUBBLE */}
              <div className={styles.ratingBubble}>
                <div className={styles.stars}>
                  <i className={`fa-solid fa-star ${styles.active}`}></i>
                  <i className={`fa-solid fa-star ${styles.active}`}></i>
                  <i className={`fa-solid fa-star ${styles.active}`}></i>
                  <i className={`fa-solid fa-star ${styles.active}`}></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <h3>Based on 234 review</h3>

                <div className={styles.brand}>
                  <i className={`fa-solid fa-star ${styles.trust}`}></i>
                  <span>Trustpilot</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
