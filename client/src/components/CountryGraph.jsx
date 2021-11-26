import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router'
import CountryFinder from '../apis/CountryFinder'
import { CountriesContext } from '../context/CountriesContext'
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, Label} from 'recharts'
import {format, parse, subDays} from 'date-fns'



const CountryGraph = () => {
    const {id} = useParams()
    const {selectedCountry, setSelectedCountry} = useContext(CountriesContext)
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
    selectedCountry.sort(function(a,b){
        return new Date(b.date_reported) - new Date(a.date_reported);
    });
    const selectCopy = selectedCountry.slice(0,50)
    
    // const data = [];
    // for(let num = 30; num >= 0; num--)
    // {
    //     data.push({
    //         date: subDays(new Date(), num).toDateString().substr(0,10),
    //         value: 1 + Math.random(),
    //     });
    // }
    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={selectCopy}>
                    <Area dataKey="new_cases" fill="#FDFD96"/>
                    <XAxis dataKey="date_reported" tickCount={7}>
                        <Label value= "Date" offset={-3} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey="new_cases" tickCount={10}>
                        <Label value= "Cases" angle={-90} position="insideLeft" />
                    </YAxis>
                    <Tooltip />
                    <CartesianGrid opacity={0.5} vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={selectCopy}>
                    <Area dataKey="new_deaths" fill="#FF817E"/>
                    <XAxis dataKey={"date_reported"} tickCount={7}>
                        <Label value= "Date" offset={-3} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey="new_deaths" tickCount={10}>
                        <Label value= "Deaths" angle={-90} position="insideLeft" />
                    </YAxis>
                    <Tooltip />
                    <CartesianGrid opacity={0.5} vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CountryGraph
