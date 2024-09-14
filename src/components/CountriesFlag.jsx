// import React from "react";
// import { useState, useEffect } from "react";
// import styles from "./CountriesFlag.module.css";
// import axios from "axios";
// import "./CountriesFlag.css";

// const CountriesFlag = () => {
//   const [countries, setCountries] = useState([]);
//   const [search, setSearch] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://restcountries.com/v3.1/all")
//       .then((response) => {
//         console.log(response.data);
//         setCountries(response.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching countries data:", err);
//         setError(err.message);
//       });
//   }, []);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredCountries = countries.filter((country) =>
//     country.name.common.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="countriesGrid">
//       <input
//         type="text"
//         placeholder="Search for Countries..."
//         value={search}
//         onChange={handleSearch}
//         className={styles.search}
//       />

//       <div >
//         {error ? (
//           <p>Error loading data : {error}</p>
//         ) : filteredCountries.length > 0 ? (
//           filteredCountries.map((country) => (
//             <div key={country.cca3} className="countryCard">
//               <img
//                 src={country.flags.png}
//                 alt={country.name.common}
//                 className={styles.flag}
//               />
//               <p>{country.name.common}</p>
//             </div>
//           ))
//         ) : (
//           <p>No countries found</p>
//         )}
//       </div>
//     </div>
//   );
// };
// export default CountriesFlag;

// // className={styles.countriesGrid}
