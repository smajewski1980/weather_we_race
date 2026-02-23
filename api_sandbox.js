import sched from "./schedule.js";
import weatherCodes from "./weatherCodes.js";

// this URL has lat long for Albany hard coded
const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=42.6518&longitude=-73.7545&hourly=temperature_2m,precipitation_probability,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";

async function getAlbWeather() {
  try {
    // fetch data
    const res = await fetch(URL);
    const data = await res.json();
    // take a date from our schedule
    const date = returnRaceDate();
    // get the index in the data for the race date/time
    const idx = data.hourly.time.indexOf(returnRaceDate() + ":00");

    // the data
    const weatherData = [];
    // the label
    const wdKeys = [];

    for (const wd in data.hourly) {
      wdKeys.push(wd);
      weatherData.push(data.hourly[wd][idx]);
    }
    // take the weather code and make a weather string
    wdKeys.push("weather");
    weatherData.push(weatherCodes[weatherData[5]]);

    // log the label and data together
    wdKeys.forEach((key, idx) => {
      console.log(key, ": ", weatherData[idx].toString());
    });
  } catch (error) {
    console.log(error);
  }
}

getAlbWeather();

function returnRaceDate() {
  // this is converting the date from our schedule, adj for the Eastern US timezone
  const testDate = new Date(sched[2].date + " " + sched[2].time);
  testDate.setHours(testDate.getHours() - 5);
  const isoVer = testDate.toISOString();
  console.log(isoVer);
  // the weather api res is only for the top of the hour, trim the string
  const trimmedISO = isoVer.split(":")[0];
  console.log(trimmedISO);
  return trimmedISO;
}
