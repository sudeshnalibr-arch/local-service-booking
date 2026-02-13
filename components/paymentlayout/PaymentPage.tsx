"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "@/style/paymentcss/payment.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store/store";
import { setBooking } from "@/redux/slice/bookingSlice";
import { BaseURL } from "@/api/axios/axios";
import moment from "moment";

export default function PaymentPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // ✅ Safe selector - use checkout state with fallbacks
  const checkoutState = useSelector((state: RootState) => state.checkout);
  const provider = checkoutState?.provider;
  const date = checkoutState?.date;
  const time = checkoutState?.time;
  const totalAmount = checkoutState?.totalAmount ?? 0;
  const items = checkoutState?.items ?? [];
  const totalPrice = checkoutState?.totalPrice ?? 0;

  const [paymentType, setPaymentType] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<{ payment?: string; terms?: string }>({});
  const [success, setSuccess] = useState(false);

  // Calculate amounts
  const SERVICE_FEE = 129;
  const DISCOUNT = 100;
  const cartTotal = totalPrice;
  const discountedCartTotal = cartTotal > 0 ? Math.max(cartTotal - DISCOUNT, 0) : 0;
  const finalAmount = (Number(provider?.fees || 0)) + discountedCartTotal + SERVICE_FEE;

  // Redirect after success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.replace("/pages/serviceteam");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [success, router]);

  const handleSubmit = () => {
    const newErrors: typeof errors = {};

    if (!paymentType) {
      newErrors.payment = "Please select a payment method";
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept Terms & Conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      // Sync to booking slice as well
      dispatch(
        setBooking({
          provider,
          date,
          time,
          totalAmount: finalAmount,
        })
      );
    }
  };

  const getImageUrl = (path?: string) =>
    path ? `${BaseURL}${path}` : "/images/default-user.png";

  if (!provider) {
    return (
      <section className={styles.paymentWrapper}>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <h2>No Provider Selected</h2>
            <p>Please complete checkout first before proceeding to payment.</p>
            <button
              className={styles.backBtn}
              onClick={() => router.back()}
            >
              Go Back to Checkout
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className={styles.paymentWrapper}>
        <div className={styles.header}>
          <h1>Payment</h1>
          <p>Complete your payment securely</p>
        </div>

        <div className={styles.container}>
          {/* LEFT SECTION - BOOKING DETAILS */}
          <div className={styles.left}>
            {/* SERVICE PROVIDER CARD */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Service Provider</h3>
              <div className={styles.providerCard}>
                <div className={styles.providerImage}>
                  <img
                    src={getImageUrl(provider.image)}
                    alt={provider.name}
                  />
                </div>
                <div className={styles.providerInfo}>
                  <h4>{provider.name}</h4>
                  <p className={styles.role}>{provider.service_type_name} Professional</p>
                  <div className={styles.details}>
                    <span>📍 {provider.location}</span>
                    <span>⭐ {provider.experience} years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BOOKING DETAILS */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Booking Details</h3>
              <div className={styles.detailsList}>
                <div className={styles.detailRow}>
                  <span className={styles.label}>📅 Date</span>
                  <span className={styles.value}>
                    {date ? moment(date).format("DD MMM YYYY") : "N/A"}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>🕐 Time</span>
                  <span className={styles.value}>{time || "N/A"}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>📍 Location</span>
                  <span className={styles.value}>{provider.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - PAYMENT */}
          <div className={styles.right}>
            {/* PAYMENT SUMMARY */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Payment Summary</h3>
              <div className={styles.summaryList}>
                <div className={styles.summaryRow}>
                  <span>Service Provider Fee</span>
                  <span>₹{provider.fees}</span>
                </div>
                {items.length > 0 && (
                  <>
                    <div className={styles.summaryRow}>
                      <span>Additional Items</span>
                      <span>₹{cartTotal}</span>
                    </div>
                    {cartTotal > 0 && (
                      <div className={styles.summaryRow}>
                        <span>Discount</span>
                        <span>-₹{DISCOUNT}</span>
                      </div>
                    )}
                  </>
                )}
                <div className={styles.summaryRow}>
                  <span>Service Fee</span>
                  <span>₹{SERVICE_FEE}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Total Amount</span>
                  <span>₹{finalAmount}</span>
                </div>
              </div>
            </div>

            {/* PAYMENT OPTIONS */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Payment Method</h3>

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

              {/* PAYMENT OPTIONS */}
              <div className={styles.paymentOptions}>
                <label className={styles.option}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentType === "card"}
                    onChange={() => setPaymentType("card")}
                  />
                  <span>Credit/Debit Card</span>
                </label>

                <label className={styles.option}>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentType === "upi"}
                    onChange={() => setPaymentType("upi")}
                  />
                  <span>UPI Payment</span>
                </label>

                <label className={styles.option}>
                  <input
                    type="radio"
                    name="payment"
                    value="netbanking"
                    checked={paymentType === "netbanking"}
                    onChange={() => setPaymentType("netbanking")}
                  />
                  <span>Net Banking</span>
                </label>

                <label className={styles.option}>
                  <input
                    type="radio"
                    name="payment"
                    value="wallet"
                    checked={paymentType === "wallet"}
                    onChange={() => setPaymentType("wallet")}
                  />
                  <span>Digital Wallet</span>
                </label>

                <label className={styles.option}>
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentType === "cash"}
                    onChange={() => setPaymentType("cash")}
                  />
                  <span>Cash on Service</span>
                </label>
              </div>

              {errors.payment && (
                <div className={styles.errorMessage}>{errors.payment}</div>
              )}

              {/* SECURITY TEXT */}
              <p className={styles.secureText}>
                🔒 Pay securely through CCAvenue Secure Servers. Your payment information is encrypted and safe.
              </p>

              {/* TERMS & CONDITIONS */}
              <label className={styles.termsLabel}>
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <span>
                  I have read and agree to <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                </span>
              </label>

              {errors.terms && (
                <div className={styles.errorMessage}>{errors.terms}</div>
              )}

              {/* ACTION BUTTONS */}
              <div className={styles.actions}>
                <button
                  className={styles.payBtn}
                  disabled={!termsAccepted || !paymentType}
                  onClick={handleSubmit}
                >
                  Proceed to Pay ₹{finalAmount}
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => router.back()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {success && (
          <motion.div className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={styles.checkmark}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
              >
                ✓
              </motion.div>

              <h3>Payment Successful!</h3>
              <p>Your booking is confirmed. Redirecting...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
