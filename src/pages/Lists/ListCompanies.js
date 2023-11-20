import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "../../css/CompanyList.css";

const ListCompaniesUrl = '/api/companies/';

const ListCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(ListCompaniesUrl)
            .then((response) => {
                setCompanies(response.data);
                setLoading(false);
            })
            .catch((error) => {
                toast.error('Error fetching companies:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>List of All Companies</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {companies.map((company) => (
                        <li key={company.id}>
                            <h3>{company.name}</h3>
                            <p>ARN: {company.arn}</p>
                            <p>Description: {company.description}</p>
                            <p>Website: <a href={company.websiteLink} target="_blank" rel="noreferrer">{company.websiteLink}</a></p>
                        </li>
                    ))}
                </ul>
            )}
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

export default ListCompanies;
