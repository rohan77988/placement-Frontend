import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/StaffList.css';

const ListStaffUrl = '/api/staffs/';

const ListAllStaff = () => {
    const [staffList, setStaffList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the list of all staff members from your API
        axios.get(ListStaffUrl)
            .then((response) => {
                setStaffList(response.data);
                setLoading(false);
            })
            .catch((error) => {
                toast.error('Error fetching staff members:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="staff-list-container">
            <h2>List of All Staff Members</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="staff-list">
                    {staffList.map((staff) => (
                        <li key={staff.id} className="staff-item">
                            <h3 className="staff-name">{staff.firstName} {staff.lastName}</h3>
                            <p className="staff-email">Email: {staff.email}</p>
                            {/* Add other staff details */}
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

export default ListAllStaff;
