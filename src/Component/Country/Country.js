import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const history = useHistory();
    const {name, flags, capital, population} = props.country; 
    
    const showDetails = () => {
        history.push("/country/"+name["common"]);
    }
    
    return (
        <div className="col-md-4 mt-3">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={flags["png"]} alt="Country Image" />
                <div className="card-body">
                    <h5 className="card-title">{name["common"]}</h5>
                    {
                        capital && 
                        <p className="card-text">Capital: {capital[0]}</p>
                    }
                    <p className="card-text">Population: {population}</p>
                    <button onClick={showDetails} className="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default Country;