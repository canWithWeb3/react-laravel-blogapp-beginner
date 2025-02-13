import PropTypes from "prop-types"

const FormButton = ({ title = 'Gönder', isSubmitting }) => {
    return (
        <button 
            type="submit" 
            className="btn btn-primary mt-3"
            disabled={isSubmitting} 
            >
            {title}
        </button>
    )
}

export default FormButton

FormButton.propTypes = {
    title: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired
}