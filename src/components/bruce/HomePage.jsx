import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = ({ loggedIn, userName, onLogout }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!loggedIn) {
  //     navigate('/login');
  //   }
  // }, [loggedIn, navigate]);

  const fetchUserInfo = async () => {
    const response = await fetch('/api');
    const data = await response.json();
    return data;
  };

  const Logout = () => {
    onLogout();
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page{loggedIn ? `, welcome back ${userName}` : ''}</h1> 
      {loggedIn ? (
        <>
        <p>{userName}</p>
        <button onClick={() => navigate('/UserProfilePage')}>Go to Profile</button>
        <button onClick={Logout}>Log Out</button>
        </>
      ) : (
        <button onClick={() => navigate('/login')}>Go to Login</button>
      )}
    </div>
  );
};

export default HomePage;