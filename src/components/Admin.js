import React from 'react';
import {Link} from "react-router-dom";

function Admin() {
    return (
        <div>
            <h2>Welcome, Admin!</h2>
            <ul>
                <li>
                    <Link to="/admin/register-student">Register Student</Link>
                </li>
                <li>
                    <Link to="/admin/register-staff">Register Staff</Link>
                </li>
                <li>
                    <Link to="/registerCompany">Register Company</Link>
                </li>
                <li>
                    <Link to="/updateCompanyDetials">Update Company Details</Link>
                </li>
                <li>
                    <Link to="/admin/create-job">Create New Job</Link>
                </li>
                <li>
                    <Link to="/updateStatus">Update Status</Link>
                </li>
                {/* Add other bullet points */}
            </ul>
        </div>
    );
}

export default Admin;