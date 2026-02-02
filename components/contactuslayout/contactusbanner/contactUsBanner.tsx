import Image from "next/image";
import Link from "next/link";
import styles from "@/style/contactcss/contactUsBanner.module.css";

export default function ContactUsBanner() {
  return (
    <section className={styles.bannerSec} data-aos="fade-up">
      <div className={`container ${styles.bannerContainer}`}>
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
            <div className={styles.bannerCont}>
              <h1 className={styles.title1}>Contact Us</h1>

              <Link href="/" className={styles.blogHeader}>
                Home / Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-12">
            <div className={styles.bannerImg}>
              <Image
                src="/images/contactus/Mask group (1).png"
                alt="Contact banner"
                width={437}
                height={350}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
