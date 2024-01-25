import { useParams } from "react-router-dom"

const Users = () => {
    const { id } = useParams();
    return (
        <div>Users: {id}</div>
    )
}

export default Users