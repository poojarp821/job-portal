// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { applyJob } from "../services/jobService";

// function ApplyJob() {
//   const location = useLocation();
//   const jobIdFromURL = new URLSearchParams(location.search).get("jobId");

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     resume: null, // file will be stored here
//     job: jobIdFromURL || "",
//   });


//   useEffect(() => {
//     setForm((prev) => ({ ...prev, job: jobIdFromURL || "" }));
//   }, [jobIdFromURL]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare FormData for file upload
//     const data = new FormData();
//     data.append("name", form.name);
//     data.append("email", form.email);
//     data.append("resume", form.resume);
//     data.append("job", form.job);

//     try {
//       await applyJob(data); // send to backend
//       alert("Application Submitted!");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to submit application");
//     }
//   };

//   return (
//     <div>
//       <h2>Apply for Job</h2>

//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input
//           placeholder="Name"
//           required
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />

//         <input
//           placeholder="Email"
//           type="email"
//           required
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />

//         <input
//           type="file"
//           required
//           onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
//         />

//         <input
//           placeholder="Job ID"
//           value={form.job}
//           readOnly
//           style={{ backgroundColor: "#f0f0f0" }}
//         />

//         <button type="submit">Apply</button>
//       </form>
//     </div>
//   );
// }

// export default ApplyJob;

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { applyJob } from "../services/jobService";

function ApplyJob() {
  const location = useLocation();
  const navigate = useNavigate();
  const jobIdFromURL = new URLSearchParams(location.search).get("jobId");

  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: null, // file object
    job: jobIdFromURL ? parseInt(jobIdFromURL) : "", // convert to number
  });

  useEffect(() => {
    if (jobIdFromURL) {
      setForm((prev) => ({ ...prev, job: parseInt(jobIdFromURL) }));
    }
  }, [jobIdFromURL]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.job) {
      alert("Invalid Job ID! Cannot submit application.");
      return;
    }

    // Prepare FormData for file upload
    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("resume", form.resume); // must be File object
    data.append("job", form.job);       // must be a valid Job ID

    // Debug: print FormData to console
    console.log("Submitting FormData:");
    for (let pair of data.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      await applyJob(data); // send to backend
      alert("Application Submitted!");
      navigate("/"); // optional: redirect to home page
    } catch (err) {
      console.error("Submission error:", err.response ? err.response.data : err);
      alert("Failed to submit application");
    }
  };

  return (
    <div>
      <h2>Apply for Job</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          placeholder="Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="file"
          required
          onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
        />

        <input
          placeholder="Job ID"
          value={form.job}
          readOnly
          style={{ backgroundColor: "#f0f0f0" }}
        />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default ApplyJob;