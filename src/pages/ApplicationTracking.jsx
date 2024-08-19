import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ApplicationTracking.css';
import ApplicantNavbar from '../components/ApplicantNavbar';

const ApplicationTracking = () => {
  const [application, setApplication] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applyInsuranceId, setApplyInsuranceId] = useState(1); 

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`http://localhost:8027/applyInsurance/${applyInsuranceId}`);
        setApplication(response.data);
      } catch (err) {
        setError('Error fetching application details');
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [applyInsuranceId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const status = application?.status || 'unknown';

  return (
    <div className="application-tracking">
        {/* <ApplicantNavbar /> */}
      {application ? (
        <div className="application-details">
          <h1>Application Tracking</h1>
          <div className="detail">
            <span className="label">Policy Number:</span>
            <span className="value">{application.policyNumber || 'N/A'}</span>
          </div>
          <div className="detail">
            <span className="label">Insurance Date:</span>
            <span className="value">
              {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
            </span>
          </div>
          <div className="detail">
            <span className="label">Status:</span>
            <span className={`status ${status}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </div>
      ) : (
        <div className="no-data">No application data available</div>
      )}
    </div>
  );
};

export default ApplicationTracking;


