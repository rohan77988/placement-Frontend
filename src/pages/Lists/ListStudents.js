import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; // Import the Modal component
import '../../css/StudentList.css'; // Import the CSS file for styling

const ListStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const listAllStudentUrl = '/api/students/';
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        openModal();
        axios.get(listAllStudentUrl).then((response) => {
            setStudents(response.data);
            setLoading(false);
            closeModal();
        });
    }, []);

    return (
        <div className="student-list">
            <h2>All Students</h2>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Loading Modal"
                className="loading-modal" // Apply the custom class
                overlayClassName="loading-overlay" // Apply the overlay class
            >
                <p>Loading...</p>
            </Modal>
            {!loading ? (
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
                            <td>{Array.from(new Set(student.offeredJobs.map(offer => offer.company.name))).join(", ")}</td>
                            {/* Add more table cells as needed */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : null}
        </div>
    );
};

export default ListStudents;
