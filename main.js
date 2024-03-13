const cityInput =document.querySelector(".inputText")
const btn = document.querySelector(".btn")


//console.log(cityInput,btn)


btn.addEventListener('click' ,() => {
     
    console.dir(cityInput)
    const cityName = cityInput.value 

    //console.log(cityName)


   getData(cityName)
})



function getData(name){
 //console.log(name)
 
 const API = '3e80f28b6d2eff3efa9b5016aaceb0bd'
 const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`


 //console.log(fetch(baseURL));


 fetch(baseURL)
 .then(res => res.json())
 .then(data => {
    const {name , sys:{country}, main :{temp , feels_like,humidity},weather:[{description}],wind :{speed}} = data
    console.log(name,country ,temp,feels_like,humidity,description,speed)


    const city = document.querySelector(".city")
    const temperature = document.querySelector(".temp")
    const hum = document.querySelector(".humidity")
    const wind = document.querySelector(".wind")
    const weatherDesc = document.querySelector(".weather")
    const feeling = document.querySelector(".feeling")
     console.log(city,temperature,hum,wind,weatherDesc,feeling)

      
     city.textContent = `${name},${country}`
     temperature.innerText = `${temp.toFixed(1)}°`
     hum.textContent =  `NEM %${humidity}`
     wind.innerHTML = `Ruzgar${speed}km/s`
     weatherDesc.innerHTML =`<i>${description.toEpperCase()}</i>`
     feeling.textContent = `Hissedilen ${feels_like}`



 })


 .catch(err => console.log(err))


cityInput.value ="";
cityInput.focus();

}

