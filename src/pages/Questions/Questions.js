import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Filter from '../../components/Filter'
import styles from './Questions.module.scss'
import classNames from 'classnames/bind'
import QuestionItem from '../../components/QuestionItem/QuestionItem'
import Paginate from '../../components/Paginate/Paginate'

const cx = classNames.bind(styles)

const QuestionData = {
  ID: 1,
  TITLE: "Làm thế nào để thay đổi style của các hình (polygon, polyline) khi thực hiện edit trên react-leaflet-draw ?",
  TAGS: [
    {
      ID: '1',
      TITLE: 'Javascript',
    },
    {
      ID: '2',
      TITLE: 'HTML5',
    },
    {
      ID: '3',
      TITLE: 'SCSS',
    },
  ],
  AUTHOR: {
    ID: '1',
    AVATAR: 'https://images.viblo.asia/avatar/3f5b542e-6833-4cd4-82f0-a78081e917c6.jpg',
    FULL_NAME: 'Cao Quoc An',
  },
  META: {
    TIME: '2022-07-21 17:13',
    REPLIES: 0,
    POINTS: 0,
    COMMENTS: 0,
    VIEWS: 0
  }
}

const filters = [{
  TITLE: 'Mới nhất',
  PATH: 'newest',
}, {
  TITLE: 'Chưa giải quyết',
  PATH: 'unsolved',
}, {
  TITLE: 'Đang theo dõi',
  PATH: 'following',
}]

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation()

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const fakeArray = [];
      for (let i = 0; i <= 20; i++) {
        fakeArray.push(i);
      }

      setQuestions(fakeArray);
      setLoading(false);
    }, 2000);

  }, [location.pathname]);

  return (
    <div className={cx('wrapper')}>
      <Filter rootPath='/questions' filters={filters} />
      {!loading && (
        <>
          <div className={cx('content')}>
            {questions.map((post, index) => (
              <QuestionItem data={QuestionData} key={index} />
            ))}
          </div>
          <Paginate currentPage={9} totalPage={15} className={cx('page')} />
        </>
      )}
    </div>
  )
}

export default Questions