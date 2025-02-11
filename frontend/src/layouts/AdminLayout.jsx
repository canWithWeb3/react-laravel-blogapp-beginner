import { Outlet } from 'react-router-dom'
import '../../src/admin.css'
import AdminSidebar from '../components/AdminSidebar'

const AdminLayout = () => {
    return (
        <div className='relative flex min-h-[100vh]'>
            {/* sidebar */}
            <div id='sidebar' className='hidden lg:block bg-green-950 text-white w-[240px]'>
                <div className='text-center'>
                    <div className='flex items-center border-b border-white p-4'>
                        <i className="fa-solid fa-asterisk text-lime-500 me-2 text-2xl"></i>
                        <span className="text-white text-3xl">Siohioma</span>
                    </div>
                </div>

                {/* menu */}
                <AdminSidebar />
            </div>

            {/* header and main */}
            <div className='w-full'>
                {/* header */}
                <header className='p-3 border-b border-gray-200 mb-6'>
                    <div className="flex justify-between">
                            <button className='border border-green-900 bg-green-900 text-white px-3 py-1.5 rounded-lg cursor-pointer hover:bg-lime-500 transition ease-in'>
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <button type="button" className='border border-gray-200 py-1 px-3 rounded-4xl cursor-pointer hover:bg-green-900 hover:text-white ease-in'>Çıkış yap</button>
                    </div>
                </header>

                {/* main */}
                <main className='py-2 px-6'>
                    <div className="p-3 border border-gray-200 rounded-2xl">

                        <Outlet />

                        <div id='deleteModal' className='hidden flex justify-center items-center absolute  bg-opacity-50 top-0 left-0 w-full h-full'>
                            <div className='relative w-[35%] flex flex-col gap-6 text-center justify-center items-center border border-gray-600 bg-gray-600 px-4 py-14 rounded-lg'>
                                <div id='closeDeleteModal' className='absolute top-4 end-4 border border-red-600 px-3 py-1.5 rounded-lg text-white bg-red-600 cursor-pointer'>
                                    <i className="fas fa-times"></i>
                                </div>

                                <div className='w-[40px] h-[40px] block text-2xl border-4 border-white rounded-full'>
                                    <i className="fa-solid fa-exclamation text-white"></i>
                                </div>

                                <p className='text-white text-lg'>
                                    Are you sure you want to delete this product?
                                </p>

                                <div className='flex justify-center items-center gap-4'>
                                    <button className='border border-white rounded-lg py-2 px-6 text-white cursor-pointer'>Hayır, İptal</button>
                                    <button className='border border-red-600 bg-red-600 rounded-lg py-2 px-6 text-white cursor-pointer'>Evet, Kaldır</button>
                                </div>
                            </div>
                        </div>

                        {/* title and create button */}
                        {/* <div className='flex gap-2 justify-between items-center border-b border-gray-200 pb-2'>
                            <h3 className='text-xl text-green-900 font-medium'>Kategori Ekle</h3>
                            <a href='#' className='bg-lime-500 border border-gray-200 py-1 px-3 rounded-4xl cursor-pointer hover:bg-green-900 hover:text-white ease-in'>
                                <i className="fas fa-plus me-2 font-semibold"></i>
                                Çıkış yap
                            </a>
                        </div> */}

                        {/* form */}
                        {/* <form>
                            <div className="grid lg:grid-cols-2 gap-4 my-4">
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="" className=''>Adı:</label>
                                    <input type="text" className='border border-gray-200 px-2 py-1.5 rounded-md focus:border-green-900 outline' />
                                </div>
                            </div>

                            <button type="submit" className="bg-lime-500 border border-gray-200 py-1 px-3 rounded-4xl cursor-pointer hover:bg-green-900 hover:text-white ease-in mt-4">Gönder</button>
                        </form> */}
                    </div>
                </main>
            </div>
        </div>    
    )
}

export default AdminLayout
