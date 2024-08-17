import React from 'react';
import { useEffect, useState, FormEvent } from "react";
import CurrencySelect from "./CurrecySelect";

const ConverterForm: React.FC = () => {
    const [amount, setAmount] = useState<number>(Number);
    const [fromCurrency, setFromCurrency] = useState<string>("USD");
    const [toCurrency, setToCurrency] = useState<string>("GNF");
    const [result, setResult] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Swap the values of fromCurrency and toCurrency
    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    // Function to fetch the exchange rate and update the result
    const getExchangeRate = async () => {
        const API_KEY = import.meta.env.VITE_KEY;
        const API_URL = ` https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

        console.log(API_URL);
    

        if (isLoading) return;
        setIsLoading(true);

        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Something went wronG!");

            const data = await response.json();
            const rate = (data.conversion_rate * amount).toFixed(2);
            setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
        } catch (error) {
            setResult("Something went wrong...!");
        } finally {
            setIsLoading(false);
        }
    };

    // Handle form submission
    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        getExchangeRate();
    };

    // Fetch exchange rate on initial render
    useEffect(() => {
        getExchangeRate();
    }, [fromCurrency, toCurrency]);

    return (
        <form className="converter-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <input
                    type="number"
                    className="form-input"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />
            </div>

            <div className="form-group form-currency-group">
                <div className="form-section">
                    <label className="form-label">From</label>
                    <CurrencySelect
                        selectedCurrency={fromCurrency}
                        handleCurrency={(e) => setFromCurrency(e.target.value)}
                    />
                </div>

                <div className="swap-icon" onClick={handleSwapCurrencies}>
                    <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg" className='bg-300'>
                        <path
                            d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                            fill="#000"
                        />
                    </svg>
                </div>

                <div className="form-section">
                    <label className="form-label">To</label>
                    <CurrencySelect
                        selectedCurrency={toCurrency}
                        handleCurrency={(e) => setToCurrency(e.target.value)}
                    />
                </div>
            </div>

            <button
                type="submit"
                className={`${isLoading ? "loading" : ""} submit-button`}
            >
                CONVERTIR
            </button>
            <p className="exchange-rate-result">
                {/* Display the conversion result */}
                {isLoading ? "Getting exchange rate..." : result}
            </p>
        </form>
    );
};

export default ConverterForm;
