// import EncodingParametersInURLs from "./EncodingParametersInURLs.js";
// import WorkingWithObjects from "./WorkingWithObjects.js";
// import WorkingWithArrays from "./WorkingWithArrays.js";


// function Assignment5() {
//     return (
//       <div>
//         <h1>Assignment 5</h1>
//         <div className="list-group">
//           <a href="http://localhost:4000/a5/welcome"
//              className="list-group-item">
//             Welcome
//           </a>
//           <EncodingParametersInURLs />
//           <WorkingWithObjects/>
//           <WorkingWithArrays/>
//         </div>
//       </div>
//     );
//   }
//   export default Assignment5;

import React from 'react';
import EncodingParametersInURLs from "./EncodingParametersInURLs.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

function Assignment5() {
    const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";
    const welcomeURL = `${API_BASE}/a5/welcome`;

    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={welcomeURL} className="list-group-item">
            Welcome
          </a>
          <EncodingParametersInURLs />
          <WorkingWithObjects />
          <WorkingWithArrays />
        </div>
      </div>
    );
}

export default Assignment5;
