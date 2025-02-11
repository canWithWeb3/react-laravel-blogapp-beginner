import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../contexts/AuthContext"
import Loading from "../components/Loading"

const AppLayout = () => {
    const { getAuth } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const auth_token = JSON.parse(localStorage.getItem('auth_token'))
        if(auth_token){
            getAuth()
                .then(() => setLoading(false))
        }else{
            setLoading(false)
        }
        setLoading(false)
    }, [])

    if(loading)
        return <Loading />

    return (
        <>
            <Navbar />

            <Outlet />
        </>
    )
}

export default AppLayout
