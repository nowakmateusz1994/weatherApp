const api = {
    key: 'f2db3d6e2f4637a4ae1cc907decabc9e',
    base: "https://api.openweathermap.org/data/2.5/"
}


function showWeather(weather) {
    let place = document.querySelector('.place');
    place.innerText = `${weather.name} ${weather.sys.country}`;

    let temperatur = document.querySelector('.temperature span');
    temperatur.innerText = Math.round(weather.main.temp);

    let skay = document.querySelector('.skay');
    skay.innerText = weather.weather[0].main;

    let date = document.querySelector('.date');
    let newDate = new Date(); 
    let day = (newDate.getDay() > 10)? newDate.getDay() : `0${newDate.getDay()}`;
    let month = (newDate.getMonth() > 10)? newDate.getMonth() : `0${newDate.getMonth()}`;


    
    date.innerText = `${day}.${month}.${newDate.getFullYear()}`;
}


function getWether(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

let search = document.querySelector('.search');
search.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        getWether(search.value);
        search.value = "";
        // console.log(search.value)
    }
});

getWether('Poznań');