import './index.scss'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate();

    const [logIn, setLogIn] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLogIn({
            ...logIn,
            [name]: value,
        });
    };

    const updateLogIn = (key) => {
        if (!logIn.username.trim() || !logIn.password.trim()) {
            alert("Please fill in both username and password.");
            return;
        }

        if (key === 'in') {
            console.log("Signing in with:", logIn.username, logIn.password);
            navigate('/input')
        } else {
            console.log("Signing up with:", logIn.username, logIn.password);
            navigate('/')
        }
    };

    return (
        <>
        <div className="center-container">
        <div className="log-in-container">
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
        </div>
        </div>
        </>
    );
};

export default LogIn;