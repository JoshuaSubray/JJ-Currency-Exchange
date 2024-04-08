import { useEffect, useState } from "react"
import axios from "axios"
import ExchangeRates from "./ExchangeRates.json" // problems with obtaining API data. had to download it to a JSON and use it locally. kept on receiving HTTP 403 and/or 429.

// UI for selecting currency.
const Converter = () => {
    const date = new Date().toString();
    const [exchangeRate, setExchangeRate] = useState(null);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [currency, setCurrency] = useState("");

    const Option = ({ value, label }) => (
        <option value={value}>{label}</option>
    )

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
        const selectedCurrency = e.target.value;
        setFromCurrency(selectedCurrency);
    };

    const handleToCurrencyChange = (e) => {
        const selectedCurrency = e.target.value;
        setToCurrency(selectedCurrency);
    };

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    }

    const calculateConvertedCurrency = () => {
        if (!exchangeRate || !currency) return "";
        return (parseFloat(currency) * parseFloat(exchangeRate)).toFixed(2);
    }


    return (
        <div>
            <h3>Converter</h3>
            <p>{date}</p>
            <input type="number" placeholder="Enter currency." value={currency} onChange={handleCurrencyChange}/>

            <br/><br/>

            <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                <option value="">From Currency</option>
                {Object.keys(ExchangeRates.conversion_rates).map((currency, index) => (
                    <Option key={index} value={currency} label={currency}/>
                ))}
            </select>

            <span style={{ marginLeft: "32px" }}></span>

            <select value={toCurrency} onChange={handleToCurrencyChange}>
                <option value="">To Currency</option>
                {Object.keys(ExchangeRates.conversion_rates).map((currency, index) => (
                    <Option key={index} value={currency} label={currency} />
                ))}
            </select>

            <br/><br/>

            <p>Exchange Rate: X<b>{exchangeRate}</b></p>
            <p>Converted Currency: $<b>{calculateConvertedCurrency()}</b></p>
        </div>
    )
}

export default Converter