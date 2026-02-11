import Image from "next/image";
import styles from "@/style/servicedetails/plumber/plumberBanner.module.css";

export default function PlumberBanner() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-overlay"]}>
        <div className={`${styles["container"]} ${styles["hero-container"]}`}>
          <div className="row">
            
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
              {/* Left Bulb + Light */}
              <div className={styles["bulb-wrapper"]}>
                <Image
                  src="/images/plumber/ChatGPT Image Feb 2, 2026, 05_41_58 PM.png"
                  alt="Bulb"
                  width={250}
                  height={250}
                  className={styles["bulb-img"]}
                />
              </div>
            </div>

            <div className="col-xxl-5 col-xl-5 col-lg-5 col-12">
              {/* Center Text */}
              <div className={styles["hero-content"]}>
                <h1>Service Details</h1>
                <p>
                  <a href="#" style={{textDecoration:'none'}}>Home</a> / Plumbing Appliance
                </p>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-12">
              {/* Right Worker */}
              <div className={styles["worker-wrapper"]}>
                <Image
                  src="/images/plumber/plumbing.png"
                  alt="Worker"
                  width={300}
                  height={300}
                  className={styles["worker-img"]}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
