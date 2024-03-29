import { useEffect, useState } from "react"
import axios from "axios"

const Converter = () => {
    return (
        <div>
            <h3>Currency Converter</h3>
            {/* fix currency names to be like this: Singapore Dollar (SGD) */}
            <select>
                <option value="">Select Currency</option>
                <option value="Singapore Dollar">SGD</option>
                <option value="Malaysian Ringgit">MYR</option>
                <option value="Euro">EUR</option>
                <option value="United States Dollar">USD</option>
                <option value="Australian Dollar">AUD</option>
                <option value="Japanese Yen">JPY</option>
                <option value="Chinese Yuan">CNY</option>
                <option value="Hong Kong Dollar">HKD</option>
                <option value="Canadian Dollar">CAD</option>
                <option value="Indian Rupee">INR</option>
                <option value="Danish Krone">DKK</option>
                <option value="Great Britain Pound">GBP</option>
                <option value="Russian Ruble">RUB</option>
                <option value="New Zealand Dollar">NZD</option>
                <option value="Mexican Peso">MXN</option>
                <option value="Indonesian Rupiah">IDR</option>
                <option value="Taiwanese Dollar">NTD</option>
                <option value="Thai Baht">THB</option>
                <option value="Vietnamese Dong">VND</option>
            </select>
            <input
                type="number"
                placeholder="amount"/>
            <br/><br/>
            <select>
            <option value="">Select Currency</option>
                <option value="Singapore Dollar">SGD</option>
                <option value="Malaysian Ringgit">MYR</option>
                <option value="Euro">EUR</option>
                <option value="United States Dollar">USD</option>
                <option value="Australian Dollar">AUD</option>
                <option value="Japanese Yen">JPY</option>
                <option value="Chinese Yuan">CNY</option>
                <option value="Hong Kong Dollar">HKD</option>
                <option value="Canadian Dollar">CAD</option>
                <option value="Indian Rupee">INR</option>
                <option value="Danish Krone">DKK</option>
                <option value="Great Britain Pound">GBP</option>
                <option value="Russian Ruble">RUB</option>
                <option value="New Zealand Dollar">NZD</option>
                <option value="Mexican Peso">MXN</option>
                <option value="Indonesian Rupiah">IDR</option>
                <option value="Taiwanese Dollar">NTD</option>
                <option value="Thai Baht">THB</option>
                <option value="Vietnamese Dong">VND</option>
            </select>
            <input
                type="number"
                placeholder="amount"/>
        </div>
    )
}

export default Converter