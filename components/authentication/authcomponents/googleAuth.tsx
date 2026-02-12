"use client";
import { signIn } from "next-auth/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./googleModal.module.css";

type Props = {
  onClose: () => void;
  mode: "login" | "signup";
};

export default function GoogleAuth({ onClose, mode }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    gsap.fromTo(
      modalRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
    );
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      onComplete: onClose,
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  };

  const isLogin = mode === "login";

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <div ref={modalRef} className={styles.modal}>
        <h2>
          {isLogin ? "Continue with Google" : "Sign in with Google"}
        </h2>
        <p>
          {isLogin
            ? "Sign up using your Google account"
            : "Create your account using Google"}
        </p>

        <button
          className={styles.googleBtn}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </button>

        <button className={styles.closeBtn} onClick={handleClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}


// "use client";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useState } from "react";
// import GoogleModal from "./googleModal";
// // import GoogleModal from "./GoogleModal";

// interface LoginProps {
//   name: string;
//   email: string;
//   image: string;
// }

// export default function LoginGoogle() {
//   const { data: session } = useSession();
//   const [open, setOpen] = useState(false);

//   const user = session?.user as LoginProps | undefined;

//   if (user) {
//     return (
//       <>
//         Signed in as {user.email} <br />
//         <img src={user.image} alt="User" width={100} />
//         <br />
//         {user.name}
//         <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }

//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => setOpen(true)}>
//         Sign in
//       </button>

//       {open && (
//         <GoogleModal
//           onClose={() => setOpen(false)}
//           onGoogleLogin={() => signIn("google")}
//         />
//       )}
//     </>
//   );
// }

