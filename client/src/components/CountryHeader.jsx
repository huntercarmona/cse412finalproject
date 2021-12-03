import React from 'react'
import { useParams } from 'react-router'

const CountryHeader = () => {
    const {id} = useParams()
    
    return (
        <div>
            <h1 className="font-weight-light display-1 text-center">
                {id}
            </h1>
        </div>
    )
}

export default CountryHeader
