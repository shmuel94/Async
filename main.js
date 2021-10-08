const para = document.getElementById("para");
const button = document.getElementById("btn");

button.onclick = () =>{
    const userInput = document.getElementById("uI").value;
    const userInput2 = document.getElementById("uI2").value;
    const APIKEY ="bbd52636a38abbe1f1b50367bd5bdf86";
    const url = `HTTPS://api.openweathermap.org/data/2.5/weather?lat=${userInput}&lon=${userInput2}&appid=${APIKEY}`

    fetch(url,{methhod: "GET"})
    .then(res =>{
    console.log(res);
    return res.json();
})
   .then(data => {console.log(data);
    para.innerHTML = `<h1> The Weather In ${data.name} (${userInput}, ${userInput2}) </h1> <br> <h2> currint temp: ${(data.main.temp - 273.15).toFixed(2) }c</h2> <br> <h2> max temp: ${(data.main.temp_max - 273.15).toFixed(2)}c</h2> <br> <h2> min temp: ${(data.main.temp_min - 273.15).toFixed(2)}c</h2>`
})
.catch(error =>{para.innerHTML = `city was not found`});
}

const para2 = document.getElementById("para2");

function getLatAndLon() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    para2.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  para2.innerHTML = `lat: ${position.coords.latitude} 
  <br>lon: ${position.coords.longitude}`
}