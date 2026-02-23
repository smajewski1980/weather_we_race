import schedule from "./schedule.js";

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

console.log(getNextRace(schedule).track.getWeather());
console.log(getNextRace(schedule).track.getRenderData());
