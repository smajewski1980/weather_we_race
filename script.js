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
cupRaceTime.innerText = raceInfo.time;
cupRaceTrackName.innerText = raceInfo.trackName;
cupRaceLocation.innerText = raceInfo.trackLocation;
cupRaceTrackLength.innerText = raceInfo.trackLength;

// console.log(raceInfo);
// console.log(nextRace);
console.log(await nextRace.getRaceDayWeather());
