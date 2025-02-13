import { useNavigate } from "react-router-dom"
import FormInput from "../../components/FormInput"
import FormButton from "../../components/FormButton"
import { useFormik } from "formik"
import axiosAdmin from "../../axios/axiosAdmin"
import { useState } from "react"
import { toast } from "react-toastify"

const CreateCategory = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: async values => {
            try{
                const { status } = await axiosAdmin.post('/categories', { ...values })
                if(status === 201){
                    toast.success('Kategori eklendi')
                    return navigate('/admin/kategoriler')
                }
            }catch(err){
                const { status, response: { data: { errors } } } = err
                if(status === 422){
                    setErrors(errors)
                }
            }
        }
    })

    return (
        <>
            <div className="d-flex justify-content-between align-items-center gap-2">
                <h1 className="h4 mb-0">Kategori Ekle</h1>
            </div>

            <hr />
            
            <form onSubmit={handleSubmit}>
                <div className="row">
                    {/* name */}
                    <div className="col-md-6">
                        <FormInput 
                            title="Adı"
                            name="name"
                            handleChange={handleChange}
                            value={values.name}
                            error={errors.name}
                        />
                    </div> 

                    <div className="col-12">
                        <FormButton 
                            isSubmitting={isSubmitting}
                        />    
                    </div>                   
                </div>
            </form>
        </>
    )
}

export default CreateCategory
