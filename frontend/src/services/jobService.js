// import API from "./api";

// export const getJobs = () => API.get("jobs/");


// export const createJob = (data) => API.post("jobs/", data);

// export const applyJob = (data) => API.post("applications/", data);
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // change to your Django backend URL
});

// Fetch all jobs
export const getJobs = () => API.get("jobs/");

// Create a new job (admin)
export const createJob = (data) => API.post("jobs/", data);

// Apply for a job (supports FormData with file upload)
export const applyJob = (data) => {
  return API.post("applications/", data, {
    headers: {
      "Content-Type": "multipart/form-data", // important for files
    },
  });
};