import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; // Import the Modal component
import { toast, ToastContainer } from 'react-toastify';
import '../../css/StaffList.css';

const ListStaffUrl = '/api/staffs/';

const ListAllStaff = () => {
    const [staffList, setStaffList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        openModal();
        axios.get(ListStaffUrl)
            .then((response) => {
                setStaffList(response.data);
                setLoading(false);
                closeModal();
            })
            .catch((error) => {
                toast.error('Error fetching staff members:', error);
                setLoading(false);
                closeModal();
            });
    }, []);

    return (
        <div className="staff-list-container">
            <h2>List of All Staff Members</h2>
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
                <ul className="staff-list">
                    {staffList.map((staff) => (
                        <li key={staff.id} className="staff-item">
                            <h3 className="staff-name">{staff.firstName} {staff.lastName}</h3>
                            <p className="staff-email">Email: {staff.email}</p>
                            {/* Add other staff details */}
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

export default ListAllStaff;
