import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>Profile,{user}</div>
    )
}

export default Profile