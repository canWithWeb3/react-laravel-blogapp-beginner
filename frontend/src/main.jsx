import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routers/router'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AuthState from './states/AuthState'
import AdminState from './states/AdminState'

createRoot(document.getElementById('root')).render(
    <AdminState>
        <AuthState>
            <RouterProvider router={router} />
            <ToastContainer />
        </AuthState>
    </AdminState>
)
