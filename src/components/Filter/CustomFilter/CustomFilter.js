import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import styles from './CustomerFilter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CustomFilter({ filters, typeName }) {
   const [SearchParams, setSearchParams] = useSearchParams()
   const getCurrentParams = () => Object.fromEntries([...SearchParams])

   const handleClick = path => {
      const currentParams = getCurrentParams()
      setSearchParams({...currentParams, [typeName]: path})
   }

   return (
      <div className={cx('filter-container')}>
         {filters.map((item, index) => (
            <div key={index} onClick={() => handleClick(item.path)} className={cx('filter-item', (SearchParams.get(typeName) === item.path || (index === 0 && !SearchParams.get(typeName))) ? 'active' : null)}>{item.title}</div>
         ))}
      </div>
   );
}

CustomFilter.propTypes = {
   filters: PropTypes.array.isRequired,
   typeName: PropTypes.string.isRequired
};

export default CustomFilter;
