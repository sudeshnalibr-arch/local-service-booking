"use client";

import Image from "next/image";
// import styles from "./how.module.css";
import styles from "../howWorking/howWorking.module.css"

const steps = [
  {
    title: "Application",
    text:
      "You fill out an application on the site or contact us in a way convenient for you.",
    img: "/images/Vector.png",
    active: true,
  },
  {
    title: "The Date",
    text:
      "We agree on the day of the arrival of the master to assess cost and plan work.",
    img: "/images/Vector (1).png",
  },
  {
    title: "Hire Us",
    text:
      "Sign a contract with us, and we issue all the documents.",
    img: "/images/Vector (2).png",
  },
  {
    title: "Servicing",
    text:
      "Our specialists qualitatively and soulfully create cleanliness in your home.",
    img: "/images/Vector (3).png",
  },
];

export default function HowWeWork() {
  return (
    <section className={styles.howSec}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.howHeader}>
          <h2 className={styles.title2}>How we are working?</h2>
          <h3 className={styles.title3}>WORK STEPS</h3>
        </div>

        {/* STEPS */}
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.howCard} ${
                step.active ? styles.active : ""
              }`}
            >
              <div className={styles.hoverBox}>

                {/* LINE (except last card) */}
                {index !== steps.length - 1 && (
                  <hr
                    className={`${styles.sideLine} ${
                      index === 1 ? styles.subSideLine : ""
                    }`}
                  />
                )}

                {/* ICON */}
                <div className={styles.imgCircle}>
                  <figure className={styles.howCardImg}>
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={37}
                      height={37}
                    />
                  </figure>
                </div>

                <h5 className={styles.howCardTitle}>{step.title}</h5>
              </div>

              <p className={styles.howCardText}>{step.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
