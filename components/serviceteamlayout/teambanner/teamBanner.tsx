"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProviders, resetProviders } from "@/redux/slice/providerSlice";
import { AppDispatch } from "@/redux/store/store";
import styles from "@/style/serviceteam/teambanner.module.css";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useRef } from "react";
import moment, { Moment } from "moment";

export default function TeamBanner({ activeFilter }: { activeFilter: number }) {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedDateTime, setSelectedDateTime] = useState<Moment | null>(null);
  const [minFee, setMinFee] = useState<number | "">("");
  const [maxFee, setMaxFee] = useState<number | "">("");
  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const [dateKey, setDateKey] = useState(0);


  // --- 1️⃣ Availability Search ---
  const handleDateSearch = async () => {
  if (!selectedDateTime) return;

  const formattedTime = selectedDateTime.format("hh:mmA"); // 🔥 FIX
  console.log("Searching time:", formattedTime);

  dispatch(resetProviders());

  try {
    await dispatch(
      searchProviders({
        service_type: selectedCategory,
        date: formattedTime,
      })
    ).unwrap();

    // clear input after success
    setSelectedDateTime(null);
  } catch (err) {
    console.error("Date search failed", err);
  }
};


  // --- 2️⃣ Fees Search ---
  const handleFeeSearch = async () => {
    dispatch(resetProviders());

    try {
      await dispatch(
        searchProviders({
          service_type: activeFilter,
          minFee: minFee === "" ? undefined : minFee,
          maxFee: maxFee === "" ? undefined : maxFee,
        })
      ).unwrap();

      // ✅ clear after success
      setMinFee("");
      setMaxFee("");
    } catch (err) {
      console.error("Fee search failed", err);
    }
  };

  return (
    <section className={styles.bannerSec}>
      <div className="container">
        <div className={styles.bannerCont}>
          <h1 className="title1">
            Find Your <span>Consultation</span>
          </h1>

          <div className={styles.bannerForm}>
            {/* --- Date & Time --- */}
            <div style={{ display: "inline-flex", alignItems: "center", marginRight: "1rem" }}>
              <DateTime
                key={dateKey}
                value={selectedDateTime ?? undefined}
                onChange={(value) => {
                if (moment.isMoment(value)) {
                  setSelectedDateTime(value);

                  dispatch(resetProviders());
                  dispatch(
                    searchProviders({
                    service_type: activeFilter,
                    date: value.format("hh:mm A"),
                    })
                  );
                  }
                }}
                
              
                inputProps={{
                placeholder: "Select date & time",
                readOnly: true,
                ref: dateInputRef,
                }}
                timeFormat="hh:mm A"
                dateFormat="YYYY-MM-DD"
                />

                <button
                  type="button"
                  onClick={() => dateInputRef.current?.focus()}
                  style={{ marginLeft: "0.5rem" }}
                >
                  <i className="bi bi-calendar-event"></i>
                </button>
                
              </div>

            {/* --- Fees --- */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <input
                type="number"
                placeholder="Min Fee"
                value={minFee}
                onChange={(e) =>
                  setMinFee(e.target.value === "" ? "" : Number(e.target.value))
                }
              />

              <input
                type="number"
                placeholder="Max Fee"
                value={maxFee}
                onChange={(e) =>
                  setMaxFee(e.target.value === "" ? "" : Number(e.target.value))
                }
              />

              <button type="button" onClick={handleFeeSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
