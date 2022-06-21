import React from 'react'
import PropTypes from 'prop-types'
import Header from '../partials/Header'

import styles from './HeaderOnly.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function HeaderOnly({ children, SearchOn }) {
  return (
    <>
      <Header SearchOn={SearchOn} />
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          {children}
        </div>
      </div>
    </>
  )
}

HeaderOnly.propTypes = { children: PropTypes.node.isRequired, Searchable: PropTypes.bool}

export default HeaderOnly