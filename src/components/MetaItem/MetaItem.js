import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './MetaItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

const Item = forwardRef(({ icon, value, classNames }, ref) => (
    <div ref={ref} className={cx('wrapper', { ...classNames })}>
        <FontAwesomeIcon icon={icon} />
        <span className={cx('value')}>{value}</span>
    </div >
))

function MetaItem({ icon, content, value, classNames }) {
    const props = {
        icon, value, classNames
    }

    return (
        content !== undefined ? <Tippy content={content} ><Item {...props} /></Tippy> : <Item {...props} />
    )
}

MetaItem.propTypes = {
    icon: PropTypes.object.isRequired,
    content: PropTypes.string,
    value: PropTypes.number.isRequired,
    classNames: PropTypes.string
}

export default MetaItem