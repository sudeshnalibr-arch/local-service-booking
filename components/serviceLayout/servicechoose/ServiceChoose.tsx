import Image from "next/image";
import Link from "next/link";
import styles from '@/style/servicecss/servicechoose.module.css'
const ServiceChoose = () => {
  return (
    <section className={styles["choose-sec"]}>
      <div className="container">
        {/* Header */}
        <div className={styles["choose-header"]}>
          <h1 className={styles.title1}>
            Choose Your Perfect <span>Clean</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="row">
          {/* Basic Plan */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 mb-4">
            <div className={`card ${styles["choose-card"]}`}>
              <div className={styles["choose-card-body"]}>
                <div className={styles["choose-card-header"]}>
                  <h5 className={styles.title5}>Basic Plan</h5>
                  <h1 className={styles.title1}>
                    ₹299<span>/month</span>
                  </h1>
                </div>

                <ul className={styles["choose-card-list"]}>
                  <li>
                    <figure className={styles["list-icon"]}>
                      <Image
                        src="/images/service/nrk_media-completed.png"
                        alt="completed"
                        width={20}
                        height={20}
                      />
                    </figure>
                    2 service visits per month
                  </li>
                  <li>
                    <figure className={styles["list-icon"]}>
                      <Image
                        src="/images/service/nrk_media-completed.png"
                        alt="completed"
                        width={20}
                        height={20}
                      />
                    </figure>
                    Any one service (Plumber / Electrician)
                  </li>
                  <li>
                    <figure className={styles["list-icon"]}>
                      <Image
                        src="/images/service/nrk_media-completed.png"
                        alt="completed"
                        width={20}
                        height={20}
                      />
                    </figure>
                    Standard booking
                  </li>
                  <li>
                    <figure className={styles["list-icon"]}>
                      <Image
                        src="/images/service/nrk_media-completed.png"
                        alt="completed"
                        width={20}
                        height={20}
                      />
                    </figure>
                    Verified professionals
                  </li>
                </ul>

                <div className={styles["choose-card-btn"]}>
                  <Link href="/index7" className={styles["choose-btn"]}>
                    Choose Standard Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 mb-4">
            <div className={`card ${styles["choose-card"]}`}>
              <div className={styles["choose-card-body"]}>
                <div className={styles["card-top"]}>Most Popular</div>

                <div className={styles["choose-card-header"]}>
                  <h5 className={styles.title5}>Standard Plan</h5>
                  <h1 className={styles.title1}>
                    ₹599<span>/month</span>
                  </h1>
                </div>

                <ul className={styles["choose-card-list"]}>
                  <li>
                    <figure className={styles["list-icon"]}>
                      <Image
                        src="/images/service/nrk_media-completed.png"
                        alt="completed"
                        width={20}
                        height={20}
                      />
                    </figure>
                    4 service visits per month
                  </li>
                  <li>
                    <figure className={styles["list-icon"]}>
                      <Image
                        src="/images/service/nrk_media-completed.png"
                        alt="completed"
                        width={20}
                        height={20}
                      />
                    </figure>
                    All services included
                  </li>
                  <li>
                    <figure className={styles["list-icon"]}>
                      <Image
                        src="/images/service/nrk_media-completed.png"
                        alt="completed"
                        width={20}
                        height={20}
                      />
                    </figure>
                    Faster service response
                  </li>
                  <li>
                    <figure className={styles["list-icon"]}>
                      <Image
                        src="/images/service/nrk_media-completed.png"
                        alt="completed"
                        width={20}
                        height={20}
                      />
                    </figure>
                    Verified professionals
                  </li>
                </ul>

                <div className={styles["choose-card-btn"]}>
                  <Link href="/index7" className={styles["choose-btn"]}>
                    Choose Standard Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceChoose;
