import React, { useState } from 'react';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../css/UpdateCompany.css';


const updateCompUrl = '/api/companies/';
const UpdateCompany = () => {
    const [companyId, setCompanyId] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyWebsiteLink, setCompanyWebsiteLink] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUpdateCompany = () => {
        if (!companyId) {
            toast.error('Please provide Company ID.');
            return;
        }

        const requestData = {
            organizationId: 'pcet',
            id: parseInt(companyId),
        };

        // Add fields to update if provided
        if (companyName) {
            requestData.name = companyName;
        }
        if (companyDescription) {
            requestData.description = companyDescription;
        }
        if (companyWebsiteLink) {
            requestData.websiteLink = companyWebsiteLink;
        }

        setLoading(true);

        axios
            .put(updateCompUrl, [requestData])
            .then(() => {
                toast.success('Company updated successfully.');
                navigate('/listallcompanies');
            })
            .catch((error) => {
                toast.error(`Error updating company: ${error.response.data.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="update-company-container">
            <div className="centered-form">
                <h2>Update Company</h2>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="companyId">Company ID:</label>
                        <input
                            type="text"
                            id="companyId"
                            value={companyId}
                            onChange={(e) => setCompanyId(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyDescription">Company Description:</label>
                        <textarea
                            id="companyDescription"
                            value={companyDescription}
                            onChange={(e) => setCompanyDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyWebsiteLink">Company Website Link:</label>
                        <input
                            type="text"
                            id="companyWebsiteLink"
                            value={companyWebsiteLink}
                            onChange={(e) => setCompanyWebsiteLink(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button onClick={handleUpdateCompany} disabled={loading}>
                            Update Company
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

export default UpdateCompany;
