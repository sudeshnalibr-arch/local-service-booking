"use client";

import { useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { verifyRegisterOtp } from "@/redux/slice/authSlice";
import styles from "./otp.module.css";

export default function OtpPage() {
const searchParams = useSearchParams();
const router = useRouter();
const dispatch = useDispatch();

const [email, setEmail] = useState(searchParams.get("email") || "");
const inputs = useRef<(HTMLInputElement | null)[]>([]);
const [loading, setLoading] = useState(false);

/* ===== OTP focus logic ===== */

const handleChange = (index: number) => {
if (inputs.current[index]?.value && index < 5) {
inputs.current[index + 1]?.focus();
}
};

const handleKeyDown = (
e: React.KeyboardEvent<HTMLInputElement>,
index: number
) => {
if (e.key === "Backspace" && !inputs.current[index]?.value && index > 0) {
inputs.current[index - 1]?.focus();
}
};

/* ===== Verify OTP ===== */

const verifyOTP = async () => {
const otp = inputs.current.map((i) => i?.value || "").join("");

if (!email || otp.length < 6) return;

try {
  setLoading(true);

  const result = await dispatch(
    verifyRegisterOtp({ email, otp })
  ).unwrap();

  setLoading(false);

  // ✅ Auto redirect on success
  if (result?.status) {
    router.replace("/auth/login");
  }
} catch (error) {
  setLoading(false);
}


};

const resendOTP = () => {
// you can add resend API later
};

return ( <div className={styles.body}> <div className={styles.container}> <h2 className={styles.title}>Enter verification code</h2>


    {/* Email input */}
    <input
      type="email"
      className={styles.emailInput}
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    {/* OTP boxes */}
    <div className={styles.otpInputs}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          ref={(el) => (inputs.current[i] = el)}
          onChange={() => handleChange(i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>

    <div className={styles.resend}>
      Didn’t get a code?{" "}
      <span onClick={resendOTP}>Click to resend</span>
    </div>

    <hr className={styles.divider} />

    <div className={styles.buttons}>
      <button
        className={styles.cancel}
        onClick={() => router.push("/auth/login")}
      >
        Cancel
      </button>

      <button
        className={styles.verify}
        onClick={verifyOTP}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify"}
      </button>
    </div>
  </div>
</div>


);
}




// "use client";

// import { useRef, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { verifyRegisterOtp } from "@/redux/slice/authSlice";
// import { toast } from "sonner";
// import styles from "./otp.module.css";
// import Image from "next/image";

// export default function OtpPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const dispatch = useDispatch();

//   //  email state (editable field)
//   const [email, setEmail] = useState(searchParams.get("email") || "");

//   const inputs = useRef<(HTMLInputElement | null)[]>([]);
//   const [loading, setLoading] = useState(false);

//   /* ===== OTP focus logic ===== */

//   const handleChange = (index: number) => {
//     if (inputs.current[index]?.value && index < 5) {
//       inputs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.key === "Backspace" && !inputs.current[index]?.value && index > 0) {
//       inputs.current[index - 1]?.focus();
//     }
//   };

//   /* ===== Verify OTP ===== */

//   const verifyOTP = async () => {
//     const otp = inputs.current.map((i) => i?.value || "").join("");

//     if (!email) {
//       toast.error("Please enter email");
//       return;
//     }

//     if (otp.length < 6) {
//       toast.error("Please enter complete OTP");
//       return;
//     }

//     try {
//       setLoading(true);

//       const result = await dispatch(
//         verifyRegisterOtp({ email, otp })
//       ).unwrap();

//       setLoading(false);

//       if (result?.status) {
//         toast.success(result?.message || "OTP verified successfully");

//         setTimeout(() => {
//           router.push("/auth/login");
//         }, 1200);
//       } else {
//         toast.success(result?.message);
//       }
//     } catch (error: any) {
//       setLoading(false);
//       // toast.error(error?.message || "Verification failed");
//     }
//   };

//   const resendOTP = () => {
//     toast.success(`OTP resent to ${email}`);
//   };

//   return (
//     <div className={styles.body}>
//       <div className={styles.container}>
//         <div className={styles.icon}>
//           {/* <Image
//             src="/Img/Frame 2121451147.png"
//             alt="logo"
//             width={24}
//             height={24}
//           /> */}
//         </div>

//         <h2 className={styles.title}>Enter verification code</h2>

//         {/* Email input field */}
//         <input
//           type="email"
//           className={styles.emailInput}
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <div className={styles.otpInputs}>
//           {[0, 1, 2, 3, 4, 5].map((i) => (
//             <input
//               key={i}
//               type="text"
//               maxLength={1}
//               ref={(el) => (inputs.current[i] = el)}
//               onChange={() => handleChange(i)}
//               onKeyDown={(e) => handleKeyDown(e, i)}
//             />
//           ))}
//         </div>

//         <div className={styles.resend}>
//           Didn’t get a code?{" "}
//           <span onClick={resendOTP}>Click to resend</span>
//         </div>

//         <hr className={styles.divider} />

//         <div className={styles.buttons}>
//           <button
//             className={styles.cancel}
//             onClick={() => router.push("/auth/login")}
//           >
//             Cancel
//           </button>

//           <button
//             className={styles.verify}
//             onClick={verifyOTP}
//             disabled={loading}
//           >
//             {loading ? "Verifying..." : "Verify"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useRef } from "react";
// import { useSearchParams } from "next/navigation";
// import styles from "./otp.module.css";
// import Image from "next/image";

// export default function OtpPage() {
//   const searchParams = useSearchParams();
//   const email = searchParams.get("email") || "your email";

//   const inputs = useRef<(HTMLInputElement | null)[]>([]);

//   const handleChange = (index: number) => {
//     if (inputs.current[index]?.value && index < 3) {
//       inputs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.key === "Backspace" && !inputs.current[index]?.value && index > 0) {
//       inputs.current[index - 1]?.focus();
//     }
//   };

//   const verifyOTP = () => {
//     const otp = inputs.current.map((i) => i?.value || "").join("");

//     if (otp.length < 4) {
//       alert("Please enter complete OTP");
//     } else {
//       alert("OTP Entered: " + otp);
//     }
//   };

//   const resendOTP = () => {
//     alert(`OTP resent to ${email}`);
//   };

//   return (
//     <div className={styles.body}>
//       <div className={styles.container}>
//         <div className={styles.icon}>
//           <Image
//             src="/Img/Frame 2121451147.png"
//             alt="logo"
//             width={24}
//             height={24}
//           />
//         </div>

//         <h2 className={styles.title}>Enter verification code</h2>

//         <p className={styles.description}>
//           We’ve sent a code to <span>{email}</span>
//         </p>

//         <div className={styles.otpInputs}>
//           {[0, 1, 2, 3].map((i) => (
//             <input
//               key={i}
//               type="text"
//               maxLength={1}
//               ref={(el) => (inputs.current[i] = el)}
//               onChange={() => handleChange(i)}
//               onKeyDown={(e) => handleKeyDown(e, i)}
//             />
//           ))}
//         </div>

//         <div className={styles.resend}>
//           Didn’t get a code?{" "}
//           <span onClick={resendOTP}>Click to resend</span>
//         </div>

//         <hr className={styles.divider} />

//         <div className={styles.buttons}>
//           <button className={styles.cancel}>Cancel</button>
//           <button className={styles.verify} onClick={verifyOTP}>
//             Verify
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
