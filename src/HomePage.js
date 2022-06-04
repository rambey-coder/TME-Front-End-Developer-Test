import React from 'react'

const HomePage = ({ profile, currency, avatar, displayName, servicePhoto, startingFrom }) => {
  // console.log(profile.hits);
  return (
    <div>
      <h1>Hire Top Developer </h1>
      <div className="profile-container">
        <div className="profile">
          <img src={avatar} alt="display pic" />
        </div>
      </div>
    </div>
  )
}

export default HomePage