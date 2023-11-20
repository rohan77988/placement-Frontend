import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../css/DeleteJob.css' // Import your CSS file

const deleteJobUrl = '/api/job/';

const DeleteJob = () => {
    const [jobId, setJobId] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleDeleteJob = () => {
        if (!jobId) {
            toast.error('Please provide Job ID.');
            return;
        }

        setLoading(true);

        axios
            .delete(`${deleteJobUrl}${jobId}`)
            .then(() => {
                toast.success('Job deleted successfully.');
                navigate('/listalljobs');
            })
            .catch((error) => {
                toast.error(`Error deleting job: ${error.response.data.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="delete-job-container"> {/* Add this container class */}
            <div className="centered-form">
                <h2>Delete Job</h2>
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
                        <button onClick={handleDeleteJob} disabled={loading}>
                            Delete Job
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

export default DeleteJob;
