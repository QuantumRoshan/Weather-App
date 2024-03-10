const apiKey='84b5f69b373040a7965194619240903';
const apiUrl='http://api.weatherapi.com/v1/current.json?q='

const city=document.querySelector('.search input');
const btn=document.querySelector('.search button');
const display=document.querySelector('.weather');
display.style.display='none';

async function checkWeather(city){
    const respond=await fetch(apiUrl+city+`&key=${apiKey}`);
    if(respond.status==400){
        document.querySelector('.error').style.display='block'
        document.querySelector('.weather').style.display='none'
    }
    else{
        const data=await respond.json();
        console.log(data);
        
        document.querySelector('.temp').innerHTML=data.current.temp_c+`°C`;
        document.querySelector(".city").innerHTML=data.location.name
        document.querySelector('.humidity').innerHTML=data.current.humidity+`%`
        document.querySelector('.wind').innerHTML=data.current.wind_kph+ ' km/hr'
        const weather=data.current.cloud;
        const weatherimg=document.querySelector('.weather img');
    
        if (0<=weather && weather<=20){
            weatherimg.src='images/clear.png';
        }
        else if(20<weather && weather<=40){
            weatherimg.src='images/mist.png';
        }
        else if(40<weather && weather<=60){
            weatherimg.src='images/clouds.png';
        }
        else if(60<weather && weather<=80){
            weatherimg.src='images/drizzle.png';
        }
        else if(80<weather && weather<=100){
            weatherimg.src='images/rain.png';
        }
        
        display.style.display='block'
        document.querySelector('.error').style.display='none'

    }
}
btn.addEventListener('click', ()=>{
    checkWeather(city.value);
})



// const apiKey = '84b5f69b373040a7965194619240903';
// const apiUrl = `https://api.weatherapi.com/v1/current.json?q=butwal&key=${apiKey}`;

// async function checkWeather() {
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// checkWeather()