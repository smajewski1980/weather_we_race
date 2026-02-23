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
    if (new Date(race.date).toDateString() >= today.toDateString()) {
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

console.log(raceInfo);
