import React from "react";

import Footer from "./Footer";

const Dynamic = () => {
  return (
    <>
    
        <div className="container page-content">
          <h1 className="mt-5">Air France Flight Reservations on MyFlightSearch</h1>
          <p className="page-para">
            Air France was formed on October 1933 by unifying Air Orient, Air
            Union, Compagnie Generale Aeropostale, Compagnie International de
            Navigation Aerienna (CIDNA) and Societe Generale des Transports
            Aeriens (SGTA). A member of SkyTeam, Paris Charles de Gaulle Airport
            and Paris Orly Airport serves as its main hub and operates flights
            to over 200 destinations. These airports cover major cities like
            Amsterdam, Bangkok, Chicago, Boston Dublin, Delhi, Hong Kong and
            London. With fleet size of over 200, the airline code share
            agreement with airlines, including, Eithad Airways, Jet Airways,
            Bangkok Airways, Alaska Airlines, Georgian Airways and Kenya Airways
          </p>

          <h4>Air France Classes of Service</h4>
          <span className="bold-span">First Class</span>
          <ul className="flight-list">
            <li>
              Attentive crew members who provides personalized services as per
              customer’s requirements.
            </li>
            <li>
              Comfortable seat-cum-bed that measures 2m/6.5ft in length with
              luxurious mattress and a duvet.
            </li>
            <li>
              Airline offers a travel kit, lounge wear, slippers and dust bags
              for shoes once on board.
            </li>
            <li>
              Enjoy an awesome and comfy flight with 10.4-inch interactive video
              screen, on-demand videos, reading lamp and a power outlet for your
              electronic devices.
            </li>
            <li>
              Serves lip-smacking meals prepared by top French Chefs and also
              get chance to try new flavors by choosing your meal in advance.
              Includes a wide variety of wines as well.
            </li>
            <li>
              A cozy bench so that you can have some chit chat with your
              co-passengers.
            </li>
          </ul>
          <span className="bold-span">Business Class</span>
          <ul className="flight-list">
            <li>
              Business class comes up with maximum comfort with spacious
              seat-cum-bed and attached controllers which can be adjusted
              depending on your ease.
            </li>
            <li>
              Personal screens which comprises 500 hours of different
              programming. Along with it, you can use Air France App for tablets
              and download your favorite newspapers and magazines free of cost.
            </li>
            <li>
              Provides a suitable space to work, noise-cancelling headphones,
              personal telephone and storage space which ensures you won’t be
              bothered by any of your co-passengers.
            </li>
            <li>
              Everything in business class is created as per your comfort. It
              provides wide legroom where you can restfully stretch your legs.
              Also, the middle seat is replaced by a tray table where you can
              work effortlessly.
            </li>
            <li>
              A glass of champagne is the one to start your scrumptious meal.
              Choose your appetizer, cheese and deserts that soothe your taste
              buds.
            </li>
          </ul>

          <span className="bold-span">Economy Class</span>
          <ul className="flight-list">
            <li>
              Economy class is all about comfort and relaxation. Enjoy your
              flight with a personal video comprising various movies, music and
              games
            </li>
            <li>
              Seats that meet all your requirements comfort, flexibility and
              spacious
            </li>
            <li>
              Basic amenities like sleep mask, ear plugs and refreshing towel
              free of cost
            </li>
            <li>
              Special meals for infants and children along with yumilicious meal
              for adults with drinks (with or without alcohol)
            </li>
          </ul>
          <h4>Air France Web Check-in</h4>
          <p className="page-para">
            Save your time and earn stress-free check-in with web check-in
            facility. You just need to check-in online before 30 hours prior
            your flight departure. You can also choose your desired seat
            depending on your convenience. Once it is done. You only have to
            leave your baggage at the baggage counter.
          </p>
          <h4>FLYING BLUE</h4>
          <p className="page-para mb-5">
            Flying Blue is the frequent flyer program of the Air France-KLM that
            lets its loyal and esteemed customers benefit every time they fly
            with the airline. Membership in this program is free; it awards
            points depending on the miles travelled and class of service. There
            are basically four levels under this program namely Ivory, Silver,
            Gold and Platinum.
          </p>

          <h2>
            <span className="different-color">Airports</span>Serviced By Air
            France
          </h2>
          <div className="container airports-grid mb-3">
            <div className="row">
              <div className="col-md-2 effect-span d-flex flex-column " style={{gap:"12px"}}>
                <span>Airport Code</span>
                <span>LHR</span>
                <span>CDG</span>
                <span>FRA</span>
                <span>AMS</span>
                <span>DUB</span>
                <span>BCN</span>
                <span>MAD</span>
                <span>LAX</span>
              </div>
              <div className="col-md-6 effect-span d-flex flex-column" style={{gap:"12px"}}>
                <span>Airport Name</span>
                <span>Heathrow</span>
                <span>Charles De Gaulle Intl Arpt</span>
                <span>Frankfurt Intl</span>
                <span>Schiphol Arpt</span>
                <span>Dublin Arpt</span>
                <span>Barcelona Arpt</span>
                <span>Adolfo Suarez Barajas Arpt</span>
                <span>Los Angeles Intl Arpt</span>
              </div>
              <div className="col-md-2 effect-span">
                <span>City and Country</span>
                <p className="mt-3">London, United Kingdom</p>
                <p>Paris, France</p>
                <p>Frankfurt, Germany</p>
                <p>Amsterdam, Netherlands</p>
                <p>Dublin, Ireland</p>
                <p>Barcelona, Spain</p>
                <p>Madrid, Spain</p>
                <p>Los Angeles, United States</p>
              </div>
            </div>
          </div>
          <h2>
           Top Air France  <span className="different-color">Destinations</span>
          </h2>
          <div className="container airports-grid mb-3">
<div className="row">
    <div className="col-md-2 hover-span">
<p>Flights to London</p>
<p>Flights to Los Angeles</p>
<p>Flights to Zurich</p>
<p>Flights to Madrid</p>
    </div>

    <div className="col-md-2 hover-span">
<p>Flights to Paris</p>
<p>Flights to Edinburg</p>
<p>Flights to Munich</p>
<p>Flights to Istanbul</p>
    </div>
    <div className="col-md-2 hover-span">
<p>Flights to Athens</p>
<p>Flights to New York City</p>
<p>Flights to Rome</p>
<p>Flights to San Francisco</p>
    </div>
    <div className="col-md-2 hover-span">
<p>Flights to Zakynthos</p>
<p>Flights to Miami</p>
<p>Flights to Oslo</p>
    </div>
    <div className="col-md-2 hover-span">
<p>Flights to Venice</p>
<p>Flights to Frankfurt</p>
<p>Flights to Barcelona</p>
    </div>
    <div className="col-md-2 hover-span">
<p>Flights to Amsterdam</p>
<p>Flights to Dublin</p>
<p>Flights to Dubai</p>
    </div>
</div>


          </div>
          <h2>
          Other Popular <span className="different-color">Airlines</span>
          </h2>
          <div className="container airports-grid mb-5">
            <div className="row hover-span">
            <p className="col-md-2 ">Lufthansa</p>
            <p className="col-md-2">Klm royal dutch airlines</p>
            <p className="col-md-2">British Airways</p>
            <p className="col-md-2">Westjet</p>
            <p className="col-md-2">Frontier airlines</p>
            <p className="col-md-2">Turkish airlines</p>
            <p className="col-md-2">Finnair</p>
            <p className="col-md-2">Iberia</p>
            </div>
          </div>


        </div>
    </>
  );
};

export default Dynamic;
