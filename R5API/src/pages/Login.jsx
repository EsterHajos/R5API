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

    return (
        <div>
            <h1>Login</h1>

            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={hangleLogin}>Login</button>
        </div>
    );    
    

}

export default Login;