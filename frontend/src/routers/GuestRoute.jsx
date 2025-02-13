import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import axiosGuest from "../axios/axiosGuest"
import Loading from '../components/Loading'

const GuestRoute = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const authToken = JSON.parse(localStorage.getItem('auth_token'))
            if(authToken){
                try{
                    const { status } = await axiosGuest.get('/user', {
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    })
    
                    if(status === 200){
                        navigate('/')
                    }
                }catch(err){
                    const { status } = err
                    if(status === 401){
                        localStorage.removeItem('auth_token')
                    }
                    console.log('err', err)
                }finally{
                    setLoading(false)
                }
            }else{
                setLoading(false)
            }
        })()
    }, [])

    if(loading){
        return (
            <Loading />         
        )
    }else{
        return (
            <Outlet />
        )
    }
}

export default GuestRoute
