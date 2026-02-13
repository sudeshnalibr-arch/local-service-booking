// // "use client";

// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import styles from "@/style/serviceteam/teamisotop.module.css";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   filterProviders,
// //   resetProviders,
// //   clearSearchMode,
// // } from "@/redux/slice/providerSlice";
// // import { RootState, AppDispatch } from "@/redux/store/store";
// // import { SERVICE_ICONS, DEFAULT_ICON } from "../serviceicons/serviceIcons";

// // import { BaseURL } from "@/api/axios/axios";
// // import AvailabilityModal from "../teammodal/AvailabilityModal";
// // import axios from "axios";

// // export default function TeamIsotope({
// //   activeFilter,
// //   setActiveFilter,
// // }: {
// //   activeFilter: number;
// //   setActiveFilter: (id: number) => void;
// // }) {
// //   const dispatch = useDispatch<AppDispatch>();
// //   const { data, loading, searchMode } = useSelector(
// //     (state: RootState) => state.providers
// //   );

// //   const [showModal, setShowModal] = useState(false);
// //   const [selectedProvider, setSelectedProvider] = useState<any>(null);
// //     const [categories, setCategories] = useState([]);
// //     console.log("categories", categories)

// //   const handleCartClick = (provider: any) => {
// //     setSelectedProvider(provider);
// //     setShowModal(true);
// //   };

// //   // 🧠 LOAD CATEGORY DATA (only when NOT searching)
// //   useEffect(() => {
// //     if (searchMode) return;

// //     dispatch(resetProviders());
// //     dispatch(
// //       filterProviders({
// //         service_type: activeFilter,
// //         location: "kolkata",
// //         page: 1,
// //       })
// //     );
// //   }, [activeFilter, dispatch, searchMode]);

// // //  ============  category search =========================
// //   type Category = {
// //   id: number;               // or service_type
// //   service_type_name: string;
// //   };

// //   useEffect(() => {
// //     fetchCategories();
// //   }, []);

// //   const fetchCategories = async () => {
// //     try {
      
// //       const res = await axios.get(
// //         "http://localhost:8000/serviceType/list/"
// //       );
// //       setCategories(res.data.services); // adjust if API wraps data
      
// //     } catch (err) {
// //       console.error("Failed to fetch categories", err);
// //     } finally {
      
// //     }
// //   }

// //   // const categories = [
// //   //   { service_type: 1, service_type_name: "Mechanic" },
// //   //   { service_type: 2, service_type_name: "Electrician" },
// //   //   { service_type: 3, service_type_name: "Plumber" }
// //   // ];

// //   const getImageUrl = (path?: string) =>
// //     path ? `${BaseURL}${path}` : "/images/default-user.png";

// //   const handleCategoryClick = (id: number) => {
// //     dispatch(clearSearchMode()); // 🔓 unlock browsing
// //     dispatch(resetProviders());  // 🔥 remove search data
// //     setActiveFilter(id);
// //   };


// //   // const handleCategoryClick = (id: number) => {
// //   //   dispatch(clearSearchMode()); // 🔥 unlock browsing
// //   //   setActiveFilter(id);
// //   // };

// //   return (
// //     <section className={styles.isotopSec}>
// //       <div className="container">
// //         {/* FILTER MENU */}
// //         <div className={styles.filterMenu}>
// //           {categories.map((item) => (
// //             <button
// //               key={item.id}
// //               className={activeFilter === item.id ? styles.active : ""}
// //               onClick={() => handleCategoryClick(item.id)}
// //               type="button"
// //             >
// //               <figure className={styles.btnIcon}>
// //                 <img
// //                   src={SERVICE_ICONS[item.id] ?? DEFAULT_ICON}
// //                   alt={item.name}
// //                 />
// //               </figure>
// //               <span className={styles.label}>
// //                 {item.name}
// //               </span>
// //             </button>
// //           ))}
// //         </div>

// //         <div className={styles.isotopHeader}>
// //           <h3 className={styles.title3}>Available Consultation</h3>
// //         </div>

// //         {/* GRID */}
// //         <AnimatePresence mode="wait">
// //           <div className={styles.cardWrap}>
// //             <motion.div
// //               key={activeFilter}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //             >
// //               <div className="row g-4">
// //                 {data.map((provider) => (
// //                   <div
// //                     key={provider.id}
// //                     className="col-xl-4 col-lg-4 col-md-6 col-12"
// //                   >
// //                     <motion.div
// //                       className={styles.card}
// //                       whileHover={{ y: -12 }}
// //                     >
// //                       <div className={styles.cardBody}>
// //                         <h5>0{provider.id} Professional {provider.service_type_name}</h5>
// //                         <h6 className={styles.cardTitle}>{provider.name}</h6>

// //                         <div className={styles.cardImg}>
// //                           <img
// //                             src={getImageUrl(provider.image)}
// //                             alt={provider.name}
// //                           />
// //                           <div className={styles.cartBox}>
// //                             <i
// //                                 className="bi bi-cart-fill"
// //                                 onClick={() => handleCartClick(provider)}
// //                             ></i>
// //                           </div>
// //                         </div>
// //                         <div className={styles.hiddenText}>
// //                           <p className={styles.clamp3}>{provider.description}</p>
// //                           <p>Experience: {provider.experience} years</p>
// //                           <h4 className={`${styles.price} title4`}>
// //                             ₹ {provider.fees}
// //                           </h4>
// //                           <p>
// //                             <span className="catdIcon">
// //                               <i className="bi bi-geo-alt-fill"></i>
// //                             </span>
// //                             {provider.location}
// //                           </p>

// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>
// //         </AnimatePresence>

// //         {!loading && data.length === 0 && <p>No providers found</p>}
// //         {showModal && selectedProvider && (
// //             <AvailabilityModal
// //                provider={selectedProvider}
// //                onClose={() => setShowModal(false)}
// //             />
// //         )}

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "@/style/serviceteam/teamisotop.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   filterProviders,
//   resetProviders,
//   clearSearchMode,
// } from "@/redux/slice/providerSlice";
// import { RootState, AppDispatch } from "@/redux/store/store";
// import { SERVICE_ICONS, DEFAULT_ICON } from "../serviceicons/serviceIcons";
// import { BaseURL } from "@/api/axios/axios";
// import AvailabilityModal from "../teammodal/AvailabilityModal";
// import axios from "axios";

// export default function TeamIsotope({
//   activeFilter,
//   setActiveFilter,
// }: {
//   activeFilter: number;
//   setActiveFilter: (id: number) => void;
// }) {
//   const dispatch = useDispatch<AppDispatch>();
//   const { data, loading, searchMode } = useSelector(
//     (state: RootState) => state.providers
//   );

//   const [showModal, setShowModal] = useState(false);
//   const [selectedProvider, setSelectedProvider] = useState<any>(null);
//   const [categories, setCategories] = useState<any[]>([]);

//   const handleCartClick = (provider: any) => {
//     setSelectedProvider(provider);
//     setShowModal(true);
//   };

//   // 🔁 Load providers when filter changes (and not in search mode)
//   useEffect(() => {
//     if (searchMode) return;

//     dispatch(resetProviders());
//     dispatch(
//       filterProviders({
//         service_type: activeFilter,
//         location: "kolkata",
//         page: 1,
//       })
//     );
//   }, [activeFilter, dispatch, searchMode]);

//   // 📦 Load categories
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/serviceType/list/");
//       // Adjust if your API structure differs
//       setCategories(res.data.services || []);
//     } catch (err) {
//       console.error("Failed to fetch categories", err);
//     }
//   };

//   const getImageUrl = (path?: string) =>
//     path ? `${BaseURL}${path}` : "/images/default-user.png";

//   const handleCategoryClick = (id: number) => {
//     dispatch(clearSearchMode());
//     dispatch(resetProviders());
//     setActiveFilter(id);
//   };

//   return (
//     <section className={styles.isotopSec}>
//       <div className="container">
//         {/* FILTER MENU */}
//         <div className={styles.filterMenu}>
//           {categories.map((item) => (
//             <button
//               key={item.id}
//               className={activeFilter === item.id ? styles.active : ""}
//               onClick={() => handleCategoryClick(item.id)}
//               type="button"
//             >
//               <figure className={styles.btnIcon}>
//                 <img
//                   src={SERVICE_ICONS[item.id] ?? DEFAULT_ICON}
//                   alt={item.service_type_name || "Service"}
//                 />
//               </figure>
//               <span className={styles.label}>
//                 {item.service_type_name || item.name}
//               </span>
//             </button>
//           ))}
//         </div>

//         <div className={styles.isotopHeader}>
//           <h3 className={styles.title3}>Available Consultation</h3>
//         </div>

//         {/* GRID */}
//         <AnimatePresence mode="wait">
//           <div className={styles.cardWrap}>
//             <motion.div
//               key={activeFilter}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <div className="row g-4">
//                 {data.map((provider: any) => (
//                   <div
//                     key={provider.id}
//                     className="col-xl-4 col-lg-4 col-md-6 col-12"
//                   >
//                     <motion.div
//                       className={styles.card}
//                       whileHover={{ y: -12 }}
//                     >
//                       <div className={styles.cardBody}>
//                         <h5>
//                           0{provider.id} Professional{" "}
//                           {provider.service_type_name}
//                         </h5>
//                         <h6 className={styles.cardTitle}>{provider.name}</h6>

//                         <div className={styles.cardImg}>
//                           <img
//                             src={getImageUrl(provider.image)}
//                             alt={provider.name}
//                           />
//                           <div className={styles.cartBox}>
//                             <i
//                               className="bi bi-cart-fill"
//                               onClick={() => handleCartClick(provider)}
//                             ></i>
//                           </div>
//                         </div>

//                         <div className={styles.hiddenText}>
//                           <p className={styles.clamp3}>
//                             {provider.description}
//                           </p>
//                           <p>Experience: {provider.experience} years</p>
//                           <h4 className={`${styles.price} title4`}>
//                             ₹ {provider.fees}
//                           </h4>
//                           <p>
//                             <span className="catdIcon">
//                               <i className="bi bi-geo-alt-fill"></i>
//                             </span>
//                             {provider.location}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </AnimatePresence>

//         {!loading && data.length === 0 && <p>No providers found</p>}

//         {showModal && selectedProvider && (
//           <AvailabilityModal
//             provider={selectedProvider}
//             onClose={() => setShowModal(false)}
//           />
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/style/serviceteam/teamisotop.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProviders,
  resetProviders,
  clearSearchMode,
} from "@/redux/slice/providerSlice";
import { RootState, AppDispatch } from "@/redux/store/store";
import { SERVICE_ICONS, DEFAULT_ICON } from "../serviceicons/serviceIcons";
import { BaseURL } from "@/api/axios/axios";
import AvailabilityModal from "../teammodal/AvailabilityModal";
import axios from "axios";

export default function TeamIsotope({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: number;
  setActiveFilter: (id: number) => void;
}) {
  const dispatch = useDispatch<AppDispatch>();

  // ✅ IMPORTANT: Read from providers slice, NOT checkout
  // Defensive access: safely handle undefined slice
  const providerState = useSelector((state: RootState) => state.providers);
  const data = providerState?.data ?? [];
  const loading = providerState?.loading ?? false;
  const searchMode = providerState?.searchMode ?? false;

  const [showModal, setShowModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);

  const handleCartClick = (provider: any) => {
    setSelectedProvider(provider);
    setShowModal(true);
  };

  // 🔁 Load providers when filter changes (and not in search mode)
  useEffect(() => {
    if (searchMode) return;

    dispatch(resetProviders());
    dispatch(
      filterProviders({
        service_type: activeFilter,
        location: "kolkata",
        page: 1,
      })
    );
  }, [activeFilter, dispatch, searchMode]);

  // 📦 Load categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8000/serviceType/list/");
      setCategories(res.data.services || []);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  };

  const getImageUrl = (path?: string) =>
    path ? `${BaseURL}${path}` : "/images/default-user.png";

  const handleCategoryClick = (id: number) => {
    dispatch(clearSearchMode());
    dispatch(resetProviders());
    setActiveFilter(id);
  };

  return (
    <section className={styles.isotopSec}>
      <div className="container">
        {/* FILTER MENU */}
        <div className={styles.filterMenu}>
          {categories.map((item) => (
            <button
              key={item.id}
              className={activeFilter === item.id ? styles.active : ""}
              onClick={() => handleCategoryClick(item.id)}
              type="button"
            >
              <figure className={styles.btnIcon}>
                <img
                  src={SERVICE_ICONS[item.id] ?? DEFAULT_ICON}
                  alt={item.service_type_name || "Service"}
                />
              </figure>
              <span className={styles.label}>
                {item.service_type_name || item.name}
              </span>
            </button>
          ))}
        </div>

        <div className={styles.isotopHeader}>
          <h3 className={styles.title3}>Available Consultation</h3>
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <div className={styles.cardWrap}>
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="row g-4">
                {data.map((provider: any) => (
                  <div
                    key={provider.id}
                    className="col-xl-4 col-lg-4 col-md-6 col-12"
                  >
                    <motion.div
                      className={styles.card}
                      whileHover={{ y: -12 }}
                    >
                      <div className={styles.cardBody}>
                        <h5>
                          0{provider.id} Professional{" "}
                          {provider.service_type_name}
                        </h5>
                        <h6 className={styles.cardTitle}>{provider.name}</h6>

                        <div className={styles.cardImg}>
                          <img
                            src={getImageUrl(provider.image)}
                            alt={provider.name}
                          />
                          <div className={styles.cartBox}>
                            <i
                              className="bi bi-cart-fill"
                              onClick={() => handleCartClick(provider)}
                            ></i>
                          </div>
                        </div>

                        <div className={styles.hiddenText}>
                          <p className={styles.clamp3}>
                            {provider.description}
                          </p>
                          <p>Experience: {provider.experience} years</p>
                          <h4 className={`${styles.price} title4`}>
                            ₹ {provider.fees}
                          </h4>
                          <p>
                            <span className="catdIcon">
                              <i className="bi bi-geo-alt-fill"></i>
                            </span>
                            {provider.location}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>

        {!loading && data.length === 0 && <p>No providers found</p>}

        {showModal && selectedProvider && (
          <AvailabilityModal
            provider={selectedProvider}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </section>
  );
}