import PropTypes from 'prop-types'

import styles from './AccountMenuItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function AccountMenuItem({ data }) {
  return (
    <Link to={data.path} className={cx('wrapper', data.horizontal ? 'horizontal' : null)}>
      <span className={cx('icon')}>
        <FontAwesomeIcon icon={data.icon} />
      </span>
      <div className={cx('title')}>{data.title}</div>
    </Link>
  )
}

AccountMenuItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default AccountMenuItem