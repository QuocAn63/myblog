import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

function Button(
   {
      disabled = false,
      to,
      href,
      primary,
      outline,
      small = false,
      large = false,
      text = false,
      rounded = false,
      className,
      children,
      onClick,
      leftIcon,
      rightIcon,
      ...passProps
   },
   ref,
) {
   var Comp = 'button';

   const props = { onClick, ...passProps };

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof key === 'function') {
            delete props[key];
         }
      });
   }

   const classes = cx('wrapper', { [className]: className, disabled, primary, outline, small, large, text, rounded });

   return (
      <Comp ref={ref} className={classes} {...props}>
         {leftIcon && <FontAwesomeIcon icon={leftIcon} className={cx('icon')} />}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <FontAwesomeIcon icon={rightIcon} className={cx('icon')} />}
      </Comp>
   );
}

Button.prototype = {
   disabled: PropTypes.bool,
   to: PropTypes.string,
   href: PropTypes.string,
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   text: PropTypes.bool,
   rounded: PropTypes.bool,
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
   onClick: PropTypes.func,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
};

export default forwardRef(Button);
