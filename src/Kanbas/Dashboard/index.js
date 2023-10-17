import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import your custom CSS file for Dashboard styling
import db from "../Database"; // Assuming you have your database imported correctly
import {AiTwotoneBell} from "react-icons/ai";

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="wd-dashboard-container">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="row d-flex justify-content-start flex-wrap">
        {courses.map((course, index) => (
          
          <div key={course._id} className="col-auto ms-5 mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card h-100">
              <div style={{ backgroundColor: "#f183d7", height: "150px" }}>
                <i className="fa-solid fa-ellipsis-vertical float-end me-4 pt-4 text-white fa-lg"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>

                <p className="card-text">{course.number}<br />
                    <small>{course.startDate}</small><br />
                    <small>{course.endDate}</small><br />  
                </p>
                <AiTwotoneBell className="float-end me-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;


// import db from "../Database";
// import { Link } from "react-router-dom";
// function Dashboard() {
//   const courses = db.courses;
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <hr />
//       <h2>Published Courses ({courses.length})</h2>
//       <div class="row row-cols-1 row-cols-md-3 g-4">
//         <div className="col">
//           {courses.map((course, index) => (
            // <div class="card h-100">
            //   <img src="/images/react.png" class="card-img-top" alt="..." />
            //   <div class="card-body">
            //     <h5 class="card-title">{course.name}</h5>

            //     <Link
            //       key={course._id}
            //       to={`/Kanbas/Courses/${course._id}`}
            //       className="btn btn-primary"
            //     >
            //       {course.name}
            //     </Link>
            //     <p class="card-text">
            //       This is a longer card with supporting text below as a natural
            //       lead-in to additional content. This content is a little bit
            //       longer.
            //     </p>
            //   </div>
            // </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;