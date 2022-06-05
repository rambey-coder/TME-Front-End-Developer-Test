import React from 'react'
import SideBar from './SideBar'

const Favorite = ({ favorite }) => {
  return (
      <div className="app-container">
      <SideBar />
        <div>
            {
              favorite.map((value, index) => {
                return (
                  <div className="general-profile" key={index}>
                <div className="profile-container">
                  <i className='bx bxs-heart fav bx-tada-hover bx-xm '></i>
                  <img src={value.service_photo} alt="background Img" className='bg-img' />
                  <img src={value.avatar} alt="display pic" className='display-pic' />
                  <div className="profile">
                    <h5>{value.display_name}</h5>
                    <span className='input-details'>
                      <p><span>&#8358;</span>{value.starting_from}</p>
                      <p>Hire</p>
                    </span>
                  </div>
                </div>
              </div>
                )
              })
            }
        </div>
      </div>
  )
}

export default Favorite