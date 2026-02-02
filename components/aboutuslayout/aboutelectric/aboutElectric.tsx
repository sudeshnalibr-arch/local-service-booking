import React from 'react'
import Style  from "@/style/aboutuscss/aboutuselectric.module.css"

export default function AboutElectric() {
  return (
    <>
    <section className={Style.electric_sec}>
      <div className="container">
        <div className="row align-items-start">
          {/* LEFT CONTENT */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className={Style.electric_header} data-aos="fade-up">
              <h4 className={Style.title4}>our approach</h4>
              <h2 className={Style.title2}>
                Complete electrical services <span>for everyday</span>
              </h2>
            </div>

            <div className="row align-items-center">
              <div className="col-12">
                <div className={`card ${Style.electric_card}`} data-aos="zoom-in">
                  <div className={Style.card_box}>
                    <div className={Style.electric_card_img}>
                      <img
                        src="/images/about/icons/Frame 93.png"
                        className={Style.card_img_top}
                        alt="Mission icon"
                      />
                    </div>
                    <div className={Style.electric_card_title}>Our Mission</div>
                    <p className={Style.card_para}>
                      Our mission is to deliver, reliable and high-quality
                      ensuring efficiency and excellence in every project we
                      undertake.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className={`card ${Style.electric_card}`} data-aos="zoom-in">
                  <div className={Style.card_box}>
                    <div className={Style.electric_card_img}>
                      <img
                        src="/images/about/icons/Frame (1).png"
                        className={Style.card_img_top}
                        alt="Vision icon"
                      />
                    </div>
                    <div className={Style.electric_card_title}>Our Vision</div>
                    <p className={Style.card_para}>
                      Our vision is to deliver, reliable and high-quality
                      ensuring efficiency and excellence in every project we
                      undertake.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 electric_col">
            <div className={Style.electic_img_wraper}>
              <div className={Style.electric_img} data-aos="zoom-in">
                <img src="/images/about/Subtract.png" alt="Background shape" />
                <figure className={Style.electric_sub_img}>
                  <img src="/images/about/Rectangle 13.png" alt="Electric work" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

