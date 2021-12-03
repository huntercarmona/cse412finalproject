import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import CountryGraph from '../components/CountryGraph'
import CountryHeader from '../components/CountryHeader'
import CountryList from '../components/CountryList'
import { CountriesContext } from '../context/CountriesContext'
import CountryFinder from '../apis/CountryFinder'
import IndividualCountryList from '../components/IndividualCountryList'


const CountryPage = () => {
    return (
        <div>
            <CountryGraph/>
            <IndividualCountryList/>
            
        </div>
    );
}

export default CountryPage
