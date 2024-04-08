import { useEffect, useState } from "react"
import axios from "axios"
import ExchangeRates from "./ExchangeRates.json" // problems with obtaining API data. had to download it to a JSON and use it locally. kept on receiving HTTP 403 and/or 429.

// format for currencies to appear in the drop down menu.
const Option = ({ value, label }) => (
    <option value={value}>{label}</option>
)

// UI for selecting currency.
const Converter = () => {
    const date = new Date().toString(); // initializes the date and time to be later displayed.
    const [exchangeRate, setExchangeRate] = useState(null)
    const [fromCurrency, setFromCurrency] = useState("")
    const [toCurrency, setToCurrency] = useState("")

    useEffect(() => {
        const calculateExchangeRate = () => {
            if (fromCurrency && toCurrency) {
                const fromRate = ExchangeRates.conversion_rates[fromCurrency]
                const toRate = ExchangeRates.conversion_rates[toCurrency]
                if (fromRate && toRate) {
                    const rate = (toRate / fromRate).toFixed(2)
                    setExchangeRate(rate)
                } else {
                    setExchangeRate(null)
                }
            } else {
                setExchangeRate(null)
            }
        }

        calculateExchangeRate()
    }, [fromCurrency, toCurrency])

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value)
    }

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value)
    }

    return (
        <div>
            <h3>Converter</h3>
            <p>{date}</p>
            <input type="number" placeholder="Enter currency."/>
            <br/><br/>
            <select onChange={handleFromCurrencyChange}>
                <option value="">From Currency</option>
                {Object.keys(ExchangeRates.conversion_rates).map((currency, index) => (
                    <Option key={index} value={currency} label={currency}/>
                ))}
            </select>
            <span style={{marginLeft: "32px"}}></span>
            <select onChange={handleToCurrencyChange}>
                <option value="">To Currency</option>
                {Object.keys(ExchangeRates.conversion_rates).map((currency, index) => (
                    <Option key={index} value={currency} label={currency}/>
                ))}
            </select>
            <br/><br/>
            <p>Exchange Rate: $<b>{exchangeRate}</b></p>
        </div>
    )
}

export default Converter