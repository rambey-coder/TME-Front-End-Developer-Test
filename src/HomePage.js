import React from 'react'

const HomePage = ({ profile, currency, avatar, displayName, servicePhoto, startingFrom}) => {
  // console.log(avatar);
  return (
    <div>
      {/* <h1>Hire Top Developer </h1> */}
      <div className="profile-container">
        <div className="profile">
          <img src={avatar} alt="display pic" />
          <h5>{displayName}</h5>
          <p>{startingFrom}</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage