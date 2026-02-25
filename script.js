import schedule from "./schedule.js";

const cupRaceDate = document.querySelector("#next-cup-race .date");
const cupRaceInfo = document.querySelector("#next-cup-race .track-info");

const cupRaceWeatherInfo = document.querySelector(
  "#next-cup-race .weather-info",
);
const cupRaceName = document.querySelector("#next-cup-race .race-name");
const cupRaceTrackLogo = document.querySelector("#next-cup-race .track-logo");
const cupRaceTrackMain = document.querySelector("#next-cup-race .track-main");

// gets the next race, unless its race day, then returns todays race
function getNextRace(sched) {
  let futureRaces = [];
  const today = new Date();

  sched.forEach((race) => {
    const raceDateTime = new Date(race.date + " " + race.time);
    // want to show the current race weather until 8 hours after the race
    raceDateTime.setHours(raceDateTime.getHours() + 8);

    if (raceDateTime > today) {
      futureRaces.push(race);
    }
  });

  return futureRaces[0];
}

const nextRace = getNextRace(schedule);
const raceInfo = nextRace.getRaceInfo();
const raceTime = new Date("2000-01-01 " + raceInfo.time).toLocaleTimeString(
  [],
  { hour: "2-digit", minute: "2-digit" },
);
cupRaceDate.innerText = raceInfo.date + " " + raceTime;
cupRaceInfo.innerText = raceInfo.trackLocation + " - " + raceInfo.trackLength;
const raceWeather = await nextRace.getRaceDayWeather();

cupRaceName.innerText = raceInfo.raceName;
cupRaceTrackLogo.src = raceInfo.trackLogo;
cupRaceTrackMain.src = raceInfo.trackPhoto;

// load the weather data to the dom elements
const weatherSpan = document.querySelector(".weather span");
const tempSpan = document.querySelector(".temperature span");
const precipSpan = document.querySelector(".precip span");
const cloudSpan = document.querySelector(".cloud-cover span");
const windSpdSpan = document.querySelector(".wind-spd span");
const windGustSpan = document.querySelector(".wind-gusts span");

weatherSpan.innerText = raceWeather.weather;
tempSpan.innerText =
  raceWeather.temperature_2m + raceWeather.hourly_units.temperature_2m;
precipSpan.innerText =
  raceWeather.precipitation_probability +
  raceWeather.hourly_units.precipitation_probability;
cloudSpan.innerText =
  raceWeather.cloud_cover + raceWeather.hourly_units.cloud_cover;
windGustSpan.innerText =
  raceWeather.wind_gusts_10m + " " + raceWeather.hourly_units.wind_gusts_10m;
windSpdSpan.innerText =
  raceWeather.wind_speed_10m + " " + raceWeather.hourly_units.wind_speed_10m;

console.log(raceWeather);
