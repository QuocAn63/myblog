import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Tag.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Tag({ id, title }) {

  return (
    <Link to={`/tag/${id}`} className={cx('wrapper')}>
        <span className={cx('title')}>{title}</span>
    </Link>
  )
}

Tag.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Tag