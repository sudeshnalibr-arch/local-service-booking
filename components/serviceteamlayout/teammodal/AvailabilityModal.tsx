import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { setBooking } from "@/redux/slice/bookingSlice";
import styles from "@/style/serviceteam/availabilityModal.module.css";
import { useRouter } from "next/navigation";


export default function AvailabilityModal({
  provider,
  onClose,
}: {
  provider: any;
  onClose: () => void;
}) {
  const dispatch = useDispatch();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const router = useRouter()

  const handleConfirm = () => {
    if (!selectedTime) return;

    dispatch(
      setBooking({
        provider,
        date: moment().format("YYYY-MM-DD"), // can be replaced with selected date
        time: selectedTime,
      })
    );
    router.push("/pages/checkout")
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h4 className={styles.title}>Select Available Time</h4>

        <div className={styles.timeGrid}>
          {provider.availability.map((time: string) => {
            const isChecked = selectedTime === time;

            return (
              <label key={time} className={styles.timeCheckbox}>
                <input
                  type="checkbox"
                  className={styles.hiddenInput}
                  checked={isChecked}
                  onChange={() => setSelectedTime(time)}
                />
                <span
                  className={`${styles.timeLabel} ${
                    isChecked ? styles.checked : ""
                  }`}
                >
                  {time}
                </span>
              </label>
            );
          })}
        </div>

        <button
          className={styles.confirmBtn}
          onClick={handleConfirm}
          disabled={!selectedTime}
        >
          OK
        </button>
      </div>
    </div>
  );
}
