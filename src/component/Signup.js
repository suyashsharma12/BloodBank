import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign.css'; // Import your CSS file
import axios from 'axios'; 

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:8081/sign', {
                fullName,
                email,
                password,
                confirmPassword
            });

            if (response.status === 200) {
                navigate('/Login');
                alert('Signup successful. Please login.');
            } else {
                alert('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Error signing up. Please try again later.');
        }
    };

    return (
        <div>
            <nav>
                <span className="mm">Blood Bank</span>
                <a href="Home">Home</a>
                <a href="Login">Login</a>
                <a href="contact">Contact Us</a>
            </nav>
            <div className="signup-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>Signup</h2>
                    <br/>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br/>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <br/>
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
