import Image from "next/image";
import Link from "next/link";
import styles from "@/style/servicedetails/electrician/electrician.module.css";

const ElectricianBanner = () => {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-overlay"]}>
        <div className={`container ${styles["hero-main"]}`}>

          {/* Left Bulb + Light */}
          <div className={styles["bulb-wrapper"]}>
            <Image
              src="/images/electrician/Banner-Bulb-img.png"
              alt="Bulb"
              width={180}
              height={220}
              className={styles["bulb-img"]}
            />
            <div className={styles["light-beam"]}></div>
          </div>

          {/* Center Text */}
          <div className={styles["hero-content"]}>
            <h1>Service Details</h1>
            <p>
              <Link href="/">Home</Link> / Service Details
            </p>
          </div>

          {/* Right Worker */}
          <div className={styles["worker-wrapper"]}>
            <Image
              src="/images/electrician/banner_right.png"
              alt="Worker"
              width={400}
              height={360}
              className={styles["worker-img"]}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ElectricianBanner;
