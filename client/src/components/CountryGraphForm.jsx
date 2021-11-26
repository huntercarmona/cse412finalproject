import React, {Component, useState, useMemo} from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import makeAnimated from 'react-select/animated'
import { Label } from 'recharts';

const animatedComponenets= makeAnimated();

const CountryGraphForm = () => {
    const [value, setValue] = useState('')
    const [dataOptions, setDataOptions] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
        console.log(value, dataOptions)
    }

    return (
        <div className="mb-4">
            <form action="">
                <div class="row">
                    <div className="col">
                        <label>
                            Select a country to view
                            <Select isMulti={true} options={options} value={value} onChange={changeHandler} components={animatedComponenets} />
                        </label>
                    </div>
                    <div className="col">
                        <label>Select data to view &nbsp;&nbsp;
                            <input type="checkbox" name="Cases" onChange={(e)=>setDataOptions(e.target.name)}/>Cases&nbsp;&nbsp;
                            <input type="checkbox" name="Deaths" onChange={(e)=>setDataOptions(e.target.name)}/>Deaths&nbsp;&nbsp;
                            <input type="checkbox" name="Vaccinations" onChange={(e)=>setDataOptions(e.target.name)}/>Vaccinations&nbsp;&nbsp;
                        </label>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CountryGraphForm
