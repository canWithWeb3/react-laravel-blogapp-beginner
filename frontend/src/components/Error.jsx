import PropTypes from "prop-types"

const Error = ({ error }) => {
    return (
        error && (
            <div className="alert alert-danger">
                <p className="mb-0">{error}</p>
            </div>
        )
    )
}

export default Error

Error.propTypes = {
    error: PropTypes.string
}