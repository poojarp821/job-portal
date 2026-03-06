// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { getJobs } from "../services/jobService";

// // function Home() {
// //   const [jobs, setJobs] = useState([]);

// //   useEffect(() => {
// //     // Fetch jobs from backend
// //     getJobs().then((res) => setJobs(res.data));
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Job Openings</h1>

// //       {jobs.length === 0 ? (
// //         <p>No jobs available</p>
// //       ) : (
// //         jobs.map((job) => (
// //           <div
// //             key={job.id}
// //             style={{
// //               border: "1px solid #ccc",
// //               padding: "15px",
// //               marginBottom: "10px",
// //               borderRadius: "5px",
// //             }}
// //           >
// //             <h2>{job.title}</h2>
// //             <p>Location: {job.location}</p>

// //             {/* Apply Button */}
// //             <Link
// //               to={`/apply?jobId=${job.id}`}
// //               style={{
// //                 display: "inline-block",
// //                 padding: "10px 20px",
// //                 backgroundColor: "#4CAF50",
// //                 color: "white",
// //                 textDecoration: "none",
// //                 borderRadius: "5px",
// //               }}
// //             >
// //               Apply
// //             </Link>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // export default Home;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../services/jobService";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from backend
    getJobs().then((res) => setJobs(res.data));
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Job Openings</h1>

      {/* Link to Applications page */}
      <Link
        to="/applications"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#2196F3",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        View All Applications
      </Link>

      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h2>{job.title}</h2>
            <p>Location: {job.location}</p>

            {/* Apply Button */}
            <Link
              to={`/apply?jobId=${job.id}`}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Apply
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;

// import React, { useEffect, useState } from "react";
// import JobCard from "../pages/JobCard";
// import axios from "axios";

// function Home() {

//   const [jobs, setJobs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const jobsPerPage = 5;

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/jobs/")
//       .then(res => setJobs(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   // search filter
//   const filteredJobs = jobs.filter(job =>
//     job.title.toLowerCase().includes(search.toLowerCase())
//   );

//   // pagination
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

//   return (
//     <div style={{padding:"20px"}}>

//       <h1>Job Portal</h1>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search jobs..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Job List */}
//       {currentJobs.map(job => (
//         <JobCard key={job.id} job={job}/>
//       ))}

//       {/* Pagination */}
//       <div>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentPage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Home;