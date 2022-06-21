import  { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './PostItem.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Image from '../../components/Image'
import Tag from '../../components/Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faEye, faMessage } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function PostItem({ data }) {

  return (
    <div className={cx('wrapper')}>
        <Link to={`/user/${data.AUTHOR.ID}`} className={cx('avatar-link')}>
            <Image src={data.AUTHOR.AVATAR} className={cx('avatar')} />
        </Link>
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Link to={`/user/${data.AUTHOR.ID}`} className={cx('author-link')}>
                    {data.AUTHOR.FULL_NAME}
                </Link>
                <span className={cx('meta')}> {data.PUBLISHED_AT}</span>
            </div>
            <div className={cx('body')}>
                <Link to={`/post/${data.ID}`} className={cx('title-link')}>
                    {data.TITLE}
                </Link>
                <div className={cx('tags')}>
                    {data.TAGS.map(tag => (
                        <Tag data={tag} key={tag.ID} />
                    ))}
                </div>
            </div>
            <div className={cx('footer')}>
                <div className={cx('meta')}>
                    <Tippy content={'Lượt xem: 0'}>
                        <span className={cx('meta-item')}>
                            <FontAwesomeIcon icon={faEye} />
                            <span className={cx('amount')}>0</span>
                        </span>
                    </Tippy>
                    <Tippy content={'Bookmark: 0'}>
                        <span className={cx('meta-item')}>
                            <FontAwesomeIcon icon={faBookmark} />
                            <span className={cx('amount')}>0</span>
                        </span>
                    </Tippy>
                    <Tippy content={'Bình luận: 0'}>
                        <span className={cx('meta-item')}>
                            <FontAwesomeIcon icon={faMessage} />
                            <span className={cx('amount')}>0</span>
                        </span>
                    </Tippy>
                </div>
            </div>
        </div>
    </div>
  )
}

PostItem.propTypes =  {
    data: PropTypes.object.isRequired
}

export default PostItem