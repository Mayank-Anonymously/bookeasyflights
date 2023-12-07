import Link from "next/link";
import React from "react";

const Deals = () => {
  return (
    <>
      <section className="Sec_deals">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hding_page">
                <h3>
                  Best <span>Flight Deals</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="fly_deals">
                {/* <div class="ar_logo">
      <img src="images/ua.png" class="img-fluid">
    </div> */}
                {/* <div class="ar_nm">
      <h4>United<br> Airlines</h4>
    </div> */}
                <div className="deal_date">
                  <p>Aug 20 2023 - Sep 24 2023</p>
                  <h4>
                    SLC <img src="images/flight.png" /> LAS
                  </h4>
                </div>
                <div className="deal_price">
                  <span>Round Trip</span>
                  <p>$217.78</p>
                </div>
                <div className="deal_Btn">
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="fly_deals">
                {/* <div class="ar_logo">
      <img src="images/ua.png" class="img-fluid">
    </div> */}
                {/* <div class="ar_nm">
      <h4>United<br> Airlines</h4>
    </div> */}
                <div className="deal_date">
                  <p>Aug 17 2023 - Sep 26 2023</p>
                  <h4>
                    ATL <img src="images/flight.png" /> HNL
                  </h4>
                </div>
                <div className="deal_price">
                  <span>Round Trip</span>
                  <p>$696.03</p>
                </div>
                <div className="deal_Btn">
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="fly_deals">
                {/* <div class="ar_logo">
      <img src="images/ua.png" class="img-fluid">
    </div> */}
                {/* <div class="ar_nm">
      <h4>United<br> Airlines</h4>
    </div> */}
                <div className="deal_date">
                  <p>Aug 14 2023 - Sep 16 2023</p>
                  <h4>
                    IAH <img src="images/flight.png" /> EWR
                  </h4>
                </div>
                <div className="deal_price">
                  <span>Round Trip</span>
                  <p>$379.78</p>
                </div>
                <div className="deal_Btn">
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="fly_deals">
                {/* <div class="ar_logo">
      <img src="images/ua.png" class="img-fluid">
    </div> */}
                {/* <div class="ar_nm">
      <h4>United<br> Airlines</h4>
    </div> */}
                <div className="deal_date">
                  <p>Aug 05 2023 - Aug 28 2023</p>
                  <h4>
                    ORD <img src="images/flight.png" /> MSP
                  </h4>
                </div>
                <div className="deal_price">
                  <span>Round Trip</span>
                  <p>$1050.75</p>
                </div>
                <div className="deal_Btn">
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-sm-block d-none">
              <div className="row">
                <div className="bnr_img">
                  <img src="images/deal.jpg" className="rounded img-fluid" />
                  <div className="bnr_phone">
                    <h4>CALL NOW FOR EXCLUSIVE FARES</h4>
                    <a href="tel:+1-855-470-0326">+1-855-470-0326</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="fly_deals">
                {/* <div class="ar_nm">
      <h4>American<br> Airlines</h4>
    </div> */}
                <div className="deal_date">
                  <p>Sep 05 2023 - Sep 30 2023</p>
                  <h4>
                    CHI <img src="images/flight.png" /> ROM
                  </h4>
                </div>
                <div className="deal_price">
                  <span>Round Trip</span>
                  <p>$890.35</p>
                </div>
                <div className="deal_Btn">
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="fly_deals">
                {/* <div class="ar_nm">
      <h4>American<br> Airlines</h4>
    </div> */}
                <div className="deal_date">
                  <p>Aug 20 2023 - Sep 25 2023</p>
                  <h4>
                    JFK <img src="images/flight.png" /> HNL
                  </h4>
                </div>
                <div className="deal_price">
                  <span>Round Trip</span>
                  <p>$734.96</p>
                </div>
                <div className="deal_Btn">
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="fly_deals">
                {/* <div class="ar_nm">
      <h4>American<br> Airlines</h4>
    </div> */}
                <div className="deal_date">
                  <p>Aug 15 2023 - Sep 25 2023</p>
                  <h4>
                    JFK <img src="images/flight.png" /> DFW
                  </h4>
                </div>
                <div className="deal_price">
                  <span>Round Trip</span>
                  <p>$153.56</p>
                </div>
                <div className="deal_Btn">
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="fly_deals">
                {/* <div class="ar_nm">
      <h4>American<br> Airlines</h4>
    </div> */}
                <div className="deal_date">
                  <p>Aug 18 2023 - Sep 25 2023</p>
                  <h4>
                    MSP <img src="images/flight.png" /> LAS
                  </h4>
                </div>
                <div className="deal_price">
                  <span>Round Trip</span>
                  <p>$307.81</p>
                </div>
                <div className="deal_Btn">
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text_warning">
                <h4>*All fares are quoted in USD.</h4>
                <p>
                  Keep going refreshed on Tue June-23-2023 04:00 PM , the tolls
                  referenced above are for flight tickets and comprehensive of
                  fuel overcharges, administration charge and expenses. In view
                  of authentic information, these passages are liable to change
                  without earlier notification and can't be ensured at the hour
                  of booking. Compassionately go through our
                </p>
                <Link href="/terms">terms and conditions</Link> before booking.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deals;
