import React from 'react'
import AddCountry from '../components/AddCountry';
import CountryGraphForm from '../components/CountryGraphForm';
import CountryList from '../components/CountryList';
import Header from '../components/Header'
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <CountryGraphForm />
            <AddCountry/>
            <CountryList/>
        </div>
    );
};

export default Home;
