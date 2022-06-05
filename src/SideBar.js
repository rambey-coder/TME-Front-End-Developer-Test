import React from 'react'
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
            <div className="side-bar">
                <div className="logo">
                    <h1>Dev<span>Hire</span></h1>
                </div>

                <div className="navigation">
                    <div className="nav-container">
                        <span className='nav-links'>
                            <i className='bx bx-search'></i>
                            <Link to='/' className='link'>Home</Link>
                        </span>
                    </div>

                    <div className="nav-container">
                        <span className='nav-links'>
                            <i className='bx bx-heart' ></i>
                            <Link to='/favorite' className='link'>Favorites</Link>
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default SideBar