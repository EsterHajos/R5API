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



    }



}