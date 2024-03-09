const apiKey='';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?unit=metric&q=bangalore'


async function checkWeather(){
    const respond=await fetch(apiUrl+`&${apiKey}`);
    const data=await respond.json();
    console.log(data);
    
}
checkWeather();