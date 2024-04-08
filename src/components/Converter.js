import { useEffect, useState } from "react"
import axios from "axios"

// sets up the base format for Selector.
const Option = ({ value, label }) => (
    <option value={value}>{label}</option>
)

// all options user can pick from. format is based off Option.
const Selector = ({ currencies, onChange }) => (
    <select onChange={onChange}>
      <option value="">Select Currency</option>
      {currencies.map((currency, index) => (
        <Option key={index} value={currency} label={`${currency} (${currency})`} />
      ))}
    </select>
)

// UI for selecting currency.
const Converter = () => {
    const date = new Date().toString(); // initializes the date and time to be later displayed.
    const [exchangeRate, setExchangeRate] = useState(null)
    const [currencies, setCurrencies] = useState([])
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("EUR")

    useEffect(() => {
        const fetchRates = async () => {
            const options = {
                method: "GET",
                url: "https://currency-exchange.p.rapidapi.com/listquotes",
                headers: {
                    "X-RapidAPI-Key": "bdfe3bda68msh3027425b6f0a1e1p1d60cfjsn33b00a3ba96c",
                    'X-RapidAPI-Host': "currency-exchange.p.rapidapi.com"
                }
            }

            try {
                const response = await axios.request(options);
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchRates()
    }, [fromCurrency, toCurrency])

    // handles FromCurrencyChange.
    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value)
    }

    // handles ToCurrencyChange.
    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value)
    }

    return (
        <div>
            <h3>Converter</h3>
            <p>{date}</p>
            <p>Exchange Rate: {exchangeRate}</p>
            <Selector currencies={currencies} onChange={handleFromCurrencyChange} />
            <input type="number" placeholder="amount" />
            <br/><br/>
            <Selector currencies={currencies} onChange={handleToCurrencyChange} />
            <input type="number" placeholder="amount" />
        </div>
    )
}

export default Converter