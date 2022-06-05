import React from 'react'
import './HomePage.css';
import Currency from './Currency';
import SideBar from './SideBar';


const HomePage = ({ profile, setFavorite, favorite }) => {
  const handleFav = (item) => {
    if(favorite.includes(item)) {
      setFavorite(favorite.filter((val) => {
        return val._id !== item._id
      }))
    } else {
      setFavorite([...favorite, item])
  } 
  }
  console.log(favorite);

  return (
    <div className="app-container">
      <SideBar/>
    <div className="general-result">
      <h1>Hire Top Developers</h1>
      <div className="content-container">
        {
          profile.map((prof, index) => {
            const results = prof._source;
            return (
              <div className="general-profile" key={index}>
                <div className="profile-container">
                  <i className='bx bxs-heart fav bx-tada-hover bx-xm ' onClick={() => {handleFav(prof)}}></i>
                  <img src={results.service_photo} alt="background Img" className='bg-img' />
                  <img src={results.avatar} alt="display pic" className='display-pic' />
                  <div className="profile">
                    <h5>{results.display_name}</h5>
                    <span className='input-details'>
                      <p><span>&#8358;</span>{results.starting_from}</p>
                      <p>Hire</p>
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <Currency />
    </div>
    </div>
  )
}

export default HomePage