import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Paginate.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Paginate({ currentPage, totalPage}) {
    const pageNumbers = () => {
        const Page = ({Number}) => <Link to={`?page=${Number}`} className={cx('page')}>{Number}</Link>
        const ActivePage = ({Number}) => <span className={cx('page', 'active')}>{Number}</span> 

        let array = []
        if(totalPage <= 10) {
            for(let i = 1; i <= totalPage; i++) {
                array.push(i)
            }
        } else {
            if(currentPage >= 7) {
                for(let i=1; i<=totalPage; i++) {
                    if((currentPage - 3 >= 4) && (totalPage - (currentPage + 3) > 2) && ((i >= currentPage - 3 && i <= currentPage + 3) || (i < 3 || i > totalPage - 2))) {
                        array.push(i)
                    }
                }
                array.splice(3, 'asdasd')
            }
            // Continue
        }

        array = array.map(item => {
            return item === currentPage ? <ActivePage Number={item} key={item} /> : <Page Number={item} key={item}/>
        })

        array.unshift(<Link key={0} to={`?page=${currentPage - 1}`} className={cx('page', currentPage === 1 ? 'disabled' : null)}>{}<FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></Link>)
        array.push(<Link key={totalPage + 1} to={`?page=${currentPage + 1}`} className={cx('page', currentPage === totalPage ? 'disabled' : null)}>{}<FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></Link>)

        return array
    }

  return (
    <div className={cx('wrapper')}>
        {pageNumbers()}
    </div>
  )
}

Paginate.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired
}

export default Paginate