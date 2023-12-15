// import React, { useEffect, useState } from "react";
// import {
//   Circle,
//   GoogleMap,
//   LoadScript,
//   Marker,
//   Polygon,
// } from "@react-google-maps/api";
// import { Typeahead } from "react-bootstrap-typeahead";
// import PlacesSearchtypeHead from "@/components/GoogleAutoComplete";

// const MapComponent = () => {
//   const mapContainerStyle = {
//     width: "100%",
//     height: "500px",
//   };

//   const apiKey = "AIzaSyA76OKDCbizM99zuhLvExdBx666iLNEAm0";
//   const defaultCenter = { lat: 28.6031121, lng: 77.3668853 }; // Default center for India
//   const [center, setCenter] = useState(defaultCenter);
//   const [localityBoundary, setLocalityBoundary] = useState([]);
//   const [countryBoundary, setCountryBoundary] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [markerPosition, setMarkerPosition] = useState(null);
//   const [circleRadius, setCircleRadius] = useState(10000); // 20 km in meters
//   const [inValue, setInpValue] = useState("");
//   const [placeName, setPlaceName] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [marker, setMarker] = useState("");

//   useEffect(() => {
//     // Fetch locations based on the selected locality/country in India
//     if (selectedLocation) {
//       fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedLocation}&key=${apiKey}&result_type=locality`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.results && data.results.length > 0) {
//             const result = data.results[0];
//             setCenter({
//               lat: result.geometry.location.lat,
//               lng: result.geometry.location.lng,
//             });

//             // Check if there is a locality boundary
//             if (result.geometry.bounds) {
//               const bounds = result.geometry.bounds;
//               setLocalityBoundary([
//                 { lat: bounds.northeast.lat, lng: bounds.northeast.lng },
//                 { lat: bounds.northeast.lat, lng: bounds.southwest.lng },
//                 { lat: bounds.southwest.lat, lng: bounds.southwest.lng },
//                 { lat: bounds.southwest.lat, lng: bounds.northeast.lng },
//               ]);
//             } else if (result.geometry.viewport) {
//               // Convert viewport coordinates to a polygon
//               const viewport = result.geometry.viewport;
//               setLocalityBoundary([
//                 { lat: viewport.northeast.lat, lng: viewport.northeast.lng },
//                 { lat: viewport.northeast.lat, lng: viewport.southwest.lng },
//                 { lat: viewport.southwest.lat, lng: viewport.southwest.lng },
//                 { lat: viewport.southwest.lat, lng: viewport.northeast.lng },
//               ]);
//             }

//             // ... rest of the code remains unchanged
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching location data:", error);
//         });
//     }
//   }, [selectedLocation, apiKey]);
//   const handleBoundaryInputChange = (selected) => {
//     console.log(selected);
//     // setSelectedLocation(selected[0]?.name || "");
//     // setCircleRadius(1000);
//   };

//   const handleMapClick = (e) => {
//     // Set marker position on map click
//     setMarkerPosition({
//       lat: e.latLng.lat(),
//       lng: e.latLng.lng(),
//     });
//   };
//   const placeapi = (value) => {
//     setInpValue(value);
//     const autocompleteUrl = `http://192.168.29.91:8080/google/query-all-places/${inValue}`;

//     fetch(autocompleteUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setPlaceName(data);
//       })
//       .catch((error) => console.error("Error:", error));
//   };

//   const handleInputChange = (value) => {
//     placeapi(value);

//     const inp = value.toLowerCase();
//     console.log("lower", inp);
//     const filteredItems = placeName.filter((item) =>
//       item.structured_formatting.main_text.toLowerCase().includes(inp)
//     );
//     console.log("filteredItems:", filteredItems);
//     setFilteredData(filteredItems);
//     setShowDropdown(true);
//   };
//   const handleItemClick = (item) => {
//     setSelectedLocation(item.main_text, item.secondary_text);
//     setShowDropdown(false);
//     setCircleRadius(10000);
//     setMarker(item.main_text);
//   };
//   return (
//     <>
//       <LoadScript googleMapsApiKey={apiKey}>
//         <div className="dropdown">
//           <input
//             type="text"
//             value={inValue}
//             onChange={(e) => handleInputChange(e.target.value)}
//             placeholder="Type something..."
//           />
//           {showDropdown && (
//             <ul className="dropdown-list">
//               {filteredData.map((item, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleItemClick(item.structured_formatting)}
//                 >
//                   {item.structured_formatting.main_text}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div>
//           {/* <Typeahead
//             id="boundary-input"
//             labelKey={(option) => option.main_text}
//             options={placeName.map((item) => item.structured_formatting)}
//             placeholder="Type a city name"
//             onChange={(e) => handleBoundaryInputChange(e)}
//           /> */}
//         </div>
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           zoom={20}
//           center={center}
//           onClick={handleMapClick}
//         >
//           {localityBoundary.length > 0 && (
//             <Polygon
//               paths={localityBoundary}
//               options={{
//                 fillColor: "#00FF00",
//                 fillOpacity: 0.35,
//                 strokeColor: "#0000FF",
//                 strokeOpacity: 0.8,
//                 strokeWeight: 1,
//               }}
//             />
//           )}
//           {/* {countryBoundary.length > 0 && (
//             <Polygon
//               paths={countryBoundary}
//               options={{
//                 fillColor: "#FF0000",
//                 fillOpacity: 0.35,
//                 strokeColor: "#0000FF",
//                 strokeOpacity: 0.8,
//                 strokeWeight: 2,
//               }}
//             />
//           )} */}

//           {markerPosition && (
//             <Marker position={markerPosition} title={marker} />
//           )}
//           {/* <Circle
//             center={center}
//             radius={circleRadius}
//             options={{
//               fillColor: "#0000FF",
//               fillOpacity: 0.2,
//               strokeColor: "#0000FF",
//               strokeOpacity: 0.8,
//               strokeWeight: 2,
//             }}
//           /> */}
//         </GoogleMap>
//       </LoadScript>
//     </>
//   );
// };

// export default MapComponent;


import React from 'react'

const mps = () => {
  return (
    <div>mps</div>
  )
}

export default mps