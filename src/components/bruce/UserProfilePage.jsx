import React, { useState, useEffect } from 'react';
import './UserProfilePage.css'; 
import { useNavigate } from 'react-router-dom';

const UserProfilePage = ({onLogout, userName}) => {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [contentData, setContentData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSectionClick = section => {
    setActiveSection(section);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      let url = '';

      switch (activeSection) {
        case 'personalInfo':
          url = '/api/personal-info';
          break;
        case 'transactionRecord':
          url = '/api/transaction-record';
          break;
      }

      if (!url) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setContentData(prevData => ({ ...prevData, [activeSection]: data }));
      } catch (error) {
        console.error('Fetching data failed:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [activeSection]);

  const updateinfo = () => {
    navigate('/FavourForm');
  };

  const renderContent = () => {
    const sectionContent = contentData[activeSection];

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (sectionContent) {
      return <div>{sectionContent}</div>;
    }

    switch (activeSection) {
      case 'personalInfo':
        return <div>
          Personal Information Content
          <button onClick={updateinfo}>Upadte Personal Information</button>
        </div>;
      case 'transactionRecord':
        return <div>
          Transaction Record Content
        </div>;
      case 'pointsCoupons':
        return <div>
          Points/Coupons Content
        </div>;
      case 'WishList':
        return <div>
          WishList Content
        </div>;
      case 'function_1':
        return <div>
          function_1
        </div>;
      case 'function_2':
        return <div>
          function_2
        </div>;
      case 'function_3':
        return <div>
          function_3
        </div>;
      default:
        return <div>
          Select a section
        </div>;
    }
  };

  const handleBackToHomepage = () => {
    navigate('/');
  };

  const Logout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="user-profile-page">
      <div className="sidebar">
        <div className="user-photo"></div>
        <button onClick={() => handleSectionClick('personalInfo')} className={activeSection === 'personalInfo' ? 'active' : ''}>Personal Information</button>
        <button onClick={() => handleSectionClick('transactionRecord')} className={activeSection === 'transactionRecord' ? 'active' : ''}>Transaction Record</button>
        <button onClick={() => handleSectionClick('pointsCoupons')} className={activeSection === 'pointsCoupons' ? 'active' : ''}>Points / Coupons</button>
        <button onClick={() => handleSectionClick('WishList')} className={activeSection === 'WishList' ? 'active' : ''}>WishList</button>
        <button onClick={() => handleSectionClick('function_1')} className={activeSection === 'function_1' ? 'active' : ''}>function 1</button>
        <button onClick={() => handleSectionClick('function_2')} className={activeSection === 'function_2' ? 'active' : ''}>function 2</button>
        <button onClick={() => handleSectionClick('function_3')} className={activeSection === 'function_3' ? 'active' : ''}>function 3</button>
        <button onClick={handleBackToHomepage}>Back to Homepage</button>
        <button onClick={Logout}>Log Out</button>
      </div>
      <div className="main-content">
        <div className="user-header">
          <div className="user-name">{userName || 'User Name'}</div>
          <div className="user-id">User ID</div>
        </div>
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;