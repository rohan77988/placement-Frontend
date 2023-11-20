// ListApplicationsByJobUI.js
import React, { useState } from 'react';
import '../../css/AListByJobUI.css';
import ListApplicationByJob from "./ListApplicationByJob";

const ListApplicationsByJobUI = () => {
    const [jobId, setJobId] = useState('');
    const [showApplications, setShowApplications] = useState(false);

    const handleFetchApplications = () => {
        setShowApplications(true);
    };

    return (
        <div className="list-applications-by-job-container">
            <h2>List Applications by Job</h2>
            <div className="input-container">
                <label htmlFor="jobIdInput">Enter Job ID:</label>
                <input
                    type="text"
                    id="jobIdInput"
                    value={jobId}
                    onChange={(e) => setJobId(e.target.value)}
                />
                <button onClick={handleFetchApplications}>Fetch Applications</button>
            </div>
            {showApplications && <ListApplicationByJob jobId={jobId} />}
        </div>
    );
};

export default ListApplicationsByJobUI;
