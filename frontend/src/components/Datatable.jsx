import PropTypes from "prop-types"
import { useEffect } from "react"

const Datatable = ({ columns, options, data }) => {
    useEffect(() => {
        console.log('data', data)
    }, [])

    if(columns.length > 0 , data.length > 0){
      return (
            <div className="bg-white border border-gray-200 rounded-lg overflow-x-scroll-auto overflow-y-hidden my-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            { columns.map((col, idx) => (
                                <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {col}
                                </th>
                            )) }
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((value, idx) => 
                                    <td key={idx} className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{value}</div>
                                    </td>
                                )}

                                { options.includes('edit') && (
                                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Düzenle</div>
                                    </td>
                                ) }
                            </tr>
                        ))}
                        {/* <tr>
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
                        </tr> */}
                    </tbody>
                </table>
            </div>
      )
    }
}

export default Datatable

Datatable.propTypes = {
  columns: PropTypes.array,
  options: PropTypes.array,
  data: PropTypes.array,
}