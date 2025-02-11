import PropTypes from "prop-types"

const FormInput = ({ title, type, name, value, handleChange, error }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="form-label">{title}:</label>
           
            <input 
                type={type || 'text'} 
                value={value} 
                onChange={handleChange} 
                name={name} 
                className={`border border-gray-400 px-2 py-1.5 rounded-md focus:border-green-900 outline ${error && 'border-red-500'}`} 
                id={name}
                autoComplete={`auto-${name}`}
            />

            <div className="text-red-600 text-sm">{error}</div>
        </div>
    )
}

export default FormInput

FormInput.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
}