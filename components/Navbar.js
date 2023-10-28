import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light main_navbar sticky">
        <div className="container hdr_main">
          <a className="navbar-brand" href="index.php">
            <img src="images/logo.png" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav my_navbar ml-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  {" "}
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  {" "}
                  Travel
                </Link>
              </li>
              {/*<li class="nav-item">
    <Link class="nav-link" href="#"> Special Offers <span>New</span></Link>
  </li>*/}
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  {" "}
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mob_toll d-sm-block d-none">
            {/* <img src="../images/call.png" /> */}
            <span>Call for 24/7 Support</span>
            <a href="tel:+1-8888-750-118"> +1-8888-750-118</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
