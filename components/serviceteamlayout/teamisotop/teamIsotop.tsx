"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/style/serviceteam/teamisotop.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterProviders, resetProviders, nextPage } from "@/redux/slice/providerSlice";
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

  // 👈 plumber default

  const { data, loading, page, hasMore, searchMode } = useSelector(
    (state: RootState) => state.providers
  );

  // INITIAL LOAD (Plumber)
  useEffect(() => {
  if (searchMode) return; // 🔒 don't interfere with search results
    
  dispatch(resetProviders());

  dispatch(
    filterProviders({
      service_type: activeFilter,
      location: "kolkata",
      page: 1,
    })
  );
}, [activeFilter, dispatch, searchMode]);


  const handleLoadMore = () => {
    if (loading || !hasMore) return;

    // dispatch(nextPage());
    dispatch(
      filterProviders({
        service_type: activeFilter,
        location: "kolkata",
        page: page + 1,
      })
    );
  };

  const categories = [
    { service_type: 1, service_type_name: "Plumber" },
    { service_type: 2, service_type_name: "Electrician" },
  ];

  const getImageUrl = (path?: string) =>
    path ? `${BaseURL}${path}` : "/images/default-user.png";

  return (
    <section className={styles.isotopSec} data-aos="fade-up">
      <div className="container">
        
        {/* FILTER MENU */}
        <div className={styles.filterMenu}>
          {categories.map((item) => (
            <button
              key={item.service_type}
              className={activeFilter === item.service_type ? styles.active : ""}
              onClick={() => setActiveFilter(item.service_type)}
              type="button"
            >
              <figure className={styles.btnIcon}>
                <img
                  src={SERVICE_ICONS[item.service_type] ?? DEFAULT_ICON}
                  alt={item.service_type_name}
                />
              </figure>
              <span className={styles.label}>{item.service_type_name}</span>
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
                  <div key={provider.id} className="col-xl-4 col-lg-4 col-md-6 col-12">
                    <motion.div
                      className={styles.card}
                      whileHover={{ y: -12 }}
                    >
                      <div className={styles.cardBody}>
                        <h5> Professional {provider.service_type_name}</h5>
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

                        <div className={styles.cardContent}>
                          <p className={`${styles.hiddenText} ${styles.clamp3}`}>
                            {provider.description}
                          </p>

                          <h4 className={`${styles.price} title4`}>
                            ₹ {provider.fees}
                          </h4>

                          <p className={styles.hiddenText}>
                            <i className="bi bi-geo-alt-fill"></i>{" "}
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

        {/* LOAD MORE */}
        {/* {data.length > 0 && (
          <div className={styles.loadMoreWrap}>
            <button
              className={styles.loadMoreBtn}
              onClick={handleLoadMore}
              disabled={loading || !hasMore}
            >
              {loading
                ? "Loading..."
                : hasMore
                ? "Load More"
                : "no more" }
            </button>
          </div>
        )} */}

        {!loading && data.length === 0 && <p>No providers found</p>}
      </div>
    </section>
  );
}
