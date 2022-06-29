import PropTypes from 'prop-types';
import styles from './Sort.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Sort({ Title, SortItems: Items, defaultItem = 0, onClick }) {
   const [Show, setShow] = useState(true);
   const [SortItems, setSortItems] = useState(
      Items.map((Item, index) => ({ ...Item, Checked: index === defaultItem })),
   );
   const [SelectedItem, setSelectedItem] = useState(Items[defaultItem].title);
   const ref = useRef();
   const handleClose = () => setShow(false);

   const handleSelect = (SelectIndex) => {
      setSortItems((Items) => Items.map((Item, index) => ({ ...Item, Checked: index === SelectIndex })));
      setSelectedItem(SortItems[SelectIndex].title);
   };

   const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
         handleClose();
      }
   };

   useEffect(() => {
      document.addEventListener('mouseup', handleClickOutside);

      return () => {
         document.removeEventListener('mouseup', handleClickOutside);
      };
      // eslint-disable-next-line
   }, [Show]);

   return (
      <div className={cx('wrapper')} onClick={() => setShow((prev) => !prev)} ref={ref}>
         <span className={cx('title')}>{Title}: </span>
         <span className={cx('current')}>{SelectedItem}</span>
         {Show && (
            <div className={cx('dropdown')}>
               <ul className={cx('sort-list')}>
                  {SortItems.map((Item, index) => (
                     <li key={index} onClick={() => handleSelect(index)}>
                        <p className={cx('item', Item.Checked ? 'active' : null)}>{Item.title}</p>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
}

Sort.propTypes = {
   SortItems: PropTypes.array.isRequired,
};

export default Sort;
