import React from 'react'
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    return (
            <div className="side-bar">
                <div className="logo">
                    <h1>Dev<span>Hire</span></h1>
                </div>

                <div className="navigation">
                        <span className='nav-links'>
                            <NavLink to='/' className={({isActive}) => isActive? 'link active' : 'link'}>
                            <span>
                            <i className='bx bx-search home-icon'></i>
                            Home
                            </span>
                            </NavLink>
                        </span>

                        <span className='nav-links'>
                            <NavLink to='/favorite' className={({isActive}) => isActive? 'link active' : 'link'}>
                            <span>
                            <i className='bx bx-heart home-icon' ></i>
                            Favorites
                            </span>
                            
                            </NavLink>
                        </span>

                    </div>
                </div>
    )
}

export default SideBar