"use client";
import styles from "./auth.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  mode: "login" | "signup";
  children: React.ReactNode;
};

export default function AuthShell({ mode, children }: Props) {
  const router = useRouter();
  const isLogin = mode === "login";

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: isLogin ? -40 : 40 },
      { opacity: 1, x: 0, duration: 0.6 }
    );
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: isLogin ? 40 : -40 },
      { opacity: 1, x: 0, duration: 0.6 }
    );
  }, [mode]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.dialog}>

        {/* LEFT */}
        <div ref={leftRef} className={styles.left}>
          {children}
        </div>

        {/* RIGHT */}
        <div ref={rightRef} className={styles.right}>
          {isLogin ? (
            <>
              <h1>Hey There !</h1>
              <p>
                Sign in to start planning your journeys, save favorites,
                and travel with ease.
              </p>
              <button
                className={styles.modalBtn}
                onClick={() => router.push("/auth/signUp")}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h1>Welcome Back</h1>
              <p>
                Sign up to start planning your journeys, save favorites,
                and travel with ease.
              </p>
              <button
                className={styles.logBtn}
                onClick={() => router.push("/auth/signIn")}
              >
                Sign In
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
