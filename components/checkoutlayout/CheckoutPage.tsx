"use client";

import styles from "@/style/checkoutcss/checkout.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  serviceId: string;
};

export default function CheckoutPage({ serviceId }: Props) {
  // Mock data – replace with API call using serviceId
  const router = useRouter()
  const service = {
    title: "Professional Bathroom Cleaner",
    provider: "Urban Expert",
    price: 1449,
    location: "Kolkata",
    
    slot: " 05-02-2026   9:00 AM - 10:00 AM",
  };

  const proceedPay= () => {
     router.push("/pages/payment")
  }

  return (
    <section className={styles.checkout}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1>Checkout</h1>
        <p>Home / Checkout</p>
      </div>

      {/* CONTENT */}
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.card}>
            <label>Email address</label>
            <input type="email" />

            <div className={styles.row}>
              <div>
                <label>First name</label>
                <input type="text" />
              </div>
              <div>
                <label>Last name</label>
                <input type="text" />
              </div>
            </div>

            <label>Street address</label>
            <input type="text" />

            <label>Phone number</label>
            <input type="text" />

            <label>Slot</label>
            <input type="text" value={service.slot} readOnly />
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.card}>
            <h3>Service details</h3>

            <div className={styles.service}>
              <div>
                <div className={styles.providerImage}>
                    <Image
                        src={"/images/teamservice/cleaner1.png"}   // example: "/images/providers/plumber1.png"
                         alt={"plumber"}
                            width={120}
                            height={120}
                            className={styles.image}
                            priority
                     />
                </div>
                <h4>{service.title}</h4>
                <p>{service.provider}</p>
                <p>{service.location}</p>
              </div>
              <span>₹ {service.price}</span>
            </div>
          </div>

          <div className={styles.card}>
            <h3>Payment summary</h3>

            <div className={styles.summaryRow}>
              <span>Item total</span>
              <span>₹ {service.price}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Taxes & fee</span>
              <span>₹ 129</span>
            </div>

            <div className={styles.total}>
              <span>Amount to pay</span>
              <span>₹ {service.price + 129}</span>
            </div>

            <button onClick={()=>proceedPay()} className={styles.payBtn}>Proceed to pay</button>
          </div>
        </div>
      </div>
    </section>
  );
}
