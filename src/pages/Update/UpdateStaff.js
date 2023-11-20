import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../css/UpdateStaff.css';

const updateStaffUrl = '/api/staffs/';

const UpdateStaff = () => {
    const [staffId, setStaffId] = useState('');
    const [userGroup, setUserGroup] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUpdateStaff = () => {
        if (!staffId) {
            toast.error('Please provide Staff ID.');
            return;
        }

        const requestData = {
            organizationId: 'pcet',
            id: parseInt(staffId),
            userGroup,
            firstName,
            lastName,
            email,
        };

        setLoading(true);

        axios
            .put(updateStaffUrl, [requestData])
            .then(() => {
                toast.success('Staff updated successfully.');
                navigate('/listallstaffs');
            })
            .catch((error) => {
                toast.error(`Error updating staff: ${error.response.data.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="update-staff-container">
            <div className="centered-form">
                <h2>Update Staff</h2>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="staffId">Staff ID:</label>
                        <input
                            type="text"
                            id="staffId"
                            value={staffId}
                            onChange={(e) => setStaffId(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userGroup">User Group:</label>
                        <input
                            type="text"
                            id="userGroup"
                            value={userGroup}
                            onChange={(e) => setUserGroup(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button onClick={handleUpdateStaff} disabled={loading}>
                            Update Staff
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

export default UpdateStaff;
