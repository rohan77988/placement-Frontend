import React, { useState } from 'react';
import axios from 'axios';
import "../css/RegisterStudent.css";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";


const createJobUrl = '/api/job/';
const CreateJob = () => {
    const navigate = useNavigate();
    const [jobData, setJobData] = useState({
        organizationId: 'pcet',
        arn: '',
        title: '',
        description: '',
        companyId: null,
        location: '',
        type: 'FULL_TIME',
        requirements: [],
        totalSalary: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission and API request to create a job
        axios.post(createJobUrl, jobData)
            .then((response) => {
                // Handle a successful job creation (you may need to customize this)
                if (response.status >= 200 && response.status < 300) {
                    // Redirect to the home page or show a success message
                    navigate('/admin');
                } else {
                    // Handle other cases here
                    toast.error('Creating Job failed. Please check your credentials.');
                }
            })
            .catch((error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    toast.error('Login failed. Please check your credentials', {
                        position: 'top-right',
                        autoClose: 3000,
                    });
                } else {
                    toast.error('Sorry! Backend Server is down');
                }
            });
    };

    return (
        <div className="form-container">
            <div className="form">
        <div className="create-job">
            <h2>Create Job</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="arn">ARN:</label>
                    <input
                        type="text"
                        id="arn"
                        value={jobData.arn}
                        onChange={(e) => setJobData({ ...jobData, arn: e.target.value })}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={jobData.title}
                        onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={jobData.description}
                        onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="companyId">Company ID:</label>
                    <input
                        type="number"
                        id="companyId"
                        value={jobData.companyId}
                        onChange={(e) => setJobData({ ...jobData, companyId: parseInt(e.target.value) })}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={jobData.location}
                        onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="type">Type:</label>
                    <select
                        id="type"
                        value={jobData.type}
                        onChange={(e) => setJobData({ ...jobData, type: e.target.value })}
                    >
                        <option value="FULL_TIME">Full Time</option>
                        <option value="INTERNSHIP">Internship</option>
                    </select>
                </div>
                <div className="input-field">
                    <label htmlFor="requirements">Requirements:</label>
                    <input
                        type="text"
                        id="requirements"
                        value={jobData.requirements.join(', ')}
                        onChange={(e) => setJobData({ ...jobData, requirements: e.target.value.split(', ') })}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="totalSalary">Total Salary:</label>
                    <input
                        type="number"
                        id="totalSalary"
                        value={jobData.totalSalary}
                        onChange={(e) => setJobData({ ...jobData, totalSalary: parseInt(e.target.value) })}
                    />
                </div>
                <button type="submit" className="button">
                    Create Job
                </button>
            </form>
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
            </div>
        </div>
    );
};

export default CreateJob;
