// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import axios from 'axios'; // Import axios
// import { useNavigate } from 'react-router-dom';
// import '../styles/ApplicantLogin.css'; // Import custom styles
// import NavigationBar from '../components/Navbar';

// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.onmouseenter = Swal.stopTimer;
//     toast.onmouseleave = Swal.resumeTimer;
//   },
// });

// const ApplicantLoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const validateValues = (data) => {
//     // Add your validation logic here
//     if (!data.email || !data.password) {
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const inputData = { email, password };
//     const isValid = validateValues(inputData);

//     if (!isValid) {
//       setError('Email and Password are required');
//       return;
//     }

//     try {
//       console.log("Sending Request with Data:", inputData);
//       const res = await axios.post("http://localhost:8027/applicant/login", inputData);
//       console.log("API Response:", res.data);

//       if (res.data === "Login successful") {
//         await Toast.fire({
//           icon: 'success',
//           title: 'Signed in successfully',
//         });
//         setEmail('');
//         setPassword('');
//         navigate("/applicant-dash");
//       } else {
//         console.log("Login failed response:", res.data);
//         setError("Login failed: Invalid email or password");
//       }
//     } catch (err) {
//       console.error("Error during API call:", err.response ? err.response.data : err.message);
//       setError("An error occurred. Please try again.");
//     }
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     if (errors.email) {
//       setErrors({ ...errors, email: '' });
//     }
//     if (error) {
//       setError('');
//     }
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     if (errors.password) {
//       setErrors({ ...errors, password: '' });
//     }
//     if (error) {
//       setError('');
//     }
//   };

//   return (
//     <Container className="login-container">
//         <NavigationBar />
//       <Row className="justify-content-center">
//         <Col md-6 lg-4>
//           <Card className="login-card">
//             <Card.Body>
//               <div className="login-header text-center">
//                 <h2>Applicant Login</h2>
//                 <p className="text-muted">Please enter your credentials to access your account.</p>
//               </div>
//               {error && <div className="alert alert-danger">{error}</div>}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     isInvalid={!!errors.email}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.email}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="formPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     isInvalid={!!errors.password}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.password}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="w-100 mb-2">
//                   Login
//                 </Button>
//               </Form>

//               <div className="social-login">
//                 <p className="text-center">Or login with</p>
//                 <div className="d-flex justify-content-center">
//                   <Button variant="outline-primary" className="social-button">
//                     <FaFacebookF />
//                   </Button>
//                   <Button variant="outline-danger" className="social-button">
//                     <FaGoogle />
//                   </Button>
//                   <Button variant="outline-info" className="social-button">
//                     <FaTwitter />
//                   </Button>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ApplicantLoginForm;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ApplicantLogin.css'; 
import NavigationBar from '../components/Navbar';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const ApplicantLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateValues = (data) => {
    return data.email && data.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputData = { email, password };
    const isValid = validateValues(inputData);

    if (!isValid) {
      setError('Email and Password are required');
      return;
    }

    try {
      console.log("Sending Request with Data:", inputData);
      const res = await axios.post("http://localhost:8027/applicant/login", inputData);
      console.log("API Response:", res.data);

      if (res.data === "Login successful") {
        await Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
        });
        setEmail('');
        setPassword('');
        navigate("/applicant-dash");
      } else {
        console.log("Login failed response:", res.data);
        setError("Login failed: Invalid email or password");
      }
    } catch (err) {
      console.error("Error during API call:", err.response ? err.response.data : err.message);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container fluid className="login-container">
        <NavigationBar />
      <Row className="w-100 h-100 no-gutters">
        <Col className="image-section"></Col>
        <Col className="card-section">
          <Card className="login-card">
            <Card.Body>
              <div className="login-header text-center">
                <h2>Applicant Login</h2>
                <p className="text-muted">Please enter your credentials to access your account.</p>
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!error}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!error}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-2">
                  Login
                </Button>
              </Form>

              <div className="social-login">
                <p className="text-center">Or login with</p>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-primary" className="social-button">
                    <FaFacebookF />
                  </Button>
                  <Button variant="outline-danger" className="social-button">
                    <FaGoogle />
                  </Button>
                  <Button variant="outline-info" className="social-button">
                    <FaTwitter />
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicantLoginForm;

