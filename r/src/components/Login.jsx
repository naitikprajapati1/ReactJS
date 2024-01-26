import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { useState } from "react";

const Login = () => {
    const [username, setUserName] = useState("");
    const { setUser } = useContext(UserContext);
    console.log(useContext(UserContext));
    return (
        <>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={() => setUser(username)}>Submit</button>
        </>
    )
}

export default Login