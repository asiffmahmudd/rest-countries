import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {name} = useParams();
    const {details, setDetails} = useState({});

    useEffect( () => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setDetails(data));
    }, []);
    return (
        <div>
            {details}
        </div>
    );
};

export default CountryDetails;