import Image from "next/image";
import styles from "@/style/servicecss/servicetrending.module.css";

const ServiceTrending = () => {
  return (
    <section className={styles.trending}>
      <div className="container">
        <h2 className={styles["section-title"]}>
          Our trending <span>Services</span>
        </h2>

        <div className="row">
          {/* Card 1 */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div
              className={styles["trend-wrap"]}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles["trend-card"]}>
                <div className={styles["trend-img"]}>
                  <Image
                    src="/images/service/deep clean.png"
                    alt="Deep Cleaning"
                    width={260}
                    height={200}
                  />
                </div>

                <div className={styles["trend-content"]}>
                  <h3>Deep Cleaning</h3>
                  <p>
                    Deep cleaning offers a complete top-to-bottom refresh
                    targeting every corner and hidden area.
                  </p>
                  <strong>Price: ₹999 onwards</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div
              className={styles["trend-wraper"]}
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className={styles["trend-card"]}>
                <div className={styles["trend-img"]}>
                  <Image
                    src="/images/service/pest control.png"
                    alt="Pest Control"
                    width={260}
                    height={200}
                  />
                </div>

                <div className={styles["trend-content"]}>
                  <h3>Pest Control</h3>
                  <p>
                    Our pest control service removes cockroaches, rats, ants,
                    rodents and other unwanted pests.
                  </p>
                  <strong>Price: ₹499 onwards</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View more */}
      <div className={styles["view-more"]}>
        <button className={styles["view-btn"]}>View More</button>
      </div>
    </section>
  );
};

export default ServiceTrending;
