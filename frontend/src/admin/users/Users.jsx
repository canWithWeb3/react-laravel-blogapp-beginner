import { Link } from "react-router-dom"

const Users = () => {
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
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                                        <div className="text-sm text-gray-500">jane.cooper@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=2" alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">John Doe</div>
                                        <div className="text-sm text-gray-500">john.doe@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Frontend Developer</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Developer</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=3" alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">Alice Johnson</div>
                                        <div className="text-sm text-gray-500">alice.johnson@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">UX Designer</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Designer</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Users
