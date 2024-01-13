import { useContext, useState } from "react"
import UserContext from "../context/UserContext";

const Login = () => {

    const [username, setUSerName] = useState('');
    const [email, setEmail] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, email })
    }
    return (
        <div>
            <h2>LOGIN</h2>
            <input type="text" value={username} onChange={(e) => setUSerName(e.target.value)} placeholder="Enter Username" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login