
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/free-mode";

// import styles from "./serviceUpperSwiper.module.css";

// export default function ServiceUpperSwiper() {
//   return (
//     <section className={styles.servicesSliderSec}>
//       <div className={styles.sliderContainer}>
//         <Swiper
//           modules={[Autoplay, FreeMode]}
//           className={styles.servicesSwiper}
//           slidesPerView="auto"
//           spaceBetween={20}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 1,
//             disableOnInteraction: false,
//           }}
//           speed={4000}
//           onInit={(swiper) => {
//             // 🔥 REAL FIX
//             requestAnimationFrame(() => {
//               swiper.update();
//               swiper.autoplay.start();
//             });
//           }}
//         >
//           <SwiperSlide className={styles.servicesSlide}>Plumber</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Electrician</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Cleaner</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Painter</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Carpenter</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Mechanic</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Gardener</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Driver</SwiperSlide>
//           <SwiperSlide className={styles.acServicesSlide}>
//             AC Technician
//           </SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Welder</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Cook/Chef</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Beautician</SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// }



"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import styles from "./serviceUpperSwiper.module.css";

export default function ServiceUpperSwiper() {
  return (
    <section className={styles.servicesSliderSec}>
      <div className="slider-container">
        <Swiper
          modules={[Autoplay, FreeMode]}
          className={styles.servicesSwiper}
          loop={true}
          freeMode={true}
          // freeModeMomentum={false}
          slidesPerView="auto"
          spaceBetween={35}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={false}
        >
          <SwiperSlide className={styles.servicesSlide}>
            Plumber
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Electrician
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Cleaner
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Painter
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Carpenter
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Mechanic
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Gardener
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Driver
          </SwiperSlide>
          <SwiperSlide className={styles.acServicesSlide}>
            AC Technician
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Welder
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Cook/Chef
          </SwiperSlide>
          <SwiperSlide className={styles.servicesSlide}>
            Beautician
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}










// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import styles from "./serviceUpperSwiper.module.css";

// export default function ServiceUpperSwiper() {
//   return (
//     <section className={styles.servicesSliderSec}>
//       <div className={styles.sliderContainer}>
//         <Swiper
//           modules={[Autoplay, Pagination, Navigation]}
//           className={styles.servicesSwiper}
//           slidesPerView="auto"
//           spaceBetween={20}
//           loop={true}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//           }}
//           speed={4000}
//         >
//           <SwiperSlide className={styles.servicesSlide}>Plumber</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Electrician</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Cleaner</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Painter</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Carpenter</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Mechanic</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Gardener</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Driver</SwiperSlide>
//           <SwiperSlide className={styles.acServicesSlide}>
//             AC Technician
//           </SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Welder</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Cook/Chef</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Beautician</SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// }







// "use client";

// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/free-mode";

// import styles from "./serviceUpperSwiper.module.css";

// export default function ServiceUpperSwiper() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // wait for full hydration + layout
//     setTimeout(() => {
//       setMounted(true);
//     }, 50);
//   }, []);

//   if (!mounted) return null; // 👈 CRITICAL

//   return (
//     <section className={styles.servicesSliderSec}>
//       <div className={styles.sliderContainer}>
//         <Swiper
//           modules={[Autoplay, FreeMode]}
//           className={styles.servicesSwiper}
//           slidesPerView="auto"
//           spaceBetween={20}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 1,
//             disableOnInteraction: false,
//           }}
//           speed={4000}
//         >
//           <SwiperSlide className={styles.servicesSlide}>Plumber</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Electrician</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Cleaner</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Painter</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Carpenter</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Mechanic</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Gardener</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Driver</SwiperSlide>
//           <SwiperSlide className={styles.acServicesSlide}>
//             AC Technician
//           </SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Welder</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Cook/Chef</SwiperSlide>
//           <SwiperSlide className={styles.servicesSlide}>Beautician</SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// }
