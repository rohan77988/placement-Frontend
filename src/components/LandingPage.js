import React from 'react';
import { Link } from 'react-router-dom';

const landingPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontSize: '24px', // Adjust the font size as needed
};

function LandingPage() {
    return (
        <div style={landingPageStyle}>
            <h1>Welcome to the Placement Management System</h1>
            <div>
                <Link to="/admin">Admin</Link>
                <span style={{ margin: '0 10px' }}>|</span>
                <Link to="/students">Students</Link>
            </div>
        </div>
    );
}

export default LandingPage;
