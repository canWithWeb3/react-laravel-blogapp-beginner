import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"

const Dashboard = () => {
    const { user } = useContext(AuthContext)

    return (
        <>
            Dashboard { JSON.stringify(user, 2, null)}
        </>
    )
}

export default Dashboard
