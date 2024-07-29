import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const loginResponse = await fetch('http://localhost:8081/sign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!loginResponse.ok) {
                const errorResponse = await loginResponse.json();
                if (errorResponse.message === 'Invalid credentials') {
                    alert('Invalid email or password. Please try again.');
                } else if (errorResponse.message === 'Email not registered') {
                    alert('Email is not registered. Please sign up.');
                } else {
                    alert('An error occurred during login. Please try again later.');
                }
                return;
            }

            const { userId, token } = await loginResponse.json();
            localStorage.setItem('token', token);
            navigate('/Home');
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again later.');
        }
    };

    return (
        <div>
            <nav>
                <span className="mm">Blood Bank</span>
                <a href="Home">Home</a>
                <a href="Signup">Signup</a>
                <a href="Contact">Contact Us</a>
            </nav>
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
