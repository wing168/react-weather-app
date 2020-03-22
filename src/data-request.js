const apikey = "ead2f4f3f48e0d1bb61df41374dbe205";
const proxy = "https://cors-anywhere.herokuapp.com/";



const getCoordinates = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}


export const getWeatherDataCurrLoc = async () => {

     if (navigator.geolocation) {
         
        const position = await getCoordinates()
        
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const responseCurr = await fetch(`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apikey}`)
        const jsonCurr = await responseCurr.json();

        const response5Day = await fetch(`${proxy}https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${apikey}`);
        const json5Day =  await response5Day.json();
        const filteredData5Days = await json5Day.list.filter(arr => arr.dt_txt.includes("12:00:00"));

        return [jsonCurr, filteredData5Days];
        
    }
}

export const getWeatherDataSearched = async (location) => {

    const responseCurr = await fetch(`${proxy}https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`);
    const jsonCurr = await responseCurr.json();

    const response5Day = await fetch(`${proxy}https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apikey}`);
    const json5Day = await response5Day.json();
    const filteredData5Days = await json5Day.list.filter(arr => arr.dt_txt.includes("12:00:00"));

    return [jsonCurr, filteredData5Days];
};


    
    


