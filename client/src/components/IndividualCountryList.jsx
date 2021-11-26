import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import CountryGraph from '../components/CountryGraph'
import CountryHeader from '../components/CountryHeader'
import CountryList from '../components/CountryList'
import { CountriesContext } from '../context/CountriesContext'
import CountryFinder from '../apis/CountryFinder'

const IndividualCountryList = () => {
    const {id} = useParams()
    const {selectedCountry, setSelectedCountry} = useContext(CountriesContext)
    let history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await CountryFinder.get(`/${id}`);
                
                setSelectedCountry(response.data.data.countries);
                console.log(selectedCountry)

            }
            catch(error)
            {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()

        history.push("/")
    };
    selectedCountry.sort(function(a,b){
        return new Date(b.date_reported) - new Date(a.date_reported);
    });
    const selectCopy = selectedCountry.slice(0,50)
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
                    {selectCopy.map(country => {
                        return(
                        <tr>
                            <td>{country.country_name}</td>
                            <td>{country.country_code}</td>
                            <td>{country.who_region}</td>
                            <td>{country.new_cases}</td>
                            <td>{country.cumulative_cases}</td>
                            <td>{country.new_deaths}</td>
                            <td>{country.cumulative_deaths}</td>
                            <td>{country.date_reported.substr(0,10)}</td>
                        </tr>
                        )
                    })}
                </tbody>
                <button onClick = {handleSubmit} class="btn btn-primary" type="submit">
                    Return to Home Page
                </button>
            </table>
        </div>
    )
}

export default IndividualCountryList
