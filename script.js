import craftsmanSchedule from "./craftsmanSchedule.js";
import cupSchedule from "./cupSchedule.js";
import oreillySchedule from "./oreillyScehdule.js";
import Race from "./Race.js";

const cupRaceDateEl = document.querySelector("#next-cup-race .date");
const cupRaceInfoEl = document.querySelector("#next-cup-race .track-info");
const cupRaceNameEl = document.querySelector("#next-cup-race .race-name");
const cupRaceTrackLogoEl = document.querySelector("#next-cup-race .track-logo");
const cupRaceTrackMainEl = document.querySelector("#next-cup-race .track-main");
const weatherH2 = document.querySelector(".weather-info-wrapper h2");
const weatherSpan = document.getElementById("weather-span");
const tempSpan = document.getElementById("temp-span");
const precipSpan = document.getElementById("precip-span");
const cloudSpan = document.getElementById("cloud-span");
const windSpdSpan = document.getElementById("wind-spd-span");
const windGustSpan = document.getElementById("wind-gst-span");

/**
 * gets the next race, unless its race day, then returns todays race
 * @param {Array} sched
 * @returns
 */
function getNextRace(sched) {
  let futureRaces = [];
  const today = new Date();

  sched.forEach((race) => {
    const raceDateTime = new Date(race.date + " " + race.time);
    // want to show the current race weather until 8 hours after the race
    raceDateTime.setHours(raceDateTime.getHours() + 10);

    if (raceDateTime > today) {
      futureRaces.push(race);
    }
  });

  return futureRaces[0];
}

/**
 * checks if the races are at the same track
 * @param {Race} race1
 * @param {Race} race2
 * @returns {Boolean}
 */
const isSameTrack = (race1, race2) => {
  return race1.track === race2.track;
};

// ----------------------handle the cup race
const nextCupRace = getNextRace(cupSchedule);
const cupRaceInfo = nextCupRace.getRaceInfo();
// finese a date obj to get the time str
const cupRaceTime = new Date(
  "2000-01-01 " + cupRaceInfo.time,
).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// insert info in DOM
cupRaceDateEl.innerText = cupRaceInfo.date + " " + cupRaceTime;
cupRaceInfoEl.innerText =
  cupRaceInfo.trackLocation + " - " + cupRaceInfo.trackLength;
cupRaceNameEl.innerText = cupRaceInfo.raceName;
cupRaceTrackLogoEl.src = cupRaceInfo.trackLogo;
cupRaceTrackMainEl.src = cupRaceInfo.trackPhoto;

// get the weather data
const cupRaceWeather = await nextCupRace.getRaceDayWeather();

// if its during the race, change the h2 to 'LIVE' from 'GREEN FLAG'
if (new Date() > new Date(cupRaceInfo.date + " " + cupRaceInfo.time)) {
  weatherH2.innerText = "LIVE WEATHER:";
}

// load the weather data to the dom elements
weatherSpan.innerText = cupRaceWeather.weather;
tempSpan.innerText =
  cupRaceWeather.temperature_2m + cupRaceWeather.hourly_units.temperature_2m;
precipSpan.innerText =
  cupRaceWeather.precipitation_probability +
  cupRaceWeather.hourly_units.precipitation_probability;
cloudSpan.innerText =
  cupRaceWeather.cloud_cover + cupRaceWeather.hourly_units.cloud_cover;
windGustSpan.innerText = cupRaceWeather.wind_gusts_10m + "mph";
windSpdSpan.innerText = cupRaceWeather.wind_speed_10m + "mph";

// ------------------handle the oreilly race
const nextOreillyRace = getNextRace(oreillySchedule);
const oreillyRaceInfo = nextOreillyRace.getRaceInfo();
const oreillyRaceTime = new Date(
  "2000-01-01 " + oreillyRaceInfo.time,
).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const oreillyRaceWeather = await nextOreillyRace.getRaceDayWeather();

// ----------------------handle the craftsman truck race
const nextTruckRace = getNextRace(craftsmanSchedule);
const truckRaceInfo = nextTruckRace.getRaceInfo();
const truckRaceTime = new Date(
  "2000-01-01 " + truckRaceInfo.time,
).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const truckRaceWeather = await nextTruckRace.getRaceDayWeather();

console.log("cup", cupRaceWeather);
console.log("oreilly", oreillyRaceWeather);
console.log("trucks", truckRaceWeather);
