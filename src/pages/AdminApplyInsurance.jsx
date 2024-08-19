
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminApplyInsurance.css';
import AdminNavbar from '../components/AdminNavbar';

const AdminApplyInsurance = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get('http://localhost:8027/admin/applyInsurance');
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  const handleSelectApplication = (app) => {
    setSelectedApplication(app);
    setStatus(app.status);
  };

  const handleStatusChange = async () => {
    if (!selectedApplication) return;

    try {
      await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
        ...selectedApplication,
        status,
      });
      fetchApplications();
      setSelectedApplication(null);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="admin-manage-applications">
      <AdminNavbar />
      <h1>Manage Insurance Applications</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Insurance Date</th>
            <th>Policy Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.applyInsuranceId}>
              <td>{app.applyInsuranceId}</td>
              <td>{app.insuranceDate}</td>
              <td>{app.policyNumber}</td>
              <td>{app.status}</td>
              <td>
                <button onClick={() => handleSelectApplication(app)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedApplication && (
        <div>
          <h2>Edit Application Status</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Status:</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <button type="button" onClick={handleStatusChange}>Update Status</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminApplyInsurance;

