"use client";

import styles from "./privacyPolicies.module.css";

export default function PrivacyPoliciesSection() {
  return (
    <section className={styles.termSec}>
      <div className={`${styles.customContainer} ${styles.termContainer}`}>

        {/* Header */}
        <div className={styles.termHeader}>
          <h1 className="title1">Terms & Conditions</h1>
          <h5 className="title5">Last Update :- January, 1 2026</h5>
        </div>

        <div className={styles.customRow}>

          {/* LEFT COLUMN */}
          <div className={styles.leftCol}>
            <div className={styles.termContLeft}>

              <h4 className="title4">
                By accessing or using our home service platform, you agree to
                comply with and be bound by the following terms. Please read
                them carefully.
              </h4>

              <ul className={styles.termLeftList}>

                <li>
                  Scope of Services
                  <p>
                    Our platform connects customers with independent service
                    professionals such as plumbers, electricians, cleaners,
                    carpenters, technicians, and other home service providers.
                    We act only as a facilitator and do not directly provide the services.
                  </p>
                </li>

                <li>
                  User Registration & Eligibility
                  <p>
                    To use certain features, you must create an account. You
                    agree to provide accurate, complete, and up-to-date
                    information and to keep your login credentials secure.
                    You must be at least 18 years old to use our services.
                  </p>
                </li>

                <li>
                  Platform Usage Guidelines
                  <p>
                    You agree to use the platform responsibly and lawfully.
                    Any misuse, fraudulent activity, or attempt to disrupt
                    the platform may result in suspension or termination.
                  </p>
                </li>

                <li>
                  Data Usage & Privacy Consent
                  <p>
                    By using our platform, you consent to the collection,
                    storage, and use of your personal data according to
                    our Privacy Policy.
                  </p>
                </li>

                <li>
                  Service Requests & Scheduling
                  <p>
                    Service bookings are subject to availability. We do not
                    guarantee that a professional will accept every request.
                  </p>
                </li>

                <li>
                  Charges, Payments & Invoicing
                  <p>
                    Prices may vary depending on service type and location.
                    Payments must be made through approved methods.
                  </p>
                </li>

                <li>
                  User Behavior & Conduct
                  <p>
                    Users must treat service providers with respect.
                    Harassment or abuse may lead to suspension.
                  </p>
                </li>

                <li>
                  External Providers & Third-Party Tools
                  <p>
                    We are not responsible for third-party services or policies.
                  </p>
                </li>

                <li>
                  User Obligations
                  <p>
                    You are responsible for accurate service details and
                    safe working conditions.
                  </p>
                </li>

                <li>
                  Ownership & Platform Rights
                  <p>
                    All platform content is protected under intellectual property laws.
                  </p>
                </li>

                <li>
                  Account Suspension & Termination
                  <p>
                    We reserve the right to suspend accounts that violate policies.
                  </p>
                </li>

                <li>
                  Service Limitations & No Guarantees
                  <p>
                    Services are provided “as is” without warranties.
                  </p>
                </li>

                <li>
                  Liability & Compensation
                  <p>
                    We are not liable for indirect damages.
                  </p>
                </li>

                <li>
                  Legal Framework & Dispute Handling
                  <p>
                    These terms are governed by applicable laws.
                  </p>
                </li>

                <li>
                  Changes to Terms
                  <p>
                    We may update these terms anytime.
                  </p>
                </li>

                <li>
                  Contact Information
                  <p>
                    For questions or concerns:
                  </p>

                  <div className={styles.listEmail}>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:localpro.services.kolkata@gmail.com">
                      localpro.services.kolkata@gmail.com
                    </a>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.rightCol}>
            <div className={styles.termRightCont}>
              <h4 className="title4">TERMS AND CONDITIONS</h4>

              <ul className={styles.termRightList}>
                <li>Scope of Services</li>
                <li>User Registration & Eligibility</li>
                <li>Platform Usage Guidelines</li>
                <li>Data Usage & Privacy Consent</li>
                <li>Service Requests & Scheduling</li>
                <li>Charges, Payments & Invoicing</li>
                <li>User Behavior & Conduct</li>
                <li>External Providers & Third-Party Tools</li>
                <li>User Obligations</li>
                <li>Ownership & Platform Rights</li>
                <li>Account Suspension & Termination</li>
                <li>Service Limitations & No Guarantees</li>
                <li>Liability & Compensation</li>
                <li>Legal Framework & Dispute Handling</li>
                <li>Changes to Terms</li>
                <li>Contact Information</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
