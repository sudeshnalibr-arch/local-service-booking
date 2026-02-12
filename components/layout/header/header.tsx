<<<<<<< HEAD
"use client";

import Image from "next/image";
import styles from "../header/header.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
const { data: session } = useSession();
const user = session?.user;
const router = useRouter();
const pathname = usePathname();

const isActive = (path: string) => pathname === path;

/* ================= SERVICES DROPDOWN ================= */

const [showServices, setShowServices] = useState(false);

const SERVICES_MENU = [
{ name: "Service Provider", link: "/pages/services" },
{ name: "Plumber", link: "/pages/services/plumber" },
{ name: "Electrician", link: "/pages/services/electrician" },
{ name: "Cleaner", link: "/pages/services/cleaner" },
];

/* ================= SEARCH ================= */

const SERVICES = [
"Plumber","Gardener","Cleaner","Mechanic",
"AC Technician","Welder","Electrician",
"Carpainter","Beauty and Spa","Painter",
"Appliance Repair","Fan Repair",
];

const [query, setQuery] = useState("");
const [filtered, setFiltered] = useState<string[]>([]);
const [showDropdown, setShowDropdown] = useState(false);

/* ================= HEADER SCROLL ================= */

const [hidden, setHidden] = useState(false);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
const handleScroll = () => {
const currentScrollY = window.scrollY;
setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
setLastScrollY(currentScrollY);
};


window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);


}, [lastScrollY]);

/* ================= SEARCH LOGIC ================= */

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const value = e.target.value;
setQuery(value);

if (!value.trim()) {
  setFiltered([]);
  setShowDropdown(false);
  return;
}

const results = SERVICES.filter((service) =>
  service.toLowerCase().includes(value.toLowerCase())
);

setFiltered(results);
setShowDropdown(true);


};

const navigateToService = (service: string) => {
setQuery(service);
setShowDropdown(false);
router.push(`/services?type=${service.toLowerCase()}`);
};

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
if (e.key === "Enter") {
e.preventDefault();
const match = SERVICES.find(
(s) => s.toLowerCase() === query.toLowerCase()
);
if (match) navigateToService(match);
}
};

return (
<header className={`${styles.headerSec} ${hidden ? styles.headerHidden : ""}`}>


  {/* ================= TOP NAV ================= */}
  <div className="container">
    <nav className={styles.navTop}>
      <ul className={styles.navTopList}>
        <li>
          <a
            href="mailto:localpro.services.kolkata@gmail.com"
            className={styles.navTopLink}
          >
            <i className="fa-regular fa-envelope"></i>
            <span>localpro.services.kolkata@gmail.com</span>
          </a>
        </li>

        <li className={styles.navBorder}>
          <a className={styles.navTopLink}>
            <i className="fa-regular fa-calendar"></i>
            <span>Daily 9am–10pm</span>
          </a>
        </li>
      </ul>

      <ul className={styles.socialList}>
        <li className={styles.followLink}>Follow Us:</li>
        <li><a href="#" className={styles.socialLink}><i className="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="#" className={styles.socialLink}><i className="fa-brands fa-linkedin-in"></i></a></li>
        <li><a href="#" className={styles.socialLink}><i className="fa-brands fa-instagram"></i></a></li>
        <li><a href="#" className={styles.socialLink}><i className="fa-brands fa-x-twitter"></i></a></li>
      </ul>
    </nav>
  </div>

  {/* ================= MAIN NAV ================= */}
  <nav className={styles.navbar}>
    <div className={`container ${styles.navInner}`}>

      <Link href="/" className={styles.navLogo}>
        <Image
          src="/images/Group 1000004669.png"
          alt="logo"
          width={52}
          height={52}
        />
      </Link>

      {/* NAV LINKS */}
      <ul className={styles.navLinks}>
        <li>
          <Link
            href="/"
            className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}
          >
            Home
          </Link>
        </li>

        {/* SERVICES DROPDOWN */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <button className={styles.dropdownBtn}>
            Services ▾
          </button>

          {showServices && (
            <ul className={styles.dropdownMenu}>
              {SERVICES_MENU.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link
            href="/pages/aboutus"
            className={`${styles.navLink} ${isActive("/pages/aboutus") ? styles.active : ""}`}
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            href="/pages/blogs"
            className={`${styles.navLink} ${isActive("/pages/blogs") ? styles.active : ""}`}
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            href="/pages/contactus"
            className={`${styles.navLink} ${isActive("/pages/contactus") ? styles.active : ""}`}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className={styles.navRight}>

        {/* SEARCH */}
        <div className={`${styles.navForm} ${styles.searchWrapper}`}>
          <input
            type="search"
            placeholder="Search for service"
            className={styles.searchInput}
            value={query}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={() => query && setShowDropdown(true)}
          />

          <span className={styles.searchIcon}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>

          {showDropdown && filtered.length > 0 && (
            <ul className={styles.searchDropdown}>
              {filtered.map((service) => (
                <li
                  key={service}
                  className={styles.searchItem}
                  onClick={() => navigateToService(service)}
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* AUTH */}
        {!user ? (
          <Link href="/auth/signUp" className={styles.primaryBtn}>
            Sign Up
          </Link>
        ) : (
          <div className={styles.userBox}>
            <Image
              src={user.image || "/images/user.png"}
              alt="user"
              width={36}
              height={36}
              className={styles.userImg}
            />
            <button
              className={styles.logoutBtn}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </button>
          </div>
        )}
      </div>

    </div>
  </nav>
</header>


);
}





=======
>>>>>>> bf03928c14e51593669954a9f449f6277bb20437

// "use client";

// import Image from "next/image";
// import styles from "../header/header.module.css";
// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";

// export default function Header() {
//   const { data: session } = useSession();
//   const user = session?.user;

//   return (
//     <header className={`${styles.headerSec} luxy-el`} data-speed="0.08">
//       <div className="container">
//         {/* TOP NAV */}
//         <nav className={styles.navTop}>
//           <ul className={styles.navTopList}>
//             <li>
//               <a className={`${styles.navTopLink} ${styles.mapBtn}`}>
//                 <i className="location-arrow"></i>
//                 <span>
//                   2nd Floor, Sector V, Salt Lake, Kolkata – 700091, West Bengal,
//                   India
//                 </span>
//               </a>
//             </li>

//             <li>
//               <a
//                 href="mailto:localpro@gmail.com"
//                 className={styles.navTopLink}
//               >
//                 <i className="fa-regular fa-envelope"></i>
//                 <span>localpro@gmail.com</span>
//               </a>
//             </li>

//             <li className={styles.navBorder}>
//               <a className={styles.navTopLink}>
//                 <i className="fa-regular fa-calendar"></i>
//                 <span>Daily 9am-10pm</span>
//               </a>
//             </li>
//           </ul>

//           {/* SOCIAL LIST (THIS WAS MISSING) */}
//           <ul className={styles.socialList}>
//             <li className={styles.followLink}>Follow Us:</li>
//             <li>
//               <a href="#" className={styles.socialLink}>
//                 <i className="fa-brands fa-facebook-f"></i>
//               </a>
//             </li>
//             <li>
//               <a href="#" className={styles.socialLink}>
//                 <i className="fa-brands fa-linkedin-in"></i>
//               </a>
//             </li>
//             <li>
//               <a href="#" className={styles.socialLink}>
//                 <i className="fa-brands fa-youtube"></i>
//               </a>
//             </li>
//             <li>
//               <a href="#" className={styles.socialLink}>
//                 <i className="fa-brands fa-x-twitter"></i>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* MAIN NAV */}
//       <nav className={styles.navbar}>
//         <div className={`container ${styles.navInner}`}>
//           <div className={styles.navLogo}>
//             <Link href="/">
//               <Image
//                 src="/images/Group 1000004669.png"
//                 alt="logo"
//                 width={52}
//                 height={52}
//               />
//             </Link>
//           </div>

//           <ul className={styles.navLinks}>
//             <li>
//               <Link
//                 className={`${styles.navLink} ${styles.active}`}
//                 href="/"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className={styles.navLink} href="/services">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link className={styles.navLink} href="/about">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link className={styles.navLink} href="/blog">
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link className={styles.navLink} href="/contact">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>

//           <div className={styles.navRight}>
//             {/* LOCATION */}
//             <div className={styles.navLocation}>
//               <i className="fa-solid fa-location-dot"></i>
//               <span className={styles.locationText}>
//                 Salt Lake, Kolkata
//               </span>

//               <select className={styles.locationSelect}>
//                 <option>Salt Lake, Kolkata</option>
//                 <option>Delhi</option>
//                 <option>Mumbai</option>
//                 <option>Bengaluru</option>
//               </select>

//               <i
//                 className={`fa-solid fa-chevron-down ${styles.dropdownIcon}`}
//               ></i>
//             </div>

//             {/* SEARCH */}
//             <form className={styles.navForm}>
//               <input
//                 type="search"
//                 placeholder="Search For Service"
//                 className={styles.searchInput}
//               />
//               <span className={styles.searchIcon}>
//                 <i className="fa-solid fa-magnifying-glass"></i>
//               </span>
//             </form>

//             {/* AUTH AREA */}
//             {!user ? (
//               <Link href="/auth/signIn" className={styles.primaryBtn}>
//                 Sign In
//               </Link>
//             ) : (
//               <div className={styles.userBox}>
//                 <Image
//                   src={user.image || "/images/user.png"}
//                   alt="user"
//                   width={36}
//                   height={36}
//                   className={styles.userImg}
//                 />
//                 <button
//                   className={styles.logoutBtn}
//                   onClick={() => signOut({ callbackUrl: "/" })}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

<<<<<<< HEAD
// "use client";

// import Image from "next/image";
// import styles from "../header/header.module.css";
// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const { data: session } = useSession();
//   // const session = useSession()
//   const user = session?.user;

//   const [location, setLocation] = useState("Salt Lake, Kolkata");
//   const [loading, setLoading] = useState(false);


//   const [hidden, setHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setHidden(true);
//       } else {
//         setHidden(false);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const handleLocationChange = (
//     e: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const selected = e.target.value;

//     setLoading(true);

//     setTimeout(() => {
//       setLocation(selected);
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <header
//       className={`${styles.headerSec} ${
//         hidden ? styles.headerHidden : ""
//       } luxy-el`}
//       data-speed="0.08"
//     >
//       <div className="container">
//         {/* TOP NAV */}
//         <nav className={styles.navTop}>
//           <ul className={styles.navTopList}>
//             {/* <li>
//               <a className={`${styles.navTopLink} ${styles.mapBtn}`}>
//                 <i className="location-arrow"></i>
//                 <span>
//                   2nd Floor, Sector V, Salt Lake, Kolkata – 700091, West
//                   Bengal, India
//                 </span>
//               </a>
//             </li> */}
            

//             <li>
//               <a
//                 href="mailto:localpro.services.kolkata@gmail.com"
//                 className={styles.navTopLink}
//               >
//                 <i className="fa-regular fa-envelope"></i>
//                 <span>localpro.services.kolkata@gmail.com</span>
//               </a>
//             </li>

//             <li className={styles.navBorder}>
//               <a className={styles.navTopLink}>
//                 <i className="fa-regular fa-calendar"></i>
//                 <span>Daily 9am-10pm</span>
//               </a>
//             </li>
//           </ul>

//           <ul className={styles.socialList}>
//             <li className={styles.followLink}>Follow Us:</li>
//             <li>
//               <a href="https://www.facebook.com/LocalProServices" className={styles.socialLink}>
//                 <i className="fa-brands fa-facebook-f"></i>
//               </a>
//             </li>
//             <li>
//               <a href="https://www.linkedin.com/company/localpro-services" className={styles.socialLink}>
//                 <i className="fa-brands fa-linkedin-in"></i>
//               </a>
//             </li>
//             <li>
//               <a href="https://www.instagram.com/loc_alpro?igsh=MTV6eHdlamM4cXNiaQ%3D%3D" className={styles.socialLink}>
//                 <i className="fa-brands fa-instagram"></i>
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/LocalProServices" className={styles.socialLink}>
//                 <i className="fa-brands fa-x-twitter"></i>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* MAIN NAV */}
//       <nav className={styles.navbar}>
//         <div className={`container ${styles.navInner}`}>
//           <div className={styles.navLogo}>
//             <Link href="/">
//               <Image
//                 src="/images/Group 1000004669.png"
//                 alt="logo"
//                 width={52}
//                 height={52}
//               />
//             </Link>
//           </div>

//           <ul className={styles.navLinks}>
//             <li>
//               <Link
//                 className={`${styles.navLink} ${styles.active}`}
//                 href="/"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className={styles.navLink} href="/services">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link className={styles.navLink} href="/about">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link className={styles.navLink} href="/blog">
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link className={styles.navLink} href="/contact">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>

//           <div className={styles.navRight}>
//             {/* SEARCH */}
//             <form className={styles.navForm}>
//               <input
//                 type="search"
//                 placeholder="Search For Service"
//                 className={styles.searchInput}
//               />
//               <span className={styles.searchIcon}>
//                 <i className="fa-solid fa-magnifying-glass"></i>
//               </span>
//             </form>

//             {/* AUTH */}
//             {!user ? (
//               <Link href="/auth/signUp" className={styles.primaryBtn}>
//                 Sign Up
//               </Link>
//             ) : (
//               <div className={styles.userBox}>
//                 <Image
//                   src={user.image || "/images/user.png"}
//                   alt="user"
//                   width={36}
//                   height={36}
//                   className={styles.userImg}
//                 />
//                 <button
//                   className={styles.logoutBtn}
//                   onClick={() => signOut({ callbackUrl: "/" })}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
=======
"use client";

import Image from "next/image";
import styles from "../header/header.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Header() {
  const { data: session } = useSession();
  // const session = useSession()
  const user = session?.user;

  const [location, setLocation] = useState("Salt Lake, Kolkata");
  const [loading, setLoading] = useState(false);


  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLocationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = e.target.value;

    setLoading(true);

    setTimeout(() => {
      setLocation(selected);
      setLoading(false);
    }, 1000);
  };

  return (
    <header
      className={`${styles.headerSec} ${
        hidden ? styles.headerHidden : ""
      } luxy-el`}
      data-speed="0.08"
    >
      <div className="container">
        {/* TOP NAV */}
        <nav className={styles.navTop}>
          <ul className={styles.navTopList}>
            {/* <li>
              <a className={`${styles.navTopLink} ${styles.mapBtn}`}>
                <i className="location-arrow"></i>
                <span>
                  2nd Floor, Sector V, Salt Lake, Kolkata – 700091, West
                  Bengal, India
                </span>
              </a>
            </li> */}
            

            <li>
              <a
                href="mailto:localpro.services.kolkata@gmail.com"
                className={styles.navTopLink}
              >
                <i className="fa-regular fa-envelope"></i>
                <span>localpro.services.kolkata@gmail.com</span>
              </a>
            </li>

            <li className={styles.navBorder}>
              <a className={styles.navTopLink}>
                <i className="fa-regular fa-calendar"></i>
                <span>Daily 9am-10pm</span>
              </a>
            </li>
          </ul>

          <ul className={styles.socialList}>
            <li className={styles.followLink}>Follow Us:</li>
            <li>
              <a href="https://www.facebook.com/LocalProServices" className={styles.socialLink}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/localpro-services" className={styles.socialLink}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/loc_alpro?igsh=MTV6eHdlamM4cXNiaQ%3D%3D" className={styles.socialLink}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/LocalProServices" className={styles.socialLink}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* MAIN NAV */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.navInner}`}>
          <div className={styles.navLogo}>
            <Link href="/">
              <Image
                src="/images/Group 1000004669.png"
                alt="logo"
                width={52}
                height={52}
              />
            </Link>
          </div>

          <ul className={styles.navLinks}>
            <li>
              <Link
                className={`${styles.navLink} ${styles.active}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className={styles.navRight}>
            {/* SEARCH */}
            <form className={styles.navForm}>
              <input
                type="search"
                placeholder="Search For Service"
                className={styles.searchInput}
              />
              <span className={styles.searchIcon}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </form>

            {/* AUTH */}
            {!user ? (
              <Link href="/auth/signUp" className={styles.primaryBtn}>
                Sign Up
              </Link>
            ) : (
              <div className={styles.userBox}>
                <Image
                  src={user.image || "/images/user.png"}
                  alt="user"
                  width={36}
                  height={36}
                  className={styles.userImg}
                />
                <button
                  className={styles.logoutBtn}
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
>>>>>>> bf03928c14e51593669954a9f449f6277bb20437
