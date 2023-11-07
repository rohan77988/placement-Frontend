import React from 'react';
import {Link} from "react-router-dom";

function Students() {
    return (
        <div>
            <h2>Welcome, Students!</h2>
            <ul>
                <li>
                    <Link to="/listallstudents">List All Students</Link>
                </li>
                <li><Link to="/listallcompanies">List All Companies</Link>
                </li>
                <li><Link to="/listalljobs">List All Jobs</Link>
                </li>
                <li><Link to="/apply">Apply for Jobs</Link>
                </li>
            <li><Link to="/listallapplication">List All Application</Link>
            </li>
                {/* Add other bullet points */}
            </ul>
        </div>
    );
}

export default Students;
