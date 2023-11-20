import React, { useState } from 'react';
import axios from 'axios';
import "../../css/RegisterStudent.css";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
const createCompUrl = '/api/companies/';
const RegisterCompany = () => {
    const navigate = useNavigate();
    const [companyData, setCompanyData] = useState({
        organizationId: 'pcet',
        arn: '',
        name: '',
        description: '',
        websiteLink: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(createCompUrl, [companyData])
            .then((response) => {
                // Check for a successful response (you can customize this based on your server's response)
                if (response.status >= 200 && response.status < 300) {
                    // Redirect to the home page or show a success message
                    navigate('/admin');
                } else {
                    // Handle other cases here
                    toast.error('Error creating company');
                }
            })
            .catch((error) => {
                if (error.response.status) {
                    toast.error('Registration failed. Please check your credentials', {
                    });
                }
            });
    };

    return (
        <div className="form-container">
            <div className="form">
        <div>
            <h2>Create Company</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="arn">ARN:</label>
                    <input
                        type="text"
                        id="arn"
                        value={companyData.arn}
                        onChange={(e) => setCompanyData({ ...companyData, arn: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={companyData.name}
                        onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={companyData.description}
                        onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="websiteLink">Website Link:</label>
                    <input
                        type="text"
                        id="websiteLink"
                        value={companyData.websiteLink}
                        onChange={(e) => setCompanyData({ ...companyData, websiteLink: e.target.value })}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
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
            </div>
        </div>
    );
};

export default RegisterCompany;
