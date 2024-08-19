

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/RiskScore.css'; // Ensure this CSS file is created
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import AdminNavbar from '../components/AdminNavbar';

const RiskScore = () => {
  const [applicants, setApplicants] = useState([]);
  const [applyInsurances, setApplyInsurances] = useState([]);
  const [selectedApplicantId, setSelectedApplicantId] = useState('');
  const [selectedApplyInsuranceId, setSelectedApplyInsuranceId] = useState('');
  const [risks, setRisks] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch applicants and apply insurance data
        const applicantsResponse = await axios.get('http://localhost:8027/applicant/all');
        setApplicants(applicantsResponse.data);

        const applyInsurancesResponse = await axios.get('http://localhost:8027/applyInsurance/all');
        setApplyInsurances(applyInsurancesResponse.data);

        // Fetch all risks
        const risksResponse = await axios.get('http://localhost:8027/risk/all');
        setRisks(risksResponse.data);

        setError('');
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCalculateRisk = async () => {
    if (!selectedApplicantId || !selectedApplyInsuranceId) {
      setError('Both Applicant and Apply Insurance selections are required.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8027/risk/calculate/${selectedApplicantId}/${selectedApplyInsuranceId}`
      );

      if (Array.isArray(response.data)) {
        setRisks(response.data); // Update risks with the latest data
      } else {
        setError('Unexpected response format.');
      }

      setError('');
    } catch (error) {
      console.error('Error calculating risk score:', error);
      setError('Error calculating risk score.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRisk = async (riskId) => {
    if (!riskId) {
      console.error('Invalid risk ID');
      setError('Invalid risk ID.');
      return;
    }

    setLoading(true);
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        const response = await axios.delete(`http://localhost:8027/risk/${riskId}`);

        if (response.data === 'Success') {
          setRisks(risks.filter(risk => risk.riskId !== riskId));
          await Swal.fire('Deleted!', 'The risk has been deleted.', 'success');
        } else {
          throw new Error('Failed to delete the risk');
        }
      }
    } catch (error) {
      console.error('Error deleting risk:', error);
      setError('Error deleting risk.');
      await Swal.fire('Error!', 'There was an error deleting the risk.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calculate-risk-score">
        <AdminNavbar/>
      <h1>Calculate Risk Score</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="applicantSelect">Select Applicant:</label>
          <select
            id="applicantSelect"
            value={selectedApplicantId}
            onChange={(e) => setSelectedApplicantId(e.target.value)}
            disabled={loading}
          >
            <option value="">Select an Applicant</option>
            {applicants.map((applicant) => (
              <option key={applicant.id} value={applicant.id}>
                {applicant.applicantId}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="applyInsuranceSelect">Select Apply Insurance:</label>
          <select
            id="applyInsuranceSelect"
            value={selectedApplyInsuranceId}
            onChange={(e) => setSelectedApplyInsuranceId(e.target.value)}
            disabled={loading}
          >
            <option value="">Select an Apply Insurance</option>
            {applyInsurances.map((insurance) => (
              <option key={insurance.applyInsuranceId} value={insurance.applyInsuranceId}>
                {insurance.applyInsuranceId}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleCalculateRisk} disabled={loading}>
          {loading ? 'Calculating...' : 'Calculate Risk Score'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {risks.length > 0 && (
        <div>
          <h2>All Risk Scores</h2>
          <table>
            <thead>
              <tr>
                <th>Applicant ID</th>
                <th>Risk Score</th>
                <th>Risk Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((risk) => (
                <tr key={risk.riskId}>
                  <td>{risk.applicants.applicantId}</td>
                  <td>{risk.riskScore}</td>
                  <td>{risk.riskType}</td>
                  <td>
                    <button onClick={() => handleDeleteRisk(risk.riskId)} disabled={loading}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RiskScore;
