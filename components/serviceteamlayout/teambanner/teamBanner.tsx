"use client";

import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchProviders, resetProviders } from "@/redux/slice/providerSlice";
import { AppDispatch } from "@/redux/store/store";
import styles from "@/style/serviceteam/teambanner.module.css";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment, { Moment } from "moment";

export default function TeamBanner({ activeFilter }: { activeFilter: number }) {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedDateTime, setSelectedDateTime] = useState<Moment | null>(null);
  const [minFee, setMinFee] = useState<number | "">("");
  const [maxFee, setMaxFee] = useState<number | "">("");
  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const [dateKey, setDateKey] = useState(0)

  // 🔍 SINGLE SEARCH HANDLER (date + fee together)
  const handleSearch = async () => {
  if (!selectedDateTime && minFee === "" && maxFee === "") return;

  dispatch(resetProviders());

    try {
      await dispatch(
        searchProviders({
          service_type: activeFilter,
          date: selectedDateTime
            ? selectedDateTime.format("hh:mm A") // ✅ ONLY TIME SENT
            : undefined,
            minFee: minFee === "" ? undefined : minFee,
            maxFee: maxFee === "" ? undefined : maxFee,
          })
        ).unwrap();

          // ✅ CLEAR INPUTS
        setSelectedDateTime(null);
        setMinFee("");
        setMaxFee("");
        setDateKey((k) => k + 1); // 🔥 force DateTime reset
        } catch (err) {
        console.error("Search failed", err);
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
            {/* DATE & TIME */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <DateTime
                key={dateKey}
                 value={selectedDateTime ?? undefined}
                 onChange={(value) => {
                  if (moment.isMoment(value)) {
                  setSelectedDateTime(value); // 🔥 store full date+time
                  }
                }}
                  dateFormat="YYYY-MM-DD"
                  timeFormat="hh:mm A"
                  inputProps={{
                  placeholder: "Select date & time",
                  readOnly: true,
                  }}
                />

              <button
                type="button"
                onClick={() => dateInputRef.current?.focus()}
                style={{ marginLeft: "0.5rem" }}
              >
                <i className="bi bi-calendar-event"></i>
              </button>
            </div>

            {/* FEES */}
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

              <button type="button" 
              onClick={handleSearch}
              disabled={!selectedDateTime && minFee === "" && maxFee === ""}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
