import PropTypes from 'prop-types'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

import styles from './Sidebarless.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Sidebarless({ children }) {
  return (
    <>
    <Header />
    <div className={cx('wrapper')}>
        {children}
      </div>
    <Footer />
    </>
  )
}

Sidebarless.propTypes = {
    children: PropTypes.node.isRequired
}

export default Sidebarless