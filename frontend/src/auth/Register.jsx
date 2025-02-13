import { Helmet } from "react-helmet"
import FormInput from "../components/FormInput"
import { useFormik } from "formik"
import { useState } from "react"
import FormButton from "../components/FormButton"
import axiosGuest from "../axios/axiosGuest"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            repassword: '',
        },
        onSubmit: async values => {
            try{
                setErrors({})
                const { status, data: { message } } = await axiosGuest.post('/auth/register', { ...values })
                if(status === 201){
                    toast.success(message)
                    navigate('/giris-yap')
                }
            }catch(err){
                console.log('err', err)
                const { status, response: { data: { errors } } } = err
                if(status === 422){
                    setErrors(errors)
                }
            }
        }
    })

    return (
        <>
            <Helmet>
                <title>Kayıt ol</title>    
            </Helmet>            

            <div className="container my-5">
                <div className="col-xl-5 col-lg-7 mx-auto">
                    <div className="card">
                        <div className="card-header">Kayıt ol</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    {/* username */}
                                    <div className="col-12">
                                        <FormInput 
                                            title="Kullanıcı Adı"
                                            name="username"
                                            handleChange={handleChange}
                                            value={values.username}
                                            error={errors.username}
                                        />
                                    </div>

                                    {/* email */}
                                    <div className="col-12">
                                        <FormInput 
                                            type="email"
                                            title="E-posta"
                                            name="email"
                                            handleChange={handleChange}
                                            value={values.email}
                                            error={errors.email}
                                        />
                                    </div>

                                    {/* password */}
                                    <div className="col-12">
                                        <FormInput 
                                            type="password"
                                            title="Parola"
                                            name="password"
                                            handleChange={handleChange}
                                            value={values.password}
                                            error={errors.password}
                                        />
                                    </div>

                                    {/* repassword */}
                                    <div className="col-12">
                                        <FormInput 
                                            type="password"
                                            title="Parola (Tekrar)"
                                            name="repassword"
                                            handleChange={handleChange}
                                            value={values.repassword}
                                            error={errors.repassword}
                                        />
                                    </div>

                                    {/* button submit */}
                                    <div className="col-12">
                                        <FormButton 
                                            title="Kayıt ol"
                                            isSubmitting={isSubmitting}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
