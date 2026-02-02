import Image from "next/image";
import styles from "@/style/blogscss/blogsBanner.module.css";
import Link from "next/link";


export default function BlogsBanner() {
  return (
    <section className={styles.bannerSec}>
      <div className={`container ${styles.bannerContainer}`}>
        <div className="row align-items-center">
          
          {/* LEFT CONTENT */}
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
            <div className={styles.bannerCont}>
              <h1 className={`title1 ${styles.bannerTitle}`}>
                Our Blogs
              </h1>

              <Link href="/" className={styles.blogHeader}>
                    Home / Blog
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-12">
            <div className={styles.bannerImg}>
              <Image
                src="/images/blogs/Mask group.png"
                alt="Blog banner"
                width={527}
                height={360}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
