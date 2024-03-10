const apiKey='84b5f69b373040a7965194619240903';
const apiUrl='http://api.weatherapi.com/v1/current.json?q=Colorado'


async function checkWeather(){
    const respond=await fetch(apiUrl+`&key=${apiKey}`);
    const data=await respond.json();
    console.log(data);
}
checkWeather();
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