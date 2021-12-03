import React from 'react'

const AddCountry = () => {
    return (
        <div className="mb-4">
            <form action="">
                <div class="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Country"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Country Code"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="WHO Region"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="New cases"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="New deaths"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Date (MM/DD/YYYY)"/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddCountry
