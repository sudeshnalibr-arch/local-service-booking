import React from 'react'
import style from "@/style/aboutuscss/aboutusapproach.module.css"
import Image from "next/image";


export default function AboutApproach() {
  return (
    <>
    <section className={style.approach_sec}>
      <div className="container">
        <div className="row approach_row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div
                  className={style.approch_card_wraper}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className={`card ${style.approach_card}`}>
                    <div className={style.card_img}>
                      <Image
                        src="/images/about/icons/image 73.png"
                        alt="Experience icon"
                        width={100}
                        height={100}
                        // className={style.icon}
                      />
                    </div>
                    <div className={style.card_main_body}>
                      <div className={style.card_main_title}>
                        25+ Years Of Experience
                      </div>
                      <p className={style.card_text}>
                        Trusted electrical experts with 25+ years of experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className={style.approach_sub_img} data-aos="fade-left">
                  <Image
                    src="/images/about/Rectangle 9.png"
                    alt="Worker at site"
                     width={1200}
                    height={800}
                    className={style.image}
                    priority   // use if above the fold
                  />

                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className={style.approach_cont} data-aos="fade-right">
              <h2 className={style.title2}>
                Complete electrical services <span> for everyday</span>
              </h2>
              <h4 className={style.title4}>our approach</h4>
              <p>
                At Local Pro, we simplify everyday services by connecting you
                with trusted local professionals. With easy booking, verified
                experts, and reliable support, we ensure quick, safe, and
                hassle-free service every time.
              </p>
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className={style.approach_img}>
              <Image
                src="/images/about/Rectangle 10.png"
                alt="Electrical work"
                width={1400}
                height={800}
                className={style.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* <img src="/imges2/Rectangle 10.png" alt="Electrical work" /> */}
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 approach-col">
                <div className={`card ${style.approach_sub_card}`}>
                  <div className={style.card_sub_body}>
                    <div className={style.card_cont_img}>
                      <Image
                        src="/images/about/icons/Frame 1261155692.png"
                        alt="Service icon"
                        width={64}
                        height={64}
                        className={style.icon}
                      />
                    </div>
                  </div>
                  <div className={style.card_body}>
                    <div className={style.card_title}>
                      Providing Awesome Service
                    </div>
                    <p className={style.card_sub_text}>
                      Verified local experts delivering reliable service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 approach-col">
                <div className={`card ${style.approach_sub_card}`}>
                  <div className={style.card_sub_body}>
                    <div className={style.card_cont_img}>
                      <Image
                        src="/images/about/icons/Frame 1261155692.png"
                        alt="Support icon"
                        width={64}
                        height={64}
                        className={style.icon}
                      />
                    </div>
                  </div>
                  <div className={style.card_body}>
                    <div className={style.card_title}>
                      Providing Awesome Service
                    </div>
                    <p className={style.card_sub_text}>
                      24/7 Our Support – Quick help and booking assistance anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
