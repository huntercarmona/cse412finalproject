import React, {Component, useState, useMemo} from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import makeAnimated from 'react-select/animated'
import { Label } from 'recharts';
import { useHistory, useParams } from 'react-router'

const animatedComponenets= makeAnimated();

const CountryGraphForm = () => {
    let history = useHistory();
    const [value, setValue] = useState('')
    const [dataOptions, setDataOptions] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
        console.log(value, dataOptions)
    }
    const handleSubmit = (value) => {

        history.push(`/countries/${value}`);
    };
    return (
        <div className="mb-4">
            <form action="">
                <div class="row">
                    <div className="col" style={{width: '300px'}}>
                        <label>
                            Select a country to view
                            <Select isMulti={false} options={options} value={value} onChange={changeHandler} components={animatedComponenets} />
                        </label>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" onClick={() => handleSubmit(value.value)}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CountryGraphForm
