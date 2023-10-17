// import React from "react";
// import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import JsonPre from "../../Labs/a3/JsonPre";
// import db from "../Database";
// import CourseNavigation from "./CourseNavigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/AssignmentEditor";
// import Grades from "./Grades";
// import "./index.css"; 
// import { FaBars } from 'react-icons/fa';

// function Courses() {
//   const { courseId } = useParams();
//   const { pathname } = useLocation();
//   const [empty, kanbas, courses, id, screen] = pathname.split("/");
//   const course = db.courses.find((course) => course._id === courseId);

//   return (
//     <div className="courses-container">
//       <div>
//         <div className="d-none d-md-block">
//           <div className="row">
//             <div className="col-auto">
//               <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#courseNavigation">
//                 <FaBars className="ps-4 pt-4 fa-lg text-danger red-icon" />
//                 {/* <i className="fas fa-bars ps-4 pt-4 fa-lg text-danger red-icon"></i> */}
//               </button>
//             </div>
//             <div className="col ps-0 pt-1">
//               <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
//                 <ol className="breadcrumb pt-3">
//                   <li className="breadcrumb-item">
//                     <a href="#" className="text-danger text-decoration-none">
//                       {courseId}
//                     </a>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">Modules</li>
//                 </ol>
//               </nav>
//             </div>
//             <div className="col pt-3">
//               <button type="button" className="btn btn-light border border-secondary-subtle float-end">
//                 <i className="fa-solid fa-glasses me-2"></i>Student View
//               </button>
//             </div>
//             <hr />
//           </div>
//         </div>
//       </div>

//       <h1>Courses {course.name} / {screen}</h1>
//       <hr />

//       <div className="courses-content">
//         <CourseNavigation />
//         <div
//           className="overflow-y-scroll position-fixed bottom-0 end-0"
//           style={{
//             left: "320px",
//             top: "50px",
//           }}
//         >
//           <Routes>
//             <Route path="/" element={<Navigate to="Home" />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Modules" element={<Modules />} />
//             <Route path="Assignments" element={<Assignments />} />
//             <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
//             <Route path="Grades" element={<Grades />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;


import ModuleList from "../Modules/ModuleList";


function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <h2>Home</h2>
            <ModuleList />
        </div>
        <div className="col-2">
            <h2>Status</h2>
        </div>
    </div>
  );
}
export default Home;