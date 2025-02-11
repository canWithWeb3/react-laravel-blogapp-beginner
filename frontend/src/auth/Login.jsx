import { useFormik } from "formik"
import {useState } from "react"
import axiosGuest from "../axios/axiosGuest"
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const { handleSubmit, handleChange, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async values => {
            try{
                setErrors({})
                const { status, data: { token, role } } = await axiosGuest.post('/auth/login', { ...values })
                console.log('role', role)
                if(status === 201){
                    localStorage.setItem('auth_token', JSON.stringify(token))
                    toast.success('Giriş yapıldı')
                    if(role == 'admin'){
                        return navigate('/admin')
                    }

                    return navigate('/')
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
                    <div className="card-header">Giriş Yap</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
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

                            {/* submit button */}
                            <FormButton 
                                title="Giriş Yap" 
                                isSubmitting={isSubmitting} 
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
