import React from 'react';
// import './navbar.scss';

const Navbar = ({ imgSrc }) => {
    return (
        <div className='navbar'>
            <img src={imgSrc} alt='' width={'130px'} />
        </div>
    )
};

export default Navbar;