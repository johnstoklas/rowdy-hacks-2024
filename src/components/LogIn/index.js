import React, { useState } from 'react'

const LogIn = () => {
    const [logIn, setLogIn] = useState({ 
        username: "",
        password: "",
    });

    const updateLogIn = (key) => { 
        logIn.username = document.getElementById('username').value;
        logIn.password = document.getElementById('password').value;
        if(key === 'in') {

        }
        else {

        }
    }
  return (
    <>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Enter your username" required />

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" required />

    <button id="signIn-button" > Sign In </button>
    <button id="signUp-button" > Sign Up </button>

    </>
  )
}

export default LogIn