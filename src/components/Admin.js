import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
    return (
        <div>
            <h2>Welcome, Admin!</h2>
            <h3>&nbsp; Staff</h3>
            <ul>
                <li>
                    <Link to="/admin/register-staff">Register Staff</Link>
                </li>
                <li>
                    <Link to="/admin/updatestaff">Update Staff Details</Link>
                </li>
                <li>
                    <Link to="/admin/liststaff">List Staff</Link>
                </li>
                {/* Add other staff-related links */}
            </ul>
            <h3>&nbsp; Student</h3>
            <ul>
                <li>
                    <Link to="/admin/register-student">Register Student</Link>
                </li>
                <li>
                    <Link to="/admin/updatestudent">Update Student Details</Link>
                </li>
                <li>
                    <Link to="/listallstudents">List all students</Link>
                </li>
                {/* Add other student-related links */}
            </ul>
            <h3>&nbsp; Company</h3>
            <ul>
                <li>
                    <Link to="/admin/registerCompany">Register Company</Link>
                </li>
                <li>
                    <Link to="/admin/updateCompanyDetials">Update Company Details</Link>
                </li>
                <li>
                    <Link to="/listallcompanies">List all Companies</Link>
                </li>
                {/* Add other company-related links */}
            </ul>
            <h3>&nbsp; Job</h3>
            <ul>
                <li>
                    <Link to="/listalljobs">List all jobs</Link>
                </li>
                <li>
                    <Link to="/admin/create-job">Create New Job</Link>
                </li>
                <li>
                    <Link to="/admin/updatejob">Update Job</Link>
                </li>
                <li>
                    <Link to="/admin/deletejob">Delete Job</Link>

                </li>
                <li>
                    <Link to="/admin/updateStatus">Update Job Application Status</Link>
                </li>
                {/* Add other job-related links */}
            </ul>

            <h3>&nbsp; Applications</h3>
            <ul>
                <li>
                    <Link to="/listallapplication">All Applications</Link>
                </li>
                <li>
                    <Link to="/admin/listallapplication/jobUI">Application by Job</Link>
                </li>
                {/* Add other company-related links */}
            </ul>
        </div>
    );
}

export default Admin;
