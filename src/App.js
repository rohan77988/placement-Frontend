import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Note the changes in the import statement
import Admin from './components/Admin';
import Students from './components/Student';
// import ListAllJobs from './components/ListAllJobs';
import RegisterStaff from './components/RegisterStaff';
import RegisterStudent from './components/RegisterStudent';
import LandingPage from "./components/LandingPage";
import CreateJob from "./pages/createJob"
import ListAllStudents from './pages/ListAllStudents';
import RegisterCompany from "./pages/RegisterCompany";
import ListAllJobs from "./pages/ListAllJobs";
import Apply from "./pages/Apply";
import ListAllApplication from "./pages/ListAllApplication";
import UpdateStatus from "./pages/UpdateStatus";
import UpdateCompany from "./pages/UpdateCompany";
import ListAllCompanies from "./pages/ListAllCompanies";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/register-student" element={<RegisterStudent />} />
                <Route path="/admin/register-staff" element={<RegisterStaff />} />
                <Route path="/admin/create-job" element={<CreateJob />} />
                <Route path="/listallstudents" element={<ListAllStudents />} /> {/* Add this route */}
                <Route path="/students" element={<Students />} />
                <Route path="/listalljobs" element={<ListAllJobs />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/listallapplication" element={<ListAllApplication />} />
                <Route path="/listallcompanies" element={<ListAllCompanies />} />
                <Route path="/updateStatus" element={<UpdateStatus />} />
                <Route path="/updateCompanyDetials" element={<UpdateCompany />} />
                <Route path="/registerstaff" element={<RegisterStaff />} />
                <Route path="/registerCompany" element={<RegisterCompany />} />
                <Route path="/registerstudent" element={<RegisterStudent />} />
                {/* Add routes for other pages */}
            </Routes>
        </Router>
    );
}

export default App;
