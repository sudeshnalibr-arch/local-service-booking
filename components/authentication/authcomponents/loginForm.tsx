"use client";

import { useState } from "react";
import styles from "./auth.module.css";
import GoogleAuth from "./googleAuth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { authLoginOtp, authSignIn } from "@/redux/slice/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

/* ================= Yup Schema ================= */

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const [provider, setProvider] = useState<"google" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onError = (errors: any) => {
    const firstError = Object.values(errors)[0] as any;
    if (firstError?.message) {
      toast.error(firstError.message);
    }
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const response: any = await dispatch(authSignIn(data));

    setIsLoading(false);

    if (response?.payload?.status) {
      router.push("/auth/otp");
      toast.success(response.payload.message || "OTP sent successfully");
    } else {
      console.log("logged in succesfull");
    }
  };
const handleLogin = async () => {
try {
const result = await dispatch(authSignIn(formData)).unwrap();

if (result?.status) {
  router.push("/"); 
}


} catch (error) {
console.error("Login failed:", error);
}
};



  return (
    <>
      <h1 className={styles.title}>Login to your account</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Email */}
        <input
          className={styles.input}
          type="email"
          placeholder="Enter Your Email"
          {...register("email")}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        {/* Password */}
        <input
          className={styles.input}
          type="password"
          placeholder="Enter Your Password"
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        {/* Login button */}
        {/* <button className={styles.logModalBtn} disabled={isLoading}>
          {isLoading ? <span className={styles.spinner}></span> : "Login Now"}
        </button> */}
        <button
  className={styles.logModalBtn}
  disabled={isLoading}
  onClick={handleLogin}
>
  {isLoading ? <span className={styles.spinner}></span> : "Login Now"}
</button>

        {/* <button
          className={styles.modalBtn}
          onClick={() => router.push("/auth/otp")}
        >
          Verify OTP
        </button> */}

        {/* Google login */}
        <div className={styles.socialRow}>
          <button
            type="button"
            className={styles.googleBtn}
            onClick={() => setProvider("google")}
          >
            <i className="fab fa-google" style={{ marginRight: "8px" }}></i>
            Continue with Google
          </button>
        </div>
      </form>

      {provider === "google" && (
        <GoogleAuth onClose={() => setProvider(null)} />
      )}
    </>
  );
}

// "use client";
// import { useState } from "react";
// import styles from "./auth.module.css";
// import GoogleAuth from "./googleAuth";
// import AppleAuth from "./appleAuth";

// export default function LoginForm() {
//   const [provider, setProvider] = useState<"google" | "apple" | null>(null);

//   return (
//     <>
//       <h1 className={styles.title}>Login to your account</h1>

//       <form className={styles.form}>
//         <input
//           className={styles.input}
//           type="email"
//           placeholder="Enter Your Email"
//         />
//         <input
//           className={styles.input}
//           type="password"
//           placeholder="Enter Your Password"
//         />

//         <div className={styles.socialRow}>
//           {/* <button
//             type="button"
//             className={styles.appleBtn}
//             onClick={() => setProvider("apple")}
//           >
//             Apple
//           </button> */}

//           <button
//             type="button"
//             className={styles.googleBtn}
//             onClick={() => setProvider("google")}
//           >
//             Google
//           </button>
//         </div>

//         <button className={styles.logModalBtn}>
//           Login Now
//         </button>
//       </form>

//       {/* Modals */}
//       {provider === "google" && (
//         <GoogleAuth onClose={() => setProvider(null)} />
//       )}

//       {provider === "apple" && (
//         <AppleAuth onClose={() => setProvider(null)} />
//       )}
//     </>
//   );
// }
