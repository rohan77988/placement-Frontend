import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../css/DeleteJob.css';

const updateJobUrl = '/api/job/';

const UpdateJob = () => {
    const [jobId, setJobId] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch job details based on jobId
        if (jobId) {
            axios.put(`${updateJobUrl}${jobId}`)
                .then((response) => {
                    // Update state with fetched data
                    setNewTitle(response.data.title);
                    setNewDescription(response.data.description);
                })
                .catch((error) => {
                    console.error('Error fetching job details:', error);
                });
        }
    }, [jobId]);

    const handleUpdateJob = () => {
        if (!jobId || !newTitle || !newDescription) {
            toast.error('Please provide Job ID, Title, and Description.');
            return;
        }

        const requestData = {
            organizationId: 'pcet',
            id: parseInt(jobId),
            title: newTitle,
            description: newDescription,
        };

        setLoading(true);

        axios
            .put(updateJobUrl, requestData)
            .then(() => {
                toast.success('Job updated successfully.');
                navigate('/listalljobs');
            })
            .catch((error) => {
                toast.error(`Error updating job: ${error.response.data.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="delete-job-container">
            <div className="centered-form">
                <h2>Update Job</h2>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="jobId">Job ID:</label>
                        <input
                            type="text"
                            id="jobId"
                            value={jobId}
                            onChange={(e) => setJobId(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newTitle">New Title:</label>
                        <input
                            type="text"
                            id="newTitle"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newDescription">New Description:</label>
                        <textarea
                            id="newDescription"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button onClick={handleUpdateJob} disabled={loading}>
                            Update Job
                        </button>
                    </div>
                </div>
            </div>
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

export default UpdateJob;
