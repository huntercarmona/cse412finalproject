import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router'
import CountryFinder from '../apis/CountryFinder'
import { CountriesContext } from '../context/CountriesContext'
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, Label} from 'recharts'
import {format, parse, subDays} from 'date-fns'
import Select from 'react-select'


const CountryGraph = () => {
    const [selects, setSelects] = useState({
        label: "Cases",
        value: "new_cases"
    });
    const [selectDays, setDays] = useState({
        label: "All Time",
        value: "1000000"
    });
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
    const selectSeven = selectedCountry.slice(0,7)
    const selectThirty = selectedCountry.slice(0,30)
    const selectCopy = selectedCountry.slice(0,50)
    const selectOneCopy = selectedCountry.slice(0,1)
    const optionsData = [
        { value: 'new_cases', label: 'Cases' },
        { value: 'new_deaths', label: 'Deaths' },
        { value: 'vaccinations', label: 'Vaccinations' }
      ]
    const optionsDataTime = [
        { value: '7', label: 'Last 7 Days' },
        { value: '30', label: 'Last 30 Days' },
        { value: '1000000', label: 'All Time' }
      ]
    // switch(selectDays.label)
    // {
    //     case "All Time":
    //         const correctDate = selectedCountry;
    //     case "Last 30 Days":
    //         correctDate = selectThirty;
    //     case "Last 7 Days":
    //         correctDate = selectSeven;
    //     default:
    //         correctDate = selectedCountry;
    // }
    return (
        <div>
            <h1>
            {selectOneCopy.map(country => {
                        return(
                        <h1 className="font-weight-light display-1 text-center">
                            <h2>{country.country_name}</h2>
                        </h1>
                        )
                    })}
            </h1>
            <h6>Select data to view...</h6>
            <Select onChange={e=>setSelects(e)} value = {selects} options={optionsData} />
            <Select onChange={e=>setDays(e)} value = {selectDays} options={optionsDataTime} />

            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={selectedCountry.slice(0,selectDays.value)}>
                    <Area dataKey={selects.value} fill="#FDFD96"/>
                    <XAxis dataKey="date_reported" tickCount={7}>
                        <Label value= {selectDays.label} offset={-3} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey={selects.value} tickCount={10} domain={[0, 'dataMax']}>
                        <Label value= {selects.label} angle={-90} position="insideLeft" />
                    </YAxis>
                    <Tooltip />
                    <CartesianGrid opacity={0.5} vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
            {/* <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={selectedCountry}>
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
            </ResponsiveContainer> */}
        </div>
    );
}

export default CountryGraph
