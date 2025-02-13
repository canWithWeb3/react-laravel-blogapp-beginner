import { useNavigate, useParams } from "react-router-dom"
import FormInput from "../../components/FormInput"
import FormButton from "../../components/FormButton"
import { useFormik } from "formik"
import axiosAdmin from "../../axios/axiosAdmin"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Loading from "../../components/Loading"

const EditCategory = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(true)

    const { handleSubmit, handleChange, values, isSubmitting, setFieldValue } = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: async values => {
            try{
                const { status } = await axiosAdmin.patch(`/categories/${id}`, { ...values })
                if(status === 201){
                    toast.success('Kategori güncellendi')
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

    useEffect(() => {
        (async () => {
            const { status, data: { category: { name } } } = await axiosAdmin.get(`/categories/${id}`)
            if(status === 200){
                setFieldValue('name', name)
            }

            setLoading(false)
        })()
    }, [])

    if(loading){
        return <Loading />
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center gap-2">
                <h1 className="h4 mb-0">Kategori Düzenle</h1>
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

export default EditCategory
