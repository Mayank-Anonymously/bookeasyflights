// import React, { useEffect, useState } from "react";
// import {
//   Circle,
//   GoogleMap,
//   LoadScript,
//   Marker,
//   Polygon,
// } from "@react-google-maps/api";
// import { Typeahead } from "react-bootstrap-typeahead";

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

//   const options = [
//     {
//       name: "Alwar",
//       geometry: {
//         location: {
//           lat: 27.5529907,
//           lng: 76.6345735,
//         },
//         viewport: {
//           northeast: {
//             lat: 27.6197409,
//             lng: 76.71512609999999,
//           },
//           southwest: {
//             lat: 27.4895426,
//             lng: 76.57762540000002,
//           },
//         },
//       },
//       icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
//       icon_background_color: "#7B9EB0",
//       icon_mask_base_uri:
//         "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
//       photos: [
//         {
//           height: 780,
//           html_attributions: [
//             '<a href="https://maps.google.com/maps/contrib/111061086651143910323">Priyank Sharma</a>',
//           ],
//           photo_reference:
//             "AWU5eFjqnaNQHvx31JuS3mG9PPjXtbONkmejvTY1r_-0QfnUV9hEGJtYbmwl4xatVVPofMr3tFHb6yKdaDrmF5jZ4faNZeJYQyWUMj7JlvMAxQhwNxz1ntmRRgZ8iUYEhavnbyMGCvozt-35H-TFP8_hpQZIbNgx4C5xmPWD4jY6vv7s9xAy",
//           width: 1080,
//         },
//       ],
//       place_id: "ChIJ813mp4-ZcjkR8ibknqO7zjg",
//       reference: "ChIJ813mp4-ZcjkR8ibknqO7zjg",
//       types: ["locality", "political"],
//     },
//   ];

//   useEffect(() => {
//     // Fetch locations based on the selected locality/country in India
//     if (selectedLocation) {
//       fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedLocation},India&key=${apiKey}`
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
//             if (result.geometry.viewport) {
//               const viewport = result.geometry.bounds;
//               setLocalityBoundary([
//                 { lat: viewport.northeast.lat, lng: viewport.northeast.lng },
//                 { lat: viewport.northeast.lat, lng: viewport.southwest.lng },
//                 { lat: viewport.southwest.lat, lng: viewport.southwest.lng },
//                 { lat: viewport.southwest.lat, lng: viewport.northeast.lng },
//               ]);
//             }

//             // Check if there is a country boundary
//             if (data.results.length > 1) {
//               const countryResult = data.results[1];
//               if (countryResult.geometry.bounds) {
//                 const bounds = countryResult.geometry.bounds;
//                 setCountryBoundary([
//                   { lat: bounds.northeast.lat, lng: bounds.northeast.lng },
//                   { lat: bounds.northeast.lat, lng: bounds.southwest.lng },
//                   { lat: bounds.southwest.lat, lng: bounds.southwest.lng },
//                   { lat: bounds.southwest.lat, lng: bounds.northeast.lng },
//                 ]);
//               } else if (countryResult.geometry.viewport) {
//                 const viewport = countryResult.geometry.viewport;
//                 setCountryBoundary([
//                   { lat: viewport.northeast.lat, lng: viewport.northeast.lng },
//                   { lat: viewport.northeast.lat, lng: viewport.southwest.lng },
//                   { lat: viewport.southwest.lat, lng: viewport.southwest.lng },
//                   { lat: viewport.southwest.lat, lng: viewport.northeast.lng },
//                 ]);
//               }
//             }

//             // Set marker position
//             setMarkerPosition(result.geometry.location);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching location data:", error);
//         });
//     }
//   }, [selectedLocation, apiKey]);

//   const handleBoundaryInputChange = (selected) => {
//     setSelectedLocation(selected[0]?.name || "");
//     setCircleRadius;
//   };

//   const handleMapClick = (e) => {
//     // Set marker position on map click
//     setMarkerPosition({
//       lat: e.latLng.lat(),
//       lng: e.latLng.lng(),
//     });
//   };
//   console.log(localityBoundary);
//   console.log(countryBoundary);

//   return (
//     <LoadScript googleMapsApiKey={apiKey}>
//       <div>
//         <Typeahead
//           id="boundary-input"
//           labelKey={(option) => option.name}
//           options={options}
//           placeholder="Type a city name"
//           onChange={handleBoundaryInputChange}
//         />
//       </div>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={13}
//         center={center}
//         onClick={handleMapClick}
//       >
//         {/* {localityBoundary.length > 0 && (
//           <Polygon
//             paths={localityBoundary}
//             options={{
//               fillColor: "#00FF00",
//               fillOpacity: 0.35,
//               strokeColor: "#0000FF",
//               strokeOpacity: 0.8,
//               strokeWeight: 2,
//             }}
//           />
//         )} */}
//         {/* {countryBoundary.length > 0 && (
//           <Polygon
//             paths={countryBoundary}
//             options={{
//               fillColor: "#FF0000",
//               fillOpacity: 0.35,
//               strokeColor: "#0000FF",
//               strokeOpacity: 0.8,
//               strokeWeight: 2,
//             }}
//           />
//         )} */}
//         {markerPosition && (
//           <Marker position={markerPosition} title={selectedLocation} />
//         )}
//         {center && (
//           <Circle
//             center={center}
//             radius={circleRadius}
//             options={{
//               fillColor: "#0000FF",
//               fillOpacity: 0.2,
//               strokeColor: "#0000FF",
//               strokeOpacity: 0.8,
//               strokeWeight: 2,
//             }}
//           />
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponent;
