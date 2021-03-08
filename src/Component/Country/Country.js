import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const history = useHistory();
    const {name, flag, capital, population, timezones} = props.country; 
    
    const showDetails = () => {
        history.push("/country/"+name);
    }
    
    return (
        <div className="col-md-4 mt-3">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={flag} alt="Country Image" />
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">Capital: {capital}</p>
                    <p className="card-text">Population: {population}</p>
                    <p className="card-text">Timezones: {timezones}</p>
                    <button onClick={showDetails} className="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default Country;