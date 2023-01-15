import { useEffect, useState, useRef } from 'react';

const Fun = () => {
    const [results, setResults] = useState();
    const locationRef = useRef();

    const apiCall = async () => {
        if ( ! locationRef.current) {
            return;
        }
        const res = await fetch(`/api/weather?location=${locationRef.current.value}`)
        .then((response) => response.json())
        .then((data) => {
            setResults(data);
        });    
    };
    
    return (
        <>
            <h3>Weather Component</h3>
            <form 
                onSubmit={(event) => {
                    event.preventDefault();
                    apiCall();
                }}>
                <input ref={locationRef} type="text" placeholder="Enter city, state" name="location" />
                <button>Go</button>
            </form>

            { results && results.weather ? (
                <div>
                    <h3>{results.name} {results.sys.country}</h3>
                    <img src={`http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`} alt="" />
                    <h4>{results.weather[0].main}</h4>
                    <p>{results.weather[0].description}</p>
                    <p>
                        Temperature: {results.main.temp}
                    </p>
                </div>
            ) : null}

            { results && results.message ? (
                <p>
                    {results.message}
                </p>
            ) : null }
        </>
    )
}

export default Fun;