import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Contact.css'; 

const Contact = () => {
    const [ID, setID] = useState('');
    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleContact = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/contact', {
                ID,
                fullName,
                email,
                message
            });

            if (response.status === 200) {
                alert('Message submitted successfully');
                navigate('/Home');
            }
        } catch (error) {
            console.error('Error submitting message:', error);
            alert('Error submitting message. Please try again later.');
        }
    };

    return (
        <div>
            <nav>
                <span className="mm">Blood Bank</span>
                <Link to="Home">Home</Link>
                <Link to="Login">Login</Link>
                <Link to="Contact">Contact Us</Link>
            </nav>
            <div className="contact-container">
                <form className="contact-form" onSubmit={handleContact}>
                    <h2>Contact Us</h2>
                    <label htmlFor="ID">ID</label>
                    <input
                        type="number"
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
                        onChange={(e) => setfullName(e.target.value)}
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
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
