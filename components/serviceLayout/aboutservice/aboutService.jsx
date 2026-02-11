import Image from "next/image";
import styles from "@/style/servicecss/serviceabout.module.css";

const AboutService = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className="row">

          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className={styles["about-image"]} data-aos="zoom-in">
              <Image
                src="/images/service/rafiki.png"
                alt="rafiki"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className={styles["about-content"]} data-aos="fade-up">
              <h2>
                Nobody Wows Clients <br />
                <span>Like We Do</span>
              </h2>

              <p>
                Our team proudly offer an on-time guarantee and a 100% customer
                satisfaction guarantee.
              </p>

              <ul className={styles["about-list"]}>
                <li>
                  <Image
                    src="/images/service/line-md_arrow-up.png"
                    alt="arrow"
                    width={20}
                    height={20}
                    className={styles["arrow-icon"]}
                  />
                  First class Quality Service at Affordable Prices
                </li>

                <li>
                  <Image
                    src="/images/service/line-md_arrow-up.png"
                    alt="arrow"
                    width={20}
                    height={20}
                    className={styles["arrow-icon"]}
                  />
                  Immediate 24/7 Emergency Service
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutService;
