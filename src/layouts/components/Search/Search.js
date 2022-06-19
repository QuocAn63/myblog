import React, { useState, useRef } from 'react'

import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import useDebounce from '../../../hooks/useDebounce'

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')

    const searchInputRef = useRef()

    const debouncedValue = useDebounce(searchInputRef)

    const handleChangeSearchInput = (e) => {
        const inputValue = e.target.value 

        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue)
        }
    }

    return (
        <div className={cx("wrapper")}>
            <form action="" method="post">
                <div className={cx("search")}>
                    <input type="text" placeholder="Tìm kiếm bài viết" ref={searchInputRef} value={searchValue} onChange={e => handleChangeSearchInput(e)} />
                    <button type="button" className={cx("search-btn")}>
                        {<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search