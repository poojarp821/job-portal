// src/pages/Applications.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch all applications from backend
    axios.get("http://127.0.0.1:8000/api/applications/")
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Job Applications</h1>

      {applications.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        applications.map((application) => (
          <div
            key={application.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <p><strong>Name:</strong> {application.name}</p>
            <p><strong>Email:</strong> {application.email}</p>
            <p><strong>Job:</strong> {application.job_title || application.job}</p>
            <p><strong>Applied At:</strong> {new Date(application.applied_at).toLocaleString()}</p>

            {/* Download Resume Link */}
            <a
              href={`http://127.0.0.1:8000${application.resume}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Download Resume
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default Applications;