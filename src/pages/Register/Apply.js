import React, { useState } from 'react';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';
import '../../css/Application.css';


const applyUrl = '/api/applications/';
const Apply = () => {
    const { jobId } = useParams(); // Get the jobId from the URL params
    const [formData, setFormData] = useState({
        organizationId: 'pcet',
        arn: '',
        jobId: '', // Use the jobId from the URL
        studentId: '', // You may fetch the studentId from your authentication system
    });
const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission and API request to submit the job application
        axios.post(applyUrl, formData)
            .then((response) => {
                // Handle a successful application submission
                toast.success('Application submitted successfully');
                navigate('/listallapplication');
            })
            .catch((error) => {
                // Handle error cases here (e.g., validation errors)
                toast.error('Application submission failed:', error.response.data);
            });
    };

    return (
        <div className="apply-container">
            <h2>Apply for Job</h2>
            <form onSubmit={handleSubmit} className="apply-form">
                <div className="input-field">
                    <label htmlFor="arn">ARN:</label>
                    <input
                        type="text"
                        id="arn"
                        value={formData.arn}
                        onChange={(e) => setFormData({ ...formData, arn: e.target.value })}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="jobId">Job ID:</label>
                    <input
                        type="number"
                        id="jobId"
                        value={formData.jobId}
                        onChange={(e) => setFormData({ ...formData, jobId: e.target.value })}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="studentId">Student ID:</label>
                    <input
                        type="number"
                        id="studentId"
                        value={formData.studentId}
                        onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    />
                </div>
                <button type="submit" className="apply-button">
                    Submit Application
                </button>
            </form>
            <ToastContainer
                position="top-right"
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

export default Apply;
