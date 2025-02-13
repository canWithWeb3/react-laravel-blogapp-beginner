import PropTypes from "prop-types"

const FormInput = ({ type = "text", name, title, handleChange, value, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={title} className="form-label">{title}</label>

            <input 
                type={type}
                name={name}
                className={`form-control ${error && 'is-invalid'}`}
                onChange={handleChange}
                value={value}
            />

            <div className="invalid-feedback">
                {error}
            </div>
        </div>
    )
}

export default FormInput

FormInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string.isRequired,
}