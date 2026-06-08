import { useState } from "react";
import { useNavigate} from "react-router-dom";

function Register () {

    const [username, setUsername] = useState (" ");
    const [password, setPassword] = useState (" ");

    const navigate = useNavigate();

    const handleRegister = () => {
        if (password.lenght < 5) {
            alert("Password must be at least 5 characters");
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert ("Account created!"); 

        navigate ("/login");
    };

    return (
        <div>
            <h1>Register to play!</h1>

            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername (e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={handleRegister}>Register</button>
        </div>
    );
}


export default Register;