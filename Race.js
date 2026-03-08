import weatherCodes from "./weatherCodes.js";

class Race {
  constructor(raceName, date, time, track) {
    this.raceName = raceName;
    this.date = date;
    this.time = time;
    this.track = track;
  }

  getRaceInfo() {
    const info = {
      date: this.date,
      time: this.time,
      raceName: this.raceName,
      trackName: this.track.trackName,
      trackLocation: this.track.trackLocation,
      trackLength: this.track.trackLength,
      trackGeo: this.track.trackGeo,
      trackLogo: this.track.trackLogo,
      trackPhoto: this.track.trackPhoto,
    };
    return info;
  }

  getAdjIsoStr(date) {
    const adjRaceDate = new Date(date);
    // offset for the iso string
    adjRaceDate.setHours(date.getHours() - 5);
    const isoStr = adjRaceDate.toISOString();
    // split off the minutes and change, the api time needs to end in :00
    const trimmedISORaceDate = isoStr.split(":")[0];
    return trimmedISORaceDate;
  }

  async getRaceDayWeather() {
    const data = await this.track.get7DayWeather();
    const raceDate = new Date(this.date + " " + this.time);
    const raceDateOffset = new Date(raceDate).setHours(
      raceDate.getHours() + 10,
    );

    if (raceDateOffset < Date.now()) {
      return { msg: "off week" };
    }

    // if its before the start time show weather for green flag
    let idx;
    if (raceDate > new Date()) {
      const isoStr = this.getAdjIsoStr(raceDate);
      // get the index for that times weather data
      idx = data.hourly.time.indexOf(isoStr + ":00");
    } else {
      // if its during the race, show the current weather
      const currHour = new Date().getHours();
      const isoStr = this.getAdjIsoStr(raceDate);
      const currIsoStr = isoStr.split("T")[0] + "T" + currHour;
      idx = data.hourly.time.indexOf(currIsoStr + ":00");
    }

    // the data
    const weatherData = [];
    // the label
    const wdKeys = [];

    for (const wd in data.hourly) {
      wdKeys.push(wd);
      weatherData.push(data.hourly[wd][idx]);
    }

    // take the weather code and get a weather string
    wdKeys.push("weather");
    weatherData.push(weatherCodes[weatherData[6]]);

    const returnData = {};
    wdKeys.forEach((key, idx) => {
      returnData[key] = weatherData[idx].toString();
    });

    returnData["hourly_units"] = data.hourly_units;

    return returnData;
  }
}

export default Race;
