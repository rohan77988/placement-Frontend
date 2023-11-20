import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/RegisterStudent.css'; // Import the CSS file
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const RegisterStaffURL = '/api/staffs/';
function RegisterStaff() {
    const  navigate = useNavigate();
    const [studentData, setStudentData] = useState({
        organizationId: 'pcet',
        userGroup: '',
        firstName: '',
        lastName: '',
        email: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and API request to register a student
        const studentDataArray = [studentData];

        axios
            .post(RegisterStaffURL, studentDataArray)
            .then((response) => {
                // Check for a successful response (you can customize this based on your server's response)
                if (response.status >= 200 && response.status < 300) {
                    // Redirect to the home page or show a success message
                    navigate('/');
                } else {
                    // Handle other cases here
                    toast.error('Login failed. Please check your credentials.');
                }
            })
            .catch((error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    toast.error('Login failed. Please check your credentials', {
                        position: 'top-right',
                        autoClose: 3000,
                    });
                } else {
                    toast.error('Sorry! Backend Server is down');
                }
            });
    };

    return (
        <div className="form-container">
            <div className="form">
                <h2>Register Student</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="userGroup">User Group:</label>
                        <input
                            type="text"
                            id="userGroup"
                            value={studentData.userGroup}
                            onChange={(e) => setStudentData({ ...studentData, userGroup: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={studentData.firstName}
                            onChange={(e) => setStudentData({ ...studentData, firstName: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={studentData.lastName}
                            onChange={(e) => setStudentData({ ...studentData, lastName: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            value={studentData.email}
                            onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="button">
                        Register
                    </button>
                </form>
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
        </div>
    );
}

export default RegisterStaff;
