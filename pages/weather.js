import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
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
    }
    
    return (
        <Layout weather>
            <Head>
                <title>React Weather App | {siteTitle}</title>
            </Head>
            <section className="px-4 py-24 bg-slate-900">
                <div className="container mx-auto flex flex-col">
                    <h3 className="text-white text-5xl font-bold mb-2">Weather Component</h3>
                    <p className="text-gray-100 text-xl mb-8">Built with the OpenWeather API and Tailwind CSS</p>
                    
                    <form 
                        className="relative w-full"
                        onSubmit={(event) => {
                            event.preventDefault();
                            apiCall();
                        }}>
                        <input 
                        className="w-full rounded-xl border border-solid border-slate-400 px-6 py-3" 
                        ref={locationRef} type="text" 
                        placeholder="Enter your city..." 
                        name="location" />
                        <button className="absolute inset-y-0 right-0 w-32 rounded-xl bg-sky-500 hover:bg-sky-700 text-white">
                            Go
                        </button>
                    </form>
                </div>
            </section>
            <section className="container py-12 mx-auto">
                 { results && results.weather ? (
                    <div>
                        <h2 className="text-2xl">Weather Right Now</h2>
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
            </section>
           
        </Layout>
    )
}

export default Fun;