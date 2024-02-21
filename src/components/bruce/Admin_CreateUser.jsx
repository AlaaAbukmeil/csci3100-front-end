import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Admin_CreateUser({onUserCreate}) {
    const [userdata, setuserdata] = useState({
        userID: '',
        username: '',
        password: '',
        isAdmin: false
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value, check} = e.target;
        setuserdata({
            ...userdata,
            [name]:name === 'isAdmin' ? check: value
        })
    };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

       const data = await response.json();
      if (data.message === 'success') {
          alert('create successful');
          onRegister(e);
        } else {
            alert(data.message || 'Creation failed');
        }

    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const deleteUser = (e) => {
    const deleteuser = userdata.filer(userdata => userdata.userID !== e);
    setuserdata(deleteUser);
  };

  return (
    <div>
        <div>
            <ul>
                {userdata.map(user =>(
                    <li key={userdata.userID}>
                        {userdata.username}
                        <button onClick={() => deleteUser(userdata.userID)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>
            <input type="checkbox" name="isAdmin" checked={userData.isAdmin} onChange={handleChange} />
            Is Admin
          </label>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );

}

export default Admin_CreateUser;