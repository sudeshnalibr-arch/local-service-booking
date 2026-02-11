import Image from "next/image";
import Link from "next/link";
import styles from "@/style/servicecss/servicebanner.module.css";

const ServiceBanner = () => {
  return (
    <section className={styles["banner-sec"]}>
      <div className={`container ${styles["banner-container"]}`}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className={styles["banner-hdr"]} data-aos="fade-right">
              <h1 className={styles.title1}>
                All In One Service <br />
                For Your <span>Household</span>
              </h1>

              <p className={styles["banner-desc"]}>
                The no-stress way to book the changing service you need in
                minutes. Eliminates back and forth emails.
              </p>

              <div className={styles["banner-btn"]}>
                <Link href="/check-availability" className={styles["primary-btn"]} style={{textDecoration:'none'}}>
                  Check Availability
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className={styles["banner-img-wrap"]} data-aos="fade-left">

              {/* Badge 1 */}
              <div className={`${styles["banner-badge"]} ${styles["badge-left-top"]}`}>
                <div className={styles["banner-badges-icon"]}>
                  <img
                    src="/images/service/material-symbols_verified.png"
                    alt="Verified"
                  />
                </div>

                <div className={styles["banner-badge-img"]}>
                  <img
                    src="/images/service/booking logo.png"
                    alt="Booking"
                  />
                </div>

                <div className={styles["badge-text"]}>
                  <strong>Instant online</strong>
                  <span>booking</span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className={`${styles["banner-badge"]} ${styles["badge-right-top"]}`}>
                <div className={styles["banner-badges-icon"]}>
                  <img
                    src="/images/service/material-symbols_verified.png"
                    alt="Verified"
                  />
                </div>

                <div className={styles["banner-badge-img"]}>
                  <img
                    src="/images/service/booking logo.png"
                    alt="Booking"
                  />
                </div>

                <div className={styles["badge-text"]}>
                  <strong>Trusted</strong>
                  <span>professionals</span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className={`${styles["banner-badge"]} ${styles["badge-left-bottom"]}`}>
                <div className={styles["banner-badges-icon"]}>
                  <img
                    src="/images/service/material-symbols_verified.png"
                    alt="Verified"
                  />
                </div>

                <div className={styles["banner-badge-img"]}>
                  <img
                    src="/images/service/coustomer-support-logo.png"
                    alt="Support"
                  />
                </div>

                <div className={styles["badge-text"]}>
                  <strong>Get 24/7</strong>
                  <span>Support</span>
                </div>
              </div>

              {/* Main Image */}
              <img
                src="/images/service/service man.png"
                alt="Service Man"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
