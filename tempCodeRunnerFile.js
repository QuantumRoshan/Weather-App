const apiKey='84b5f69b373040a7965194619240903';
const apiUrl='https://api.opehttp://api.weatherapi.com/v1/current.json?q=butwal'


async function checkWeather(){
    const respond=await fetch(apiUrl+`&key=${apiKey}`);
    const data=await respond.json();
    console.log(data);
    
}
checkWeather();