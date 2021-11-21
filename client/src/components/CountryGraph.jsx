import React, {useContext, useEffect} from 'react'
import CountryFinder from '../apis/CountryFinder'
import { CountriesContext } from '../context/CountriesContext'
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, Label} from 'recharts'
import {format, parse, subDays} from 'date-fns'

const data = [];
for(let num = 30; num >= 0; num--)
{
    data.push({
        date: subDays(new Date(), num).toDateString().substr(0,10),
        value: 1 + Math.random(),
    });
}
const CountryGraph = () => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data}>
                    <Area dataKey="value" fill="#FF817E"/>
                    <XAxis dataKey="date" tickCount={7}>
                        <Label value= "Date" offset={-3} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey="value" tickCount={10}>
                        <Label value= "Deaths" angle={-90} position="insideLeft" />
                    </YAxis>
                    <Tooltip />
                    <CartesianGrid opacity={0.5} vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data}>
                    <Area dataKey="value" fill="#FDFD96"/>
                    <XAxis dataKey="date" tickCount={7}>
                        <Label value= "Date" offset={-3} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey="value" tickCount={10}>
                        <Label value= "Cases" angle={-90} position="insideLeft" />
                    </YAxis>
                    <Tooltip />
                    <CartesianGrid opacity={0.5} vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CountryGraph
