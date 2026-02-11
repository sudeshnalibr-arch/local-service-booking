// import styles from "@/style/contactcss/contactUsForm.module.css";

// const ContactUsForm = () => {
//   return (
//     <section className={`${styles.contactArea}`}>
//       <div className={`container ${styles.contactGrid}`}>
        
//         {/* LEFT FORM */}
//         <div className={styles.formBox} data-aos="fade-right">
//           <span className={styles.label}>SEND US EMAIL</span>
//           <h3>Feel free to write</h3>

//           <form id="contactForm">
//             <div className={styles.field}>
//               <input
//                 type="text"
//                 className={styles.inputField}
//                 placeholder="Name"
//               />
//               <small className={styles.error}></small>
//             </div>

//             <div className={styles.field}>
//               <input
//                 type="email"
//                 className={styles.inputField}
//                 placeholder="Email Address"
//               />
//               <small className={styles.error}></small>
//             </div>

//             <div className={styles.field}>
//               <input
//                 type="text"
//                 className={styles.inputField}
//                 placeholder="Phone Number"
//               />
//               <small className={styles.error}></small>
//             </div>

//             <div className={styles.checkbox}>
//               <input type="checkbox" id="terms" />
//               <p>I have agreed to the terms & conditions.</p>
//             </div>
//             <small className={styles.error}></small>

//             <button type="submit" className={styles.formSubmitBtn}>
//               SEND MESSAGE
//             </button>
//           </form>
//         </div>

//         {/* RIGHT INFO */}
//         <div className={styles.infoBox} data-aos="fade-left">
//           <span className={styles.label}>Need any help?</span>
//           <h3>Get in touch with us</h3>
//           <p>
//             In the modern service landscape, customers must be able to contact
//             teams when they need help or have a question. If they can’t, the
//             customer might churn.
//           </p>

//           <div className={styles.infoRow}>
//             <i className="fa-solid fa-phone"></i>

//             <div>
//               <strong>Have any question?</strong>
//               <p>Free +91 (020)-9850</p>
//             </div>
//           </div>

//           <div className={styles.infoRow}>
//             <i className="fa fa-envelope"></i>
//             <div>
//               <strong>Write email</strong>
//               <p>helofixkart@gmail.com</p>
//             </div>
//           </div>

//           <div className={styles.infoRow}>
//             <i className="fa fa-location-dot"></i>
//             <div>
//               <strong>Visit anytime</strong>
//               <p>657 twin lakes Drive, Reno, NV 89523</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContactUsForm;

"use client";

import styles from "@/style/contactcss/contactUsForm.module.css";
import { useContactForm } from "@/hooks/contactusform/contactUsForm";

const ContactUsForm = () => {
  const {
    formData,
    errors,
    loading,
    handleChange,
    submitForm,
  } = useContactForm();

  return (
    <section className={styles.contactArea}>
      <div className={`container ${styles.contactGrid}`}>

        <div className={styles.formBox} data-aos="fade-right">
          <span className={styles.label}>SEND US EMAIL</span>
          <h3>Feel free to write</h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <div className={styles.field}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.inputField}
                placeholder=" "   // IMPORTANT: single space
              />
              <label className={styles.floatingLabel}>Name</label>

              {errors.name && <small className={styles.error}>{errors.name}</small>}
              </div>

            <div className={styles.field}>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.inputField}
                  placeholder=" "   // IMPORTANT: single space
                />
                <label className={styles.floatingLabel}>Email</label>

                {errors.email && <small className={styles.error}>{errors.email}</small>}
            </div>


                <div className={styles.field}>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                        onChange={handleChange}
                      className={styles.inputField}
                      placeholder=" "   // IMPORTANT: single space
                      />
                      <label className={styles.floatingLabel}>Subject</label>

                      {errors.subject && <small className={styles.error}>{errors.phone}</small>}
                </div>

                <div className={styles.field}>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                        onChange={handleChange}
                      className={styles.inputField}
                      placeholder=" "   // IMPORTANT: single space
                      />
                      <label className={styles.floatingLabel}>Message</label>

                      {errors.message && <small className={styles.error}>{errors.message}</small>}
                </div>


                <div className={styles.checkbox}>
                  <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  />
                  <p>I have agreed to the terms & conditions.</p>
                </div>
                {errors.terms && <small className={styles.error}>{errors.terms}</small>}

              <button
              type="submit"
              className={styles.formSubmitBtn}
              disabled={!formData.terms || loading}
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>

        {/* RIGHT INFO — unchanged */}
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
              <p>Free +912345678780</p>
            </div>
           </div>

           <div className={styles.infoRow}>
             <i className="fa fa-envelope"></i>
             <div>
               <strong>Write email</strong>
               <p>localpro@gmail.com</p>
            </div>
           </div>

          <div className={styles.infoRow}>
             <i className="fa fa-location-dot"></i>
             <div>
               <strong>Visit anytime</strong>
               <p>2nd Floor, Sector V, Salt Lake, Kolkata – 700091, West
                  Bengal, India</p>
            </div>
           </div>
         </div>

      </div>
    </section>
  );
};

export default ContactUsForm;


