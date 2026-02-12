// import Image from "next/image";
// import styles from "@/style/servicedetails/cleaner/cleanerBanner.module.css";

// export default function HeroSectionCleaning() {
//   return (
//     <section className={styles["hero-section"]}>
//       <div className={styles["hero-overlay"]}>
//         <div className={`${styles["hero-container"]} container`}>
//           <div className={`${styles["row"]} ${styles["align-items-center"]}`}>
            
//             <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
//               {/* Left Bulb + Light */}
//               <div className={styles["bulb-wrapper"]}>
//                 <Image
//                   src="/images/cleaner/banner-left-clean.png"
//                   alt="Bulb"
//                   width={300}
//                   height={300}
//                   className={styles["bulb-img"]}
//                 />

//                 <div className={styles["light-beam"]}>
//                   <Image
//                     src="/images/cleaner/Frame 1261155741.png"
//                     alt="Light"
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
//               {/* Center Text */}
//               <div className={styles["hero-content"]}>
//                 <h1>Service Details</h1>
//                 <p>
//                   <a href="#" style={{textDecoration:'none'}}>Home</a> / Cleaning Appliance
//                 </p>
//               </div>
//             </div>

//             <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
//               {/* Right Worker */}
//               <div className={styles["worker-wrapper"]}>
//                 <Image
//                   src="/images/cleaner/banner-clean-right.png"
//                   alt="Worker"
//                   width={300}
//                   height={300}
//                   className={styles["worker-img"]}
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import Image from "next/image";
import styles from "@/style/servicedetails/cleaner/cleanerBanner.module.css";
import Link from "next/link";

export default function HeroSectionCleaning() {
return (
<section className={styles["hero-section"]}>
<div className={styles["hero-overlay"]}>
<div className={`${styles["hero-container"]} container`}>


      {/* Left Image */}
      <div className={styles["bulb-wrapper"]}>
        <Image
          src="/images/cleaner/banner-left-clean.png"
          alt="Bulb"
          width={300}
          height={300}
          className={styles["bulb-img"]}
        />

        <div className={styles["light-beam"]}>
          <Image
            src="/images/cleaner/Frame 1261155741.png"
            alt="Light"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* ✅ CENTER TEXT (perfectly centered) */}
      <div className={styles["hero-text-center"]}>
        <div className={styles["hero-content"]}>
          <h1>Service Details</h1>
          <p>
            <Link href="/" style={{ textDecoration: "none" }}>
              Home
            </Link>{" "}
            / Cleaning Appliance
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className={styles["worker-wrapper"]}>
        <Image
          src="/images/cleaner/banner-clean-right.png"
          alt="Worker"
          width={300}
          height={300}
          className={styles["worker-img"]}
        />
      </div>

    </div>
  </div>
</section>

);
}
