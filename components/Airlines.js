import { host, siteId } from "@/static";
import React, { useEffect, useState } from "react";

const Airlines = (props) => {
  const [airlineData, setAirlineData] = useState([]);
  console.log(props);
  console.log("UTL", `${host}dynamic/get-pages-by-siteid/${siteId}`);
  useEffect(() => {
    const fetchData = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const apiFetch = await fetch(
        `${host}dynamic/get-pages-by-siteid/${siteId}`,
        requestOptions
      );
      const response = await apiFetch.json();
      setAirlineData(response.response);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="container airports-grid mb-5">
          <h2>
            Other Popular <span className="different-color">Airlines</span>
          </h2>
          <ul className="row airlines-list-order">
            {airlineData.map((item, index) => {
              return (
                <li class="col-lg-2 col-md-2 col-sm-3 col-xs-6 mt-4">
                  <a href={`/${item.category}/${item.url}`}>{item.title} </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Airlines;
