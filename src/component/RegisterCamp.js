import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RegisterCamp.css';
import axios from 'axios'; // Import axios for making HTTP requests

const RegisterCamp = () => {
    const [ID, setID] = useState('');
    const [fullNamLink, toFullName] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [contactNo, setcontactNo] = useState('');
    const [Address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
        
        try {
            // Send form data to the backend
            const response = await axios.post('http://localhost:8081/camp', {
                fullName,
                bloodGroup,
                contactNo,
                address: Address // Corrected variable name to lowercase 'address'
            });

            // Handle successful registration
            console.log('Registration successful', response.data);

            // Redirect to home page
            navigate('/home');
        } catch (error) {
            // Handle registration error
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <nav>
                <span className="mm">Blood Bank</span>
                <Link to="home">Home</Link>
                <Link to="search">Search</Link>
                <Link to="Registercamp">Camp</Link>
            </nav>
            <div className="RegisterCamp-container">
                <form className="login-form" onSubmit={handleRegistration}>
                    <h2>Voluntary Blood Camp Registration</h2>
                    <label For="ID">ID</label>
                    <input
                        type="int"
                        id="ID"
                        value={ID}
                        onChange={(e) => setID(e.target.value)}
                        required
                    />
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <label htmlFor="bloodGroup">Blood Group:</label>
                    <select
                        id="bloodGroup"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Bombay Blood">Bombay Blood</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    <br/>
                    <label htmlFor="contactNo">contactNo</label>
                    <input
                        type="text"
                        id="contactNo"
                        value={contactNo}
                        onChange={(e) => setcontactNo(e.target.value)}
                        required
                    />
                     <label htmlFor="Address">Address</label>
                    <input
                        type="text"
                        id="Address"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterCamp;
