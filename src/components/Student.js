import React from 'react';
import { Link } from 'react-router-dom';

function Students() {
    return (
        <div>
            <h2>Welcome, Students!</h2>
            <h3>&nbsp; Lists</h3>
            <ul>
                <li>
                    <Link to="/listallstudents">List All Students</Link>
                </li>
                <li>
                    <Link to="/listallcompanies">List All Companies</Link>
                </li>
                <li>
                    <Link to="/listalljobs">List All Jobs</Link>
                </li>
            </ul>
            <h3>&nbsp; Apply</h3>
            <ul>
                <li>
                    <Link to="/apply">Apply for Jobs</Link>
                </li>
                <li>
                    <Link to="/deleteapplication">Withdraw Application</Link>
                </li>
                <li>
                    <Link to="/listallapplication">List All Applications</Link>
                </li>
                {/* Add other apply-related links */}
            </ul>
        </div>
    );
}

export default Students;
