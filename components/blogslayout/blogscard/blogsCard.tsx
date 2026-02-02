import Image from "next/image";
import styles from "@/style/blogscss/blogsCard.module.css";

export default function BlogsCard() {
  return (
    <section className={styles.cardSection}>
      <div className="container">
        {/* ROW 1 */}
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className={styles.card} data-aos="fade-up">
              <div className={styles.cardImg}>
                <Image
                  src="/images/blogs/card -img-1.jpg"
                  alt="Plumbing tips"
                  fill
                  className={styles.cardImage}
                />
                <div className={styles.cardArrow}>
                  <Image
                    src="/images/blogs/card-arrow.png"
                    alt="arrow"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              <h6>Tips To Troubleshooting Common Plumbing Issues</h6>
              <p>
                Phasellus faucibus scelerisque eleifend donec pretium vulputate.
                Ac orci...
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.cardImg}>
                <Image
                  src="/images/blogs/card-img-2.jpg"
                  alt="DIY vs Pro"
                  fill
                  className={styles.cardImage}
                />
                <div className={styles.cardArrow}>
                  <Image
                    src="/images/blogs/card-arrow.png"
                    alt="arrow"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              <h6>Knowing When to DIY and When to Call a Pro</h6>
              <p>
                Arcu risus quis varius quam. Tristique sollicitudin nibh sit amet
                commodo.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className={styles.card} data-aos="fade-up">
              <div className={styles.cardImg}>
                <Image
                  src="/images/blogs/card-img-3.jpg"
                  alt="Painting services"
                  fill
                  className={styles.cardImage}
                />
                <div className={styles.cardArrow}>
                  <Image
                    src="/images/blogs/card-arrow.png"
                    alt="arrow"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              <h6>
                Transforming Spaces with Professional Painting Services
              </h6>
              <p>
                A well-executed painting project can completely transform the
                look and feel of any space.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.cardImg}>
                <Image
                  src="/images/blogs/card-img-4.jpg"
                  alt="Home cleaning"
                  fill
                  className={styles.cardImage}
                />
                <div className={styles.cardArrow}>
                  <Image
                    src="/images/blogs/card-arrow.png"
                    alt="arrow"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              <h6>
                Home Cleaning Service Guide: Everything You Need To Know
              </h6>
              <p>
                A home cleaning service is paid help that either comes on a
                schedule of your choice or as a one-time visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
