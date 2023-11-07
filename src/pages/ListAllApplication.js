import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ListApplication.css';
import {toast, ToastContainer} from "react-toastify";

const listAllUrl = "/api/applications/";

const ListAllApplication = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllApplications = () => {
        // Fetch all applications from your API
        axios.get(listAllUrl)
            .then((response) => {
                setApplications(response.data);
                setLoading(false);
            })
            .catch((error) => {
                toast.error('Error fetching applications:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        // Fetch all applications by default
        fetchAllApplications();
    }, []);

    return (
        <div>
            <h2>List of Applications</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="applications-list">
                    {applications.map((application) => (
                        <li key={application.id} className="application-item">
                            <div className="application-header">
                                <h3>Application {application.id}</h3>
                                <p>Job ID: {application.job.id}</p>
                            </div>
                            <div className="application-details">
                                <p>Student: {application.student.firstName} {application.student.lastName} (ID: {application.student.id})</p>
                                <p>Company: {application.job.company.name} (ID: {application.job.company.id})</p>
                                <p>Job Type: {application.job.type}</p>
                                <p>Status: {application.status}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
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

export default ListAllApplication;
