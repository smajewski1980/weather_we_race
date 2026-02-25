import t from "./tracks.js";
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

  async getRaceDayWeather() {
    // will have to handle an error for an off week...
    const data = await this.track.get7DayWeather();
    const raceDate = new Date(this.date + " " + this.time);
    raceDate.setHours(raceDate.getHours() - 5);
    const isoStr = raceDate.toISOString();
    const trimmedISORaceDate = isoStr.split(":")[0];
    const idx = data.hourly.time.indexOf(trimmedISORaceDate + ":00");

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
    weatherData.push(weatherCodes[weatherData[5]]);

    const returnData = {};
    wdKeys.forEach((key, idx) => {
      returnData[key] = weatherData[idx].toString();
    });

    returnData["hourly_units"] = data.hourly_units;

    return returnData;
  }
}

const Race1 = new Race(
  "Daytona 500",
  "Sunday February 15 2026",
  "13:30:00 GMT-0500",
  t.Daytona,
);
const Race2 = new Race(
  "Autotrader 400",
  "Sunday February 22 2026",
  "15:00:00 GMT-0500",
  t.Atlanta,
);
const Race3 = new Race(
  "DuraMax Texas Grand Prix Powered by RelaDyne",
  "Sunday March 1 2026",
  "15:30:00 GMT-0500",
  t.COTA,
);
const Race4 = new Race(
  "Straight Talk Wireless 500",
  "Sunday March 8 2026",
  "15:30:00 GMT-0500",
  t.Phoenix,
);
const Race5 = new Race(
  "Pennzoil 400 presented by Jiffy Lube",
  "Sunday March 15 2026",
  "16:00:00 GMT-0500",
  t.LasVegas,
);
const Race6 = new Race(
  "Goodyear 400",
  "Sunday March 22 2026",
  "15:00:00 GMT-0500",
  t.Darlington,
);
const Race7 = new Race(
  "Cook Out 400",
  "Sunday March 29 2026",
  "15:30:00 GMT-0500",
  t.Martinsville,
);
const Race8 = new Race(
  "Food City 500",
  "Sunday April 12 2026",
  "15:00:00 GMT-0500",
  t.Bristol,
);
const Race9 = new Race(
  "AdventHealth 400",
  "Sunday April 19 2026",
  "14:00:00 GMT-0500",
  t.Kansas,
);
const Race10 = new Race(
  "Jack Link's 500",
  "Sunday April 26 2026",
  "15:00:00 GMT-0500",
  t.Talladega,
);
const Race11 = new Race(
  "Würth 400 presented by LIQUI MOLY",
  "Sunday May 3 2026",
  "15:30:00 GMT-0500",
  t.Texas,
);
const Race12 = new Race(
  "Go Bowling at The Glen",
  "Sunday May 10 2026",
  "15:00:00 GMT-0500",
  t.WatkinsGlen,
);
const Race13 = new Race(
  "NASCAR All-Star Race",
  "Sunday May 17 2026",
  "15:00:00 GMT-0500",
  t.Dover,
);
const Race14 = new Race(
  "Coca-Cola 600",
  "Sunday May 24 2026",
  "18:00:00 GMT-0500",
  t.Charlotte,
);
const Race15 = new Race(
  "Cracker Barrel 400",
  "Sunday May 31 2026",
  "19:00:00 GMT-0500",
  t.Nashville,
);
const Race16 = new Race(
  "FireKeepers Casino 400",
  "Sunday June 7 2026",
  "15:00:00 GMT-0500",
  t.Michigan,
);
const Race17 = new Race(
  "Great American Getaway 400 presented by VISITPA",
  "Sunday June 14 2026",
  "15:00:00 GMT-0500",
  t.Pocono,
);
const Race18 = new Race(
  "Anduril 250",
  "Sunday June 21 2026",
  "16:00:00 GMT-0500",
  t.SanDiego,
);
const Race19 = new Race(
  "Toyota / Save Mart 350",
  "Sunday June 28 2026",
  "15:30:00 GMT-0500",
  t.Sonoma,
);
const Race20 = new Race(
  "NASCAR Cup Series Race at Chicagoland",
  "Sunday July 5 2026",
  "18:00:00 GMT-0500",
  t.Chicagoland,
);
const Race21 = new Race(
  "Quaker State 400 Available at Walmart",
  "Sunday July 12 2026",
  "19:00:00 GMT-0500",
  t.Atlanta,
);
const Race22 = new Race(
  "Window World 450",
  "Sunday July 19 2026",
  "19:00:00 GMT-0500",
  t.NorthWilkesboro,
);
const Race23 = new Race(
  "Brickyard 400",
  "Sunday July 26 2026",
  "14:00:00 GMT-0500",
  t.Indy,
);
const Race24 = new Race(
  "Iowa Corn 350 Powered by Ethanol",
  "Sunday August 9 2026",
  "15:30:00 GMT-0500",
  t.Iowa,
);
const Race25 = new Race(
  "Cook Out 400",
  "Saturday August 15 2026",
  "19:00:00 GMT-0500",
  t.Richmond,
);
const Race26 = new Race(
  "NASCAR Cup Series Race at New Hampshire",
  "Sunday August 23 2026",
  "15:00:00 GMT-0500",
  t.NewHampshire,
);
const Race27 = new Race(
  "Coke Zero Sugar 400",
  "Saturday August 29 2026",
  "19:30:00 GMT-0500",
  t.Daytona,
);
const Race28 = new Race(
  "Cook Out Southern 500",
  "Sunday September 6 2026",
  "17:00:00 GMT-0500",
  t.Darlington,
);
const Race29 = new Race(
  "Enjoy Illinois 300",
  "Sunday September 13 2026",
  "15:00:00 GMT-0500",
  t.WorldWideTech,
);
const Race30 = new Race(
  "Bass Pro Shops Night Race",
  "Saturday September 19 2026",
  "19:30:00 GMT-0500",
  t.Bristol,
);
const Race31 = new Race(
  "Hollywood Casino 400",
  "Sunday September 27 2026",
  "15:00:00 GMT-0500",
  t.Kansas,
);
const Race32 = new Race(
  "South Point 400",
  "Sunday October 4 2026",
  "17:30:00 GMT-0500",
  t.LasVegas,
);
const Race33 = new Race(
  "Bank of America 400",
  "Sunday October 11 2026",
  "15:00:00 GMT-0500",
  t.Charlotte,
);
const Race34 = new Race(
  "Freeway Insurance 500",
  "Sunday October 18 2026",
  "15:00:00 GMT-0500",
  t.Phoenix,
);
const Race35 = new Race(
  "Yellawood 500",
  "Sunday October 25 2026",
  "14:00:00 GMT-0500",
  t.Talladega,
);
const Race36 = new Race(
  "Xfinity 500",
  "Sunday November 1 2026",
  "14:00:00 GMT-0500",
  t.Martinsville,
);
const Race37 = new Race(
  "NASCAR Cup Series Championship Race",
  "Sunday November 8 2026",
  "15:00:00 GMT-0500",
  t.Homestead,
);

const schedule = [
  Race1,
  Race2,
  Race3,
  Race4,
  Race5,
  Race6,
  Race7,
  Race8,
  Race9,
  Race10,
  Race11,
  Race12,
  Race13,
  Race14,
  Race15,
  Race16,
  Race17,
  Race18,
  Race19,
  Race20,
  Race21,
  Race22,
  Race23,
  Race24,
  Race25,
  Race26,
  Race27,
  Race28,
  Race29,
  Race30,
  Race31,
  Race32,
  Race33,
  Race34,
  Race35,
  Race36,
  Race37,
];

export default schedule;
