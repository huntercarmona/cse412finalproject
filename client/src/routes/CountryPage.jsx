import React from 'react'
import CountryGraph from '../components/CountryGraph'
import CountryHeader from '../components/CountryHeader'
import CountryList from '../components/CountryList'

const CountryPage = () => {
    return (
        <div>
            <CountryHeader />
            <CountryGraph />
            <CountryList />
        </div>
    )
}

export default CountryPage
