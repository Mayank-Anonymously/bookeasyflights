import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="../../../images/logo.png" className="logo" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Travel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mob_toll d-sm-block d-none">
            <span>Call for 24/7 Support</span>
            <a href="tel:+1-8888-750-118"> +1-8888-750-118</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;



// import React, { useEffect } from "react";
// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMobileNavOpen, setMobileNavOpen] = useState(false);
//   const [isActive, setActive] = useState(false);
//   function handleClick() {
//     setMobileNavOpen(!isMobileNavOpen);
//     setActive(!isActive);
//   }
//   return (
//     <>
//       <div class="navwrap">
//         <nav class="navbar">
//           <Link href="/">
//           <img src="../../../images/logo.png" className="logo" alt="Logo" />
//           </Link>
//           <div
//             class={`menu-toggle ${isActive ? "is-active" : ""}`}
//             id="mobile-menu"
//             onClick={handleClick}
//           >
//             <span class="bar"></span>
//             <span class="bar"></span>
//             <span class="bar"></span>
//           </div>
//           <ul class={`nav ${isMobileNavOpen ? "mobile-nav" : ""}`}>
//           <li className="nav-item">
//                  <Link className="nav-link" href="/">
//                    Home
//                  </Link>
//                </li>
//                <li className="nav-item">
//                  <Link className="nav-link" href="/about">
//                    About Us
//                  </Link>
//                </li>
//                <li className="nav-item">
//                  <Link className="nav-link" href="/">
//                    Travel
//                  </Link>
//                </li>
//                <li className="nav-item">
//                  <Link className="nav-link" href="/contact">
//                    Contact Us
//                  </Link>
//                </li>
//           </ul>
//           <div className="mob_toll d-sm-block d-none">
//             <span>Call for 24/7 Support</span>
//             <a href="tel:+1-8888-750-118"> +1-8888-750-118</a>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;

