import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import "../../css/UpdateStatus.css"

const updateStatusUrl = '/api/applications/status';
const UpdateStatus = () => {
    const [applicationId, setApplicationId] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [loading, setLoading] = useState(false);
const navigate = useNavigate();
    const handleUpdateStatus = () => {
        // Validate inputs
        if (!applicationId || !newStatus) {
            toast.error('Please provide Application ID and New Status.');
            return;
        }

        // Construct the request payload
        const requestData = {
            organizationId: 'pcet',
            id: parseInt(applicationId),
            status: newStatus,
        };

        setLoading(true);

        // Send a POST request to update the status
        axios
            .put(updateStatusUrl, requestData)
            .then((response) => {
                toast.success('Status updated successfully.');
                navigate('/listallapplication');
            })
            .catch((error) => {
                toast.error(`Error updating status: ${error.response.data.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="update-status-container">
            <div className="centered-form">
                <h2>Update Application Status</h2>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="applicationId">Application ID:</label>
                        <input
                            type="text"
                            id="applicationId"
                            value={applicationId}
                            onChange={(e) => setApplicationId(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newStatus">New Status:</label>
                        <select
                            id="newStatus"
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="REVIEW_PENDING">Review Pending</option>
                            <option value="UNDER_EVALUATION">Under Evaluation</option>
                            <option value="EXPIRED">Expired</option>
                            <option value="OFFERED">Offered</option>
                            <option value="BLOCKED">Blocked</option>
                            <option value="REVOKED">Revoked</option>
                            <option value="REJECTED">Rejected</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button onClick={handleUpdateStatus} disabled={loading}>
                            Update Status
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

export default UpdateStatus;
