const [password, setPassword] = useState ("");

const navigate = useNavigate();

const handleLogin = () => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (
        username === savedUsername &&
        password === savedPassword) {

    navigate ("/game");
        } else {
            alert("Wrong username or password");
        }

        


    )





}