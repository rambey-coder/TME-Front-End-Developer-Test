import React, {useState, useEffect } from 'react'
import axios from 'axios'

const Currency = () => {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        axios.get('https://api.terawork.com/resources')
        .then(res => {
            setCurrencies(res.data.data.currencies);
            // console.log(res.data.data.currencies);
        })
        // console.log(currencies);
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

// {
//     currencies.map(currency => {
//         return(
//             <div className="currency-container">
//             <select name="currency" id="currency">
//                 <option value=''>{currency.name}</option>
//                <option value=""><img src={currency.flag_url} alt="flag" /></option> 
//             </select>
//             </div>
            
//         )
//     })
// }