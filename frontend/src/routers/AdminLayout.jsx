import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import axiosGuest from "../axios/axiosGuest"
import Loading from '../components/Loading'
import AuthContext from "../contexts/AuthContext"
import { toast } from "react-toastify"

const AdminLayout = () => {
    const navigate = useNavigate()
    const { getAuth, logout, user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    const handleLogout = async () => {
        await logout()
        toast.success('Çıkış yapıldı')
        navigate('/giris-yap')
    }

    useEffect(() => {
        (async () => {
            const authToken = JSON.parse(localStorage.getItem('auth_token'))
            if(authToken){
                try{
                    const res = await axiosGuest.get('/user', {
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    })
                    if(res.status === 200 && res.data.user.role != 'admin'){
                        return navigate('/giris-yap')
                    }

                    await getAuth()
                }catch(err){
                    const { status } = err
                    if(status === 401){
                        localStorage.removeItem('auth_token')
                        await logout()
                    }
                    return navigate('/giris-yap')
                }finally{
                    setLoading(false)
                }
            }else{
                return navigate('/giris-yap')
            }
        })()
    }, [])

    if(loading){
        return (
            <Loading />         
        )
    }

    return (
        <div className="d-flex">
            <div style={{ width: 290, minHeight: '100vh', backgroundColor: '#004d40' }}>
                <div className="p-2 border-bottom border-white border-2">
                    <h1 className="h2 text-white text-center">BlogApp</h1>
                </div>

                <div className="my-4">
                    <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-3">
                        {/* dashboard */}
                        <li className="px-2">
                            <Link 
                                to="/admin" 
                                className="p-2 bg-white d-block  border border-white rounded-3"
                            >
                                Kontrol Paneli
                            </Link>
                        </li>

                        {/* categories */}
                        <li className="px-2">
                            <Link 
                                to="/admin/kategoriler" 
                                className="p-2 bg-white d-block  border border-white rounded-3"
                            >
                                Kategoriler
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{ minHeight: '100vh', backgroundColor: '#E5E7EB' }} className="w-100">
                <header style={{ height: 63.56 }} className="p-3 d-flex justify-content-between align-items-center gap-2 flex-wrap bg-warning p-2">
                    <div>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-dark" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {user.username}
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <button onClick={() => handleLogout()} type="button" className="dropdown-item">
                                    Çıkış yap
                                </button>
                            </li>
                        </ul>
                    </div>
                </header>

                <main className="p-3">
                    <div className="card">
                        <div className="card-body">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout
