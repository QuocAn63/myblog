import { memo } from 'react'
import PropTypes from 'prop-types'
import { useSearchParams } from 'react-router-dom'
import styles from './Paginate.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faEllipsis } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Paginate({ totalPage, className}) {
    const [SearchParams, setSearchParams] = useSearchParams()
    const currentPage = Number.parseInt(SearchParams.get('page')) || 1;

    const handleClick = (number) => {
        const currentParams = Object.fromEntries([...SearchParams])
        setSearchParams({...currentParams, page: number})
    }

    const PageNumbers = () => {
        const Page = ({Number}) => <span to={`?page=${Number}`} onClick={() => handleClick(Number)} className={cx('page')}>{Number}</span>
        const ActivePage = ({Number}) => <span className={cx('page', 'active')}>{Number}</span> 
        const DotPage = (key) => <span key={key} className={cx('page', 'disabled')}><FontAwesomeIcon icon={faEllipsis} /></span> 
        let array = []
        if(totalPage <= 10) {
            for(let i = 1; i <= totalPage; i++) {
                array.push(i)
            }
        } else {    
            if(currentPage >= 7) {
                if((currentPage - 3 >= 4) && (totalPage - (currentPage + 3) > 2)) {
                    for(let i=1; i<=totalPage; i++) {
                        if(((i >= currentPage - 3 && i <= currentPage + 3) || (i < 3 || i > totalPage - 2))) {
                            array.push(i)
                        }
                    }
                } else if(currentPage - 3 >= 4) {
                    for(let i=4; i<=currentPage; i++) {
                        array.push(i)
                    }
                } else 
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


        array.unshift(<div key={-1} onClick={() => handleClick(currentPage - 1)} className={cx('page', currentPage === 1 ? 'disabled' : null)}>{}<FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></div>)
        array.push(<div key={totalPage + 1} onClick={() => handleClick(currentPage + 1)} className={cx('page', currentPage === totalPage ? 'disabled' : null)}>{}<FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></div>)
        
        return array
    }

  return (
    <div className={cx('wrapper', className)}>
        <PageNumbers />
    </div>
  )
}

Paginate.propTypes = {
    totalPage: PropTypes.number.isRequired,
    className: PropTypes.string
}

export default memo(Paginate)