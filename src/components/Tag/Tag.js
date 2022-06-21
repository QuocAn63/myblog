import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Tag.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Tag({ data }) {

  return (
    <Link to={`/tag/${data.ID}`} className={cx('wrapper')}>
        <span className={cx('title')}>{data.TITLE}</span>
    </Link>
  )
}

Tag.propTypes = {
    data: PropTypes.object.isRequired
}

export default Tag