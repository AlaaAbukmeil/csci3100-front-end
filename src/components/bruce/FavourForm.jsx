import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FavourFormPage = () => {
  const [favour, setFavour] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFavour(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Favour requested:', favour);
    navigate('/'); 
  };

  return (
    <div className="favour-form-container">
      <h1>Request a Favour</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="favour">What do you need help with?</label>
          <textarea
            id="favour"
            name="favour"
            value={favour}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FavourFormPage;