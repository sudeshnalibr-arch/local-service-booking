import Image from "next/image";
import Link from "next/link";
import styles from "@/style/servicedetails/electrician/electriciancontent.module.css";

const ElectricianContent = () => {
  return (
    <section className={styles["service-page"]}>
      <div className={`container ${styles["service-main"]}`}>

        {/* LEFT PANEL */}
        <div className={styles["left-panel"]}>
          <h3 className={styles["panel-title"]}>Select a service</h3>

          <div className={styles["service-grid"]}>
            {[
              ["socket.png", "Switch & Socket"],
              ["fan.png", "Fan"],
              ["lamp.png", "Wall Ceiling light"],
              ["wire.png", "Wiring"],
              ["board.png", "Doorbell"],
              ["mcb.png", "MCB & Submeter"],
              ["inverter.png", "Inverter & Stabiliser"],
              ["applience.png", "Appliance"],
              ["Stand-light.png", "Light stand"],
            ].map(([img, text], i) => (
              <div key={i} className={styles["service-item"]}>
                <Image
                  src={`/images/electrician/${img}`}
                  alt={text}
                  width={90}
                  height={90}
                />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER PANEL */}
        <div className={styles["center-panel"]}>

          {/* CARD 1 */}
          <div className={styles["service-card"]}>
            <div className={styles["card-info"]}>
              <h4>AC</h4>
              <p>AC uninstallation (ceiling/exhaust/wall)</p>

              <div className={styles["rating"]}>
                <Image src="/images/electrician/star-img.png" alt="star" width={16} height={16} />
                4.87 <span>(15k reviews)</span>
              </div>

              <div className={styles["price"]}>₹299 · 30 mins</div>
              <Link href="#">View Details</Link>
            </div>

            <div className={styles["card-image"]}>
              <Image src="/images/electrician/ac.png" alt="AC" width={120} height={120} />
              <button className={styles["add-btn"]}>Add</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles["service-card"]}>
            <div className={styles["card-info"]}>
              <h4>Wall/ceiling light</h4>
              <p>Bulb/tubelight holder installation</p>

              <div className={styles["rating"]}>
                <Image src="/images/electrician/star-img.png" alt="star" width={16} height={16} />
                4.87 <span>(15k reviews)</span>
              </div>

              <div className={styles["price"]}>₹299 · 30 mins</div>
              <Link href="#">View Details</Link>
            </div>

            <div className={styles["card-image"]}>
              <Image src="/images/electrician/CELLING LIGHT.png" alt="Light" width={120} height={120} />
              <button className={styles["add-btn"]}>Add</button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className={styles["service-card"]}>
            <div className={styles["card-info"]}>
              <h4>CFL to LED replacement</h4>

              <div className={styles["rating"]}>
                <Image src="/images/electrician/star-img.png" alt="star" width={16} height={16} />
                4.87 <span>(15k reviews)</span>
              </div>

              <div className={styles["price"]}>₹299 · 30 mins</div>
              <Link href="#">View Details</Link>
            </div>

            <div className={styles["card-image"]}>
              <Image src="/images/electrician/LED.png" alt="LED" width={120} height={120} />
              <button className={styles["add-btn"]}>Add</button>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className={styles["right-panel"]}>

          {/* CART */}
          <div className={styles["cart-box"]}>
            <h4 className={styles["cart-title"]}>Cart</h4>

            <div className={styles["cart-item"]}>
              <p className={styles["item-name"]}>Smart appliance controller</p>

              <div className={styles["item-controls"]}>
                <div className={styles["qty-control"]}>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <span className={styles["item-price"]}>₹299</span>
              </div>
            </div>

            <hr className={styles["cart-divider"]} />

            <div className={styles["cart-footer"]}>
              <Link href="/Index7" className={styles["cart-btn"]}>
                <span className={styles["btn-price"]}>₹299</span>
                <span className={styles["btn-text"]}>View Cart</span>
              </Link>
            </div>
          </div>

          {/* OFFER */}
          <div className={styles["offer-box"]}>
            <Image src="/images/electrician/offer-image.png" alt="Offer" width={80} height={80} />
            <div>
              <h4>Get Visitation fee off</h4>
              <p>On Orders above ₹100</p>
              <Link href="#">View More Offers</Link>
            </div>
          </div>

          {/* PROMISE */}
          <div className={styles["promise-box"]}>
            <div className={styles["promise-content"]}>
              <h4>UC Promise</h4>
              <ul>
                <li>✔ Verified Professionals</li>
                <li>✔ Hassle Free Booking</li>
                <li>✔ Transparent Pricing</li>
              </ul>
            </div>

            <div className={styles["promise-img"]}>
              <Image src="/images/electrician/quality.png" alt="Quality" width={40} height={40} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ElectricianContent;
