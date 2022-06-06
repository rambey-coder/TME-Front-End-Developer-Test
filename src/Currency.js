import './Currency.css'

const Currency = ({ currencyList }) => {
  return (
    <div className="currency-container">
     {currencyList}
    </div>
  )
}

export default Currency