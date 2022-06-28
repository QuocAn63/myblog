import PropTypes from 'prop-types'

import styles from './AccountMenuItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function AccountMenuItem({ title, icon, to, onClick, horizontal = false, ...passProps }) {
   const props = {
      onClick,
      ...passProps
   }

   let Comp =  'div'

   if(to) {
      props.to = to
      Comp = Link
   }

  return (
    <Comp className={cx('wrapper', horizontal ? 'horizontal' : null)} {...props}>
      <span className={cx('icon')}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className={cx('title')}>{title}</div>
    </Comp>
  )
}

AccountMenuItem.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.object.isRequired,
   to: PropTypes.string,
   onClick: PropTypes.func
}

export default AccountMenuItem