var searchBtn = document.getElementById("search")

function searchFn (){
    
    var cityInput = document.getElementById("city").value
    
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q="+ cityInput +"&appid=7088b4f9f081779cdcd8b086e87d7143&units=imperial"
   
    fetch(currentWeather)
    .then(function(response){
        return response.json()


    })

    .then (function(data){
        // console.log(data)
        
        document.getElementById("cityName").innerHTML=data.name
        document.getElementById("temp").innerHTML=data.main.temp
        document.getElementById("humidity").innerHTML=data.main.humidity
        document.getElementById("wind").innerHTML=data.wind.speed
        
        
    })
}
function getUvi(lat, lon){
    var uviApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=7088b4f9f081779cdcd8b086e87d7143`
    fetch(uviApi)
    .then(function(response){
        return response.json()
        
    })
    .then(function(data){
        // getUvi(data.coord.lat, data.coord.lon)
        // console.log(data)
        document.getElementById("uv").innerHTML=data.current.uvi
})

}
searchBtn.addEventListener("click", searchFn)
