import Link from "next/link";
import React from "react";
import Airlines from "./Airlines";

const Footer = () => {
  return (
    <>
      <>
        <div className="email_enq">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="news_ctnt">
                  <h4>Sign-up Now for Exclusive Email-only Offers</h4>
                  <p>Subscribe to Receive Offers on Email</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="email_frm">
                  <form
                    method="post"
                    action="#"
                    id="frm_subscribed_id"
                    noValidate=""
                    onsubmit="return check_form1(); "
                  >
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      id="email_contact1"
                      onkeyup="check_form1()"
                    />
                    <span
                      id="email_contact_err1"
                      style={{ color: "#bc0202" }}
                    />
                    <button id="subscribeBtn" onclick="sendEnqSubscribe();">
                      Subscribe <i className="fa fa-angle-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="overlay2" />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="ftr_Bx">
                  <h4>About </h4>
                  <p>
                    For flights, we were directed to Bookeasyflights.com. We're
                    creating more fun, memorable and rewarding travel
                    experiences. We help our guests enjoy their journey to the
                    fullest, be it a speedy ride or a luxurious dream vacation.
                  </p>
                  <p>
                    Our team of travel experts is passionate about the United
                    States and discovering new destinations and experiences that
                    will excite and inspire our clients.
                    <Link style={{ color: "black" }} href="/about">
                      Read more...
                    </Link>
                  </p>
                </div>
                {/* <hr> */}
              </div>
              <div className="col-md-3">
                <div className="ftr_Bx">
                  <h4>Payment Icon</h4>
                  <ul>
                    {/* <li><img src="icon/icons-p3.png"></li> */}
                    <li>
                      <img src="../images/icon/icons-p4.png" />
                    </li>
                    <li>
                      <img src="../images/icon/icons-p7.png" />
                    </li>
                    <li>
                      <img src="../images/icon/icons-p8.png" />
                    </li>
                    <li>
                      <img src="../images/icon/icons-p9.png" />
                    </li>
                    <li>
                      <img src="../images/icon/icons-p10.png" />
                    </li>
                    <li>
                      <img src="../images/icon/icons-p12.png" />
                    </li>
                  </ul>
                </div>
                <hr />
              </div>
              <div className="col-md-3">
                <div className="ftr_Bx brdr_st">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <span>Phone :</span>
                      <a href="tel:+1-8888-750-118">
                        <i className="fa fa-phone" /> +1-8888-750-118
                      </a>
                    </li>
                    <li>
                      <span>Email : </span>{" "}
                      <a href="mailto:info@bookeasyflights.com">
                        <i className="fa fa-envelope" />{" "}
                        info@bookeasyflights.com
                      </a>
                    </li>
                    <li>
                      <span>Address : </span>{" "}
                      <a href="#">
                        <i className="fa fa-map-marker" /> 5940 Macleod Trail
                        Southwest Suit 500, Office 511, Calgary Ab T2h 2G4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <Airlines />

        <div className="dis_bx">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="dis_txt">
                  <p>
                    <b>Disclaimer:</b> The bookeasyflights.com website is
                    provided to you with your permission, and every effort is
                    made to ensure that the information, terms, conditions,
                    rules and alerts are correct, accurate and up-to-date. This
                    disclaimer policy extends to customers who visit our website
                    and/or book tickets through this website or through our
                    customer support executives.
                  </p>
                  <p>
                    bookeasyflights.com at any time reserves the right to
                    reserves the right to change the Agreement, and your
                    continued use of bookeasyflights.com is subject to the terms
                    and conditions in force at the time of use. In addition, the
                    bookeasyflights.com website may have specific terms and
                    conditions for any specific feature or facility. If any of
                    the terms and conditions set out here are contrary to any
                    other terms and conditions of service found on the
                    bookeasyflights.com website or at law, then those terms and
                    conditions shall take precedence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="link_ftr">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="img_travel">
                  <img src="../images/arc.png" />
                </div>
              </div>
              <div className="col-md-10">
                <div className="page_ftr_link">
                  <ul>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/disclaimer">Disclaimer</Link>
                    </li>
                    <li>
                      <Link href="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link href="/refund">Refund Policy</Link>
                    </li>
                    {/* <li>
                      <Link href="/cancellation">Cancellation Policy</Link>
                    </li> */}
                    <li>
                      <Link href="/sitemap">Site Map</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_btm">
          Copyright © 2021-2023
          <a href="https://bookeasyflights.com/">
            <font color="white">www.bookeasyflights.com</font>
          </a>{" "}
          is a part of bookeasyflights Inc. All Rights Reserved.
        </div>
        <div className="ftr_fxd">
          <p> Call &amp; Get Unpublished Flight Deals </p>
          <a href="tel:+1-8888-750-118">
            {" "}
            <i
              className="fa fa-phone"
              aria-hidden="true"
            /> +1-8888-750-118{" "}
          </a>
        </div>
      </>
    </>
  );
};

export default Footer;
