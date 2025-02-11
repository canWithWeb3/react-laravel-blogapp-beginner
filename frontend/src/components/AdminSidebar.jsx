import { Link } from "react-router-dom"

const AdminSidebar = () => {
    return (
        <div className='mt-6'>
            {/* <h2 className='ps-3 text-2xl mb-4'>Menu</h2> */}

            <ul className='flex flex-col gap-4 p-1 p-0'>
                <li>
                    <Link to="/admin" className='py-1 px-2 rounded-md hover:bg-white hover:text-black text-white text-lg block transition ease-in'>
                        <i className="fa-solid fa-house text-lime-500 me-2.5"></i>
                        Kontrol Paneli
                    </Link>
                </li>

                <li>
                    <Link to="/admin/kategoriler" className='py-1 px-2 rounded-md hover:bg-white hover:text-black text-white text-lg block transition ease-in'>
                        <i className="fas fa-graduation-cap text-lime-500 me-2.5"></i>
                        Kategoriler
                    </Link>
                </li>

                <li>
                    <Link to="/admin/kullanicilar" className='py-1 px-2 rounded-md hover:bg-white hover:text-black text-white text-lg block transition ease-in'>
                        <i className="fa-solid fa-users text-lime-500 me-2.5"></i>
                        Kullanıcılar
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminSidebar
