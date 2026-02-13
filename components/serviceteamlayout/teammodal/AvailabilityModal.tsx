// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import moment from "moment";
// import { setBooking } from "@/redux/slice/bookingSlice";
// import styles from "@/style/serviceteam/availabilityModal.module.css";
// import { useRouter } from "next/navigation";


// export default function AvailabilityModal({
//   provider,
//   onClose,
// }: {
//   provider: any;
//   onClose: () => void;
// }) {
//   const dispatch = useDispatch();
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const router = useRouter()

//   const handleConfirm = () => {
//     if (!selectedTime) return;

//     dispatch(
//       setBooking({
//         provider,
//         date: moment().format("YYYY-MM-DD"), // can be replaced with selected date
//         time: selectedTime,
//       })
//     );
//     router.push("/pages/checkout")
//     onClose();
//   };

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <h4 className={styles.title}>Select Available Time</h4>

//         <div className={styles.timeGrid}>
//           {provider.availability.map((time: string) => {
//             const isChecked = selectedTime === time;

//             return (
//               <label key={time} className={styles.timeCheckbox}>
//                 <input
//                   type="checkbox"
//                   className={styles.hiddenInput}
//                   checked={isChecked}
//                   onChange={() => setSelectedTime(time)}
//                 />
//                 <span
//                   className={`${styles.timeLabel} ${
//                     isChecked ? styles.checked : ""
//                   }`}
//                 >
//                   {time}
//                 </span>
//               </label>
//             );
//           })}
//         </div>

//         <button
//           className={styles.confirmBtn}
//           onClick={handleConfirm}
//           disabled={!selectedTime}
//         >
//           OK
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setBooking } from "@/redux/slice/checkoutSlice";
import { BaseURL } from "@/api/axios/axios";
import styles from "@/style/serviceteam/availabilityModal.module.css";

export default function AvailabilityModal({ provider, onClose }: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const getImageUrl = (path?: string) =>
    path ? `${BaseURL}${path}` : "/images/default-user.png";

  const handleConfirm = () => {
    if (!selectedTime) return;

    // ✅ Save provider + slot into checkout slice
    dispatch(
      setBooking({
        provider: provider,
        date: new Date().toISOString().split("T")[0],
        time: selectedTime,
        totalAmount: 0,
        items: [],
        totalPrice: 0,
      })
    );

    router.push("/pages/checkout");
  };

  const availabilitySlots = provider?.availability || [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* CLOSE BUTTON */}
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {/* PROVIDER DETAILS */}
        <div className={styles.providerSection}>
          <div className={styles.providerImage}>
            <img
              src={getImageUrl(provider?.image)}
              alt={provider?.name}
            />
          </div>

          <div className={styles.providerInfo}>
            <h3>{provider?.name}</h3>
            <p className={styles.service}>
              {provider?.service_type_name} Professional
            </p>
            <div className={styles.details}>
              <span>📍 {provider?.location}</span>
              <span>⭐ {provider?.experience || 5} years experience</span>
            </div>
            <div className={styles.fee}>
              <span className={styles.feeLabel}>Service Fee:</span>
              <span className={styles.feeAmount}>₹{provider?.fees}</span>
            </div>
          </div>
        </div>

        {/* TIME SLOT SELECTION */}
        <div className={styles.slotsSection}>
          <h4>Select Available Time Slot</h4>
          <div className={styles.slotsGrid}>
            {availabilitySlots.map((slot: string) => (
              <label key={slot} className={styles.slotCheckbox}>
                <input
                  type="radio"
                  name="time"
                  value={slot}
                  checked={selectedTime === slot}
                  onChange={() => setSelectedTime(slot)}
                  className={styles.hiddenInput}
                />
                <span
                  className={`${styles.slotLabel} ${
                    selectedTime === slot ? styles.selected : ""
                  }`}
                >
                  {slot}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className={styles.actions}>
          <button
            className={styles.confirmBtn}
            onClick={handleConfirm}
            disabled={!selectedTime}
          >
            Proceed to Checkout
          </button>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
