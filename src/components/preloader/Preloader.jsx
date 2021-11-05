import React from 'react'
import {ReactComponent as PreloaderImg}  from '../../assets/img/preloader.svg'

const Preloader = () => {
    return (
                <div className='preloader'>
                    <PreloaderImg />
                </div>
    )
}

export default Preloader