import { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Paginate.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faEllipsis } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Paginate({ currentPage, totalPage, className}) {

    const pageNumbers = () => {
        const Page = ({Number}) => <Link to={`?page=${Number}`} className={cx('page')}>{Number}</Link>
        const ActivePage = ({Number}) => <span className={cx('page', 'active')}>{Number}</span> 
        const DotPage = (key) => <span key={key} className={cx('page', 'disabled')}><FontAwesomeIcon icon={faEllipsis} /></span> 
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
                array.splice(2, 0, <FontAwesomeIcon icon={faEllipsis} />)
                array.splice(array.length - 2, 0, <FontAwesomeIcon icon={faEllipsis} />)
            }
            // Continue
        }

        array = array.map((item, index) => {
            if(typeof item !== 'number') {
                return <DotPage key={index} /> 
            }
            return item === currentPage ? <ActivePage Number={item} key={index} /> : <Page Number={item} key={index}/>
        })


        array.unshift(<Link key={-1} to={`?page=${currentPage - 1}`} className={cx('page', currentPage === 1 ? 'disabled' : null)}>{}<FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></Link>)
        array.push(<Link key={totalPage + 1} to={`?page=${currentPage + 1}`} className={cx('page', currentPage === totalPage ? 'disabled' : null)}>{}<FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></Link>)
        
        return array
    }

  return (
    <div className={cx('wrapper', className)}>
        {pageNumbers()}
    </div>
  )
}

Paginate.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
    className: PropTypes.string
}

export default memo(Paginate)