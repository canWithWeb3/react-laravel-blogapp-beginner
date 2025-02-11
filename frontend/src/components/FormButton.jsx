import PropTypes from "prop-types"

const FormButton = ({ title, isSubmitting }) => {
    return (
        <div className="md:text-start text-end">
            <button 
                type="submit" 
                className="bg-lime-500 border border-gray-200 py-1 px-3 rounded-4xl cursor-pointer hover:bg-green-900 hover:text-white ease-in mt-4"
                disabled={isSubmitting}
            >
                { title || 'Gönder' }
            </button>
        </div>
    )
}

export default FormButton

FormButton.propTypes = {
    title: PropTypes.string,
    isSubmitting: PropTypes.node.isRequired
}