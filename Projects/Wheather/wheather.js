


let baseAPIUrl = 'https://api.openweathermap.org/data/2.5/weather';
let payload = {};
let resultData = {};
let cityName = document.getElementById("cityName");
let currentTemp = document.getElementById("currentTemp");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
function checkWheather() {
    let inputValue = document.getElementById('search').value;
    payload.q = inputValue; // q = City name
    payload.appid = '6492527f849e5034d485df6b5981d407';
    fetchWheatherData();
}

// If method is GET then we can't send its payload directly, so we need to use Query params for GET method.

async function fetchWheatherData() {
    const queryString = new URLSearchParams(payload).toString();  // URLSearchParams use to change object value into query strings
    const completURL = `${baseAPIUrl}?${queryString}`;

    fetch(completURL, {
        method: "GET"
    }).then((response) => {
        return response.json();
    }).then((data) => {
        resultData = data;
        cityName.innerHTML = resultData.name ? `${resultData.name} (${resultData.sys.country})`  : resultData.message;
        currentTemp.innerHTML = resultData.main.temp;
        humidity.innerHTML = resultData.main.humidity;
        pressure.innerHTML = resultData.main.pressure;
    }).catch((error) => {
        console.log(error);
    });

}



// covert F to C by using following formula

// f to c
//  c = (5*(f-32))/9

// c to f
// f = ((c*9)/5)+32