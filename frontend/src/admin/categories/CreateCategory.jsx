import { useFormik } from "formik"
import FormInput from "../../components/FormInput"
import FormButton from "../../components/FormButton"
import axiosAdmin from "../../axios/axiosAdmin"
import { toast } from "react-toastify"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateCategory = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: async values => {
            setErrors({})
            try{
                const { status } = await axiosAdmin.post('/categories', { ...values })
                if(status === 201){
                    toast.success('Kategori eklendi')
                    navigate('/admin/kategoriler')
                }
            }catch(err){
                const { status, response: { data: { errors } } } = err
                if(status == 422){
                    setErrors(errors)                
                }else{
                    toast.error('Bilinmeyen hata')
                }
            }
        }
    })

    return (
        <>
            {/* title and create button */}
            <div className='flex gap-2 justify-between items-center border-b border-gray-200 pb-2'>
                <h3 className='text-xl text-green-900 font-medium'>Kategori Ekle</h3>
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

export default CreateCategory
