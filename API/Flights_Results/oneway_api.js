import React from "react";
import axios from "axios";
const oneway_api = (
  travelleradult,
  travellerchildren,
  travellerInfant,
  departure,
  arrival,
  classe,
  tripType,
  startDateFormat,
  endDateFormat,
  setIsLoading,
  isLoading,
  router
) => {
  const options = {
    method: "POST",
    url: "https://api.whitefoxtravels.com/search/flight/getFlightResult",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      departure_at: startDateFormat,
      destination: arrival,
      origin: departure,
      return_at: endDateFormat,
      triptype: tripType,
    },
  };
  console.log("apiHite");
  setIsLoading(true);

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      if (response.data.message === "Result Fetched") {
        setIsLoading(false);

        router.push(
          `https://www.aviasales.com${response.data.response.data[0].link}`
        );
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default oneway_api;
