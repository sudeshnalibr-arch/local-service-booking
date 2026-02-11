"use client";

import { useEffect, useState } from "react";
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

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
  if (success) {
    const timer = setTimeout(() => setSuccess(null), 3000);
    return () => clearTimeout(timer);
  }
}, [success]);


  /* ---------- handlers ---------- */
  // const handleChange = (key: keyof FormState, value: string) => {
  //   setForm({ ...form, [key]: value });

  // };

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  setForm((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));

  setError(null);
  setSuccess(null);
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

// ---------------- handleSubmit------------------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setError(null);
  setSuccess(null);
  setLoading(true);

  try {
    if (!form.name || !form.email || !form.address || !form.workType || !form.date) {
      setError("All fields are required");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    // fake API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSuccess("Your quote request has been submitted successfully!");

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

        
        <form
          className="row"
          onSubmit={handleSubmit} 
           >

              {/* Name */}
              <div className="col-lg-4 col-md-6 col-12">
                <input
                type="text"
                name="name"
                className={styles.quoteInput}
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="col-lg-4 col-md-6 col-12">
                <input
                  type="email"
                  name="email"
                  className={styles.quoteInput}
                  placeholder="Email id"
                  value={form.email}
                  onChange={handleChange}
                  />
                </div>

                {/* Address */}
                  <div className="col-lg-4 col-md-6 col-12">
                  <input
                    type="text"
                    name="address"
                    className={styles.quoteInput}
                    placeholder="Home Address"
                    value={form.address}
                    onChange={ handleChange}
                  />
                  </div>

                {/* Work Type */}
                  <div className="col-lg-4 col-md-6 col-12">
                  <div className={styles.selectWrapper}>
                  <select
                    name="workType"
                    className={styles.selectInput}
                    value={form.workType}
                    onChange={ handleChange}
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
                name="date"
                className={styles.selectInput}
                value={form.date}
                onChange={ handleChange}
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
                type="submit"
                className={styles.estimateBtn}
                disabled={loading}
                >
                  {loading ? "Submitting..." : "Get Estimate Quote"}
                </button>

          </div>
        </form>
          
      </div>

        {success && <p className={styles.success}>{success}</p>}
        {error && <p className={styles.error}>{error}</p>}
    </section>
  );
}
