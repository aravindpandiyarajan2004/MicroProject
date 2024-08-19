// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import AdminNavbar from '../components/AdminNavbar';
// // import '../styles/AdminHome.css'; // Import your CSS

// // const AdminHomePage = () => {
// //   const [applicantCount, setApplicantCount] = useState(0);
// //   const [insuranceCount, setInsuranceCount] = useState(0);
// //   const [riskCount, setRiskCount] = useState(0);
// //   const [premiumCount, setPremiumCount] = useState(0);
// //   const [recentApplications, setRecentApplications] = useState([]);
// //   const [recentPayments, setRecentPayments] = useState([]);

// //   useEffect(() => {
// //     const fetchDashboardData = async () => {
// //       try {
// //         const [applicantsRes, insurancesRes, risksRes, premiumsRes, applicationsRes, paymentsRes] = await Promise.all([
// //           axios.get('http://localhost:8027/admin/applicants'),
// //           axios.get('http://localhost:8027/admin/insurances'),
// //           axios.get('http://localhost:8027/admin/risks'),
// //           axios.get('http://localhost:8027/admin/premiums'),
// //           axios.get('http://localhost:8027/admin/applyInsurance'),
// //           axios.get('http://localhost:8027/admin/payment')
// //         ]);

// //         setApplicantCount(applicantsRes.data.length);
// //         setInsuranceCount(insurancesRes.data.length);
// //         setRiskCount(risksRes.data.length);
// //         setPremiumCount(premiumsRes.data.length);

// //         // Assuming you want to display the most recent 5 applications and payments
// //         setRecentApplications(applicationsRes.data.slice(-5)); // Get the last 5 applications
// //         setRecentPayments(paymentsRes.data.slice(-5)); // Get the last 5 payments
// //       } catch (error) {
// //         console.error('Error fetching dashboard data:', error);
// //       }
// //     };

// //     fetchDashboardData();
// //   }, []);

// //   return (
// //     <div>
// //     <AdminNavbar />
// //     <div className="admin-home-page">
// //       <h1>Admin Dashboard</h1>
// //       <div className="dashboard-summary">
// //         <div className="summary-item">
// //           <h2>Total Applicants</h2>
// //           <p>{applicantCount}</p>
// //         </div>
// //         <div className="summary-item">
// //           <h2>Total Insurance Policies</h2>
// //           <p>{insuranceCount}</p>
// //         </div>
// //         <div className="summary-item">
// //           <h2>Total Risks</h2>
// //           <p>{riskCount}</p>
// //         </div>
// //         <div className="summary-item">
// //           <h2>Total Premiums</h2>
// //           <p>{premiumCount}</p>
// //         </div>
// //       </div>
// //       <div className="recent-activities">
// //         <h2>Recent Applications</h2>
// //         <ul>
// //           {recentApplications.length ? (
// //             recentApplications.map((application, index) => (
// //               <li key={index}>
// //                 <strong>Policy Number:</strong> {application.policyNumber} <br />
// //                 <strong>Date:</strong> {new Date(application.insuranceDate).toLocaleDateString()} <br />
// //                 <strong>Status:</strong> {application.status}
// //               </li>
// //             ))
// //           ) : (
// //             <li>No recent applications</li>
// //           )}
// //         </ul>
// //         <h2>Recent Payments</h2>
// //         <ul>
// //           {recentPayments.length ? (
// //             recentPayments.map((payment, index) => (
// //               <li key={index}>
// //                 <strong>Amount:</strong> ${payment.amount} <br />
// //                 <strong>Payment Method:</strong> {payment.payMethod} <br />
// //                 <strong>Date:</strong> {new Date(payment.payDate).toLocaleDateString()}
// //               </li>
// //             ))
// //           ) : (
// //             <li>No recent payments</li>
// //           )}
// //         </ul>
// //       </div>
// //     </div>
// //     </div>
// //   );
// // };

// // export default AdminHomePage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminNavbar from '../components/AdminNavbar';
// import '../styles/AdminHome.css'; // Import your CSS

// const AdminHomePage = () => {
//   const [applicantCount, setApplicantCount] = useState(0);
//   const [insuranceCount, setInsuranceCount] = useState(0);
//   const [riskCount, setRiskCount] = useState(0);
//   const [premiumCount, setPremiumCount] = useState(0);
//   const [recentApplications, setRecentApplications] = useState([]);
//   const [recentPayments, setRecentPayments] = useState([]);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const [applicantsRes, insurancesRes, risksRes, premiumsRes, applicationsRes, paymentsRes] = await Promise.all([
//           axios.get('http://localhost:8027/admin/applicants'),
//           axios.get('http://localhost:8027/admin/insurances'),
//           axios.get('http://localhost:8027/admin/risks'),
//           axios.get('http://localhost:8027/admin/premiums'),
//           axios.get('http://localhost:8027/admin/applyInsurance'),
//           axios.get('http://localhost:8027/admin/payment')
//         ]);

//         setApplicantCount(applicantsRes.data.length);
//         setInsuranceCount(insurancesRes.data.length);
//         setRiskCount(risksRes.data.length);
//         setPremiumCount(premiumsRes.data.length);
//         setRecentApplications(applicationsRes.data.slice(-5));
//         setRecentPayments(paymentsRes.data.slice(-5));
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="admin-home-page">
//       <AdminNavbar />
//       <div className="dashboard-content">
//         <h1 className="dashboard-heading">Admin Dashboard</h1>
//         <div className="dashboard-summary">
//           <div className="summary-item">
//             <h2>Total Applicants</h2>
//             <p>{applicantCount}</p>
//           </div>
//           <div className="summary-item">
//             <h2>Total Insurance Policies</h2>
//             <p>{insuranceCount}</p>
//           </div>
//           <div className="summary-item">
//             <h2>Total Risks</h2>
//             <p>{riskCount}</p>
//           </div>
//           <div className="summary-item">
//             <h2>Total Premiums</h2>
//             <p>{premiumCount}</p>
//           </div>
//         </div>
//         <div className="recent-activities">
//           <h2>Recent Applications</h2>
//           <ul>
//             {recentApplications.length ? (
//               recentApplications.map((application, index) => (
//                 <li key={index}>
//                   <strong>Policy Number:</strong> {application.policyNumber} <br />
//                   <strong>Date:</strong> {new Date(application.insuranceDate).toLocaleDateString()} <br />
//                   <strong>Status:</strong> {application.status}
//                 </li>
//               ))
//             ) : (
//               <li>No recent applications</li>
//             )}
//           </ul>
//           <h2>Recent Payments</h2>
//           <ul>
//             {recentPayments.length ? (
//               recentPayments.map((payment, index) => (
//                 <li key={index}>
//                   <strong>Amount:</strong> ${payment.amount} <br />
//                   <strong>Payment Method:</strong> {payment.payMethod} <br />
//                   <strong>Date:</strong> {new Date(payment.payDate).toLocaleDateString()}
//                 </li>
//               ))
//             ) : (
//               <li>No recent payments</li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHomePage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/AdminHome.css'; // Import your CSS

const AdminHomePage = () => {
  const [applicantCount, setApplicantCount] = useState(0);
  const [insuranceCount, setInsuranceCount] = useState(0);
  const [riskCount, setRiskCount] = useState(0);
  const [premiumCount, setPremiumCount] = useState(0);
  const [recentApplications, setRecentApplications] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [applicantsRes, insurancesRes, risksRes, premiumsRes, applicationsRes, paymentsRes] = await Promise.all([
          axios.get('http://localhost:8027/admin/applicants'),
          axios.get('http://localhost:8027/admin/insurances'),
          axios.get('http://localhost:8027/admin/risks'),
          axios.get('http://localhost:8027/admin/premiums'),
          axios.get('http://localhost:8027/admin/applyInsurance'),
          axios.get('http://localhost:8027/admin/payment')
        ]);

        setApplicantCount(applicantsRes.data.length);
        setInsuranceCount(insurancesRes.data.length);
        setRiskCount(risksRes.data.length);
        setPremiumCount(premiumsRes.data.length);
        setRecentApplications(applicationsRes.data.slice(-5));
        setRecentPayments(paymentsRes.data.slice(-5));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="admin-home-page">
      <AdminNavbar />
      <div className="dashboard-content">
        <h1 className="dashboard-heading">Admin Dashboard</h1>
        <div className="dashboard-summary">
          <div className="summary-item">
            <h2>Total Applicants</h2>
            <p>{applicantCount}</p>
          </div>
          <div className="summary-item">
            <h2>Total Insurance Policies</h2>
            <p>{insuranceCount}</p>
          </div>
          <div className="summary-item">
            <h2>Total Risks</h2>
            <p>{riskCount}</p>
          </div>
          <div className="summary-item">
            <h2>Total Premiums</h2>
            <p>{premiumCount}</p>
          </div>
        </div>
        <div className="recent-activities">
          <h2>Recent Applications</h2>
          <ul>
            {recentApplications.length ? (
              recentApplications.map((application, index) => (
                <li key={index}>
                  <strong>Policy Number:</strong> {application.policyNumber} <br />
                  <strong>Date:</strong> {new Date(application.insuranceDate).toLocaleDateString()} <br />
                  <strong>Status:</strong> {application.status}
                </li>
              ))
            ) : (
              <li>No recent applications</li>
            )}
          </ul>
          <h2>Recent Payments</h2>
          <ul>
            {recentPayments.length ? (
              recentPayments.map((payment, index) => (
                <li key={index}>
                  <strong>Amount:</strong> ${payment.amount} <br />
                  <strong>Payment Method:</strong> {payment.payMethod} <br />
                  <strong>Date:</strong> {new Date(payment.payDate).toLocaleDateString()}
                </li>
              ))
            ) : (
              <li>No recent payments</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;

