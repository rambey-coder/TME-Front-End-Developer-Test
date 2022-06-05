import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import HomePage from './HomePage';

function App() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get('https://api.terawork.com/service-categories/sellers-services/computer-software-development')

      .then(res => {
        setProfile(res.data.data.service_search_results.hits)
        console.log(res.data.data.service_search_results.hits);
      })
  }, [])
  // console.log(profile);

  return (
    <div className="App">
      <div className="side-bar">
        <div className="logo">
          <h1>Dev<span>Hire</span></h1>
        </div>

        <div className="navigation">
          <div className="nav-container">
            <span className='nav-links'>
              <i className='bx bx-search'></i>
              <li>Home</li>
            </span>
          </div>

          <div className="nav-container">
            <span className='nav-links'>
              <i className='bx bx-heart' ></i>
              <li>Favorites</li>
            </span>
          </div>
        </div>
      </div>

      <div className="general-result">
        <h1>Hire Top Developer </h1>
        <div className="content-container">
          {
            profile.map((prof, index) => {
              const results = prof._source;
              return (
                <HomePage
                  key={index}
                  currency={results.currency_name}
                  avatar={results.avatar}
                  displayName={results.display_name}
                  servicePhoto={results.service_photo}
                  startingFrom={results.starting_from}
                />

              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
