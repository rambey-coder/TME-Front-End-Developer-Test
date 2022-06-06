import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './HomePage.css';
import Currency from './Currency';
import SideBar from './SideBar';


const HomePage = ({ profile, setFavorite, favorite }) => {
  const handleFav = (item) => {
    if (favorite.includes(item)) {
      setFavorite(favorite.filter((val) => {
        return val._id !== item._id
      }))
    } else {
      setFavorite([...favorite, item])
    }
  }

  //currency
  const [currencies, setCurrencies] = useState([]);
  const [value, setValue] = useState(<span>&#8358;</span>)

  useEffect(() => {
    axios.get('https://api.terawork.com/resources')
      .then(res => {
        setCurrencies(res.data.data.currencies);
      })
  })

  const currencyList = <select name="currency" id="" onChange={(e) => {
    const selectedval = e.target.value
    setValue(selectedval)
  }}>
    {
      currencies.map(currency => {
        return (
          <>
            <option value={currency.symbol}>{currency.name}</option>
          </>

        )
      })
    }
  </select>

  return (
    <div className="app-container">
      <SideBar />
      <div className="general-result">
        <h1>Hire Top Developers</h1>
        <div className="content-container">
          {
            profile.map((prof, index) => {
              const results = prof._source;
              return (
                <div className="general-profile" key={index}>
                  <div className="profile-container">
                    <i className={favorite.filter((item) =>
                      item._id === prof._id
                    ).length > 0 ? 'bx bxs-heart fav bx-tada-hover bx-xm show' : 'bx bxs-heart fav bx-tada-hover bx-xm'} onClick={() => { handleFav(prof) }}></i>
                    <img src={results.service_photo} alt="background Img" className='bg-img' />
                    <img src={results.avatar} alt="display pic" className='display-pic' />
                    <div className="profile">
                      <h5>{results.display_name}</h5>
                      <span className='input-details'>
                        <p>{value}{results.starting_from}</p>
                        <p>Hire</p>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <Currency currencyList={currencyList} />
        </div>
      </div>
    </div>
  )
}

export default HomePage