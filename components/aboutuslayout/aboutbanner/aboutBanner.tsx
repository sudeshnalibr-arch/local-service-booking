import React from 'react'
import style from "@/style/aboutuscss/aboutusbanner.module.css"

export default function AboutBanner() {
  return (
    <>
    <section className={style.banner_sec}>
      <div className={`container ${style.banner_container}`}>
        <div className={style.banner_cont} data-aos="fade-up">
          <div className={style.title3}>About Us</div>
          <div className={style.title1}>
            Easy way to find a perfect Service with Local<span>pro</span>
          </div>
        </div>
      </div>
    </section>
    </>
    
  )
}
