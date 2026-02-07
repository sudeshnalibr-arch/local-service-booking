import Image from "next/image";
import Link from "next/link";
import styles from "@/style/servicecss/servicecta.module.css";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles["cta-row"]}>

          {/* Left image */}
          <div className={styles["cta-col"]}>
            <Image
              src="/images/service/problem.png"
              alt="Service professional"
              width={520}
              height={400}
              className={styles["cta-image"]}
              data-aos="fade-right"
            />
          </div>

          {/* Right content */}
          <div
            className={`${styles["cta-col"]} ${styles["cta-content"]}`}
            data-aos="fade-left"
          >
            <h2>
              Having a problem?
              <br />
              We’ll fixed it today!
            </h2>

            <p className={styles["cta-phone"]}>
              <span className={styles["phone-circle"]}>
                {/* icon optional */}
              </span>
              + 123 456 7890 <span>or</span>
            </p>

            <Link href="/index4" className={styles["cta-btn"]}>
              Get a quote
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
