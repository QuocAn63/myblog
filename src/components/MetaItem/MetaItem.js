import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './MetaItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const Item = forwardRef(({ icon, value, classNames, to, onClick, ...passProps }, ref) => {
   var Comp = 'div';
   const props = { onClick, ...passProps };

   if (to) {
      props.to = to; 
      Comp = Link
   }

   return (
      <Comp ref={ref} className={cx('wrapper', { ...classNames })} {...props}>
         {icon && <FontAwesomeIcon icon={icon} />}
         <span className={cx('value')}>{value}</span>
      </Comp>
   );
});

function MetaItem({ icon, content, value, classNames, to, onClick, ...passProps }) {
   const props = {
      icon,
      value,
      classNames,
      to,
      onClick,
      ...passProps
   };

   return content !== undefined ? (
      <Tippy content={content}>
         <Item {...props} />
      </Tippy>
   ) : (
      <Item {...props} />
   );
}

MetaItem.propTypes = {
   icon: PropTypes.object,
   content: PropTypes.string,
   value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   classNames: PropTypes.string,
};

export default MetaItem;
