import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../contexts/AuthContext"
import Loading from "../components/Loading"

const AppLayout = () => {
    const { getAuth } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            await getAuth()
                .then(setLoading(false))
        })()
    }, [])

    if(loading){
        <Loading />
    }

    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout
