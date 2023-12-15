import React from "react";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Mobile from "../components/Mobile";

const refund = () => {
  return (
    <>
      <Navbar />
      <Mobile />
      <>
        <section
          className="banner_page"
          style={{ backgroundImage: 'url("images/pagebanner.jpg")' }}
        >
          <h1>Refund Policy</h1>
        </section>
        <section className="Sec_page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page_ctnt">
                  <h2>Refund Policy</h2>
                  <p>
                    Our main aim is to offer first class travel services and
                    maintain a standard that fulfills every customer’s need and
                    requirements. The same way we also have a Refund policy
                    which is well-configured. You should be well versed with the
                    Refund policies, so that when you are not able to travel
                    because of any reason..
                  </p>
                  <p>
                    <strong>Notification of Refunds –</strong>
                    <br />
                    Bookeasyflights.com Refund only within 24 hours.
                  </p>
                  <p>
                    <strong>Refund Policy -</strong>
                    <br />
                    There is no situation as such in which the flights might get
                    canceled but in case of bad weather where flights can’t fly,
                    then you can ask for the refund. But the refund completely
                    depends on airlines policies and we don’t have any control
                    over it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
};

export default refund;
