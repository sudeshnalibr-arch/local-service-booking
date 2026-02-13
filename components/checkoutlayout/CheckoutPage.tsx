// "use client";

// import styles from "@/style/checkoutcss/checkout.module.css";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/redux/store/store";
// import { BaseURL } from "@/api/axios/axios";
// import moment from "moment";
// import { setBooking } from "@/redux/slice/bookingSlice";
// import { useEffect } from "react";

// // type Props = {
// //   serviceId: string;
// // };

// export default function CheckoutPage() {
//   // Mock data – replace with API call using serviceId
//   const router = useRouter()

//   const { provider, date, time } = useSelector(
//     (state: RootState) => state.booking
//   );

//   const { items, totalPrice } = useSelector(
//   (state: RootState) => state.cart
// );


//   const SERVICE_FEE = 129;
//   const DISCOUNT = 100;
//   // const totalAmount = Number(provider.fees) + SERVICE_FEE;
//   // const providerFee = Number(provider.fees);
//   const providerFee = Number(provider?.fees || 0);


// const cartTotal = totalPrice;

// // Apply discount only if cart has items
// const discountedCartTotal =
//   cartTotal > 0 ? Math.max(cartTotal - DISCOUNT, 0) : 0;

// const totalAmount = providerFee + discountedCartTotal + SERVICE_FEE;


//   const dispatch = useDispatch()


// //   dispatch(
// //   setBooking({
// //     provider,
// //     date,
// //     time,
// //     totalAmount,
// //   })
// // );

// useEffect(() => {
//   dispatch(
//     setBooking({
//       provider,
//       date,
//       time,
//       totalAmount,
//     })
//   );
// }, [provider, date, time, totalAmount, dispatch]);


//   {!provider && items.length > 0 && (
//   <p style={{ color: "orange" }}>
//     No service provider selected. You can still proceed with item purchase.
//   </p>
// )}



//   // const service = {
//   //   title: "Professional Bathroom Cleaner",
//   //   provider: "Urban Expert",
//   //   price: 1449,
//   //   location: "Kolkata",
    
//   //   slot: " 05-02-2026   9:00 AM - 10:00 AM",
//   // };
//   const getImageUrl = (path?: string) =>
//       path ? `${BaseURL}${path}` : "/images/default-user.png";
//   const proceedPay= () => {
//      router.push("/pages/payment")
//   }

  
   
//   return (
//     <section className={styles.checkout}>
//       {/* HEADER */}
//       <div className={styles.header}>
//         <h1>Checkout</h1>
//         <p>Home / Checkout</p>
//       </div>

//       {/* CONTENT */}
//       <div className={styles.container}>
//         {/* LEFT */}
//         <div className={styles.left}>
//           <div className={styles.card}>
//             <label>Email address</label>
//             <input type="email" />

//             <div className={styles.row}>
//               <div>
//                 <label>First name</label>
//                 <input type="text" />
//               </div>
//               <div>
//                 <label>Last name</label>
//                 <input type="text" />
//               </div>
//             </div>

//             <label>Street address</label>
//             <input type="text" />

//             <label>Phone number</label>
//             <input type="text" />

//             <label>Slot</label>
            

//             <input
//               type="text"
//               value={
//               date && time
//                 ? `${moment(date).format("DD MMM YYYY")}  •  ${time}`
//                 : ""
//               }
//               readOnly
//               placeholder="Booking date & time"
//             />

//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className={styles.right}>
//           {/* <div className={styles.card}>
//             <h3>Service details</h3>

//             <div className={styles.service}>
              
//                 <div className={styles.providerImage}>
//                     <img
//                         src={getImageUrl(provider.image)}
//                         alt={provider.name}
//                      />
//                   </div>
//                   <div className={styles.content}>
                    
//                         <h4>{provider.name}</h4>
//                       <div className={styles.spInfo}>
//                           <p>Professional {provider.service_type_name}</p>
//                           <p>₹{provider.fees}</p>
//                       </div>
                        
//                   <div>
              
//             </div>
                
//                   </div>
//             </div>
//           </div> */}

//           {provider && (
//             <div className={styles.card}>
//             <h3>Service details</h3>

//             <div className={styles.service}>
//             <div className={styles.providerImage}>
//             <img
//               src={getImageUrl(provider.image)}
//               alt={provider.name}
//             />
//             </div>

//             <div className={styles.content}>
//               <h4>{provider.name}</h4>
//                 <div className={styles.spInfo}>
//                 <p>Professional {provider.service_type_name}</p>
//                 <p>₹{provider.fees}</p>
//             </div>
//           </div>
//           </div>
//         </div>
//         )}


//           <div className={styles.card}>
//               <h3>Selected Items</h3>

//               {items.length === 0 ? (
//                 <p>No additional items selected</p>
//                   ) : (
//                    items.map((item) => (
//                     <div key={item.id} className={styles.summaryRow}>
//                     <span>
//                         {item.name} × {item.quantity}
//                           </span>
//                             <span>₹ {item.price * item.quantity}</span>
//                 </div>
//                  ))
//                 )}

//                 <div className={styles.summaryRow}>
//                   <span>Cart Total</span>
//                   <span>₹ {cartTotal}</span>
//                 </div>

//                 <div className={styles.summaryRow} style={{ color: "green" }}>
//                   <span>Discount</span>
//                   <span>- ₹ {cartTotal > 0 ? DISCOUNT : 0}</span>

//                 </div>

//                 <div className={styles.summaryRow}>
//                   <strong>After Discount</strong>
//                   <strong>₹ {discountedCartTotal}</strong>
//                 </div>
//               </div>

//             <div className={styles.card}>
//               <h3>Payment summary</h3>

//               <div className={styles.summaryRow}>
//                 <span>Provider Fee</span>
//                 <span>₹ {providerFee}</span>
//               </div>
//               <div className={styles.summaryRow}>
//                 <span>Discounted Items</span>
//                 <span>₹ {discountedCartTotal}</span>
//               </div>

//               <div className={styles.summaryRow}>
//                 <span>Service Fee</span>
//                 <span>₹ {SERVICE_FEE}</span>
//               </div>

//               <div className={styles.total}>
//                 <span>Amount to Pay</span>
//                 <span>₹ {totalAmount}</span>
//               </div>

//             {/* <div className={styles.summaryRow}>
//               <span>Taxes & fee</span>
//               <span>₹ 129</span>
//             </div>

//             <div className={styles.total}>
//               <span>Amount to pay</span>
//               <span>₹ {totalAmount}</span>
//             </div> */}

//             <button onClick={()=>proceedPay()} className={styles.payBtn}>Proceed to pay</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import styles from "@/style/checkoutcss/checkout.module.css";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { BaseURL } from "@/api/axios/axios";
import moment from "moment";
import { setBooking } from "@/redux/slice/checkoutSlice";
import { useEffect } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { provider, date, time, items, totalPrice } = useSelector(
    (state: RootState) => state.checkout
  );

  const SERVICE_FEE = 129;
  const DISCOUNT = 100;

  const providerFee = Number(provider?.fees || 0);
  const cartTotal = totalPrice;

  const discountedCartTotal =
    cartTotal > 0 ? Math.max(cartTotal - DISCOUNT, 0) : 0;

  // ✅ Handle both provider flow AND cart-only flow
  const totalAmount = provider 
    ? providerFee + discountedCartTotal + SERVICE_FEE
    : discountedCartTotal + SERVICE_FEE; // Just items + service fee if no provider

  console.log("Checkout provider:", provider);
  console.log("Checkout items:", items);
  console.log("Total price:", totalPrice);

  useEffect(() => {
    dispatch(
      setBooking({
        provider,
        date,
        time,
        totalAmount,
      })
    );
  }, [provider, date, time, totalAmount, dispatch]);

  const getImageUrl = (path?: string) =>
    path ? `${BaseURL}${path}` : "/images/default-user.png";

  // ✅ SHOW EMPTY STATE ONLY IF NO ITEMS AND NO PROVIDER
  if (!provider && items.length === 0) {
    return (
      <section className={styles.checkout}>
        <div className={styles.header}>
          <h1>Checkout</h1>
          <p>Your Shopping Cart</p>
        </div>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <h2>Your Cart is Empty</h2>
            <p>Add items or select a service provider to proceed with checkout.</p>
            <button
              className={styles.backBtn}
              onClick={() => router.back()}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.checkout}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1>Checkout</h1>
        <p>Review your order</p>
      </div>

      {/* MAIN CONTAINER */}
      <div className={styles.container}>
        {/* LEFT SECTION - BOOKING & PROVIDER DETAILS */}
        <div className={styles.left}>
          {/* SERVICE PROVIDER DETAILS (if selected) */}
          {provider && (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Service Provider</h3>
              <div className={styles.providerCard}>
              <div className={styles.providerImage}>
                <img
                  src={getImageUrl(provider.image)}
                  alt={provider.name}
                />
              </div>

              <div className={styles.providerDetails}>
                <div>
                  <h4>{provider.name}</h4>
                  <p className={styles.role}>
                    {provider.service_type_name} Professional
                  </p>
                </div>

                <div className={styles.info}>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>📍 Location</span>
                    <span className={styles.value}>{provider.location}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>⭐ Experience</span>
                    <span className={styles.value}>
                      {provider.experience} years
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>📝 Description</span>
                    <span className={styles.value}>
                      {provider.description || "Professional service provider"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}

            {/* BOOKING DETAILS (if date/time selected) */}
            {provider && date && time && (
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Booking Details</h3>
                <div className={styles.bookingDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.label}>📅 Date</span>
                  <span className={styles.value}>
                    {moment(date).format("DD MMM YYYY")}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>🕐 Time Slot</span>
                  <span className={styles.value}>{time}</span>
                </div>
               <div className={styles.detailRow}>
                  <span className={styles.label}>💰 Service Fee</span>
                  <span className={styles.value}>₹{provider.fees}</span>
                </div>
              </div>
            </div>
          )}

          {/* INFO BOX FOR CART-ONLY */}
          {!provider && items.length > 0 && (
            <div className={styles.infoBox}>
              <h3>📦 Cart Items Only</h3>
              <p>You haven't selected a service provider yet. You can proceed with your cart items or go back to select a provider.</p>
              <button
                className={styles.selectProviderBtn}
                onClick={() => router.push("/pages/serviceteam")}
              >
                Select a Service Provider
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SECTION - SUMMARY */}
        <div className={styles.right}>
          {/* SERVICE SUMMARY (if provider selected) */}
          {provider && (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Service Summary</h3>
              <div className={styles.summaryItem}>
                <div className={styles.summaryLeft}>
                  <img
                    src={getImageUrl(provider.image)}
                    alt={provider.name}
                    className={styles.summaryImage}
                  />
                  <div className={styles.summaryText}>
                    <p className={styles.summaryName}>
                      {provider.service_type_name} - {provider.name}
                    </p>
                    <p className={styles.summaryDesc}>
                      Professional Service
                    </p>
                  </div>
                </div>
                <div className={styles.summaryPrice}>₹{provider.fees}</div>
              </div>
            </div>
          )}

          {/* ITEMS SECTION */}
          {items.length > 0 && (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                {provider ? "Additional Items" : "Cart Items"}
              </h3>
              <div className={styles.itemsList}>
                {items.map((item) => (
                  <div key={item.id} className={styles.itemRow}>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemQty}>× {item.quantity}</span>
                    </div>
                    <span className={styles.itemPrice}>
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PRICE BREAKDOWN */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Price Breakdown</h3>
            <div className={styles.breakdown}>
              {provider && (
                <div className={styles.breakdownRow}>
                  <span>Service Provider Fee</span>
                  <span>₹{providerFee}</span>
                </div>
              )}

              {items.length > 0 && (
                <>
                  <div className={styles.breakdownRow}>
                    <span>Items Total</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  {cartTotal > 0 && (
                    <div className={`${styles.breakdownRow} ${styles.discount}`}>
                      <span>Discount Applied</span>
                      <span>-₹{DISCOUNT}</span>
                    </div>
                  )}
                </>
              )}

              <div className={styles.breakdownRow}>
                <span>Service Fee</span>
                <span>₹{SERVICE_FEE}</span>
              </div>

              <div className={styles.totalRow}>
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className={styles.actions}>
            <button
              className={styles.payBtn}
              onClick={() => router.push("/pages/payment")}
            >
              Proceed to Payment
            </button>
            <button
              className={styles.backBtn}
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}