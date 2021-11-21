import React from 'react'
import AddCountry from '../components/AddCountry';
import CountryList from '../components/CountryList';
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <AddCountry/>
            <CountryList/>
        </div>
    );
};

export default Home;
