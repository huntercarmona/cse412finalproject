import React, {useState, createContext} from "react";

export const CountriesContext = createContext();

export const CountriesContextProvider = props => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState([])
    return(
        <CountriesContext.Provider value = {{countries, setCountries, selectedCountry, setSelectedCountry}}>
            {props.children}
        </CountriesContext.Provider>
    )
}