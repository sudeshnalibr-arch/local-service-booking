"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./service.module.css";

import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ServicesSection() {
  useEffect(() => {
    const swiper = new Swiper(`.${styles.cardSwiper}`, {
      modules: [Navigation, Autoplay],

      loop: true,
      slidesPerView: 4,
      spaceBetween: 24,

      breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      },

      navigation: {
        nextEl: `.${styles.swiperNext}`,
        prevEl: `.${styles.swiperPrev}`,
      },

      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: true,
      //   pauseOnMouseEnter: true,
      // },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section className={styles.servicesSec}>
      <div className={styles.container}>
        <div className={styles.servicesCont}>
          <h2 className="title2">Perfect services without effort!</h2>
        </div>

        <div className={styles.row}>
          <div className={styles.leftCol}>
            <h3 className="title3">OUR SERVICES</h3>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.servicesBtn}>
              <a href="#" className={`${styles.homeBtn} ${styles.active}`}>
                Home
              </a>
              <a href="#" className={`${styles.homeBtn} ${styles.businessBtn}`}>
                Business
              </a>
            </div>
          </div>
        </div>

        {/* ===== SWIPER ===== */}
        <div className={`swiper ${styles.cardSwiper}`}>
          <div className="swiper-wrapper">

            {/* CARD 1 */}
            <div className={`swiper-slide ${styles.cardSlide}`}>
              <div className={styles.servicesCard}>
                <div className={styles.servicesCardBody}>
                  <div className={styles.servicesCardImg}>
                    <Image src="/images/Group 95.png" alt="" width={78} height={78}/>
                  </div>
                  <h5 className={styles.servicesCardTitle}>Plumbing Service</h5>
                  <p className={styles.servicesCardText}>
                    We have a wide spectrum of expertise in web solutions within these industries,
                    giving us the necessary skills and knowledge to help you increase
                  </p>
                  <div className={styles.servicesCardBtn}>
                    <a href="#" className={styles.learnBtn}>Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className={`swiper-slide ${styles.cardSlide}`}>
              <div className={styles.servicesCard}>
                <div className={styles.servicesCardBody}>
                  <div className={styles.servicesSubImg}>
                    <Image src="/images/cardicon.png" alt="" width={111} height={111}/>
                  </div>
                  <h5 className={styles.servicesCardTitle}>Cleaner Service</h5>
                  <p className={styles.servicesCardText}>
                    From small repairs to large-scale installations our experienced electricians
                    provide tailored solutions to power your home.
                  </p>
                  <div className={styles.servicesCardBtn}>
                    <a href="#" className={styles.learnBtn}>Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className={`swiper-slide ${styles.cardSlide}`}>
              <div className={styles.servicesCard}>
                <div className={styles.servicesCardBody}>
                  <div className={styles.servicesCardImg}>
                    <Image src="/images/Group 94.png" alt="" width={78} height={78}/>
                  </div>
                  <h5 className={styles.servicesCardTitle}>Electrician Service</h5>
                  <p className={styles.servicesCardText}>
                    Our goal is to be a leader in providing environmentally
                    conscious electrical services. We focus on energy-efficient solutions.
                  </p>
                  <div className={styles.servicesCardBtn}>
                    <a href="#" className={styles.learnBtn}>Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className={`swiper-slide ${styles.cardSlide}`}>
              <div className={styles.servicesCard}>
                <div className={styles.servicesCardBody}>
                  <div className={styles.servicesCardImg}>
                    <Image src="/images/Group 95.png" alt="" width={78} height={78}/>
                  </div>
                  <h5 className={styles.servicesCardTitle}>Plumbing Service</h5>
                  <p className={styles.servicesCardText}>
                    We have a wide spectrum of expertise in web solutions within these industries,
                    giving us the necessary skills and knowledge to help you increase
                  </p>
                  <div className={styles.servicesCardBtn}>
                    <a href="#" className={styles.learnBtn}>Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className={`swiper-slide ${styles.cardSlide}`}>
              <div className={styles.servicesCard}>
                <div className={styles.servicesCardBody}>
                  <div className={styles.servicesCardImg}>
                    <Image src="/images/cardclean.png" alt="" width={78} height={78}/>
                  </div>
                  <h5 className={styles.servicesCardTitle}>Painter Service</h5>
                  <p className={styles.servicesCardText}>
                    From small repairs to large-scale installations our experienced electricians
                    provide tailored solutions to power your home.
                  </p>
                  <div className={styles.servicesCardBtn}>
                    <a href="#" className={styles.learnBtn}>Learn More</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===== NAVIGATION ===== */}
        <div className={styles.navWrapper}>
          <button className={styles.swiperPrev}>←</button>
          <button className={styles.swiperNext}>→</button>
        </div>

      </div>
    </section>
  );
}


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import styles from "../serviceSwiper/service.module.css";

// import "swiper/css";
// import "swiper/css/navigation";

// const services = [
//   {
//     title: "Plumbing Service",
//     text:
//       "We have a wide spectrum of expertise in web solutions within these industries, giving us the necessary skills and knowledge to help you increase",
//     img: "/images/Group 95.png",
//     type: "main",
//   },
//   {
//     title: "Cleaner Service",
//     text:
//       "From small repairs to large-scale installations our experienced electricians provide tailored solutions to power your home.",
//     img: "/images/cardicon.png",
//     type: "sub",
//   },
//   {
//     title: "Electrician Service",
//     text:
//       "Our goal is to be a leader in providing environmentally conscious electrical services.",
//     img: "/images/Group 94.png",
//     type: "main",
//   },
//   {
//     title: "Plumbing Service",
//     text:
//       "We have a wide spectrum of expertise in web solutions within these industries.",
//     img: "/images/Group 95.png",
//     type: "main",
//   },
//   {
//     title: "Painter Service",
//     text:
//       "From small repairs to large-scale installations our experienced electricians provide tailored solutions.",
//     img: "/images/cardclean.png",
//     type: "main",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className={styles.servicesSec}>
//       <div className={styles.container}>

//         {/* ===== H2 TITLE ===== */}
//         <div className={styles.servicesCont}>
//           <h2 className={styles.title2}>
//             Perfect services without effort!
//           </h2>
//         </div>

//         {/* ===== H3 + BUTTON ROW ===== */}
//         <div className={styles.row}>

//           <div className={styles.leftCol}>
//             <h3 className={styles.title3}>OUR SERVICES</h3>
//           </div>

//           <div className={styles.rightCol}>
//             <div className={styles.servicesBtn}>
//               <Link href="/" className={`${styles.homeBtn} ${styles.active}`}>
//                 Home
//               </Link>

//               <Link
//                 href="/business"
//                 className={`${styles.homeBtn} ${styles.businessBtn}`}
//               >
//                 Business
//               </Link>
//             </div>
//           </div>

//         </div>

//         {/* ===== SWIPER ===== */}
//         <Swiper
//           modules={[Navigation]}
//           slidesPerView={4}
//           spaceBetween={40}
//           loop
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           className={styles.cardSwiper}
//         >
//           {services.map((service, i) => (
//             <SwiperSlide key={i} className={styles.cardSlide}>
//               <div className={styles.servicesCard}>
//                 <div className={styles.servicesCardBody}>

//                   <div
//                     className={
//                       service.type === "sub"
//                         ? styles.servicesSubImg
//                         : styles.servicesCardImg
//                     }
//                   >
//                     <Image
//                       src={service.img}
//                       alt={service.title}
//                       width={service.type === "sub" ? 111 : 78}
//                       height={78}
//                     />
//                   </div>

//                   <h5 className={styles.servicesCardTitle}>
//                     {service.title}
//                   </h5>

//                   <p className={styles.servicesCardText}>
//                     {service.text}
//                   </p>

//                   <div className={styles.servicesCardBtn}>
//                     <Link href="/service" className={styles.learnBtn}>
//                       Learn More
//                     </Link>
//                   </div>

//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// }







