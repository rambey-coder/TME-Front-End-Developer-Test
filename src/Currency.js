import React, {useState, useEffect } from 'react'
import axios from 'axios'

const Currency = () => {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        axios.get('https://api.terawork.com/resources')
        .then(res => {
            setCurrencies(res.data.data.currencies);
        })
    })
  return (
    <div className="currency-container">
       <select name="currency" id="">
           {
               currencies.map(currency => {
                   return(
                    <option value="">{currency.name}</option>
                   )
               })
           }
       </select>
    </div>
  )
}

export default Currency