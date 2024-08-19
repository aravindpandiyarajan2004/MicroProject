import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../styles/ApplyInsurance.css'; // Ensure to create and use appropriate CSS
import ApplicantNavbar from '../components/ApplicantNavbar';

const ApplyInsuranceForm = () => {
  const [inputData, setInputData] = useState({
    insuranceDate: '',
    healthIssue: 'no', // Default value for health issue
    status: 'pending', // Default value for status
    reports: null, // For file upload
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [policyNumber, setPolicyNumber] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setInputData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if (type === 'radio') {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Clear the error message for the changed field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateValues = () => {
    const newErrors = {};

    // Validate each field
    if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
    if (!inputData.reports) newErrors.reports = 'ID Proof is required.';

    if (inputData.reports) {
      const allowedFormats = ['application/pdf', 'image/jpeg'];
      if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!validateValues()) {
      setSubmitting(false);
      return;
    }

    // Generate a unique policy number for each submission
    const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
    setPolicyNumber(generatedPolicyNumber);

    const formData = new FormData();
    Object.keys(inputData).forEach((key) => {
      if (inputData[key]) {
        formData.append(key, inputData[key]);
      }
    });
    formData.append('policyNumber', generatedPolicyNumber); // Include policy number in FormData

    try {
      await axios.post('http://localhost:8027/applyInsurance', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        title: 'Application Submitted Successfully!',
        text: `Your policy number is ${generatedPolicyNumber}.`,
        icon: 'success',
      });

      navigate('/applicant-dash'); // Redirect or perform any other action
    } catch (err) {
      console.error('Submit Error:', err);
      Swal.fire({
        title: 'Error',
        text: 'An error occurred. Please try again.',
        icon: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="apply-insurance-form">
        {/* <ApplicantNavbar/> */}
      <h1>Apply for Insurance</h1>
      <form onSubmit={handleSubmit}>
        {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
        
        <div className="form-group">
          <label htmlFor="insuranceDate">Insurance Date</label>
          <input
            type="date"
            id="insuranceDate"
            name="insuranceDate"
            value={inputData.insuranceDate}
            onChange={handleChange}
          />
          {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
        </div>

        <div className="form-group">
          <label>Health Issue</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="healthIssue"
                value="yes"
                checked={inputData.healthIssue === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="healthIssue"
                value="no"
                checked={inputData.healthIssue === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
          <input
            type="file"
            id="reports"
            name="reports"
            onChange={handleChange}
          />
          {errors.reports && <div className="error-message">{errors.reports}</div>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ApplyInsuranceForm;
