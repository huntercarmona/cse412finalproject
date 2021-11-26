import React from 'react'
import AddCountry from '../components/AddCountry';
import CountryGraphForm from '../components/CountryGraphForm';
import CountryList from '../components/CountryList';
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <CountryGraphForm />
            <AddCountry/>
            <CountryList/>
        </div>
    );
};

export default Home;
