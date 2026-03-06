import { useState } from "react";
import { createJob } from "../services/jobService";

function PostJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const submitJob = async () => {
    await createJob({
      title,
      company,
      description,
    });

    alert("Job Posted!");
  };

  return (
    <div>
      <h1>Post Job</h1>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
      />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={submitJob}>Post Job</button>
    </div>
  );
}

export default PostJob;