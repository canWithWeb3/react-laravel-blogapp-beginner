import { useFormik } from "formik"
import {useState } from "react"
import axiosGuest from "../axios/axiosGuest"
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const { handleSubmit, handleChange, isSubmitting } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            repassword: '',
        },
        onSubmit: async values => {
            try{
                setErrors({})
                const { status } = await axiosGuest.post('/auth/register', { ...values })
                if(status === 201){
                    toast.success('Kayıt yapıldı')
                    return navigate('/giris-yap')
                }
            }catch(err){
                const { response: { status, data: { errors } } } = err
                if(status === 422)
                    setErrors(errors)
            }
        }
    })

    return (
        <div className="container">
            <div className="col-xl-5 col-lg-7 col-md-9 mx-auto my-5">
                <div className="card">
                    <div className="card-header">Kayıt Ol</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {/* username */}
                            <FormInput
                                title="Kullanıcı Adı"
                                name="username"
                                handleChange={handleChange}
                                error={errors?.username}
                            />

                            {/* email */}
                            <FormInput
                                type="email"
                                title="E-posta"
                                name="email"
                                handleChange={handleChange}
                                error={errors?.email}
                            />

                            {/* password */}
                            <FormInput
                                type="password"
                                title="Parola"
                                name="password"
                                handleChange={handleChange}
                                error={errors?.password}
                            />

                            {/* repassword */}
                            <FormInput
                                type="password"
                                title="Parola (Tekrar)"
                                name="repassword"
                                handleChange={handleChange}
                                error={errors?.repassword}
                            />

                            {/* submit button */}
                            <FormButton 
                                title="Kayıt Ol" 
                                isSubmitting={isSubmitting} 
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
