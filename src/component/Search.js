// src/SearchPage.js
import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './Search.css';

Modal.setAppElement('#root');

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDonor, setSelectedDonor] = useState(null);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8081/register/search?bloodGroup=${searchQuery}`);
            setResults(response.data);
        } catch (error) {
            console.error("There was an error fetching the data!", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/register/${id}`);
            setResults(results.filter(result => result.id !== id));
        } catch (error) {
            console.error("There was an error deleting the data!", error);
        }
    };

    const handleUpdate = (donor) => {
        setSelectedDonor(donor);
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
        setSelectedDonor(null);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8081/register/${selectedDonor.id}`, selectedDonor);
            setResults(results.map(result => result.id === selectedDonor.id ? selectedDonor : result));
            handleModalClose();
        } catch (error) {
            console.error("There was an error updating the data!", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedDonor({ ...selectedDonor, [name]: value });
    };

    return (
        <div className='blood-search-container'>
            <h1>Search for Blood Donors</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter blood group"
                />
                <button type="submit">Search</button>
            </form>
            {results.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Blood Group</th>
                            <th>Contact No</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.id}>
                                <td>{result.id}</td>
                                <td>{result.fullName}</td>
                                <td>{result.bloodGroup}</td>
                                <td>{result.contactNo}</td>
                                <td>{result.email}</td>
                                <td className="actions">
                                    <button onClick={() => handleUpdate(result)}>Update</button>
                                    <button onClick={() => handleDelete(result.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleModalClose}
                contentLabel="Update Donor"
                className="modal-content"
            >
                <h2>Update Donor</h2>
                {selectedDonor && (
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Full Name:
                            <input
                                type="text"
                                name="fullName"
                                value={selectedDonor.fullName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Blood Group:
                            <input
                                type="text"
                                name="bloodGroup"
                                value={selectedDonor.bloodGroup}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Contact No:
                            <input
                                type="text"
                                name="contactNo"
                                value={selectedDonor.contactNo}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={selectedDonor.email}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleModalClose}>Cancel</button>
                    </form>
                )}
            </Modal>
        </div>
    );
};

export default Search;
