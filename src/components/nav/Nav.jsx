import React, {useState} from 'react'

const Nav = (props) => {
    const [value, setValue] = useState('')
    const handleClick = (e) => {
        if (e.key === 'Enter') {
            props.setSearch(value)
            props.setPage(1)
        }
    }

    return (
        <nav className='navigation'>
            <div className='navigation-container'>
                <div className='navigation__logo'>
                    Movie Catalog
                </div>
                <div className='navigation__input'>
                    <input type='text' value={value}
                           onChange={(e) => setValue(e.currentTarget.value)}
                           onKeyPress={handleClick}/>
                </div>
                <div className='navigation__user'>
                    Alexander Borishenko
                </div>
            </div>
        </nav>
    )
}

export default Nav