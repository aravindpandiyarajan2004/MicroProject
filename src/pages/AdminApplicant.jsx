// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import AdminNavbar from '../components/AdminNavbar';
// // // // // import '../styles/AdminApplicant.css'; // Import your CSS

// // // // // const AdminApplicant = () => {
// // // // //   const [applicants, setApplicants] = useState([]);
// // // // //   const [selectedApplicant, setSelectedApplicant] = useState(null);
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const fetchApplicants = async () => {
// // // // //       try {
// // // // //         const response = await axios.get('http://localhost:8027/admin/applicants');
// // // // //         setApplicants(response.data);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching applicants:', error);
// // // // //       }
// // // // //     };

// // // // //     fetchApplicants();
// // // // //   }, []);

// // // // //   const openModal = (applicant) => {
// // // // //     setSelectedApplicant(applicant);
// // // // //     setIsModalOpen(true);
// // // // //   };

// // // // //   const closeModal = () => {
// // // // //     setIsModalOpen(false);
// // // // //     setSelectedApplicant(null);
// // // // //   };

// // // // //   return (
// // // // //     <div className="applicant-details-page">
// // // // //       <AdminNavbar />
// // // // //       <div className="applicant-content">
// // // // //         <h1 className="applicant-heading">Applicant Details</h1>
// // // // //         {applicants.length > 0 ? (
// // // // //           <table className="applicant-table">
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th>ID</th>
// // // // //                 <th>Name</th>
// // // // //                 <th>Email</th>
// // // // //                 <th>Mobile</th>
// // // // //                 <th>Actions</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {applicants.map(applicant => (
// // // // //                 <tr key={applicant.applicantId}>
// // // // //                   <td>{applicant.applicantId}</td>
// // // // //                   <td>{applicant.applicantName}</td>
// // // // //                   <td>{applicant.email}</td>
// // // // //                   <td>{applicant.mobile}</td>
// // // // //                   <td>
// // // // //                     <button onClick={() => openModal(applicant)} className="view-button">
// // // // //                       <img src="/path/to/eye-icon.png" alt="View" /> {/* Add a proper path to the eye icon */}
// // // // //                     </button>
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         ) : (
// // // // //           <p>No applicants found</p>
// // // // //         )}

// // // // //         {isModalOpen && selectedApplicant && (
// // // // //           <div className="modal-overlay">
// // // // //             <div className="modal-content">
// // // // //               <button className="close-button" onClick={closeModal}>×</button>
// // // // //               <h2>Applicant Details</h2>
// // // // //               <p><strong>ID:</strong> {selectedApplicant.applicantId}</p>
// // // // //               <p><strong>Name:</strong> {selectedApplicant.applicantName}</p>
// // // // //               <p><strong>Email:</strong> {selectedApplicant.email}</p>
// // // // //               <p><strong>Mobile:</strong> {selectedApplicant.mobile}</p>
// // // // //               <p><strong>Age:</strong> {selectedApplicant.age}</p>
// // // // //               <p><strong>Address:</strong> {selectedApplicant.address}</p>
// // // // //               <p><strong>Date of Birth:</strong> {selectedApplicant.dob}</p>
// // // // //               <p><strong>Occupation:</strong> {selectedApplicant.occupation}</p>
// // // // //               <p><strong>Income:</strong> {selectedApplicant.income}</p>
// // // // //               <p><strong>Gender:</strong> {selectedApplicant.gender}</p>
// // // // //               {/* Display the ID proof if needed */}
// // // // //               <p><strong>ID Proof:</strong> {selectedApplicant.idProof ? 'Available' : 'Not provided'}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AdminApplicant;

// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import AdminNavbar from '../components/AdminNavbar';
// // // // import Swal from 'sweetalert2';
// // // // import '../styles/AdminApplicant.css'; // Import your CSS

// // // // const AdminApplicant = () => {
// // // //   const [applicants, setApplicants] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchApplicants = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://localhost:8027/admin/applicants');
// // // //         setApplicants(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching applicants:', error);
// // // //       }
// // // //     };

// // // //     fetchApplicants();
// // // //   }, []);

// // // //   const showDetails = (applicant) => {
// // // //     Swal.fire({
// // // //       title: 'Applicant Details',
// // // //       html: `
// // // //         <p><strong>ID:</strong> ${applicant.applicantId}</p>
// // // //         <p><strong>Name:</strong> ${applicant.applicantName}</p>
// // // //         <p><strong>Email:</strong> ${applicant.email}</p>
// // // //         <p><strong>Mobile:</strong> ${applicant.mobile}</p>
// // // //         <p><strong>Age:</strong> ${applicant.age}</p>
// // // //         <p><strong>Address:</strong> ${applicant.address}</p>
// // // //         <p><strong>Date of Birth:</strong> ${applicant.dob}</p>
// // // //         <p><strong>Occupation:</strong> ${applicant.occupation}</p>
// // // //         <p><strong>Income:</strong> ${applicant.income}</p>
// // // //         <p><strong>Gender:</strong> ${applicant.gender}</p>
// // // //         <p><strong>ID Proof:</strong> ${applicant.idProof ? 'Available' : 'Not provided'}</p>
// // // //       `,
// // // //       showCloseButton: true,
// // // //       showConfirmButton: false,
// // // //       width: '600px'
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="applicant-details-page">
// // // //       <AdminNavbar />
// // // //       <div className="applicant-content">
// // // //         <h1 className="applicant-heading">Applicant Details</h1>
// // // //         {applicants.length > 0 ? (
// // // //           <table className="applicant-table">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>ID</th>
// // // //                 <th>Name</th>
// // // //                 <th>Email</th>
// // // //                 <th>Mobile</th>
// // // //                 <th>Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {applicants.map(applicant => (
// // // //                 <tr key={applicant.applicantId}>
// // // //                   <td>{applicant.applicantId}</td>
// // // //                   <td>{applicant.applicantName}</td>
// // // //                   <td>{applicant.email}</td>
// // // //                   <td>{applicant.mobile}</td>
// // // //                   <td>
// // // //                     <button onClick={() => showDetails(applicant)} className="view-button">
// // // //                       <img src="/path/to/eye-icon.png" alt="View" /> {/* Add a proper path to the eye icon */}
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         ) : (
// // // //           <p>No applicants found</p>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminApplicant;/


// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import AdminNavbar from '../components/AdminNavbar';
// // // // import Swal from 'sweetalert2';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { faEye } from '@fortawesome/free-solid-svg-icons';
// // // // import '../styles/AdminApplicant.css'; // Import your CSS

// // // // const AdminApplicant = () => {
// // // //   const [applicants, setApplicants] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchApplicants = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://localhost:8027/admin/applicants');
// // // //         setApplicants(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching applicants:', error);
// // // //       }
// // // //     };

// // // //     fetchApplicants();
// // // //   }, []);

// // // //   const showDetails = (applicant) => {
// // // //     Swal.fire({
// // // //       title: 'Applicant Details',
// // // //       html: `
// // // //         <p><strong>ID:</strong> ${applicant.applicantId}</p>
// // // //         <p><strong>Name:</strong> ${applicant.applicantName}</p>
// // // //         <p><strong>Email:</strong> ${applicant.email}</p>
// // // //         <p><strong>Mobile:</strong> ${applicant.mobile}</p>
// // // //         <p><strong>Age:</strong> ${applicant.age}</p>
// // // //         <p><strong>Address:</strong> ${applicant.address}</p>
// // // //         <p><strong>Date of Birth:</strong> ${applicant.dob}</p>
// // // //         <p><strong>Occupation:</strong> ${applicant.occupation}</p>
// // // //         <p><strong>Income:</strong> ${applicant.income}</p>
// // // //         <p><strong>Gender:</strong> ${applicant.gender}</p>
// // // //         <p><strong>ID Proof:</strong> ${applicant.idProof ? 'Available' : 'Not provided'}</p>
// // // //       `,
// // // //       showCloseButton: true,
// // // //       showConfirmButton: false,
// // // //       width: '600px'
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="applicant-details-page">
// // // //       <AdminNavbar />
// // // //       <div className="applicant-content">
// // // //         <h1 className="applicant-heading">Applicant Details</h1>
// // // //         {applicants.length > 0 ? (
// // // //           <table className="applicant-table">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>ID</th>
// // // //                 <th>Name</th>
// // // //                 <th>Email</th>
// // // //                 <th>Mobile</th>
// // // //                 <th>Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {applicants.map(applicant => (
// // // //                 <tr key={applicant.applicantId}>
// // // //                   <td>{applicant.applicantId}</td>
// // // //                   <td>{applicant.applicantName}</td>
// // // //                   <td>{applicant.email}</td>
// // // //                   <td>{applicant.mobile}</td>
// // // //                   <td>
// // // //                     <button onClick={() => showDetails(applicant)} className="view-button">
// // // //                       <FontAwesomeIcon icon={faEye} /> {/* Font Awesome eye icon */}
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         ) : (
// // // //           <p>No applicants found</p>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminApplicant;

// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import AdminNavbar from '../components/AdminNavbar';
// // // import Swal from 'sweetalert2';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons';
// // // import '../styles/AdminApplicant.css'; // Import your CSS

// // // const AdminApplicant = () => {
// // //   const [applicants, setApplicants] = useState([]);

// // //   useEffect(() => {
// // //     const fetchApplicants = async () => {
// // //       try {
// // //         const response = await axios.get('http://localhost:8027/admin/applicants');
// // //         setApplicants(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching applicants:', error);
// // //       }
// // //     };

// // //     fetchApplicants();
// // //   }, []);

// // //   const showDetails = (applicant) => {
// // //     Swal.fire({
// // //       title: 'Applicant Details',
// // //       html: `
// // //         <p><strong>ID:</strong> ${applicant.applicantId}</p>
// // //         <p><strong>Name:</strong> ${applicant.applicantName}</p>
// // //         <p><strong>Email:</strong> ${applicant.email}</p>
// // //         <p><strong>Mobile:</strong> ${applicant.mobile}</p>
// // //         <p><strong>Age:</strong> ${applicant.age}</p>
// // //         <p><strong>Address:</strong> ${applicant.address}</p>
// // //         <p><strong>Date of Birth:</strong> ${applicant.dob}</p>
// // //         <p><strong>Occupation:</strong> ${applicant.occupation}</p>
// // //         <p><strong>Income:</strong> ${applicant.income}</p>
// // //         <p><strong>Gender:</strong> ${applicant.gender}</p>
// // //       `,
// // //       showCloseButton: true,
// // //       showConfirmButton: false,
// // //       width: '600px'
// // //     });
// // //   };

// // //   const viewIdProof = (idProof) => {
// // //     if (idProof) {
// // //       const blob = new Blob([idProof], { type: 'application/pdf' }); // Assuming PDF format
// // //       const url = URL.createObjectURL(blob);

// // //       Swal.fire({
// // //         title: 'ID Proof',
// // //         html: `
// // //           <iframe
// // //             src="${url}"
// // //             style="width:100%; height:80vh;"
// // //           ></iframe>
// // //         `,
// // //         showCloseButton: true,
// // //         showConfirmButton: false,
// // //         width: '80vw'
// // //       });
// // //     } else {
// // //       Swal.fire({
// // //         title: 'No ID Proof',
// // //         text: 'No ID proof available for this applicant.',
// // //         icon: 'info'
// // //       });
// // //     }
// // //   };

// // //   return (
// // //     <div className="applicant-details-page">
// // //       <AdminNavbar />
// // //       <div className="applicant-content">
// // //         <h1 className="applicant-heading">Applicant Details</h1>
// // //         {applicants.length > 0 ? (
// // //           <table className="applicant-table">
// // //             <thead>
// // //               <tr>
// // //                 <th>ID</th>
// // //                 <th>Name</th>
// // //                 <th>Email</th>
// // //                 <th>Age</th>
// // //                 <th>ID Proof</th>
// // //                 <th>Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {applicants.map(applicant => (
// // //                 <tr key={applicant.applicantId}>
// // //                   <td>{applicant.applicantId}</td>
// // //                   <td>{applicant.applicantName}</td>
// // //                   <td>{applicant.email}</td>
// // //                   <td>{applicant.age}</td>
// // //                   <td>
// // //                     <button onClick={() => viewIdProof(applicant.idProof)} className="view-button">
// // //                       <FontAwesomeIcon icon={faFilePdf} /> {/* Font Awesome file PDF icon */}
// // //                     </button>
// // //                   </td>
// // //                   <td>
// // //                     <button onClick={() => showDetails(applicant)} className="view-button">
// // //                       <FontAwesomeIcon icon={faEye} /> {/* Font Awesome eye icon */}
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         ) : (
// // //           <p>No applicants found</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminApplicant;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import AdminNavbar from '../components/AdminNavbar';
// // import Swal from 'sweetalert2';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEye, faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons';
// // import '../styles/AdminApplicant.css'; // Import your CSS

// // const AdminApplicant = () => {
// //   const [applicants, setApplicants] = useState([]);

// //   useEffect(() => {
// //     const fetchApplicants = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8027/admin/applicants');
// //         setApplicants(response.data);
// //       } catch (error) {
// //         console.error('Error fetching applicants:', error);
// //       }
// //     };

// //     fetchApplicants();
// //   }, []);

// //   const showDetails = (applicant) => {
// //     Swal.fire({
// //       title: 'Applicant Details',
// //       html: `
// //         <p><strong>ID:</strong> ${applicant.applicantId}</p>
// //         <p><strong>Name:</strong> ${applicant.applicantName}</p>
// //         <p><strong>Email:</strong> ${applicant.email}</p>
// //         <p><strong>Mobile:</strong> ${applicant.mobile}</p>
// //         <p><strong>Age:</strong> ${applicant.age}</p>
// //         <p><strong>Address:</strong> ${applicant.address}</p>
// //         <p><strong>Date of Birth:</strong> ${applicant.dob}</p>
// //         <p><strong>Occupation:</strong> ${applicant.occupation}</p>
// //         <p><strong>Income:</strong> ${applicant.income}</p>
// //         <p><strong>Gender:</strong> ${applicant.gender}</p>
// //       `,
// //       showCloseButton: true,
// //       showConfirmButton: false,
// //       width: '600px'
// //     });
// //   };

// //   const viewIdProof = (idProof, fileType) => {
// //     if (idProof) {
// //       const blob = new Blob([idProof], { type: fileType });
// //       const url = URL.createObjectURL(blob);

// //       Swal.fire({
// //         title: 'ID Proof',
// //         html: fileType.includes('pdf') ? 
// //           `<iframe src="${url}" style="width:100%; height:80vh;" frameborder="0"></iframe>` :
// //           `<img src="${url}" style="width:100%; height:auto;" alt="ID Proof"/>`,
// //         showCloseButton: true,
// //         showConfirmButton: false,
// //         width: '80vw'
// //       });
// //     } else {
// //       Swal.fire({
// //         title: 'No ID Proof',
// //         text: 'No ID proof available for this applicant.',
// //         icon: 'info'
// //       });
// //     }
// //   };

// //   const getFileIcon = (fileType) => {
// //     if (fileType.includes('pdf')) {
// //       return faFilePdf;
// //     } else if (fileType.includes('image')) {
// //       return faFileImage;
// //     } else {
// //       return faFilePdf; // Default icon if unknown type
// //     }
// //   };

// //   return (
// //     <div className="applicant-details-page">
// //       <AdminNavbar />
// //       <div className="applicant-content">
// //         <h1 className="applicant-heading">Applicant Details</h1>
// //         {applicants.length > 0 ? (
// //           <table className="applicant-table">
// //             <thead>
// //               <tr>
// //                 <th>ID</th>
// //                 <th>Name</th>
// //                 <th>Email</th>
// //                 <th>Age</th>
// //                 <th>ID Proof</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {applicants.map(applicant => (
// //                 <tr key={applicant.applicantId}>
// //                   <td>{applicant.applicantId}</td>
// //                   <td>{applicant.applicantName}</td>
// //                   <td>{applicant.email}</td>
// //                   <td>{applicant.age}</td>
// //                   <td>
// //                     <button 
// //                       onClick={() => viewIdProof(applicant.idProof, applicant.idProofType)} 
// //                       className="view-button"
// //                     >
// //                       <FontAwesomeIcon icon={getFileIcon(applicant.idProofType)} />
// //                     </button>
// //                   </td>
// //                   <td>
// //                     <button onClick={() => showDetails(applicant)} className="view-button">
// //                       <FontAwesomeIcon icon={faEye} /> {/* Font Awesome eye icon */}
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         ) : (
// //           <p>No applicants found</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminApplicant;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import AdminNavbar from '../components/AdminNavbar';
// // import Swal from 'sweetalert2';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEye, faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons';
// // import '../styles/AdminApplicant.css'; // Import your CSS

// // const AdminApplicant = () => {
// //   const [applicants, setApplicants] = useState([]);

// //   useEffect(() => {
// //     const fetchApplicants = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8027/admin/applicants');
// //         setApplicants(response.data);
// //       } catch (error) {
// //         console.error('Error fetching applicants:', error);
// //       }
// //     };

// //     fetchApplicants();
// //   }, []);

// //   const showDetails = (applicant) => {
// //     Swal.fire({
// //       title: 'Applicant Details',
// //       html: `
// //         <p><strong>ID:</strong> ${applicant.applicantId}</p>
// //         <p><strong>Name:</strong> ${applicant.applicantName}</p>
// //         <p><strong>Email:</strong> ${applicant.email}</p>
// //         <p><strong>Mobile:</strong> ${applicant.mobile}</p>
// //         <p><strong>Age:</strong> ${applicant.age}</p>
// //         <p><strong>Address:</strong> ${applicant.address}</p>
// //         <p><strong>Date of Birth:</strong> ${applicant.dob}</p>
// //         <p><strong>Occupation:</strong> ${applicant.occupation}</p>
// //         <p><strong>Income:</strong> ${applicant.income}</p>
// //         <p><strong>Gender:</strong> ${applicant.gender}</p>
// //       `,
// //       showCloseButton: true,
// //       showConfirmButton: false,
// //       width: '600px'
// //     });
// //   };

// //   const viewIdProof = (idProof, fileType) => {
// //     if (idProof) {
// //       // Ensure fileType is defined and use a default if not
// //       const type = fileType || 'application/octet-stream'; // Default type
// //       const blob = new Blob([idProof], { type });
// //       const url = URL.createObjectURL(blob);

// //       Swal.fire({
// //         title: 'ID Proof',
// //         html: type.includes('pdf') ? 
// //           `<iframe src="${url}" style="width:100%; height:80vh;" frameborder="0"></iframe>` :
// //           `<img src="${url}" style="width:100%; height:auto;" alt="ID Proof"/>`,
// //         showCloseButton: true,
// //         showConfirmButton: false,
// //         width: '80vw'
// //       });
// //     } else {
// //       Swal.fire({
// //         title: 'No ID Proof',
// //         text: 'No ID proof available for this applicant.',
// //         icon: 'info'
// //       });
// //     }
// //   };

// //   const getFileIcon = (fileType) => {
// //     if (fileType && fileType.includes('pdf')) {
// //       return faFilePdf;
// //     } else if (fileType && fileType.includes('image')) {
// //       return faFileImage;
// //     } else {
// //       return faFilePdf; // Default icon if unknown type
// //     }
// //   };

// //   return (
// //     <div className="applicant-details-page">
// //       <AdminNavbar />
// //       <div className="applicant-content">
// //         <h1 className="applicant-heading">Applicant Details</h1>
// //         {applicants.length > 0 ? (
// //           <table className="applicant-table">
// //             <thead>
// //               <tr>
// //                 <th>ID</th>
// //                 <th>Name</th>
// //                 <th>Email</th>
// //                 <th>Age</th>
// //                 <th>ID Proof</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {applicants.map(applicant => (
// //                 <tr key={applicant.applicantId}>
// //                   <td>{applicant.applicantId}</td>
// //                   <td>{applicant.applicantName}</td>
// //                   <td>{applicant.email}</td>
// //                   <td>{applicant.age}</td>
// //                   <td>
// //                     <button 
// //                       onClick={() => viewIdProof(applicant.idProof, applicant.idProofType)} 
// //                       className="view-button"
// //                     >
// //                       <FontAwesomeIcon icon={getFileIcon(applicant.idProofType)} />
// //                     </button>
// //                   </td>
// //                   <td>
// //                     <button onClick={() => showDetails(applicant)} className="view-button">
// //                       <FontAwesomeIcon icon={faEye} /> {/* Font Awesome eye icon */}
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         ) : (
// //           <p>No applicants found</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminApplicant;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminNavbar from '../components/AdminNavbar';
// import Swal from 'sweetalert2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons';
// import '../styles/AdminApplicant.css'; // Import your CSS

// const AdminApplicant = () => {
//   const [applicants, setApplicants] = useState([]);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const response = await axios.get('http://localhost:8027/admin/applicants');
//         setApplicants(response.data);
//       } catch (error) {
//         console.error('Error fetching applicants:', error);
//       }
//     };

//     fetchApplicants();
//   }, []);

//   const showDetails = (applicant) => {
//     Swal.fire({
//       title: 'Applicant Details',
//       html: `
//         <p><strong>ID:</strong> ${applicant.applicantId}</p>
//         <p><strong>Name:</strong> ${applicant.applicantName}</p>
//         <p><strong>Email:</strong> ${applicant.email}</p>
//         <p><strong>Mobile:</strong> ${applicant.mobile}</p>
//         <p><strong>Age:</strong> ${applicant.age}</p>
//         <p><strong>Address:</strong> ${applicant.address}</p>
//         <p><strong>Date of Birth:</strong> ${applicant.dob}</p>
//         <p><strong>Occupation:</strong> ${applicant.occupation}</p>
//         <p><strong>Income:</strong> ${applicant.income}</p>
//         <p><strong>Gender:</strong> ${applicant.gender}</p>
//       `,
//       showCloseButton: true,
//       showConfirmButton: false,
//       width: '600px'
//     });
//   };

//   const viewIdProof = async (idProof, fileType) => {
//     if (idProof) {
//       try {
//         // Make sure the blob is correctly created
//         const type = fileType || 'application/octet-stream'; // Default type
//         const blob = new Blob([new Uint8Array(idProof.data)], { type });
//         const url = URL.createObjectURL(blob);

//         Swal.fire({
//           title: 'ID Proof',
//           html: type.includes('pdf') ? 
//             `<iframe src="${url}" style="width:100%; height:80vh;" frameborder="0"></iframe>` :
//             `<img src="${url}" style="width:100%; height:auto;" alt="ID Proof"/>`,
//           showCloseButton: true,
//           showConfirmButton: false,
//           width: '80vw'
//         });
//       } catch (error) {
//         Swal.fire({
//           title: 'Error',
//           text: 'Unable to display ID proof.',
//           icon: 'error'
//         });
//         console.error('Error displaying ID proof:', error);
//       }
//     } else {
//       Swal.fire({
//         title: 'No ID Proof',
//         text: 'No ID proof available for this applicant.',
//         icon: 'info'
//       });
//     }
//   };

//   const getFileIcon = (fileType) => {
//     if (fileType && fileType.includes('pdf')) {
//       return faFilePdf;
//     } else if (fileType && fileType.includes('image')) {
//       return faFileImage;
//     } else {
//       return faFilePdf; // Default icon if unknown type
//     }
//   };

//   return (
//     <div className="applicant-details-page">
//       <AdminNavbar />
//       <div className="applicant-content">
//         <h1 className="applicant-heading">Applicant Details</h1>
//         {applicants.length > 0 ? (
//           <table className="applicant-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Age</th>
//                 <th>ID Proof</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applicants.map(applicant => (
//                 <tr key={applicant.applicantId}>
//                   <td>{applicant.applicantId}</td>
//                   <td>{applicant.applicantName}</td>
//                   <td>{applicant.email}</td>
//                   <td>{applicant.age}</td>
//                   <td>
//                     <button 
//                       onClick={() => viewIdProof(applicant.idProof, applicant.idProofType)} 
//                       className="view-button"
//                     >
//                       <FontAwesomeIcon icon={getFileIcon(applicant.idProofType)} />
//                     </button>
//                   </td>
//                   <td>
//                     <button onClick={() => showDetails(applicant)} className="view-button">
//                       <FontAwesomeIcon icon={faEye} /> {/* Font Awesome eye icon */}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No applicants found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminApplicant;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminNavbar from '../components/AdminNavbar';
// import Swal from 'sweetalert2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons';
// import '../styles/AdminApplicant.css';

// const AdminApplicant = () => {
//   const [applicants, setApplicants] = useState([]);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const response = await axios.get('http://localhost:8027/admin/applicants');
//         setApplicants(response.data);
//       } catch (error) {
//         console.error('Error fetching applicants:', error);
//       }
//     };

//     fetchApplicants();
//   }, []);

//   const showDetails = (applicant) => {
//     Swal.fire({
//       title: 'Applicant Details',
//       html: `
//         <p><strong>ID:</strong> ${applicant.applicantId}</p>
//         <p><strong>Name:</strong> ${applicant.applicantName}</p>
//         <p><strong>Email:</strong> ${applicant.email}</p>
//         <p><strong>Mobile:</strong> ${applicant.mobile}</p>
//         <p><strong>Age:</strong> ${applicant.age}</p>
//         <p><strong>Address:</strong> ${applicant.address}</p>
//         <p><strong>Date of Birth:</strong> ${applicant.dob}</p>
//         <p><strong>Occupation:</strong> ${applicant.occupation}</p>
//         <p><strong>Income:</strong> ${applicant.income}</p>
//         <p><strong>Gender:</strong> ${applicant.gender}</p>
//       `,
//       showCloseButton: true,
//       showConfirmButton: false,
//       width: '600px'
//     });
//   };

//   const viewIdProof = (idProofUrl, fileType) => {
//     Swal.fire({
//       title: 'ID Proof',
//       html: fileType.includes('pdf') ?
//         `<iframe src="${idProofUrl}" style="width:100%; height:80vh;" frameborder="0"></iframe>` :
//         `<img src="${idProofUrl}" style="width:100%; height:auto;" alt="ID Proof"/>`,
//       showCloseButton: true,
//       showConfirmButton: false,
//       width: '80vw'
//     });
//   };

//   const getFileIcon = (fileType) => {
//     if (fileType && fileType.includes('pdf')) {
//       return faFilePdf;
//     } else if (fileType && fileType.includes('image')) {
//       return faFileImage;
//     } else {
//       return faFilePdf; // Default icon if unknown type
//     }
//   };

//   return (
//     <div className="applicant-details-page">
//       <AdminNavbar />
//       <div className="applicant-content">
//         <h1 className="applicant-heading">Applicant Details</h1>
//         {applicants.length > 0 ? (
//           <table className="applicant-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Age</th>
//                 <th>ID Proof</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applicants.map(applicant => (
//                 <tr key={applicant.applicantId}>
//                   <td>{applicant.applicantId}</td>
//                   <td>{applicant.applicantName}</td>
//                   <td>{applicant.email}</td>
//                   <td>{applicant.age}</td>
//                   <td>
//                     <button
//                       onClick={() => viewIdProof(applicant.idProofUrl, applicant.idProofType)}
//                       className="view-button"
//                     >
//                       <FontAwesomeIcon icon={getFileIcon(applicant.idProofType)} />
//                     </button>
//                   </td>
//                   <td>
//                     <button onClick={() => showDetails(applicant)} className="view-button">
//                       <FontAwesomeIcon icon={faEye} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No applicants found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminApplicant;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons';
import '../styles/AdminApplicant.css';

const AdminApplicant = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get('http://localhost:8027/admin/applicants');
        setApplicants(response.data);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, []);

  const showDetails = (applicant) => {
    Swal.fire({
      title: 'Applicant Details',
      html: `
        <p><strong>ID:</strong> ${applicant.applicantId}</p>
        <p><strong>Name:</strong> ${applicant.applicantName}</p>
        <p><strong>Email:</strong> ${applicant.email}</p>
        <p><strong>Mobile:</strong> ${applicant.mobile}</p>
        <p><strong>Age:</strong> ${applicant.age}</p>
        <p><strong>Address:</strong> ${applicant.address}</p>
        <p><strong>Date of Birth:</strong> ${applicant.dob}</p>
        <p><strong>Occupation:</strong> ${applicant.occupation}</p>
        <p><strong>Income:</strong> ${applicant.income}</p>
        <p><strong>Gender:</strong> ${applicant.gender}</p>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: '600px'
    });
  };

  const viewIdProof = (idProofUrl, fileType) => {
    if (idProofUrl) {
      const type = fileType || 'application/octet-stream'; // Default type
      Swal.fire({
        title: 'ID Proof',
        html: type.includes('pdf') ?
          `<iframe src="${idProofUrl}" style="width:100%; height:80vh;" frameborder="0"></iframe>` :
          `<img src="${idProofUrl}" style="width:100%; height:auto;" alt="ID Proof"/>`,
        showCloseButton: true,
        showConfirmButton: false,
        width: '80vw'
      });
    } else {
      Swal.fire({
        title: 'No ID Proof',
        text: 'No ID proof available for this applicant.',
        icon: 'info'
      });
    }
  };

  const getFileIcon = (fileType) => {
    if (fileType && fileType.includes('pdf')) {
      return faFilePdf;
    } else if (fileType && fileType.includes('image')) {
      return faFileImage;
    } else {
      return faFilePdf; // Default icon if unknown type
    }
  };

  return (
    <div className="applicant-details-page">
      <AdminNavbar />
      <div className="applicant-content">
        <h1 className="applicant-heading">Applicant Details</h1>
        {applicants.length > 0 ? (
          <table className="applicant-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>ID Proof</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map(applicant => (
                <tr key={applicant.applicantId}>
                  <td>{applicant.applicantId}</td>
                  <td>{applicant.applicantName}</td>
                  <td>{applicant.email}</td>
                  <td>{applicant.age}</td>
                  <td>
                    <button
                      onClick={() => viewIdProof(applicant.idProofUrl, applicant.idProofType)}
                      className="view-button"
                    >
                      <FontAwesomeIcon icon={getFileIcon(applicant.idProofType)} />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => showDetails(applicant)} className="view-button">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No applicants found</p>
        )}
      </div>
    </div>
  );
};

export default AdminApplicant;





