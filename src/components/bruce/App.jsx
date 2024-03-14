import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import FavourFormPage from './FavourForm';
import UserProfilePage from './UserProfilePage';
import AdminPage from './AdminPage';
import PersonInfoPage from "./personInfoPage";
function App() {

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "false"
  );

  const handleLogin = (userName) => {
    localStorage.setItem("loggedIn", "true");
    setLoggedIn(true);
    setuserName(userName);
  };

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setLoggedIn(false);
  };

  // const handleRegister = () => {
  //   localStorage.setItem("loggedIn", "false");
  //   setLoggedIn(false);
  // }
  // const handleAdmin = () => {
  //   localStorage.setItem("loggedIn", "true");
  //   setLoggedIn(true);
  // }

  const [userName, setuserName] = useState('');
  const [userID, setuserID] = useState('');

  useEffect(() => {
    if (loggedIn) {
      fetchUserID(userName);
    }
  }, [loggedIn, userName]);

  const fetchUserID = async (userName) => {
    try {
      const response = await fetch(`api/userid?username=${encodeURIComponent(userName)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setuserID(data.id); 
    } catch (error) {
      console.error('There was a problem fetching the userID:', error);
    }
  };

  return (
    <Router>
      <Routes>
        {!loggedIn ? (
          <>
          <Route path="/" element={<HomePage loggedIn={loggedIn} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin}/>} />
          <Route path="/signup" element={<SignUpPage onLogin={handleLogin}/>} />
          <Route path="/AdminPage" element={<AdminPage />} />
          </>
        ) : (
          <>
          <Route path="/" element={<HomePage loggedIn={loggedIn} onLogout={handleLogout} userName={userName} />} />
          <Route path="/FavourForm" element={<FavourFormPage />} />
          <Route path="/PersonInfoPage" element={<PersonInfoPage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/UserProfilePage" element={<UserProfilePage onLogout={handleLogout} userName={userName} />} />
          </>
        )}
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/favour-form" element={<FavourFormPage />} />
        <Route path="/PersonInfoPage" element={<PersonInfoPage />} />
        <Route path="/UserProfilePage" element={<UserProfilePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;