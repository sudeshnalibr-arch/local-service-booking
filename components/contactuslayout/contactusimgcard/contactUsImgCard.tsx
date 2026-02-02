import styles from "@/style/contactcss/contactUsImgCard.module.css";

const ContactUsImageCard = () => {
  return (
    <section className={styles.cardSection}>
      <div className="container">
        <div className="row align-items-center">

          {/* CARD 1 */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div
              className={styles.cardWrapper}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                className={styles.imgCard}
                style={{ backgroundImage: "url('/images/contactus/Frame 453.png')" }}
              >
                <div className={styles.cardContent}>
                  <h4>Visit Our Place</h4>
                  <p>14 Branches Over The World</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
            <div
              className={styles.cardWrapper}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className={styles.imgCard}
                style={{ backgroundImage: "url('/images/contactus/Frame 454.png')" }}
              >
                <div className={styles.cardContent}>
                  <h4>Quick Contact</h4>
                  <p>Get Quick Touch With Us</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12">
            <div
              className={styles.cardWrapper}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className={styles.imgCard}
                style={{ backgroundImage: "url('/images/contactus/Frame 455.png')" }}
              >
                <div className={styles.cardContent}>
                  <h4>Visit Between</h4>
                  <p>Business Hours For Only Office</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsImageCard;
