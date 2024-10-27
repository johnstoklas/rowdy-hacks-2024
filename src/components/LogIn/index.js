import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ setUserId }) => {
    const [logIn, setLogIn] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLogIn({
            ...logIn,
            [name]: value,
        });
    };

    const updateLogIn = async (key) => {
        if (!logIn.username.trim() || !logIn.password.trim()) {
            alert("Please fill in both username and password.");
            return;
        }

        try {
            let response;
            if (key === 'in') {
                // Sign-in logic
                response = await axios.post('http://localhost:5000/auth/signin', {
                    formFields: [
                        { id: 'email', value: logIn.username },
                        { id: 'password', value: logIn.password }
                    ]
                });

                if (response.status === 200) {
                    // Store the username in localStorage (you can also store the userId if needed)
                    localStorage.setItem('username', logIn.username);
                    const userId = response.data.userId;  // Assuming backend sends userId
                    //localStorage.setItem('userId', userId);  // Store userId in localStorage
                    alert("Signed in successfully");
                    navigate('/home');  // Navigate to home after successful sign-in
                } else {
                    alert("Sign-in failed, please try again.");
                }

            } else {
                // Sign-up logic
                response = await axios.post('http://localhost:5000/auth/signup', {
                    formFields: [
                        { id: 'email', value: logIn.username },
                        { id: 'password', value: logIn.password }
                    ]
                });

                if (response.status === 200) {
                    const userId = response.data.userId;  // Assuming backend sends userId
                    localStorage.setItem('userId', userId);  // Store userId in localStorage
                    alert("Signed up successfully");
                } else {
                    alert("Sign-up failed, please try again.");
                }
            }
        } catch (error) {
            console.error('Error during authentication:', error.response ? error.response.data : error);
            alert('Authentication failed. Please try again.');
        }
    };

    return (
        <>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={logIn.username}
                placeholder="Enter your username"
                onChange={handleInputChange}
                required
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={logIn.password}
                placeholder="Enter your password"
                onChange={handleInputChange}
                required
            />

            <button id="signIn-button" onClick={() => updateLogIn('in')}> Sign In </button>
            <button id="signUp-button" onClick={() => updateLogIn('up')}> Sign Up </button>
        </>
    );
};

export default LogIn;
