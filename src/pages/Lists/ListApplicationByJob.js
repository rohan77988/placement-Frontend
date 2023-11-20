import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal'; // Import Modal from react-modal
import '../../css/AListByJob.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const ListAllApplicationsByJob = ({ jobId }) => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false); // Add state for modal

    useEffect(() => {
        // Fetch the list of applications by job ID from your API
        axios.get(`/api/applications/job/${jobId}`)
            .then((response) => {
                console.log('Fetched applications:', response.data);
                setApplications(response.data.result);
                setLoading(false);
                setModalIsOpen(true); // Open the modal after data fetching
            })
            .catch((error) => {
                toast.error(`Error fetching applications: ${error}`);
                setLoading(false);
            });
    }, [jobId]);

    return (
        <div className="application-list-container">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel={`List of Applications for Job ${jobId}`}
            >
                {/* Modal Content */}
                <h2>List of Applications for Job {jobId}</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul className="application-list">
                        {Array.isArray(applications) && applications.map((application) => {
                            const student = application.student;
                            return (
                                <li key={application.id} className="application-item">
                                    <div className="application-detail">
                                        <p><strong>Email:</strong> {student.email || 'N/A'}</p>
                                        <p><strong>First Name:</strong> {student.firstName || 'N/A'}</p>
                                        <p><strong>Last Name:</strong> {student.lastName || 'N/A'}</p>
                                        <p><strong>PRN:</strong> {student.prn || 'N/A'}</p>
                                        <p><strong>Status:</strong> {application.status || 'N/A'}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>

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

export default ListAllApplicationsByJob;
