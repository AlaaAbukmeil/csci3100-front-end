import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css';

const PersonInfoPage = () => {
  const [personInfo, setPersonInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    birthday: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonInfo({
      ...personInfo,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Person Information:', personInfo);
    navigate('/FavourForm');
  };

  return (
    <div>
      <h1>Person Information</h1>
      <form onSubmit={handleSubmit} className="person-info-form">
        <div>
          <label>First Name:
            <input
              type="text"
              name="firstName"
              value={personInfo.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        
        <div>
          <label>Last Name:
            <input
              type="text"
              name="lastName"
              value={personInfo.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>Email:
            <input
              type="email"
              name="email"
              value={personInfo.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        
        <div>
          <label>Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={personInfo.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>Address:
            <textarea
              name="address"
              value={personInfo.address}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>Birthday:
            <input
              type="date"
              name="birthday"
              value={personInfo.birthday}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default PersonInfoPage;