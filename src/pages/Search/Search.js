import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import SearchSidebar from '../../layouts/components/Sidebar/SearchSidebar';
import Button from '../../components/Button/Button';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CustomFilter from '../../components/Filter/CustomFilter';
import Sort from '../../components/Sort';
const cx = classNames.bind(styles);

const FilterItems = [
   { title: 'Bài viết', path: 'posts' },
   { title: 'Câu hỏi', path: 'questions' },
   { title: 'Tác giả', path: 'authors' },
];

const SortItems = [
   { title: 'Phù hợp nhất', path: 'similar' },
   { title: 'Mới nhất', path: 'newest' },
   { title: 'Cũ nhất', path: 'oldest' },
   { title: 'Lượt xem giảm dần', path: 'views' },
   { title: 'Lượt bình luận giảm dần', path: 'comments' },
   { title: 'Điểm giảm dần', path: 'scores' },
];

function Search() {

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <div className={cx('search-bar')}>
               <div className={cx('input-wrapper')}>
                  <input placeholder="Tìm kiếm bài viết hoặc câu hỏi" />
               </div>
               <Button className={cx('search-btn')} leftIcon={faMagnifyingGlass} primary>
                  Tìm kiếm
               </Button>
            </div>
            <div className={cx('content')}>
               <CustomFilter filters={FilterItems} typeName='type' />
               <div className={cx('sort-area')}>
                  <Sort Title="Sắp xếp theo" SortItems={SortItems} />
               </div>
            </div>
         </div>
         <SearchSidebar />
      </div>
   );
}

export default Search;
