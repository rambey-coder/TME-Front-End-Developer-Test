import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import HomePage from './HomePage';

function App() {
  const [profile, setProfile] = useState('');

  useEffect(() => {
    axios.get('https://api.terawork.com/service-categories/sellers-services/computer-software-development')

    .then(res => {
      setProfile(res.data.data.service_search_results)
      // console.log(res.data);
    })
  }, [])

  return (
    <div className="App">
      <div className="side-bar">
        <div className="logo">
          <h1>Dev<span>Hire</span></h1>
        </div>

        <div className="navigation">
          <div className="nav-container active">
            <span>
              <i className='bx bx-search'></i>
              <li>Home</li>
            </span>
          </div>

          <div className="nav-container">
            <span>
              <i className='bx bx-heart' ></i>
              <li>Favorites</li>
            </span>
          </div>
        </div>
      </div>
      <HomePage profile={profile}
        currency={profile.currency_name}
        avatar={profile.avatar}
        displayName={profile.display_name}
        servicePhoto={profile.service_photo}
        startingFrom={profile.starting_from}
      />
    </div>
  );
}

export default App;
