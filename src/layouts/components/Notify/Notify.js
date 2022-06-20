import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Notify.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Notify({ data }) {
    return (
        <Link to={'/notify' + data.ID} className={cx('wrapper')}>
            <div className={cx('title')}>{data.TITLE}</div>
            <div className={cx('meta')}>{data.TIME}</div>
            <div className={cx('description')}>{data.DESCRIPTION}</div>
        </Link>
    )
}

Notify.propTypes = { data: PropTypes.object.isRequired }

export default Notify