import PropTypes from 'prop-types'
import { Helmet as ReactHelmet } from 'react-helmet'

const Helmet = ({ title }) => {
    return (
        <ReactHelmet>
            <title>{title}</title>
            <meta name="description" content="Bu benim sayfamın özel açıklamasıdır." />
        </ReactHelmet>
    )
}

export default Helmet

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}
