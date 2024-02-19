import React, {useState} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function LoginPage({onLogin}){
    const [usename, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handlelogin = async(event) => {
        event.preventDefult();
        try{
            const res = await fetch('api',{
                method: 'POST',//need check
                body: JSON.stringify({usename, password}),
                headers:{
                    'Content-Type': 'application.json'
                }
            });

            if(res.ok){
                const data = await res.json();
                console.log(data);
                if(data.message === 'success'){
                    onLogin();
                }else if(data.message === 'admin'){   //use for admin login. Maybe can create one more page
                    navigate('/admin');
                }else {
                    alert('invalid');
                }
            }else{
                console.error('error', res.status);
            }
        }catch(err){
            console.log("?", err);
        }

        return(
            <div>
                <h2>login</h2>
                <form>
                    <div>
                        <label>username:</label>
                        <input
                        type="text"
                        value={usename}
                        onChange={(e) => setusername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>password:</label>
                        <input
                        type="text"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                        type="submit"
                        value="Login"
                        />
                    </div>
                    <Link to="/register">Sign up</Link>
                </form>
            </div>
        );
    };
}

