"use client";

import Image from "next/image";
import styles from "@/style/providerregistercss/providerRegister.module.css";

export default function ProviderRegisterPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>

        {/* LEFT IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src="/images/providerRegister.jpg"
            alt="Service provider at work"
            fill
            className={styles.image}
            priority
          />

          <div className={styles.overlay}>
            <div className={styles.blurCard}>

               <h3>Manage your jobs. Control your schedule. Grow your earnings</h3>
               <p>
                 Join thousands of service professionals using our platform to
                 accept booking availability and get paid on time.
                </p>

                <ul>
                  <li>✔ Verified customers</li>
                  <li>✔ Secure payment</li>
                  <li>✔ Weekly payouts</li>
                </ul>
            </div>
            
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formBox}>
          <div className={styles.logo}>
            <Image
            src="/images/GroupLogo.png"
            alt="Company logo"
            height={50}
            width={35}
            priority
            />

            
          </div>

          <h2>Create your provider account</h2>
          <p className={styles.subText}>
            Start receiving jobs and manage your work in one place
          </p>

          <button className={styles.googleBtn}>
            <Image
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google logo"
            width={20}
            height={20}
            />
            Continue with Google
          </button>

          <div className={styles.divider}>or</div>

          <form className={styles.form}>
            <label>
              Full Name
              <input type="text" placeholder="Enter your full name" />
            </label>

            <label>
              Email Address
              <input type="email" placeholder="Enter your email" />
            </label>

            <div className={styles.row}>
              <label>
                Phone Number
                <input type="tel" placeholder="Enter phone number" />
              </label>

              <label>
                Service Category
                <select>
                  <option>Select Your Service Category</option>
                  <option>Plumber</option>
                  <option>Electrician</option>
                  <option>Carpenter</option>
                </select>
              </label>
            </div>

            <label>
              Service Location
              <input type="text" placeholder="Enter your city or service area" />
            </label>
      
            <label className={styles.checkbox}>
              <input type="checkbox" />
              I agree to the <span>Terms & Conditions</span> and
              <span> Privacy Policy</span>
            </label>

            <button className={styles.submitBtn}>
              Create Provider Account
            </button>
          </form>

          <p className={styles.loginText}>
            Already have an account? <span>Log in</span>
          </p>
        </div>
      </div>
    </section>
  );
}
