import { useState } from "react"
import UserContext from "../context/UserContext";
import { useContext } from "react";


const Login = () => {
    const [username, setUserName] = useState("");
    // UserContext
    const { setUser } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username);
    }
    return (
        <>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
            <button onClick={handleSubmit}>submit</button>
        </>
    )
}

export default Login