"use client";

import Image from "next/image";
import Counter from "@/components/Counter";
import styles from "@/style/aboutuscss/aboutusestimate.module.css";

export default function AboutEstimate() {
  return (
    <section className={styles.estimate_sec}>
      <div className={`container ${styles.estimate_container}`}>
        {/* TOP CONTENT */}
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div
              className={styles.estimate_cont}
              data-aos="fade-right"
            >
              <h2 className={styles.title2}>
                Hassle free estimate just a <span>click away</span>.
              </h2>

              <h4 className={styles.title4}>Get an estimate</h4>

              <ul className={styles.estimate_list}>
                <li>
                  We connect you with trusted local professionals for all your
                  daily needs.
                </li>
                <li>
                  From small repairs to complete installations, Local Pro helps
                  you book.
                </li>
                <li>
                  Skilled professionals nearby with transparent pricing and
                  quick service.
                </li>
              </ul>
              <ul>
                  <li>Seasonal & Locally Sourced Ingredients</li>
                  <li>Vegetarian & Dietary-Friendly Options</li>
                  <li>Exquisite Pairings & Unique Flavors</li>
                </ul>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div
              className={styles.estimate_img}
              data-aos="fade-left"
            >
              <Image
                src="/images/about/isolated-studio-shot-cheerful-emotional-young-repairman-wearing-protective-goggles 1.png"
                alt="Electrician with tools"
                width={600}
                height={500}
                priority
              />
            </div>
          </div>
        </div>

        {/* COUNTERS */}
        <div className="row align-items-center text-center">
          {/* COUNTER 1 */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
            <div
              className={styles.estimate_sub_cont}
              data-aos="zoom-in"
            >
              <div className={styles.estimate_sub_img}>
                <Image
                  src="/images/about/icons/image 78.png"
                  alt="Projects completed"
                  width={48}
                  height={48}
                />
              </div>

              <Counter target={5000} className={styles.title2} />
              <p>Projects Completed</p>
            </div>
          </div>

          {/* COUNTER 2 */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
            <div
              className={styles.estimate_sub_cont}
              data-aos="zoom-in"
            >
              <div className={styles.estimate_sub_img}>
                <Image
                  src="/images/about/icons/image 79.png"
                  alt="Emergency repairs"
                  width={48}
                  height={48}
                />
              </div>

              <Counter target={700} className={styles.title2} />
              <p>Emergency Repairs</p>
            </div>
          </div>

          {/* COUNTER 3 */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
            <div
              className={styles.estimate_sub_cont}
              data-aos="zoom-in"
            >
              <div className={styles.estimate_sub_img}>
                <Image
                  src="/images/about/icons/image 80.png"
                  alt="Happy clients"
                  width={48}
                  height={48}
                />
              </div>

              <Counter target={4500} className={styles.title2} />
              <p>Happy Clients</p>
            </div>
          </div>

          {/* COUNTER 4 */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
            <div
              className={styles.estimate_sub_cont}
              data-aos="zoom-in"
            >
              <div className={styles.estimate_sub_img}>
                <Image
                  src="/images/about/icons/image 81.png"
                  alt="Skilled professionals"
                  width={48}
                  height={48}
                />
              </div>

              <Counter target={150} className={styles.title2} />
              <p>Skilled Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
