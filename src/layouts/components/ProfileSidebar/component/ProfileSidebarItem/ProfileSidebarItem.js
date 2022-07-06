import styles from './ProfileSidebarItem.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProfileSidebarItem({
   icon,
   title,
   to,
   className,
   children = false,
   onClick,
   end = false,
   head = false,
   show = true,
   ...passProps
}) {
   let Comp = 'div';

   const props = {
      onClick,
      ...passProps,
   };

   if (to) {
      props.to = to;
      props.end = end;
      Comp = NavLink;
   }

   const classNames = to
      ? (nav) => cx('wrapper', { active: nav.isActive, [className]: className, children })
      : cx('wrapper', { [className]: className, children });

   return (
      <Comp className={classNames} {...props}>
         <FontAwesomeIcon icon={icon} className={cx('icon')} />
         <span className={cx('title')}>{title}</span>
         {head && <FontAwesomeIcon icon={faAngleUp} className={cx('icon', 'list-icon', show && 'show')} />}
      </Comp>
   );
}

ProfileSidebarItem.propTypes = {
   icon: PropTypes.object,
   title: PropTypes.string.isRequired,
   to: PropTypes.string,
   className: PropTypes.string,
   onClick: PropTypes.func,
};

export default ProfileSidebarItem;
