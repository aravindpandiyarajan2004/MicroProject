import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminNavbar.css'; // Ensure to add appropriate styling

const AdminNavbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img
                        src="https://i.pinimg.com/236x/83/1e/85/831e85e0f7a0e9232fc05d7b0f7bb790.jpg"
                        width="50"
                        height="50"
                        className="navbar-logo-img"
                        alt="Admin Logo"
                    />
                    Admin Dashboard
                </Link>
                <button className="nav-toggle" onClick={toggleNav}>
                    ☰
                </button>
                <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/applicant-info" className="nav-links">Applicant Info</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/insurance-admin" className="nav-links">Insurance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin-apply-insurance" className="nav-links">Manage Insurance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/risk-calculation" className="nav-links">Risk Calculation</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/premium-calculation" className="nav-links">Premium Calculation</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/payment-verification" className="nav-links">Payment Verification</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin-login" className="nav-links">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;





