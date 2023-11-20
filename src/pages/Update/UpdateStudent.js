import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../css/UpdateStudent.css';

const updateStudentUrl = '/api/students/';

const UpdateStudent = () => {
    const [studentId, setStudentId] = useState('');
    const [userGroup, setUserGroup] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [prn, setPrn] = useState('');
    const [isBlocked, setIsBlocked] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUpdateStudent = () => {
        // Validate inputs
        if (!studentId) {
            toast.error('Please provide Student ID.');
            return;
        }

        // Construct the request payload
        const requestData = {
            organizationId: 'pcet',
            id: parseInt(studentId),
            userGroup,
            firstName,
            lastName,
            middleName,
            email,
            prn,
            isBlocked,
        };

        setLoading(true);

        // Send a PUT request to update the student
        axios
            .put(updateStudentUrl, [requestData])
            .then(() => {
                toast.success('Student updated successfully.');
                navigate('/listallstudents');
            })
            .catch((error) => {
                toast.error(`Error updating student: ${error.response.data.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="update-student-container">
            <h2>Update Student</h2>
            <div className="update-student-form">
                <div className="form-group">
                    <label htmlFor="studentId">Student ID:</label>
                    <input
                        type="text"
                        id="studentId"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
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
                    <label htmlFor="middleName">Middle Name:</label>
                    <input
                        type="text"
                        id="middleName"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
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
                    <label htmlFor="prn">PRN:</label>
                    <input
                        type="text"
                        id="prn"
                        value={prn}
                        onChange={(e) => setPrn(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="isBlocked">Is Blocked:</label>
                    <input
                        type="checkbox"
                        id="isBlocked"
                        checked={isBlocked}
                        onChange={(e) => setIsBlocked(e.target.checked)}
                    />
                </div>
                <div className="form-group">
                    <button onClick={handleUpdateStudent} disabled={loading}>
                        Update Student
                    </button>
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

export default UpdateStudent;
