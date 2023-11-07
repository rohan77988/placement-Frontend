import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { toast, ToastContainer } from 'react-toastify';
import '../css/JobList.css';

const ListJobsUrl = '/api/job/';
const ListAllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the list of all jobs from your API
        axios.get(ListJobsUrl)
            .then((response) => {
                setJobs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                toast.error('Error fetching jobs:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="job-list-container">
            <h2>List of All Jobs</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="job-list">
                    {jobs.map((job) => (
                        <li key={job.id} className="job-item">
                            <h3 className="job-title">{job.title}</h3>
                            <p className="job-description">Description: {job.description}</p>
                            <p className="job-type">Type: {job.type}</p>
                            <p className="job-location">Location: {job.location}</p>
                            <p className="job-company-id">Company ID: {job.companyId}</p>
                            <p className="job-salary">Salary: {job.totalSalary}</p>
                            {/* Add an "Apply" button that links to the Apply page */}
                            <div className="apply-button-container">
                                <Link to={`/apply`} className="apply-button">Apply</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ListAllJobs;
