import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './CountryDetails.css'

const CountryDetails = () => {
    const {name} = useParams();
    const [details, setDetails] = useState({});
    console.log("here")
    useEffect( () => {
        const url = `https://restcountries.com/v3.1/name/${name}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setDetails(data[0])
        });
    }, [name]);
    
    const {flags, population, capital, region, subregion} = details;
    return (
        <div className="card mb-3 country-details">
            <img className="card-img-top" src={flags ? flags["png"]:""} alt="Flag" />
            <div className="card-body text-center">
                <h1 className="card-title">{name}</h1>
                {
                    capital &&
                    <h2 className="card-text"><strong>Capital:</strong> {capital[0]}</h2>
                }
                <h2 className="card-text"><strong>Region:</strong> {region}</h2>
                <h2 className="card-text"><strong>Sub-Region:</strong> {subregion}</h2>
                <h2 className="card-text"><small className="text-muted">Population: {population}</small></h2>
                <div className="text-center mt-5"><Link to="/home"><button className="btn btn-primary">Back to Home</button></Link></div>
            </div>
        </div>
    );
};

export default CountryDetails;