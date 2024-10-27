import React, { useState } from 'react';

const LogIn = () => {
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
            // Sign-in logic
            console.log("Signing in with:", logIn.username, logIn.password);
        } else {
            // Sign-up logic
            console.log("Signing up with:", logIn.username, logIn.password);
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
