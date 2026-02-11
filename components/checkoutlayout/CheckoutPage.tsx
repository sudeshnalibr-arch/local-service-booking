"use client";

import styles from "@/style/checkoutcss/checkout.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { BaseURL } from "@/api/axios/axios";
import moment from "moment";
import { setBooking } from "@/redux/slice/bookingSlice";

// type Props = {
//   serviceId: string;
// };

export default function CheckoutPage() {
  // Mock data – replace with API call using serviceId
  const router = useRouter()

  const { provider, date, time } = useSelector(
    (state: RootState) => state.booking
  );

  const SERVICE_FEE = 129;
  const totalAmount = Number(provider.fees) + SERVICE_FEE;
  const dispatch = useDispatch()
  dispatch(
  setBooking({
    provider,
    date,
    time,
    totalAmount,
  })
);


  if (!provider) return <p>No booking selected</p>;

  // const service = {
  //   title: "Professional Bathroom Cleaner",
  //   provider: "Urban Expert",
  //   price: 1449,
  //   location: "Kolkata",
    
  //   slot: " 05-02-2026   9:00 AM - 10:00 AM",
  // };
  const getImageUrl = (path?: string) =>
      path ? `${BaseURL}${path}` : "/images/default-user.png";
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
            

            <input
              type="text"
              value={
              date && time
                ? `${moment(date).format("DD MMM YYYY")}  •  ${time}`
                : ""
              }
              readOnly
              placeholder="Booking date & time"
            />

          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.card}>
            <h3>Service details</h3>

            <div className={styles.service}>
              
                <div className={styles.providerImage}>
                    <img
                        src={getImageUrl(provider.image)}
                        alt={provider.name}
                     />
                  </div>
                  <div className={styles.content}>
                    
                        <h4>{provider.name}</h4>
                      <div className={styles.spInfo}>
                          <p>Professional {provider.service_type_name}</p>
                          <p>₹{provider.fees}</p>
                      </div>
                        
                  <div>
              
            </div>
                
                  </div>
            </div>
          </div>
          <div className={styles.card}>
            <h3>Payment summary</h3>

            <div className={styles.summaryRow}>
              <span>Item total</span>
              <span>₹ {provider.fees}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Taxes & fee</span>
              <span>₹ 129</span>
            </div>

            <div className={styles.total}>
              <span>Amount to pay</span>
              <span>₹ {totalAmount}</span>
            </div>

            <button onClick={()=>proceedPay()} className={styles.payBtn}>Proceed to pay</button>
          </div>
        </div>
      </div>
    </section>
  );
}
