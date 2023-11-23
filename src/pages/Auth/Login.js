import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/Login.css';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const hardcodedUsers = [
        { email: 'rohan@pccoepune.org', password: 'Rr@12345' },
        { email: 'rucha@pccoepune.org', password: 'Rr@12345' },
        { email: 'suraj@pccoepune.org', password: 'Ss@12345' },
        { email: 'siddhesh@pccoepune.org', password: 'Ss@12345' },
        // Add more users as needed
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const isValidUser = () => {
        // Check if the provided email and password match any hardcoded user
        return hardcodedUsers.some(
            (user) => user.email === formData.email && user.password === formData.password
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidUser()) {
            toast.error('Invalid email or password');
            return;
        }
        else{
            // Dummy login successful, redirect to home
            toast.success('Logged in successfully');
            navigate('/students');
        }

    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Login</button>
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
    );
};

export default Login;
