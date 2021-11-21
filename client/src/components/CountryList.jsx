import React, {useContext, useEffect} from 'react'
import CountryFinder from '../apis/CountryFinder'
import { CountriesContext } from '../context/CountriesContext'

const CountryList = (props) => {
    const {countries, setCountries} = useContext(CountriesContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CountryFinder.get("/");
                setCountries(response.data.data.countries);
            } catch (err) {}
        }

        fetchData();
    },[])

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
                    <tr>
                        <td>United States</td>
                        <td>USA</td>
                        <td>North America</td>
                        <td>12345</td>
                        <td>1928765</td>
                        <td>73492</td>
                        <td>1982734</td>
                        <td>11/17/2021</td>
                        <td><button className="btn btn-success">View Country</button></td>
                    </tr>
                    <tr>
                        <td>Canada</td>
                        <td>CAN</td>
                        <td>North America</td>
                        <td>12345</td>
                        <td>1928765</td>
                        <td>73492</td>
                        <td>1982734</td>
                        <td>11/17/2021</td>
                        <td><button className="btn btn-success">View Country</button></td>
                    </tr>
                    <tr>
                        <td>Mexico</td>
                        <td>MEX</td>
                        <td>North America</td>
                        <td>12345</td>
                        <td>1928765</td>
                        <td>73492</td>
                        <td>1982734</td>
                        <td>11/17/2021</td>
                        <td><button className="btn btn-success">View Country</button></td>
                    </tr>
                    <tr>
                        <td>Germany</td>
                        <td>GER</td>
                        <td>Europe</td>
                        <td>12345</td>
                        <td>1928765</td>
                        <td>73492</td>
                        <td>1982734</td>
                        <td>11/17/2021</td>
                        <td><button className="btn btn-success">View Country</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryList
