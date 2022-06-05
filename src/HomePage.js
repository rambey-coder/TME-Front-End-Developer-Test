import React from 'react'
import './HomePage.css'
// style={{ backgroundImage: `url(${servicePhoto})` }}

const HomePage = ({ currency, avatar, displayName, servicePhoto, startingFrom }) => {
  return (
    <div className="general-profile">
      <div className="profile-container">
      <i className='bx bxs-heart fav bx-tada-hover bx-xm '></i>
      <img src={servicePhoto} alt="background Img" className='bg-img' />
        <img src={avatar} alt="display pic" className='display-pic' />
        <div className="profile">
          <h5>{displayName}</h5>
          <span className='input-details'>
            <p><span>&#8358;</span>{startingFrom}</p>
            <p>Hire</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default HomePage