import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../layouts/AppLayout";
import Register from "../auth/Register";
import Login from "../auth/Login";
import GuestRoute from "./GuestRoute";
import AdminLayout from "./AdminLayout";
import Dashboard from "../admin/Dashboard";
import Categories from "../admin/categories/Categories";
import CreateCategory from "../admin/categories/CreateCategory";
import EditCategory from "../admin/categories/EditCategory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '',
                element: <GuestRoute />,
                children: [
                    { path: 'kayit-ol', element: <Register /> },
                    { path: 'giris-yap', element: <Login /> },
                ]
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { 
                path: 'kategoriler',
                children: [
                    { index: true, element: <Categories /> },
                    { path: 'ekle', element: <CreateCategory /> },
                    { path: ':id/duzenle', element: <EditCategory /> },
                ]
            }
        ]
    }
]);

export default router