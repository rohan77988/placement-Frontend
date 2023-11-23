import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'; // Import the Modal component
import { toast, ToastContainer } from 'react-toastify';
import '../../css/JobList.css';

const ListJobsUrl = '/api/job/';

const ListJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        openModal();
        axios.get(ListJobsUrl)
            .then((response) => {
                setJobs(response.data);
                setLoading(false);
                closeModal();
            })
            .catch((error) => {
                toast.error('Error fetching jobs:', error);
                setLoading(false);
                closeModal();
            });
    }, []);

    return (
        <div className="job-list-container">
            <h2>List of All Jobs</h2>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Loading Modal"
                className="loading-modal" // Apply the custom class
                overlayClassName="loading-overlay" // Apply the overlay class
            >
                <p>Loading...</p>
            </Modal>
            {!loading ? (
                <ul className="job-list">
                    {jobs.map((job) => (
                        <li key={job.id} className="job-item">
                            <h3 className="job-title">{job.title}</h3>
                            <p className="job-description">Description: {job.description}</p>
                            <p className="job-type">Type: {job.type}</p>
                            <p className="job-location">Location: {job.location}</p>
                            <p className="job-company-id">Company ID: {job.companyId}</p>
                            <p className="job-salary">Salary: {job.totalSalary}</p>
                            <div className="apply-button-container">
                                <Link to={`/apply`} className="apply-button">Apply</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : null}
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

export default ListJobs;
