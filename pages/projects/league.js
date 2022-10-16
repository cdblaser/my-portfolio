// import { useState, useEffect } from "react";
// import axios from "axios";
// const express = require("express");
// const app = express();
// import freeChampRotation from "../../apis/league";

// const League = () => {
//   const [backendData, setBackendData] = useState([{}]);

//   const getData = async () => {
//     const response = await freeChampRotation.get("");
//     setBackendData(response.data);
//   };

//   useEffect(() => {
//     // fetch("/api")
//     //   .then((response) => response.json(response.data))
//     //   .then((data) => {
//     //     setBackendData(data);
//     //   });
//     getData();
//   }, []);

//   return (
//     <div>
//       {typeof backendData.freeChampionIds === "undefined" ? (
//         <p>Loading...</p>
//       ) : (
//         backendData.freeChampionIds.map((user, i) => <p key={i}>{user}</p>)
//       )}
//     </div>
//   );
// };

export default function League() {
  return <div>Work in progress...</div>;
}
