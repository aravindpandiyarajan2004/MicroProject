
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavigationBar from './components/Navbar';
// import Home from './pages/Home';
// import './styles/App.css';

// import ApplicantLoginForm from './pages/ApplicantLogin';
// import AdminLogin from './pages/AdminLogin';
// import ApplicantRegistration from './pages/ApplicantRegister';
// import ApplicantHomePage from './pages/ApplicantHome';
// import ApplyInsuranceForm from './pages/ApplyInsurance';
// import ApplicationTracking from './pages/ApplicationTracking';
// import PaymentPage from './pages/PaymentPage';
// import AdminHomePage from './pages/AdminHome';
// import AdminApplicant from './pages/AdminApplicant';
// import AdminApplyInsurance from './pages/AdminApplyInsurance';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* <NavigationBar /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/applicant-login" element={<ApplicantLoginForm />} />
//           <Route path="/admin-login" element={<AdminLogin />} />
//           <Route path="/admin-dash" element={<AdminHomePage/>} />
//           <Route path="/register" element={<ApplicantRegistration />} />
//           <Route path="/applicant-dash" element={<ApplicantHomePage />} />
//           <Route path="/apply-insurance" element={<ApplyInsuranceForm />} />
//           <Route path="/application-tracking" element={<ApplicationTracking />} />
//           <Route path="/payment" element={<PaymentPage />} />
//           <Route path="/applicant-info" element={<AdminApplicant />} />
//           <Route paht="/admin-apply-insurance" element={<AdminApplyInsurance />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ApplicantLoginForm from './pages/ApplicantLogin';
import AdminLogin from './pages/AdminLogin';
import ApplicantRegistration from './pages/ApplicantRegister';
import ApplicantHomePage from './pages/ApplicantHome';
import ApplyInsuranceForm from './pages/ApplyInsurance';
import ApplicationTracking from './pages/ApplicationTracking';
import PaymentPage from './pages/PaymentPage';
import AdminHomePage from './pages/AdminHome';
import AdminApplicant from './pages/AdminApplicant';
import AdminApplyInsurance from './pages/AdminApplyInsurance';
import './styles/App.css';
import RiskScore from './pages/RiskScore';
import PremiumManagement from './pages/PremiumManagement';
import AdminPaymentManage from './pages/AdminPaymentManage';
import AdminInsuranceManage from './pages/AdminInsuranceManage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applicant-login" element={<ApplicantLoginForm />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dash" element={<AdminHomePage />} />
          <Route path="/register" element={<ApplicantRegistration />} />
          <Route path="/applicant-dash" element={<ApplicantHomePage />} />
          <Route path="/apply-insurance" element={<ApplyInsuranceForm />} />
          <Route path="/application-tracking" element={<ApplicationTracking />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/applicant-info" element={<AdminApplicant />} />
          <Route path="/admin-apply-insurance" element={<AdminApplyInsurance />} /> 
          <Route path="/risk-calculation" element={<RiskScore />} />
          <Route path="/premium-calculation" element={<PremiumManagement />} />
          <Route path="/payment-verification" element={<AdminPaymentManage />} />
          <Route path="/insurance-admin" element={<AdminInsuranceManage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
