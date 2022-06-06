import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Favorite from './Favorite';
import axios from 'axios';

function App() {
  const [profile, setProfile] = useState([]);
  const [favorite, setFavorite] = useState([])

  //profile
  useEffect(() => {
    axios.get('https://api.terawork.com/service-categories/sellers-services/computer-software-development')

      .then(res => {
        setProfile(res.data.data.service_search_results.hits)
      })
  }, [])
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage profile={profile} setFavorite={setFavorite} favorite={favorite} />} />
          <Route path='/favorite' element={<Favorite favorite={favorite} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
