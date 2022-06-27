import React, { useState, useRef, useEffect } from 'react';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import ResultItem from './ResultItem';
import useDebounce from '../../../hooks/useDebounce';

const cx = classNames.bind(styles);

const searchResultArray = [
   {
      TITLE: 'Bài viết',
      TYPE: 'POSTS',
      DATA: [
         {
            ID: '1',
            AUTHOR: 'Cao Quoc An',
            PUBLISHED_AT: '2022-03-06 10:05',
            TITLE: 'NodeJs Với Express FrameWork',
            SUGGEST:
               'Chắc hẳn trong thực tế khi làm các dự án việc phát sinh tính năng tải ảnh là rất nhiều. Ví dụ như việc đơn giản là tải 01 ảnh chúng ta có thể làm như thế này. Như đoạn code dưới quá là đơn giản đúng không, ngay trong thẻ <a> chúng ta thể thuộc tính "download" sẽ được tải xuống khi người dùng nhấp vào liên kết.',
         },
         {
            ID: '2',
            AUTHOR: 'Cao Quoc An',
            PUBLISHED_AT: '2022-03-06 10:05',
            TITLE: 'NodeJs Với Express FrameWork',
            SUGGEST:
               'Chắc hẳn trong thực tế khi làm các dự án việc phát sinh tính năng tải ảnh là rất nhiều. Ví dụ như việc đơn giản là tải 01 ảnh chúng ta có thể làm như thế này. Như đoạn code dưới quá là đơn giản đúng không, ngay trong thẻ <a> chúng ta thể thuộc tính "download" sẽ được tải xuống khi người dùng nhấp vào liên kết.',
         },
         {
            ID: '3',
            AUTHOR: 'Cao Quoc An',
            PUBLISHED_AT: '2022-03-06 10:05',
            TITLE: 'NodeJs Với Express FrameWork',
            SUGGEST:
               'Chắc hẳn trong thực tế khi làm các dự án việc phát sinh tính năng tải ảnh là rất nhiều. Ví dụ như việc đơn giản là tải 01 ảnh chúng ta có thể làm như thế này. Như đoạn code dưới quá là đơn giản đúng không, ngay trong thẻ <a> chúng ta thể thuộc tính "download" sẽ được tải xuống khi người dùng nhấp vào liên kết.',
         },
         {
            ID: '4',
            AUTHOR: 'Cao Quoc An',
            PUBLISHED_AT: '2022-03-06 10:05',
            TITLE: 'NodeJs Với Express FrameWork',
            SUGGEST:
               'Chắc hẳn trong thực tế khi làm các dự án việc phát sinh tính năng tải ảnh là rất nhiều. Ví dụ như việc đơn giản là tải 01 ảnh chúng ta có thể làm như thế này. Như đoạn code dưới quá là đơn giản đúng không, ngay trong thẻ <a> chúng ta thể thuộc tính "download" sẽ được tải xuống khi người dùng nhấp vào liên kết.',
         },
      ],
   },
   {
      TITLE: 'Tác giả',
      TYPE: 'AUTHORS',
      DATA: [
         {
            ID: '1',
            TITLE: 'Cao Quoc An',
            IMAGE: '',
            POSTS_COUNT: 20,
         },
         {
            ID: '2',
            TITLE: 'Cao Quoc An',
            IMAGE: '',
            POSTS: 20,
         },
         {
            ID: '3',
            TITLE: 'Cao Quoc An',
            IMAGE: '',
            POSTS: 20,
         },
      ],
   },
   {
      TITLE: 'Thẻ',
      TYPE: 'TAGS',
      DATA: [
         {
            ID: '1',
            TITLE: 'Javascript',
            POSTS_COUNT: 31,
         },
         {
            ID: '2',
            TITLE: 'Javascript',
            POSTS_COUNT: 31,
         },
         {
            ID: '3',
            TITLE: 'Javascript',
            POSTS_COUNT: 31,
         },
      ],
   },
];

function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);

   const debouncedValue = useDebounce(searchValue);

   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setSearchResult(searchResultArray);
         setLoading(false);
      }, 2000);
   }, [debouncedValue]);

   const searchInputRef = useRef();

   const handleChangeSearchInput = (e) => {
      const inputValue = e.target.value;

      if (!inputValue.startsWith(' ')) {
         setSearchValue(inputValue);
      }
   };

   return (
      <div className={cx('wrapper')}>
         <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive
            onClickOutside={() => setShowResult(false)}
            offset={[0, 0]}
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  {searchResult.map((result, index) => (
                     <div className={cx('result')} key={index}>
                        <div className={cx('title')}>{result.TITLE}</div>
                        {result.DATA.map((item, index) => (
                           <ResultItem data={item} type={result.TYPE} key={index} />
                        ))}
                     </div>
                  ))}
               </div>
            )}
         >
            <form action="" method="post">
               <div className={cx('search')}>
                  <input
                     type="text"
                     placeholder="Tìm kiếm bài viết"
                     ref={searchInputRef}
                     value={searchValue}
                     onFocus={() => setShowResult(true)}
                     onChange={(e) => handleChangeSearchInput(e)}
                  />
                  <div className={cx('input-action')}>
                     {loading && <FontAwesomeIcon icon={faCircleNotch} className={cx('loading')} />}
                     {!loading && !!searchValue && <FontAwesomeIcon icon={faXmark} className={cx('clear')} />}
                  </div>
                  <button type="button" className={cx('search-btn')}>
                     {<FontAwesomeIcon icon={faMagnifyingGlass} />}
                  </button>
               </div>
            </form>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
