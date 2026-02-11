import styles from "@/style/contactcss/contactUsContact.module.css";

export default function ContactUsContact() {
  return (
    <section className={styles.contactHeading} data-aos="fade-up">
      <h2>Contact</h2>
      <h3>Get in touch. Let's talk about your projects!</h3>

      <p>
        Feel free to reach out to us at Luxe Architecture for any inquiries,
        project collaborations, or design consultations. Our dedicated team is
        here to assist you and bring your vision to life.
      </p>

      <div className={styles.details}>
        <p>+912345678780</p>
        <p>localpro@gmail.com</p>
        <p>2nd Floor, Sector V, Salt Lake, Kolkata – 700091, West
                  Bengal, India</p>
        <p>We open at 09:00 a.m – 06:00 p.m on weekdays.</p>
      </div>
    </section>
  );
}
