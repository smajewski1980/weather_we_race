import schedule from "./schedule.js";

const cupRaceDate = document.querySelector("#next-cup-race .date");
const cupRaceTime = document.querySelector("#next-cup-race .time");
const cupRaceTrackName = document.querySelector("#next-cup-race .track-name");
const cupRaceLocation = document.querySelector(
  "#next-cup-race .track-location",
);
const cupRaceTrackLength = document.querySelector(
  "#next-cup-race .track-length",
);
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
cupRaceDate.innerText = raceInfo.date;
cupRaceTime.innerText = new Date(
  "2000-01-01 " + raceInfo.time,
).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
cupRaceTrackName.innerText = raceInfo.trackName;
cupRaceLocation.innerText = raceInfo.trackLocation;
cupRaceTrackLength.innerText = raceInfo.trackLength;
const raceWeather = await nextRace.getRaceDayWeather();
for (let item in raceWeather) {
  if (item !== "time" && item !== "weather_code") {
    cupRaceWeatherInfo.innerText += item + ": " + raceWeather[item] + "\n";
  }
}
cupRaceName.innerText = raceInfo.raceName;
cupRaceTrackLogo.src = raceInfo.trackLogo;
cupRaceTrackMain.src = raceInfo.trackPhoto;

// console.log(raceInfo);
// console.log(nextRace);
console.log(await nextRace.getRaceDayWeather());
