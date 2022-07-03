import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './GlobalStyles.css'
import './GlobalStyles.scss'

function GlobalStyle({ children }) {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)    
    }, [location])
    
    return children
}

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired
}

export default GlobalStyle