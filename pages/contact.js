import Mobile from "../components/Mobile";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

const contact = () => {
  return (
    <>
      <Navbar />
      <Mobile />
      <>
        <section
          className="banner_page"
          style={{ backgroundImage: 'url("images/pagebanner.jpg")' }}
        >
          <h1>Contact Us</h1>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="ct_1">
                <h4>
                  <i className="fa fa-home" /> Address
                </h4>
                <p>
                  5940 macleod trail southwest suit 500, office 511 calgary Ab
                  T2h 2G4
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ct_1">
                <h4>
                  <i className="fa fa-phone" /> Phone
                </h4>
                <a href="tel:+1-855-470-0326">+1-855-470-0326</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ct_1">
                <h4>
                  <i className="fa fa-envelope" /> Email
                </h4>
                <a href="mailto:info@bookeasyflights.com">
                  info@bookeasyflights.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="Sec_page">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="map_bx">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.860158218414!2d-114.07264632421372!3d51.000256247626076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170fef24907a7%3A0x9269167e4d4b03c3!2s5940%20Macleod%20Trail%20SW%20500%20511%2C%20Calgary%2C%20AB%20T2H%202G4%2C%20Canada!5e0!3m2!1sen!2sin!4v1686420605758!5m2!1sen!2sin"
                    width="100%"
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <form
                  name="RegForm"
                  action="#"
                  method="post"
                  onsubmit="return GEEKFORGEEKS()"
                >
                  <div className="enp_frm">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name_contact"
                    />
                    <span id="name_err" style={{ color: "red" }}>
                      {" "}
                    </span>
                    <input
                      type="email"
                      id="email_contact"
                      placeholder="Email"
                      name="email"
                    />
                    <span id="email_err" style={{ color: "red" }}>
                      {" "}
                    </span>
                    <input
                      type="text"
                      placeholder="Phone No."
                      name="phone"
                      id="txtChar"
                      onkeypress="return isNumberKey(event)"
                      oninput="if(value.length>10)value=value.slice(0,10)"
                    />
                    <span id="phone_err" style={{ color: "red" }}>
                      {" "}
                    </span>
                    <textarea
                      placeholder="Write Here..."
                      id="message_contact"
                      defaultValue={""}
                    />
                    <span id="msg_err" style={{ color: "red" }}>
                      {" "}
                    </span>
                    <button name="submits" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
};

export default contact;
