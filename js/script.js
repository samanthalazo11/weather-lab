const $location = $("#location");
const $temp = $("#temp");
const $feelsLike = $("#feels-like");
const $weather = $("#weather");

const $input = $('input[type="text"]')

let weatherData, userInput;

function handleGetData(event) {
    event.preventDefault()

  userInput = $input.val()

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q="+ userInput +"&units=imperial&appid=873bf0818146c90e0651162efd8fc4c0"
  }).then(
    (data) => {
      weatherData = data
      render()
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}

function render() {
  $location.text(weatherData.name);
  $temp.text(Math.floor(weatherData.main.temp)+ "°");
  $feelsLike.text(Math.floor(weatherData.main.feels_like)+ "°");
  $weather.text(weatherData.weather[0].description);
}

$("form").on("submit", handleGetData)