import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/StudentList.css'; // Import the CSS file for styling

const ListAllStudents = () => {
    const [students, setStudents] = useState([]);
    const listAllStudentUrl = '/api/students/';
    useEffect(() => {
        // Fetch the list of all students from your API
        axios.get(listAllStudentUrl).then((response) => {
            setStudents(response.data);
        });
    }, []);

    return (
        <div className="student-list">
            <h2>All Students</h2>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                    {/* Add more table headings as needed */}
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.company}</td>
                        {/* Add more table cells as needed */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListAllStudents;
