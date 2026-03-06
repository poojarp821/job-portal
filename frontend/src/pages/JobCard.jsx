import React from "react";

function JobCard({ job }) {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h2>{job.title}</h2>
      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>
      <p>{job.description}</p>
      <button>Apply</button>
    </div>
  );
}

export default JobCard;