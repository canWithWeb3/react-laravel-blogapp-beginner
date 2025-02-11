import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../layouts/AppLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../admin/Dashboard";
import Categories from "../admin/categories/Categories";
import CreateCategory from "../admin/categories/CreateCategory";
import Users from "../admin/users/Users";
import EditCategory from "../admin/categories/EditCategory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/kayit-ol', element: <Register /> },
            { path: '/giris-yap', element: <Login /> },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            {
                path: 'kullanicilar',
                children: [
                    { index: true, element: <Users /> }
                ]
            },
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