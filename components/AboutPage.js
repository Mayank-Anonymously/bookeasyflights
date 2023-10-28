import React from "react";

const AboutPage = () => {
  return (
    <>
      <>
        <section
          className="banner_page"
          style={{ backgroundImage: 'url("images/pagebanner.jpg")' }}
        >
          <h1>About Us</h1>
        </section>
        <section className="Sec_page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page_ctnt">
                  <h2>About </h2>
                  <img
                    src="../images/admin/airline_image/647766about.jpg"
                    className="img-fluid rounded img_set"
                  />
                  <p>
                    Welcome to our US travel agency, where we pride ourselves on
                    creating unforgettable travel experiences for our clients.
                    Whether you are planning a family vacation, a romantic
                    getaway, or a solo adventure, we have the expertise and
                    resources to help you plan the perfect trip.
                  </p>
                  <p>
                    Our team of travel experts is passionate about the United
                    States and discovering new destinations and experiences that
                    will excite and inspire our clients. We believe that travel
                    should be a personal and transformative experience, and we
                    strive to create itineraries that reflect our clients’
                    unique interests, preferences, and travel styles.
                  </p>
                  <p>
                    From the bustling cities of New York and Los Angeles to the
                    impressive natural beauty of national parks like Yellowstone
                    and Yosemite, the United Sates offers an incredible range of
                    destinations and experiences to explore. We are dedicated to
                    providing an amazing experience for our clients based on
                    their travelling preferences and helping our clients
                    discover the best of what the country has to offer, whether
                    it’s sampling local cuisine, experiencing the vibrant
                    culture, or exploring the breathtaking landscapes.
                  </p>
                  <p>
                    At our travel agency, we understand that planning a trip can
                    be overwhelming, which is why we take care of all the
                    details for our clients, from booking flights and
                    accommodations to arranging tours and activities. We also
                    offer personalized recommendations and insider tips to help
                    our clients make the most of their trip and create
                    ever-lasting memories.
                  </p>
                  <p>
                    So, if you are looking for travel agencies that will meet
                    your expectations, create a customary itinerary tailored to
                    your needs and preferences, look no further than us. We
                    can’t wait to serve you on your adventurous trip to the
                    United States.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default AboutPage;
