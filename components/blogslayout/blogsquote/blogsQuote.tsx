"use client";

import { useState } from "react";
import styles from "@/style/blogscss/blogsQuote.module.css";

type FormState = {
  name: string;
  email: string;
  address: string;
  workType: string;
  date: string;
};

export default function BlogsQuote() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    address: "",
    workType: "",
    date: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ---------- handlers ---------- */
  const handleChange = (key: keyof FormState, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.address) {
      setError("All fields are required");
      return false;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email");
      return false;
    }
    if (!form.workType || !form.date) {
      setError("Please select work type and date");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        address: "",
        workType: "",
        date: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.quoteSec}>
      <div className="container">
        <div className={styles.quoteHeader} data-aos="fade-up">
          <h2 className="title2">Request a Quote</h2>
          <h4 className="title4">For Free Estimate!</h4>
        </div>

        <div className="row">
          {/* Name */}
          <div className="col-lg-4 col-md-6 col-12">
            <input
              className={styles.quoteInput}
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="col-lg-4 col-md-6 col-12">
            <input
              type="email"
              className={styles.quoteInput}
              placeholder="Email id"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="col-lg-4 col-md-6 col-12">
            <input
              className={styles.quoteInput}
              placeholder="Home Address"
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          {/* Work Type */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.selectWrapper}>
              <select
              className={styles.selectInput}
              value={form.workType}
              onChange={(e) => handleChange("workType", e.target.value)}
            >
              <option value="">Select your work type</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Cleaner">Cleaner</option>
            </select>

            </div>
            
          </div>

          {/* Date */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className={styles.selectWrapper}>
              <select
              className={styles.selectInput}
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
              >
              <option value="">Select Date</option>
              <option value="18.03.2026-10.05.2026">
                18.03.2026 - 10.05.2026
              </option>
              <option value="10.07.2026-05.09.2026">
                10.07.2026 - 05.09.2026
              </option>
              </select>

            </div>
            
          </div>

          {/* Button */}
          <div className="col-lg-4 col-md-6 col-12">
            <button
              className={styles.estimateBtn}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Get Estimate Quote"}
            </button>
          </div>
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>Quote submitted!</p>}
      </div>
    </section>
  );
}
