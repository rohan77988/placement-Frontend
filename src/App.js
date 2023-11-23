import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Note the changes in the import statement
import Admin from './components/Admin';
import Students from './components/Student';
// import ListJobs from './components/ListJobs';
import RegisterStaff from './pages/Register/RegisterStaff';
import RegisterStudent from './pages/Register/RegisterStudent';
import LandingPage from "./components/LandingPage";
import CreateJob from "./pages/Register/createJob"
import ListStudents from './pages/Lists/ListStudents';
import RegisterCompany from "./pages/Register/RegisterCompany";
import ListJobs from "./pages/Lists/ListJobs";
import Apply from "./pages/Register/Apply";
import ListApplication from "./pages/Lists/ListApplication";
import UpdateStatus from "./pages/Update/UpdateStatus";
import UpdateCompany from "./pages/Update/UpdateCompany";
import ListCompanies from "./pages/Lists/ListCompanies";
import DeleteJob from "./pages/Delete/deleteJob";
import UpdateJob from "./pages/Update/UpdateJob";
import UpdateStudent from "./pages/Update/UpdateStudent";
import UpdateStaff from "./pages/Update/UpdateStaff";
import DeleteApplication from "./pages/Delete/DeleteApplication";
import ListStaff from "./pages/Lists/ListStaff";
import ListApplicationByJob from "./pages/Lists/ListApplicationByJob";
import ListApplicationsByJobUI from "./pages/Lists/ListApplicationsByJobUI";
import Login from "./pages/Auth/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />


                <Route path="/" element={<LandingPage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/register-student" element={<RegisterStudent />} />
                <Route path="/admin/register-staff" element={<RegisterStaff />} />
                <Route path="/admin/create-job" element={<CreateJob />} />
                <Route path="/listallstudents" element={<ListStudents />} /> {/* Add this route */}
                <Route path="/admin/updatestudent" element={<UpdateStudent />} /> {/* Add this route */}
                <Route path="/students" element={<Students />} />
                <Route path="/listalljobs" element={<ListJobs />} />
                <Route path="/admin/deletejob" element={<DeleteJob />} />
                <Route path="/admin/updatejob" element={<UpdateJob />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/listallapplication" element={<ListApplication />} />
                <Route path="/admin/listallapplication/job" element={<ListApplicationByJob />} />
                <Route path="/admin/listallapplication/jobUI" element={<ListApplicationsByJobUI />} />

                <Route path="/admin/deleteapplication" element={<DeleteApplication />} />
                <Route path="/listallcompanies" element={<ListCompanies />} />
                <Route path="/admin/updateStatus" element={<UpdateStatus />} />
                <Route path="/admin/updateCompanyDetials" element={<UpdateCompany />} />
                <Route path="/admin/registerstaff" element={<RegisterStaff />} />
                <Route path="/admin/updatestaff" element={<UpdateStaff />} />
                <Route path="/admin/liststaff" element={<ListStaff />} />
                <Route path="/admin/registerCompany" element={<RegisterCompany />} />
                <Route path="/admin/registerstudent" element={<RegisterStudent />} />

                {/* Add routes for other pages */}
            </Routes>
        </Router>
    );
}

export default App;
