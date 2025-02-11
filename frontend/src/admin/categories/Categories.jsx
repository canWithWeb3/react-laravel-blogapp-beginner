import { Link } from "react-router-dom"
import DataTable from 'react-data-table-component';
import { useContext, useEffect } from "react";
import CategoryContext from '../../contexts/CategoryContext'

const columns = [
	{
		name: 'Adı',
		selector: row => row.name,
	},
    {
        name: 'İşlemler',
        selector: row => (
            <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/admin/kategoriler/${row.id}/duzenle`} className="py-1 px-3 border border-amber-300 bg-amber-300 hover:bg-white transition ease-in rounded-lg me-2">
                    <i className="fas fa-edit me-1.5"></i>
                    Düzenle
                </Link>

                <button type="button" className="delete-btn py-1 px-3 border border-red-400 bg-red-400 hover:bg-white transition ease-in rounded-lg cursor-pointer">
                    <i className="fas fa-trash me-1.5"></i>
                    Kaldır
                </button>
            </td>
        ),
        width: '240px'
    }
];

const paginationComponentOptions = {
    rowsPerPageText: 'Sayfa başına satır sayısı',
    rangeSeparatorText: 'arasında',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Tümünü Seç'
  };

const Categories = () => {
    const { getCategories, categories } = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            {/* title and create button */}
            <div className='flex gap-2 justify-between items-center border-b border-gray-200 pb-2'>
                <h3 className='text-xl text-green-900 font-medium'>Kategoriler</h3>
                <Link to='/admin/kategoriler/ekle' className='bg-lime-500 border border-gray-200 py-1 px-3 rounded-4xl cursor-pointer hover:bg-green-900 hover:text-white ease-in'>
                <i className="fas fa-plus me-2 font-semibold"></i>
                    Ekle
                </Link>
            </div>

            {/* table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-x-scroll-auto overflow-y-hidden my-6">
                <DataTable
                    columns={columns}
                    data={categories}
                    paginationComponentOptions={paginationComponentOptions}
                    pagination
                />
            </div>
        </>
    )
}

export default Categories
