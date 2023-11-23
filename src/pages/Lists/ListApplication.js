import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import '../../css/ListApplication.css';
import { toast, ToastContainer } from 'react-toastify';

const listAllUrl = "/api/applications/";

const ListApplication = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const fetchAllApplications = () => {
        openModal();
        axios.get(listAllUrl)
            .then((response) => {
                setApplications(response.data);
                setLoading(false);
                closeModal();
            })
            .catch((error) => {
                toast.error('Error fetching applications:', error);
                setLoading(false);
                closeModal();
            });
    };

    useEffect(() => {
        fetchAllApplications();
    }, []);

    return (
        <div>
            <h2>List of Applications</h2>
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
            ) : null}
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

export default ListApplication;
