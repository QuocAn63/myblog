import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './PostContainer.module.scss'
import classNames from 'classnames/bind'
import PostItem from '../../components/PostItem'

const cx = classNames.bind(styles)

const PostData = {
    ID: 1,
    TITLE: "[MAY FEST 2022] THÔNG BÁO KẾT QUẢ BẢNG XẾP HẠNG ĐIỂM TƯƠNG TÁC",
    AUTHOR: {
        ID: "1",
        AVATAR: "https://images.viblo.asia/avatar/3f5b542e-6833-4cd4-82f0-a78081e917c6.jpg",
        FULL_NAME: "Cao Quoc An"
    },
    PUBLISHED_AT: "2022-07-04 9:26:03",
    TAGS: [
        {
            ID: "1",
            TITLE: 'Javascript'
        },
        {
            ID: "2",
            TITLE: 'HTML5'
        },
        {
            ID: "3",
            TITLE: 'SCSS'
        }
    ]
}

function PostContainer({ title, data }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={'/posts/newest'} className={cx("title-link")}>{title}</Link>
            <div className="container">
                <PostItem data={PostData} />
                <PostItem data={PostData} />
                <PostItem data={PostData} />
                <PostItem data={PostData} />
                <PostItem data={PostData} />
                <div className={cx("more-post")}>
                    <Link to={'/posts/newest'}>Xem thêm</Link>
                </div>
            </div>
        </div>
    )
}

PostContainer.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostContainer