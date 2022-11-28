
$.get("http://api.openweathermap.org/data/2.5/forecast", {
APPID: OPEN_WEATHER_APPID,
    q:     "seattle, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);//log all json object,
    console.log(data.list [0].main.temp_max);//pick out max temp-day 1

    for(let i= 0; i<= 40; i+=8){
        console.log (data.list[i].main.temp_max)
    }
});

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

