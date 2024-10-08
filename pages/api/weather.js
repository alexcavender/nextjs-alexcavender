const getCoords = async (location) => {
    const geo = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_KEY}` );
    const geoResult = await geo.json();
    return geoResult;
}

export default async function handler(req, res) {
    const geoCall = await getCoords(req.query.location);

    // We got a Success (200 response), and a city with coordinates
    if ( geoCall.cod == 200 && geoCall.coord ) {
        const weather = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${geoCall.coord.lat}&lon=${geoCall.coord.lon}&appid=${process.env.WEATHER_KEY}&units=imperial` );
        const result = await weather.json();

        const forecast = await fetch( `https://api.openweathermap.org/data/2.5/forecast?lat=${geoCall.coord.lat}&lon=${geoCall.coord.lon}&appid=${process.env.WEATHER_KEY}&units=imperial`);
        const forecastResult = await forecast.json();
        result.list = forecastResult.list;

        return res.status(200).json(result);
    } else {
        // We didnt get a success response   
        return res.status(400).json(geoCall);
    }
}