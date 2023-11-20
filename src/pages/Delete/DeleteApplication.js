// DeleteApplication.js

import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const deleteApplicationUrl = '/api/applications/';

const DeleteApplication = () => {
    const [applicationId, setApplicationId] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleDeleteApplication = () => {
        if (!applicationId) {
            toast.error('Please provide Application ID.');
            return;
        }

        setLoading(true);

        const deleteRequestBody = {
            organizationId: 'pcet',
            ids: [parseInt(applicationId)],
        };

        axios
            .delete(deleteApplicationUrl, { data: deleteRequestBody })
            .then(() => {
                toast.success('Application deleted successfully.');
                navigate('/listallapplication');
            })
            .catch((error) => {
                toast.error(`Error deleting application: ${error.response.data.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <h2>Delete Application</h2>
            <div>
                <label htmlFor="applicationId">Application ID:</label>
                <input
                    type="text"
                    id="applicationId"
                    value={applicationId}
                    onChange={(e) => setApplicationId(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleDeleteApplication} disabled={loading}>
                    Delete Application
                </button>
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

export default DeleteApplication;
