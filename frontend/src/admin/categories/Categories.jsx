import { Link } from "react-router-dom"
import Datatable from "../../components/Datatable"
import { useContext, useEffect, useState } from "react";
import AdminContext from '../../contexts/AdminContext'
import Loading from "../../components/Loading";
import axiosAdmin from "../../axios/axiosAdmin";
import { toast } from "react-toastify";

const Categories = () => {
    const { getCategories } = useContext(AdminContext)
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async() => {
            const categories = await getCategories()
            setCategories(categories)
            setLoading(false)
        })()
    }, [])

    const handleDelete = async (id, name) => {
        if(confirm(`${name} kategorisini silmek istiyor musunuz?`)){
            const { status, data: { message } } = await axiosAdmin.delete(`/categories/${id}`)
            if(status === 200){
                const categories = await getCategories()
                setCategories(categories)
                toast.success(message)
            }
        }
    }

    const columns = [
        {
            name: 'Adı',
            selector: row => row.name,
        },
        {
            name: 'İşlemler',
            width: '220px',
            selector: row => (
                <>
                    <Link 
                        to={`/admin/kategoriler/${row.id}/duzenle`}
                        className="btn btn-warning btn-sm me-2"
                    >
                        <i className="fas fa-edit me-1"></i>
                        Düzenle
                    </Link>

                    <button
                        onClick={() => {
                            handleDelete(row.id, row.name)
                        }}
                        className="btn btn-danger btn-sm"
                    >
                        <i className="fas fa-trash me-2"></i>
                        Kaldır
                    </button>
                </>
            )
        }
    ];
    
    if(loading){
        return <Loading />
    }
    
    return (
        <>
            <div className="d-flex justify-content-between align-items-center gap-2">
                <h1 className="h4 mb-0">Kategoriler</h1>
                <Link to="/admin/kategoriler/ekle" className="btn btn-success"><i className="fas fa-plus"></i> Ekle</Link>
            </div>

            <hr />

            <Datatable 
                columns={columns}
                data={categories}
            />
        </>
    )
}

export default Categories
