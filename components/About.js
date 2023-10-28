import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <section className="Sec_about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="deals_bx"
                style={{
                  backgroundImage: "url(../images/bg4.jpg)",
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="about_home">
                      <h4>
                        Explore Your Life, <span> Travel Where You Want!</span>
                      </h4>
                      <p>
                        "Are you searching for a specific airline phone number?
                        We are here to help you with any domestic or
                        international flights. Our flight team helpline can help
                        you book flights, make any reservation changes or
                        cancellations at discounted rates. We aim to provide
                        exceptional service and help you save money while giving
                        you the best possible travel experience! Give us a call
                        today and you will not be disappointed.
                      </p>
                      <p>
                        The variety of cheap flights and airline tickets offered
                        on our website covers both domestic and international
                        destinations, you will also find incredible discounts on
                        last minute flights, one way flights, and round trip
                        flights, as well as cheap direct and non-stop
                        international flights.We have a deluxe pass to the best
                        airline deals, which indicates we can discover the most
                        reasonable tickets for you in no time. Additionally, we
                        can ensure the most satisfactory seats and the prompt
                        conveyance to get you to your destination. We function
                        with all significant airlines and routes, both domestic
                        and international, including Delta Airlines, American
                        Airlines, United Airlines, JetBlue Airlines, Alaska
                        Airlines, Southwest Airlines, Qatar Airlines, Turkish
                        Airlines, Air France, KLM Royal Dutch Airlines, and many
                        more. Book airways flights to California, flight to
                        Jamaica, Flights to Vancouver, Flights to Honolulu,
                        Flights to Tampa, Flights to Washington, Flights to
                        Philadelphia, Flights to New York, flights to Rome,
                        flights to Florida, Flights to Calgary, Flights to Los
                        Angeles, Flights to Orlando, Flights to Columbus,
                        Flights to Jacksonville, Flights to Seattle, Flights to
                        Chicago, Flights to San Francisco , Flights to Denver,
                        Flights to Phoenix, Flights to Fort Lauderdale, Flights
                        to Anchorage, Flights to Kahului, Flights from United
                        States, Flights to Mexico and many other routes as well.
                      </p>
                      <p>
                        From the best accommodation deals to secure flight and
                        hotel bookings, Book Easy Flights promises to deliver
                        impeccable service to its customers.
                      </p>
                      <Link href="/about">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
