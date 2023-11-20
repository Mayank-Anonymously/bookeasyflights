import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="images/logo.png" className="logo" alt="Logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
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
