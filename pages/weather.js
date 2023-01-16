import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { useEffect, useState, useRef } from 'react';

const Fun = () => {
    const [results, setResults] = useState();
    const locationRef = useRef();

    const getWeather = async () => {
        if ( ! locationRef.current) {
            return;
        }
        const res = await fetch(`/api/weather?location=${locationRef.current.value}`)
        .then((response) => response.json())
        .then((data) => {
            setResults(data);
            
        });    
    }

    const formatDateTime = ( string ) => {
        let date = new Date( string );
        const options1 = { weekday: 'long', hour: 'numeric', month: 'long', day: 'numeric' };
        let formatted = new Intl.DateTimeFormat('en-US', options1 ).format(date);
        console.log(formatted);
        return formatted;
    }
    
    return (
        <Layout weather>
            <Head>
                <title>React Weather App | {siteTitle}</title>
            </Head>
            <section className="px-4 pt-24 pb-12 bg-slate-900">
                <div className="container lg:w-1/2 mx-auto flex flex-col">
                    <h3 className="text-white text-5xl font-bold mb-2">Weather Component</h3>
                    <p className="text-gray-100 text-sm mb-8">Built with the OpenWeather API, React, and Tailwind CSS.</p>
                    
                    <form 
                        className="relative w-full"
                        onSubmit={(event) => {
                            event.preventDefault();
                            getWeather();
                        }}>
                        <input 
                        className="w-full border border-solid border-slate-400 px-6 py-3" 
                        ref={locationRef} type="text" 
                        placeholder="Enter your city..." 
                        name="location" />
                        <button className="absolute inset-y-0 right-0 w-32 bg-sky-500 hover:bg-sky-700 text-white">
                            Go
                        </button>
                    </form>
                </div>
            </section>
            <section className="container py-8 mx-auto text-center">
                 { results && results.weather ? (
                    <>
                        <h3 className="text-2xl mb-3">Weather Right Now in {results.name}, {results.sys.country}</h3>

                        <div className="w-56 mx-auto lg:text-left lg:grid gap-4 lg:grid-cols-2">
                            <img className="mx-auto" src={`http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`} alt="" />
                            <div>
                                <p>Feels like</p>
                                <p className="font-bold text-5xl">
                                    {results.main.feels_like}&deg;
                                </p>
                                <h4 className="text-lg mb-0">{results.weather[0].main}</h4>    
                            </div>
                        </div>

                        <ul className="">
                            <li>Temperature: {results.main.temp}</li>
                            <li>Wind: {results.wind.speed} MPH</li>
                            <li>Humidity: {results.main.humidity}</li>
                        </ul>                    
                    </>
                ) : null}
                
                { results && results.list ? (
                    <div className="mt-16 container px-4">
                        <h2 className="text-3xl font-bold">5 day / 3 Hour Forecast</h2>
                        <ul className="grid gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                            { results.list.map(item  => (
                                <li key={item.dt}>
                                    <img className="mx-auto" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                                    <p>
                                        <span>{ formatDateTime(item.dt_txt) }</span><br />
                                        <strong>{item.weather[0].main}</strong><br />
                                        {item.weather[0].description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null }

                { results && results.message ? (
                    <p>
                        {results.message}
                    </p>
                ) : null }
            </section>
           
        </Layout>
    )
}

export default Fun;