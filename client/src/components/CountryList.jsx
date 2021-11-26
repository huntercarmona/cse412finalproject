import React, {useContext, useEffect} from 'react'
import CountryFinder from '../apis/CountryFinder'
import { CountriesContext } from '../context/CountriesContext'
import { useHistory } from 'react-router'
const CountryList = (props) => {
    const {countries, setCountries} = useContext(CountriesContext)
    let history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CountryFinder.get("/");
                //console.log(response);
                setCountries(response.data.data.countries);
            } catch (err) {}
        }

        fetchData();
    },[])
    countries.sort(function(a,b){
        return new Date(b.date_reported) - new Date(a.date_reported);
    });
    const countryCopy = countries.slice(0, 50)

    const handleCountrySelect = (country_name) => {
        history.push(`/countries/${country_name}`)
    };

    return (
        <div className="list-group">
            <table className="table table-hover table-secondary">
                <thead>
                    <tr className="bg-dark">
                        <th scope="col">Country</th>
                        <th scope="col">Code</th>
                        <th scope="col">WHO Region</th>
                        <th scope="col">New Cases</th>
                        <th scope="col">Cumulative Cases</th>
                        <th scope="col">New Deaths</th>
                        <th scope="col">Cumulative Deaths</th>
                        <th scope="col">Date Reported</th>
                    </tr>
                </thead>
                <tbody>
                    {countryCopy.map(country => {
                        return(
                        <tr onClick={() => handleCountrySelect(country.country_name)}>
                            <td>{country.country_name}</td>
                            <td>{country.country_code}</td>
                            <td>{country.who_region}</td>
                            <td>{country.new_cases}</td>
                            <td>{country.cumulative_cases}</td>
                            <td>{country.new_deaths}</td>
                            <td>{country.cumulative_deaths}</td>
                            <td>{country.date_reported.substr(0,10)}</td>
                            <td>
                                <button onClick={() => handleCountrySelect(country.country_name)} className="btn btn-success">View Country</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CountryList
