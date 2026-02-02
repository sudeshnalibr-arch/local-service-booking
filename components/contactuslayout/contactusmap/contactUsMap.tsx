import styles from "@/style/contactcss/contactUsMap.module.css";

  const ContactUsMap = () => {
  return (
    <section
      className={styles.mapSection}
      data-aos="zoom-in"
    >
      <iframe
        title="Webskitters Academy Kolkata"
        src="https://www.google.com/maps?q=Webskitters%20Academy%20Kolkata&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapIframe}
      />
    </section>
  );
};

export default ContactUsMap;
