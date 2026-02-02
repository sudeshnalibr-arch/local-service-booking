

import styles from "@/style/blogscss/blogsBest.module.css";

export default function BlogsBest() {
  return (
    <section className={styles.bestSection}>
      <div className="container">
        {/* TOP */}
        <div className={styles.bestTopSection} data-aos="fade-up">
          <h2>
            Why We Are <span>Best</span>
          </h2>
          <p>
            Curabitur vitae nunc sed velit dignissim sodales ut eu. Leo vel orci
            porta non.
          </p>
        </div>

        {/* BOTTOM */}
        <div className={styles.bestBottomSection}>
          <div className="row justify-content-center">
            {/* CARD 1 */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className={styles.bestCard} data-aos="zoom-in">
                <div className={styles.bestCardImg}>
                  <img
                    src="/images/blogs/icons/best-img-1.png"
                    alt="Licensed Technicians"
                  />
                </div>
                <h6>Licensed Technicians</h6>
                <p>
                  Mauris augue neque gravida in fermentum et sollicitudin.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div
                className={styles.bestCard}
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className={styles.bestCardImg}>
                  <img
                    src="/images/blogs/icons/best-img-2.png"
                    alt="Top Rated Service"
                  />
                </div>
                <h6>Top Rated Service</h6>
                <p>
                  Scelerisque felis imperdiet proin fermentum vel orci aliquam.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div
                className={styles.bestCard}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className={styles.bestCardImg}>
                  <img
                    src="/images/blogs/icons/best-img-3.png"
                    alt="Timely Services"
                  />
                </div>
                <h6>Timely Services</h6>
                <p>
                  Erat nam at lectus urna duis convallis convallis tellus id
                  aliquet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
