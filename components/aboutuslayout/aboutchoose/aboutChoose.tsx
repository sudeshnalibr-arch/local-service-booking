import React from 'react'
import Style from "@/style/aboutuscss/aboutuschoose.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutChoose() {
  return (
    <>
     <section className={Style.choose_sec}>
      <div className="container">
        <div className="row choose-row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className={Style.choose_img} data-aos="fade-right">
              <Image
                src="/images/about/Rectangle 15.png"
                alt="Why choose us"
                width={648}
                height={432}
                className={Style.chooseImg}
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div className={Style.choose_cont} data-aos="fade-left">
              <h4 className="title4">why choose us</h4>

              <h2 className={Style.title2}>
                powering progress through <span>excellence</span>
              </h2>

              <h4 className={Style.title4}>
                Over the years, we've accomplished remarkable milestones in
                the electrical services industry. From completing complex
                projects to earning
              </h4>

              <ul>
                <li>
                  Committed to delivering safe and efficient electrical
                  solutions.
                </li>
                <li>
                  Backed by years of expertise and professional excellence.
                </li>
              </ul>

              <div className={Style.choose_btn}>
                <Link href="#" className={Style.view_btn}>
                <span>
                    View Our Milestones{" "}
                   <FontAwesomeIcon icon={faArrowRight} className={Style.arrow} />
                </span>
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
