import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [ID, setID] = useState('');
    const [fullName, setFullName] = useState('');
    const [contactNo, setcontactNo] = useState('');
    const [email, setEmail] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/register', {
                ID,
                fullName,
                contactNo,
                email,
                bloodGroup
            });

            if (response.status === 200) {
                alert('Registration successful.');
                navigate('/Home');
            }
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering user. Please try again later.');
        }
    };

    return (
        <div>
            <nav>
                <span className="mm">Blood Bank</span>
                <a href="home">Home</a>
                <a href="search">Search</a>
                <a href="Registercamp">Camp</a>
            </nav>
            <div className="Register-container">
                <form className="login-form" onSubmit={handleRegistration}>
                    <h2>Become a Blood Donor</h2>
                    <br/>

                    <label htmlFor="ID">ID</label>
                    <input
                        type="number"
                        id="ID"
                        value={ID}
                        onChange={(e) => setID(e.target.value)}
                        required
                    />
                    <br/>

                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <br/>

                    <label htmlFor="bloodGroup">Blood Group</label>
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

                    <label htmlFor="contactNo">Contact Number</label>
                    <input
                        type="text"
                        id="contactNo"
                        value={contactNo}
                        onChange={(e) => setcontactNo(e.target.value)}
                        required
                    />
                    <br/>

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br/>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
