import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState("");

    const searchCountry = () => {
        const x = document.getElementById("userInput").value;
        if(x != ""){
            setSearch(x);
        }
    }
 
    useEffect(() => {
        let url = "";
        if(search != ""){
            url = `https://restcountries.com/v3.1/name/${search}`;
        }
        else{
            url = 'https://restcountries.com/v3.1/all';
        }
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[search]);

    const handleSearch = (event) => {
        const x = event.target.value;
        setSearch(x);
    }

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
                    <div className="col-md-12">
                        <div className="input-group mb-5 mt-5">
                            <input type="text" id="userInput" onChange={handleSearch} className="form-control" placeholder="Search" aria-label="Search country" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="input-group-text" onClick={searchCountry} id="basic-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                    {
                        country.length ? country.map(cn => <Country key={cn.name} country={cn}></Country>) : <div className="col-md-12"><h1 className="text-warning text-center">Country Not Found</h1></div>
                    }
                </div>
            </div>
        </>
    );
};

export default Home;