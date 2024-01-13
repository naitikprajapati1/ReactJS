import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    if (!user) return <div>please login</div>
    return (<h1>
        Welcome {user.username}
    </h1>)
}

export default Profile