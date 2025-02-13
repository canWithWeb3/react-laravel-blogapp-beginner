import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import { toast } from "react-toastify"

const Navbar = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    const handleLogout = async () => {
        await logout()
        toast.success('Çıkış yapıldı')
        navigate('/giris-yap')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">BlogApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="#">Giriş</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {/* register and login */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        { user?.username ? (
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    { user.username }
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><button onClick={() => handleLogout()} type="button" className="dropdown-item">Çıkış yap</button></li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user"></i>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/giris-yap">Giriş yap</Link></li>
                                    <li><Link className="dropdown-item" to="/kayit-ol">Kayıt ol</Link></li>
                                </ul>
                            </li>
                        ) }
                    </ul>
                    
                    {/* search form */}
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
