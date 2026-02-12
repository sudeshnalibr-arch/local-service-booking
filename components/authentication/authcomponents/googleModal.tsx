"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./googleModal.module.css";

type Props = {
  onClose: () => void;
  onGoogleLogin: () => void;
};

export default function GoogleModal({ onClose, onGoogleLogin }: Props) {
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

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <div ref={modalRef} className={styles.modal}>
        <h2>Sign in with Google</h2>
        <p>Continue using your Google account</p>

        <button className={styles.googleBtn} onClick={onGoogleLogin}>
          Continue with Google
        </button>

        <button className={styles.closeBtn} onClick={handleClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
