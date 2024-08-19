import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ApplicantNavbar.css'; // Ensure to add appropriate styling

const Navbar = () => {
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
                        alt="Health Insurance Logo"
                    />
                    Health Insurance
                </Link>
                <button className="nav-toggle" onClick={toggleNav}>
                    ☰
                </button>
                <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/apply-insurance" className="nav-links">Apply Insurance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/application-tracking" className="nav-links">Application Tracking</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/payment" className="nav-links">Payment</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
