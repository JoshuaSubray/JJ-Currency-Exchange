import { useEffect, useState } from "react"
import axios from "axios"

// constructor of sorts. used in Selector.
const Option = ({ value, label }) => (
    <option value={value}>{label}</option>
)

// all options user can pick from. format is based off Option.
const Selector = () => (
    <select>
        <option value="">Select Currency</option>
        <Option value="SGD" label="SGD (Singapore Dollar)"/>
        <Option value="MYR" label="MYR (Malaysian Ringgit)"/>
        <Option value="EUR" label="EUR (Euro)"/>
        <Option value="USD" label="USD (United States Dollar)"/>
        <Option value="AUD" label="AUD (Australian Dollar)"/>
        <Option value="JPY" label="JPY (Japanese Yen)"/>
        <Option value="CNY" label="CNY (Chinese Yuan)"/>
        <Option value="HKD" label="HKD (Hong Kong Dollar)"/>
        <Option value="CAD" label="CAD (Canadian Dollar)"/>
        <Option value="INR" label="INR (Indian Rupee)"/>
        <Option value="DKK" label="DKK (Danish Krone)"/>
        <Option value="GBP" label="GBP (Great Britain Pound)"/>
        <Option value="RUB" label="RUB (Russian Ruble)"/>
        <Option value="NZD" label="NZD (New Zealand Dollar)"/>
        <Option value="MXN" label="MXN (Mexican Peso)"/>
        <Option value="IDR" label="IDR (Indonesian Rupiah)"/>
        <Option value="NTD" label="NTD (Taiwanese Dollar)"/>
        <Option value="THB" label="THB (Thai Baht)"/>
        <Option value="VND" label="VND (Vietnamese Dong)"/>
    </select>
)

// UI for selecting currency.
const Converter = () => {
    return (
        <div>
            <h3>Converter</h3>
            <Selector/>
            <input
                type="number"
                placeholder="amount"/>
            <br/><br/>
            <Selector/>
            <input
                type="number"
                placeholder="amount"/>
        </div>
    )
}

export default Converter