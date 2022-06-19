import PropTypes from 'prop-types'

import Header from '../partials/Header'
import Footer from '../partials/Footer'

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout
