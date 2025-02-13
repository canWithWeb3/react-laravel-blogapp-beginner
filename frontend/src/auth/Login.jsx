import { Helmet } from "react-helmet"
import FormInput from "../components/FormInput"
import { useFormik } from "formik"
import { useContext, useState } from "react"
import FormButton from "../components/FormButton"
import axiosGuest from "../axios/axiosGuest"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import Error from "../components/Error"

const Login = () => {
    const navigate = useNavigate()
    const { getAuth } = useContext(AuthContext)
    const [errors, setErrors] = useState({})
    const [error, setError] = useState("")

    const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async values => {
            try{
                setErrors({})
                setError("")
                const { status, data: { message, token, role } } = await axiosGuest.post('/auth/login', { ...values })
                if(status === 201){
                    localStorage.setItem('auth_token', JSON.stringify(token))
                    await getAuth()
                    toast.success(message)
                    if(role === 'admin'){
                        return navigate('/admin') 
                    }
                    return navigate('/')
                }
            }catch(err){
                console.log('err', err)
                const { status, response: { data: { errors, message } } } = err
                if(status === 422){
                    setErrors(errors)
                }else if(status === 401){
                    setError(message)
                }
            }
        }
    })

    return (
        <>
            <Helmet>
                <title>Giriş yap</title>    
            </Helmet>            

            <div className="container my-5">
                <div className="col-xl-5 col-lg-7 mx-auto">
                    <div className="card">
                        <div className="card-header">Giriş yap</div>
                        <div className="card-body">
                            <Error error={error} />

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
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

                                    {/* button submit */}
                                    <div className="col-12">
                                        <FormButton 
                                            title="Giriş yap"
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

export default Login
