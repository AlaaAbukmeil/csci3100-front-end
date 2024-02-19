import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage({onRegister}) {
    const [usename, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [birthday, setbirthday] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async(event) => {
        event.preventDefault();
        try{
            const response = await fetch('api',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({usename, password, birthday}),
            });
            const data = await response.json();
            if (data.message === 'success') {
                alert('Registration successful');
                onRegister();
                navigate('/login');
              } else {
                alert(data.message || 'Registration failed');
              }
        }catch (error) {
            console.error('Registration error:', error);
          }
    };

    return(
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>usename:</label>
                    <input
                    type="text"
                    value={usename}
                    onChange={(e) => setusername(e.target.value)}/>
                </div>
                <div>
                    <label>password:</label>
                    <input
                    type="text"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <div>
                    <label>Brithday</label>
                    <input 
                    type="date"
                    value={birthday}
                    onChange={(e) => setbirthday(e.target.value)}/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );

}


export default SignUpPage;