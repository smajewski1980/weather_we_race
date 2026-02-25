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
