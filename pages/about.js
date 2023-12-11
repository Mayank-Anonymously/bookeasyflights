import Footer from "../components/Footer";
import AboutPage from "../components/AboutPage";
import Navbar from "../components/Navbar";
import React from "react";
import Mobile from "../components/Mobile";

const about = () => {
  return (
    <>
      <Navbar />
      <Mobile />
      <AboutPage />
      <Footer />
    </>
  );
};

export default about;
