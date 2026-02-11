"use client";

import { useEffect } from "react";
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
import Link from "next/link";
import { BaseURL } from "@/api/axios/axios";

export default function TeamIsotope({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: number;
  setActiveFilter: (id: number) => void;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, searchMode } = useSelector(
    (state: RootState) => state.providers
  );

  // 🧠 LOAD CATEGORY DATA (only when NOT searching)
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

  const categories = [
    { service_type: 1, service_type_name: "Plumber" },
    { service_type: 2, service_type_name: "Electrician" },
  ];

  const getImageUrl = (path?: string) =>
    path ? `${BaseURL}${path}` : "/images/default-user.png";

  const handleCategoryClick = (id: number) => {
    dispatch(clearSearchMode()); // 🔓 unlock browsing
    dispatch(resetProviders());  // 🔥 remove search data
    setActiveFilter(id);
  };


  // const handleCategoryClick = (id: number) => {
  //   dispatch(clearSearchMode()); // 🔥 unlock browsing
  //   setActiveFilter(id);
  // };

  return (
    <section className={styles.isotopSec}>
      <div className="container">
        {/* FILTER MENU */}
        <div className={styles.filterMenu}>
          {categories.map((item) => (
            <button
              key={item.service_type}
              className={activeFilter === item.service_type ? styles.active : ""}
              onClick={() => handleCategoryClick(item.service_type)}
              type="button"
            >
              <figure className={styles.btnIcon}>
                <img
                  src={SERVICE_ICONS[item.service_type] ?? DEFAULT_ICON}
                  alt={item.service_type_name}
                />
              </figure>
              <span className={styles.label}>
                {item.service_type_name}
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
                {data.map((provider) => (
                  <div
                    key={provider.id}
                    className="col-xl-4 col-lg-4 col-md-6 col-12"
                  >
                    <motion.div
                      className={styles.card}
                      whileHover={{ y: -12 }}
                    >
                      <div className={styles.cardBody}>
                        <h5>Professional {provider.service_type_name}</h5>
                        <h6 className={styles.cardTitle}>{provider.name}</h6>

                        <div className={styles.cardImg}>
                          <img
                            src={getImageUrl(provider.image)}
                            alt={provider.name}
                          />
                          <div className={styles.cartBox}>
                            <Link href={`/pages/checkout/${provider.id}`}>
                              <i className="bi bi-cart-fill"></i>
                            </Link>
                          </div>
                        </div>

                        <h4 className={`${styles.price} title4`}>
                          ₹ {provider.fees}
                        </h4>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>

        {!loading && data.length === 0 && <p>No providers found</p>}
      </div>
    </section>
  );
}
