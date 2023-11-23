import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal'; // Import the Modal component
import '../../css/CompanyList.css';

const ListCompaniesUrl = '/api/companies/';

const ListCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        openModal();
        axios.get(ListCompaniesUrl)
            .then((response) => {
                setCompanies(response.data);
                setLoading(false);
                closeModal();
            })
            .catch((error) => {
                toast.error('Error fetching companies:', error);
                setLoading(false);
                closeModal();
            });
    }, []);

    return (
        <div>
            <h2>List of All Companies</h2>
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
            ) : null}
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
