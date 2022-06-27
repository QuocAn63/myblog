import { useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Filter.module.scss'
import classNames from 'classnames/bind'
import { memo } from 'react'

const cx = classNames.bind(styles)

function Filter({ filters, typeName }) {
  const [SearchParams, setSearchParams] = useSearchParams()
  
  const getCurrentParams = () => Object.fromEntries([...SearchParams])

  const handleClick = path => {
    const currentParams = getCurrentParams()
    setSearchParams({...currentParams, [typeName]: path})
  }

  return (
    <div className={cx('wrapper')}>
        <div className={cx('nav-container')}>
            {filters.map((filter, index) => (
              <div onClick={() => handleClick(filter.PATH)} key={index} className={cx('nav-link', (SearchParams.get(typeName) === filter.PATH || (index === 0 && !SearchParams.get(typeName))) ? 'active' : null)}>{filter.TITLE}</div>
            ))}
        </div>
    </div>
  )
}

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  typeName: PropTypes.string.isRequired
}

export default memo(Filter)