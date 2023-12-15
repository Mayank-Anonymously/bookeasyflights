import React from "react";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Mobile from "../components/Mobile";

const disclaimer = () => {
  return (
    <>
      <Navbar />
      <Mobile />

      <section
        className="banner_page"
        style={{ backgroundImage: 'url("images/pagebanner.jpg")' }}
      >
        <h1>Disclaimer</h1>
      </section>
      <section className="Sec_page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page_ctnt">
                <h2>Disclaimer</h2>
                <p>
                  The information provided and published on Bookeasyflights.com
                  is fair and accurate to the best of our knowledge but is
                  subject to changes as the circumstances prevail. All the
                  information provided here is variable and is modified from
                  time to time. We keep on updating the information related to
                  prices, content and data along with other necessary details.
                  We make sure to provide you with the relevant data and
                  disclose all the necessary details needed for our client
                  satisfaction. However, the travel industry is dynamic in
                  nature and demands information updates frequently, so, the
                  fare changes are all subject to the need of an hour. We do not
                  stand liable for any information that is provided here as we
                  may update the information without prior intimation. Hence,
                  customers are requested to check the information prior to
                  using our website.
                </p>
                <p>
                  Bookeasyflights.com does not stand liable for any losses,
                  damage or injury due to the information (related to content,
                  data, or other necessary details) provided on our website or
                  associated with its affiliates according to our Terms and
                  Conditions. Customer discretion is advised on the use of our
                  website.
                </p>
                <p>
                  Any offers or deals provided on our website are variable in
                  nature and may change as per the needs of the travel industry.
                  The changes can take place due to the market determinants
                  which govern our website and include date of travel, date of
                  booking, blackout date and other Terms and Conditions. The
                  fare changes can take place without prior intimation and the
                  customer is deemed to abide by the same. The customer cannot
                  claim a discount on fare changes and has to undergo an
                  assessment for its validity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default disclaimer;
