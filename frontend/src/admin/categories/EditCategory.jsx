import { useFormik } from "formik"
import FormInput from "../../components/FormInput"
import FormButton from "../../components/FormButton"
import axiosAdmin from "../../axios/axiosAdmin"
import { toast } from "react-toastify"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CategoryContext from "../../contexts/CategoryContext"

const EditCategory = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { getCategoryById } = useContext(CategoryContext)
    const [errors, setErrors] = useState({})

    const { handleSubmit, handleChange, values, isSubmitting, setFieldValue } = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: async values => {
            setErrors({})
            try{
                const res = await axiosAdmin.patch(`/categories/${id}`, { ...values })
                console.log('res', res)
                if(res.status === 201){
                    toast.success('Kategori düzenlendi')
                    navigate('/admin/kategoriler')
                }
            }catch(err){
                console.log('err', err)
                const { status, response: { data: { errors } } } = err
                if(status == 422){
                    setErrors(errors)                
                }else{
                    toast.error('Bilinmeyen hata')
                }
            }
        }
    })

    useEffect(() => {
        (async() => {
            const { name } = await getCategoryById(id)
            setFieldValue('name', name)
        })()
    }, [])

    return (
        <>
            {/* title and create button */}
            <div className='flex gap-2 justify-between items-center border-b border-gray-200 pb-2'>
                <h3 className='text-xl text-green-900 font-medium'>Kategori Düzenle</h3>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-4 my-4">
                    {/* name */}
                    <FormInput
                        title="Adı"
                        name="name"
                        value={values.name}
                        handleChange={handleChange}
                        error={errors.name}
                    />

                </div>

                <FormButton isSubmitting={isSubmitting} />
            </form>
        </>
    )
}

export default EditCategory
