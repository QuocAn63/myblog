import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MetaItem from '../MetaItem'

import styles from './QuestionItem.module.scss'
import classNames from 'classnames/bind'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faCaretUp, faEye, faMessage, faReply } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function QuestionItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('meta')}>
        <div className={cx('published_at')}>
          <MetaItem icon={faCalendarDays} value={data.META.TIME} content={data.META.TIME} />
        </div>
        <div className={cx('container')}>
          <MetaItem icon={faReply} value={data.META.REPLIES} content={'Trả lời'} />
          <MetaItem icon={faCaretUp} value={data.META.POINTS} content={'Điểm'} />
          <MetaItem icon={faMessage} value={data.META.COMMENTS} content={'Bình luận'} />
          <MetaItem icon={faEye} value={data.META.VIEWS} content={'Lượt xem'} />
        </div>
      </div>
    </div>
  )
}

QuestionItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default QuestionItem