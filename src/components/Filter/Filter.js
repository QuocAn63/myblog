import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Filter.module.scss'
import classNames from 'classnames/bind'
import { memo } from 'react'

const cx = classNames.bind(styles)

function Filter({ rootPath, filters }) {

  return (
    <div className={cx('wrapper')}>
        <div className={cx('nav-container')}>
            {filters.map((filter, index) => (
              <NavLink key={index} to={rootPath + "/" + filter.PATH}  className={nav => cx('nav-link', {active: nav.isActive})}>{filter.TITLE}</NavLink>
            ))}
        </div>
    </div>
  )
}

Filter.propTypes = {
  rootPath: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired
}

export default memo(Filter)