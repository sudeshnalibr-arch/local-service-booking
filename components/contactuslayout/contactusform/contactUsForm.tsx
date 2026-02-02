import styles from "@/style/contactcss/contactUsForm.module.css";

const ContactUsForm = () => {
  return (
    <section className={`${styles.contactArea}`}>
      <div className={`container ${styles.contactGrid}`}>
        
        {/* LEFT FORM */}
        <div className={styles.formBox} data-aos="fade-right">
          <span className={styles.label}>SEND US EMAIL</span>
          <h3>Feel free to write</h3>

          <form id="contactForm">
            <div className={styles.field}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Name"
              />
              <small className={styles.error}></small>
            </div>

            <div className={styles.field}>
              <input
                type="email"
                className={styles.inputField}
                placeholder="Email Address"
              />
              <small className={styles.error}></small>
            </div>

            <div className={styles.field}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Phone Number"
              />
              <small className={styles.error}></small>
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" id="terms" />
              <p>I have agreed to the terms & conditions.</p>
            </div>
            <small className={styles.error}></small>

            <button type="submit" className={styles.formSubmitBtn}>
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* RIGHT INFO */}
        <div className={styles.infoBox} data-aos="fade-left">
          <span className={styles.label}>Need any help?</span>
          <h3>Get in touch with us</h3>
          <p>
            In the modern service landscape, customers must be able to contact
            teams when they need help or have a question. If they can’t, the
            customer might churn.
          </p>

          <div className={styles.infoRow}>
            <i className="fa-solid fa-phone"></i>

            <div>
              <strong>Have any question?</strong>
              <p>Free +91 (020)-9850</p>
            </div>
          </div>

          <div className={styles.infoRow}>
            <i className="fa fa-envelope"></i>
            <div>
              <strong>Write email</strong>
              <p>helofixkart@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoRow}>
            <i className="fa fa-location-dot"></i>
            <div>
              <strong>Visit anytime</strong>
              <p>657 twin lakes Drive, Reno, NV 89523</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUsForm;
