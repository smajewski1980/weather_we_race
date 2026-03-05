import craftsmanSchedule from "./craftsmanSchedule.js";
import cupSchedule from "./cupSchedule.js";
import oreillySchedule from "./oreillyScehdule.js";
import Race from "./Race.js";

const cupRaceTrackMainEl = document.querySelector("#next-cup-race .track-main");
const cupRaceTrackLogoEl = document.querySelector("#next-cup-race .track-logo");
const oreillyRaceTrackMainEl = document.querySelector(
  "#next-oreilly-race .track-main",
);
const oreillyRaceTrackLogoEl = document.querySelector(
  "#next-oreilly-race .track-logo",
);
const cupRaceNameEl = document.querySelector("#next-cup-race .race-name");
const cupRaceInfoEl = document.querySelector("#next-cup-race .track-info");
const cupRaceDateEl = document.querySelector("#next-cup-race .date");
const cupWeatherH2 = document.querySelector(".cup-weather-info-wrapper h2");
const cupWeatherSpan = document.getElementById("cup-weather-span");
const cupTempSpan = document.getElementById("cup-temp-span");
const cupPrecipSpan = document.getElementById("cup-precip-span");
const cupCloudSpan = document.getElementById("cup-cloud-span");
const cupWindSpdSpan = document.getElementById("cup-wind-spd-span");
const cupWindGustSpan = document.getElementById("cup-wind-gst-span");

const oreillyRaceNameEl = document.querySelector(
  "#next-oreilly-race .race-name",
);
const oreillyRaceInfoEl = document.querySelector(
  "#next-oreilly-race .track-info",
);
const oreillyRaceDateEl = document.querySelector("#next-oreilly-race .date");
const oreillyWeatherH2 = document.querySelector(
  ".oreilly-weather-info-wrapper h2",
);
const oreillyWeatherSpan = document.getElementById("oreilly-weather-span");
const oreillyTempSpan = document.getElementById("oreilly-temp-span");
const oreillyPrecipSpan = document.getElementById("oreilly-precip-span");
const oreillyCloudSpan = document.getElementById("oreilly-cloud-span");
const oreillyWindSpdSpan = document.getElementById("oreilly-wind-spd-span");
const oreillyWindGustSpan = document.getElementById("oreilly-wind-gst-span");
const trackFacts = document.querySelector(".track-facts");

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
const isSameTrack = (track1, track2) => {
  return track1 === track2;
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
  cupWeatherH2.innerText = "LIVE WEATHER:";
}

// load the weather data to the dom elements
cupWeatherSpan.innerText = cupRaceWeather.weather;
cupTempSpan.innerText =
  cupRaceWeather.temperature_2m + cupRaceWeather.hourly_units.temperature_2m;
cupPrecipSpan.innerText =
  cupRaceWeather.precipitation_probability +
  cupRaceWeather.hourly_units.precipitation_probability;
cupCloudSpan.innerText =
  cupRaceWeather.cloud_cover + cupRaceWeather.hourly_units.cloud_cover;
cupWindGustSpan.innerText = cupRaceWeather.wind_gusts_10m + "mph";
cupWindSpdSpan.innerText = cupRaceWeather.wind_speed_10m + "mph";

// ------------------handle the oreilly race
const nextOreillyRace = getNextRace(oreillySchedule);
const oreillyRaceInfo = nextOreillyRace.getRaceInfo();
// finese a date obj to get the time str
const oreillyRaceTime = new Date(
  "2000-01-01 " + oreillyRaceInfo.time,
).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//insert info in DOM
oreillyRaceDateEl.innerText = oreillyRaceInfo.date + " " + oreillyRaceTime;
oreillyRaceInfoEl.innerText =
  oreillyRaceInfo.trackLocation + " - " + oreillyRaceInfo.trackLength;
oreillyRaceNameEl.innerText = oreillyRaceInfo.raceName;

// if at the same track as cup, load a different pic
if (isSameTrack(nextCupRace.track, nextOreillyRace.track)) {
  //display the alternate card content
  trackFacts.style.display = "grid";
  trackFacts.style.backgroundImage = 'url("./assets/placeholder_img.webp")';
  // loop through the track facts and add to trackFacts element
  nextCupRace.track.trackFacts.forEach((fact) => {
    const p = document.createElement("p");
    p.innerText = fact;
    trackFacts.append(p);
  });
} else {
  // set up for stand alone race weekend
  // load main track pic src
  oreillyRaceTrackMainEl.src = oreillyRaceInfo.trackPhoto;
  // load logo src
  oreillyRaceTrackLogoEl.src = oreillyRaceInfo.trackLogo;
  // logo element visible
  oreillyRaceTrackLogoEl.style.display = "block";
}

// get the weather data
const oreillyRaceWeather = await nextOreillyRace.getRaceDayWeather();

// if its during the race, change the h2 to 'LIVE' from 'GREEN FLAG'
if (new Date() > new Date(oreillyRaceInfo.date + " " + oreillyRaceInfo.time)) {
  oreillyWeatherH2.innerText = "LIVE WEATHER:";
}

// load the weather data to the dom elements
oreillyWeatherSpan.innerText = oreillyRaceWeather.weather;
oreillyTempSpan.innerText =
  oreillyRaceWeather.temperature_2m +
  oreillyRaceWeather.hourly_units.temperature_2m;
oreillyPrecipSpan.innerText =
  oreillyRaceWeather.precipitation_probability +
  oreillyRaceWeather.hourly_units.precipitation_probability;
oreillyCloudSpan.innerText =
  oreillyRaceWeather.cloud_cover + oreillyRaceWeather.hourly_units.cloud_cover;
oreillyWindGustSpan.innerText = oreillyRaceWeather.wind_gusts_10m + "mph";
oreillyWindSpdSpan.innerText = oreillyRaceWeather.wind_speed_10m + "mph";

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
