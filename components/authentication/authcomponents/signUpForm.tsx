"use client";

import { useState } from "react";
import styles from "./auth.module.css";
import GoogleAuth from "./googleAuth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { authRegistration } from "@/redux/slice/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { endpoint, endpoints } from "@/api/endpoints/endpoints";



const schema = yup.object({
username: yup.string().required("Name is required"),

email: yup
.string()
.email("Invalid email")
.required("Email is required"),

password: yup
.string()
.min(6, "Password must be at least 6 characters")
.required("Password is required"),

confirm_password: yup
.string()
.oneOf([yup.ref("password")], "Passwords must match")
.required("Confirm your password"),

role: yup
.string()
.oneOf(["customer", "provider"], "Please select a role")
.required("Role is required"),
});

export default function SignupForm() {
const [provider, setProvider] = useState<"google" | null>(null);
const [loading, setLoading] = useState(false);

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
try {
setLoading(true);


  const payload = {
    username: data.username,
    email: data.email,
    password: data.password,
    confirm_password: data.confirm_password,
    role: data.role,
  };

  const result = await dispatch(authRegistration(payload)).unwrap();

  setLoading(false);

  if (result?.status) {
    toast.success(result.message || "Registration successful");

    
    router.push(
     "/auth/otp"
      // `/auth/otp?email=${encodeURIComponent(data.email)}&mode=register`
    );
  } else {
    toast.success(result?.message);
  }
} catch (error: any) {
  setLoading(false);
  toast.error(error?.message || "Something went wrong");
}


};

/* ================= UI ================= */

return (
<> <h1 className={styles.title}>Create an account</h1>


  <form
    className={styles.form}
    onSubmit={handleSubmit(onSubmit, onError)}
  >
    {/* Name */}
    <input
      className={styles.input}
      type="text"
      placeholder="Enter Your Name"
      {...register("username")}
    />
    {errors.username && (
      <p className={styles.error}>{errors.username.message}</p>
    )}

    {/* Email */}
    <input
      className={styles.input}
      type="email"
      placeholder="Enter Your Email"
      {...register("email")}
    />
    {errors.email && (
      <p className={styles.error}>{errors.email.message}</p>
    )}

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

    {/* Confirm Password */}
    <input
      className={styles.input}
      type="password"
      placeholder="Confirm Your Password"
      {...register("confirm_password")}
    />
    {errors.confirm_password && (
      <p className={styles.error}>
        {errors.confirm_password.message}
      </p>
    )}

    {/* Role Dropdown */}
    <select
      className={styles.input}
      defaultValue=""
      {...register("role")}
    >
      <option value="" disabled>
        Choose your role
      </option>
      <option value="customer">Customer</option>
      <option value="provider">Provider</option>
    </select>

    {errors.role && (
      <p className={styles.error}>{errors.role.message}</p>
    )}

    {/* Submit Button */}
    <button
      type="submit"
      className={styles.modalBtn}
      disabled={loading}
    >
      {loading ? "Creating..." : "Create account"}
    </button>
    <button className={styles.modalBtn} 
    onClick={() => router.push("/auth/otp")}>Verify OTP</button>

    {/* Google Auth */}
    <div className={styles.socialRow}>
      <button
        type="button"
        className={styles.googleBtn}
        onClick={() => setProvider("google")}
      >
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

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// import { useDispatch } from "react-redux";
// import { authRegistration } from "@/redux/slice/authSlice";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";



// const schema = yup.object({
//   username: yup.string().required("Name is required"),

//   email: yup
//     .string()
//     .email("Invalid email")
//     .required("Email is required"),

//   password: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),

//   confirm_password: yup
//     .string()
//     .oneOf([yup.ref("password")], "Passwords must match")
//     .required("Confirm your password"),

//   role: yup
//     .string()
//     .oneOf(["customer", "provider"], "Please select a role")
//     .required("Role is required"),
// });

// export default function SignupForm() {
//   const [provider, setProvider] = useState<"google" | null>(null);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });


//   const onError = (errors: any) => {
//     const firstError = Object.values(errors)[0] as any;
//     if (firstError?.message) {
//       toast.error(firstError.message);
//     }
//   };

// const onSubmit = async (data: any) => {
//   try {
//     const payload = {
//       username: data.username,
//       email: data.email,
//       password: data.password,
//       confirm_password: data.confirm_password,
//       role: data.role,
//     };

//     const result = await dispatch(authRegistration(payload)).unwrap();

//     if (result?.status) {
//       toast.success(result.message || "Registration successful");

//       router.push("/auth/otp")
      
//     } else {
//       toast.success(result?.message || "Registration failed");
//     }
//   } catch (error: any) {
//     toast.error(error?.message || "Something went wrong");
//   }
// };


//   return (
//     <>
//       <h1 className={styles.title}>Create an account</h1>

//       <form
//         className={styles.form}
//         onSubmit={handleSubmit(onSubmit, onError)}
//       >
//         {/* Name */}
//         <input
//           className={styles.input}
//           type="text"
//           placeholder="Enter Your Name"
//           {...register("username")}
//         />
//         {errors.username && (
//           <p className={styles.error}>{errors.username.message}</p>
//         )}

//         {/* Email */}
//         <input
//           className={styles.input}
//           type="email"
//           placeholder="Enter Your Email"
//           {...register("email")}
//         />
//         {errors.email && (
//           <p className={styles.error}>{errors.email.message}</p>
//         )}

//         {/* Password */}
//         <input
//           className={styles.input}
//           type="password"
//           placeholder="Enter Your Password"
//           {...register("password")}
//         />
//         {errors.password && (
//           <p className={styles.error}>{errors.password.message}</p>
//         )}

//         {/* Confirm Password */}
//         <input
//           className={styles.input}
//           type="password"
//           placeholder="Confirm Your Password"
//           {...register("confirm_password")}
//         />
//         {errors.confirm_password && (
//           <p className={styles.error}>
//             {errors.confirm_password.message}
//           </p>
//         )}

//         {/* Role Dropdown */}
//         <select
//           className={styles.input}
//           defaultValue=""
//           {...register("role")}
//         >
//           <option value="" disabled>
//             Choose your role
//           </option>
//           <option value="customer">Customer</option>
//           <option value="provider">Provider</option>
//         </select>

//         {errors.role && (
//           <p className={styles.error}>{errors.role.message}</p>
//         )}

//         {/* Submit Button */}
//         <button className={styles.modalBtn}>
//           Create account
//         </button>

//        <button className={styles.modalBtn} onClick={() => router.push("/auth/otp")} >Verify OTP</button>
//         <div className={styles.socialRow}>
        
//           <button
//             type="button"
//             className={styles.googleBtn}
//             onClick={() => setProvider("google")}
//           >
//             <i className="fab fa-google" style={{ marginRight: "8px" }}></i>
//             Continue with Google
//           </button>
//         </div>
//       </form>

//       {provider === "google" && (
//         <GoogleAuth onClose={() => setProvider(null)} />
//       )}
//     </>
//   );
// }




// "use client";
// import { useState } from "react";
// import styles from "./auth.module.css";
// import GoogleAuth from "./googleAuth";
// import AppleAuth from "./appleAuth";

// export default function SignupForm() {
//   const [provider, setProvider] = useState<"google" | "apple" | null>(null);

//   return (
//     <>
//       <h1 className={styles.title}>Create an account</h1>

//       <form className={styles.form}>
//         <input
//           className={styles.input}
//           type="text"
//           placeholder="Enter Your Name"
//         />
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
//         <input
//           className={styles.input}
//           type="password"
//           placeholder="Confirm Your Password"
//         />

//         <div className={styles.socialRow}>
//           <button
//             type="button"
//             className={styles.googleBtn}
//             onClick={() => setProvider("google")}
//           >
//             Google
//           </button>
//         </div>

//         <button className={styles.modalBtn}>Create account</button>
//       </form>

//       {/* GSAP Modals */}
//       {provider === "google" && (
//         <GoogleAuth onClose={() => setProvider(null)} />
//       )}

     
//     </>
//   );
// }

// "use client";

// import { useDispatch, useSelector } from "react-redux";
// // import { signupUser } from "@/redux/features/auth/signupSlice";
// // import { AppDispatch, RootState } from "@/redux/store";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";
// import * as yup from "yup"

//  import styles from "./auth.module.css";
// import { useState } from "react";
// import GoogleAuth from "./googleAuth";

// const schema = yup.object({
//   name: yup.string().required("Name is required"),
//   email: yup
//     .string()
//     .email("Invalid email")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(6, "Minimum 6 characters")
//     .required("Password required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password")], "Passwords must match")
//     .required("Confirm password required"),
// });

// type FormData = yup.InferType<typeof schema>;

// export default function SignupForm() {
//   const dispatch = useDispatch<AppDispatch>();
//   const { loading, error, success } = useSelector(
//     (state: RootState) => state.signup
//   );

//   const [provider, setProvider] = useState<"google" | null>(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data: FormData) => {
//     dispatch(
//       signupUser({
//         name: data.name,
//         email: data.email,
//         password: data.password,
//       })
//     );
//   };

//   return (
//     <>
//       <h1 className={styles.title}>Create an account</h1>

//       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//         <input
//           {...register("name")}
//           className={styles.input}
//           placeholder="Enter Your Name"
//         />
//         <p className={styles.error}>{errors.name?.message}</p>

//         <input
//           {...register("email")}
//           className={styles.input}
//           placeholder="Enter Your Email"
//         />
//         <p className={styles.error}>{errors.email?.message}</p>

//         <input
//           {...register("password")}
//           type="password"
//           className={styles.input}
//           placeholder="Enter Your Password"
//         />
//         <p className={styles.error}>{errors.password?.message}</p>

//         <input
//           {...register("confirmPassword")}
//           type="password"
//           className={styles.input}
//           placeholder="Confirm Your Password"
//         />
//         <p className={styles.error}>
//           {errors.confirmPassword?.message}
//         </p>

//         <div className={styles.socialRow}>
//           <button
//             type="button"
//             className={styles.googleBtn}
//             onClick={() => setProvider("google")}
//           >
//             Google
//           </button>
//         </div>

//         <button className={styles.modalBtn} disabled={loading}>
//           {loading ? "Creating..." : "Create account"}
//         </button>

//         {error && <p className={styles.error}>{error}</p>}
//         {success && <p className={styles.success}>Signup successful!</p>}
//       </form>

//       {provider === "google" && (
//         <GoogleAuth onClose={() => setProvider(null)} />
//       )}
//     </>
//   );
// }
