"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "@/style/paymentcss/payment.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setBooking } from "@/redux/slice/bookingSlice";

export default function PaymentPage() {
  const [success, setSuccess] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<{ payment?: string; terms?: string }>({});
  const { provider, date, time, totalAmount } = useSelector((state: RootState) => state.booking);
  const router = useRouter();
  const dispatch = useDispatch()

  // Redirect after success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.replace("/pages/serviceteam");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [success, router]);

  dispatch(
  setBooking({
    provider,
    date,
    time,
    totalAmount,
  })
);


  const handleSubmit = () => {
    const newErrors: typeof errors = {};

    if (Object.keys(newErrors).length === 0) {
    setSuccess(true); // ❗ REQUIRED
    }

    if (!paymentType) {
      newErrors.payment = "Please select a payment method";
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept Terms & Conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Proceed to payment");
      // trigger payment flow / modal
    }
  };
  let amtToPay = totalAmount+129+100

  return (
    <>
      <section className={styles.paymentWrapper}>
        <div className={styles.container}>

          {/* LEFT */}
          <div className={styles.summaryCard}>
            <h3>Payment summary</h3>

            <ul>
              <li>
                <span>Item total</span>
                <span>₹ {totalAmount}</span>
              </li>
              <li>
                <span>Tip</span>
                <span>₹ 100</span>
              </li>
              <li>
                <span>Taxes and Fee</span>
                <span>₹ 129</span>
              </li>
            </ul>

            <div className={styles.total}>
              <span>Amount to pay</span>
              <span>₹ {amtToPay}</span>
            </div>
          </div>


          {/* RIGHT */}
          <div className={styles.paymentOptions} data-aos="fade-up">
                <div className={styles.methodCard}>
            <h4>Payment Methods</h4>

             {/* PAYMENT LOGOS */}
            <div className={styles.paymentLogos}>
                {[
                    "master",
                    "visa",
                    "amex - Copy",
                    "paypal",
                    "bizgold",
                     "clipart-discove",
                    ].map((logo) => (
                <motion.div
                    key={logo}
                     className={styles.logoBox}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    >
                <Image
                src={`/images/payment/${logo}.png`}
                alt={logo}
                 width={80}
                 height={50}
                 className={styles.logoImg}
                 priority
                 />
                </motion.div>
                ))}
            </div>


            {/* PAYMENT MODE */}
            <label className={styles.option}>
            <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentType === "cash"}
                onChange={() => setPaymentType("cash")}
            />
                Cash Payment
            </label>

            <label className={styles.option}>
            <input
                type="radio"
                name="payment"
                value="online"
                checked={paymentType === "online"}
                onChange={() => setPaymentType("online")}
            />
                Credit Card, Debit Card, Net banking
            </label>

            {errors.payment && <span className={styles.error}>{errors.payment}</span>}


            {/* SECURITY TEXT */}
                <p className={styles.secureText}>
                    Pay securely by Credit or Debit card or internet <br />
                    banking through CCAvenue Secure Servers.
                </p>

            {/* TERMS */}
                <label className={styles.terms}>
                <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                I have read and agree to <span>Terms</span> & <span>Condition</span>.
                </label>

                {errors.terms && <span className={styles.error}>{errors.terms}</span>}

                {/* PAY BUTTON */}
                <button
                    type="button"
                    className={styles.payBtn}
                    disabled={!termsAccepted || !paymentType}
                    onClick={handleSubmit}
                >
                 Proceed to pay
                </button>
            </div>

          </div>
          
        </div>
      </section>

      {/* 🎬 Animated Success Modal */}
        <AnimatePresence>
        {success && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <motion.div
                className={styles.check}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                ✓
              </motion.div>

              <h3>Payment Successful!</h3>
              <p>Redirecting to service team...</p>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
    </>
  );
}
