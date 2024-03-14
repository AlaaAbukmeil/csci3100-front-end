import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = ({onLogout}) => {
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
        case 'Info':
          url = '/api/Info';
          break;
        case 'Product_list':
          url = '/api/Product_list';
          break;
        case 'Report':
            url = '/api/Report';
            break;
        case 'Sales_Data':
            url = '/api/Sales_Data';
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

    // Placeholder content rendering logic based on the active section
    switch (activeSection) {
      case 'Info':
        return <div>
          Admin Information
        </div>;
      case ' Product List':
        return <div>
           Product List
        </div>;
      case 'Report':
        return <div>
          Report Content
        </div>;
      case 'Sales_Data':
        return <div>
          Sales Data
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

  const Logout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="user-profile-page">
      <div className="sidebar">
        <div className="user-photo"></div>
        <button onClick={() => handleSectionClick('Info')} className={activeSection === 'Info' ? 'active' : ''}>Information</button>
        <button onClick={() => handleSectionClick('Product List')} className={activeSection === 'Product List' ? 'active' : ''}>Product List</button>
        <button onClick={() => handleSectionClick('Report')} className={activeSection === 'Report' ? 'active' : ''}>Report</button>
        <button onClick={() => handleSectionClick('Sales_Data')} className={activeSection === 'Sales_Data' ? 'active' : ''}>Sales Datat</button>
        <button onClick={() => handleSectionClick('function_1')} className={activeSection === 'function_1' ? 'active' : ''}>function 1</button>
        <button onClick={() => handleSectionClick('function_2')} className={activeSection === 'function_2' ? 'active' : ''}>function 2</button>
        <button onClick={() => handleSectionClick('function_3')} className={activeSection === 'function_3' ? 'active' : ''}>function 3</button>
        <button onClick={Logout}>Log Out</button>
      </div>
      <div className="main-content">
        <div className="user-header">
          <div className="user-name">Admin Name</div>
          <div className="user-id">Admin ID</div>
        </div>
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;