import React from 'react';
import ApplicantNavbar from '../components/ApplicantNavbar';
import '../styles/ApplicantHome.css'; // Ensure to add appropriate styling

const ApplicantHomePage = () => {
    return (
        <div className="applicant-home">
            <ApplicantNavbar />
            <main className="main-content">
                <section className="policy-info">
                    <h1>Health Insurance Policies</h1>
                    <p>Welcome to our Health Insurance portal. We offer a range of health insurance plans tailored to meet your needs. Explore our schemes below:</p>
                    <div className="schemes">
                        <div className="scheme">
                            <h2>Scheme A</h2>
                            <p>Comprehensive coverage with low premiums. Includes hospital stays, doctor visits, and routine check-ups.</p>
                        </div>
                        <div className="scheme">
                            <h2>Scheme B</h2>
                            <p>Extended coverage with additional benefits. Includes dental care, vision care, and wellness programs.</p>
                        </div>
                        <div className="scheme">
                            <h2>Scheme C</h2>
                            <p>Premium coverage with extensive benefits. Includes international coverage, alternative medicine, and annual health screenings.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 InsuranceApp. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </footer>
        </div>
    );
};

export default ApplicantHomePage;
