import React from 'react'
import PropTypes from 'prop-types'
import Header from '../partials/Header'

import styles from './HeaderOnly.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function HeaderOnly({ children, WideScreen, SearchOn }) {
  return (
    <>
      <Header SearchOn={SearchOn} WideScreen={WideScreen}/>
      <div className={cx('wrapper')}>
        {children}
      </div>
    </>
  )
}

HeaderOnly.propTypes = { children: PropTypes.node.isRequired, Searchable: PropTypes.bool }

export default HeaderOnly