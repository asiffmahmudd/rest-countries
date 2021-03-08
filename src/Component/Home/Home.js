import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setCountry(data));
    }, []);
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Learn About All Countries</h1>
                    <p className="lead">Scroll down to know about the countries in the world and their details</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                {
                    country.map(cn => <Country key={cn.name} country={cn}></Country>)
                }
                </div>
            </div>
        </>
    );
};

export default Home;