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
    };
    return info;
  }

  async getRaceDayWeather() {
    // will have to handle an error for an off week...
    const data = await this.track.get7DayWeather();
    const raceDate = new Date(this.date + " " + this.time);
    // console.log("race date: ", raceDate);
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

    return returnData;
  }
}

const Race1 = new Race(
  "Daytona 500",
  "Sun Feb 15 2026",
  "13:30:00 GMT-0500",
  t.Daytona,
);
const Race2 = new Race(
  "Autotrader 400",
  "Sun Feb 22 2026",
  "15:00:00 GMT-0500",
  t.Atlanta,
);
const Race3 = new Race(
  "DuraMax Texas Grand Prix Powered by RelaDyne",
  "Sun Mar 1 2026",
  "15:30:00 GMT-0500",
  t.COTA,
);
const Race4 = new Race(
  "Straight Talk Wireless 500",
  "Sun Mar 8 2026",
  "15:30:00 GMT-0500",
  t.Phoenix,
);
const Race5 = new Race(
  "Pennzoil 400 presented by Jiffy Lube",
  "Sun Mar 15 2026",
  "16:00:00 GMT-0500",
  t.LasVegas,
);
const Race6 = new Race(
  "Goodyear 400",
  "Sun Mar 22 2026",
  "15:00:00 GMT-0500",
  t.Darlington,
);
const Race7 = new Race(
  "Cook Out 400",
  "Sun Mar 29 2026",
  "15:30:00 GMT-0500",
  t.Martinsville,
);
const Race8 = new Race(
  "Food City 500",
  "Sun Apr 12 2026",
  "15:00:00 GMT-0500",
  t.Bristol,
);
const Race9 = new Race(
  "AdventHealth 400",
  "Sun Apr 19 2026",
  "14:00:00 GMT-0500",
  t.Kansas,
);
const Race10 = new Race(
  "Jack Link's 500",
  "Sun Apr 26 2026",
  "15:00:00 GMT-0500",
  t.Talladega,
);
const Race11 = new Race(
  "Würth 400 presented by LIQUI MOLY",
  "Sun May 3 2026",
  "15:30:00 GMT-0500",
  t.Texas,
);
const Race12 = new Race(
  "Go Bowling at The Glen",
  "Sun May 10 2026",
  "15:00:00 GMT-0500",
  t.WatkinsGlen,
);
const Race13 = new Race(
  "NASCAR All-Star Race",
  "Sun May 17 2026",
  "15:00:00 GMT-0500",
  t.Dover,
);
const Race14 = new Race(
  "Coca-Cola 600",
  "Sun May 24 2026",
  "18:00:00 GMT-0500",
  t.Charlotte,
);
const Race15 = new Race(
  "Cracker Barrel 400",
  "Sun May 31 2026",
  "19:00:00 GMT-0500",
  t.Nashville,
);
const Race16 = new Race(
  "FireKeepers Casino 400",
  "Sun Jun 7 2026",
  "15:00:00 GMT-0500",
  t.Michigan,
);
const Race17 = new Race(
  "Great American Getaway 400 presented by VISITPA",
  "Sun Jun 14 2026",
  "15:00:00 GMT-0500",
  t.Pocono,
);
const Race18 = new Race(
  "Anduril 250",
  "Sun Jun 21 2026",
  "16:00:00 GMT-0500",
  t.SanDiego,
);
const Race19 = new Race(
  "Toyota / Save Mart 350",
  "Sun Jun 28 2026",
  "15:30:00 GMT-0500",
  t.Sonoma,
);
const Race20 = new Race(
  "NASCAR Cup Series Race at Chicagoland",
  "Sun Jul 5 2026",
  "18:00:00 GMT-0500",
  t.Chicagoland,
);
const Race21 = new Race(
  "Quaker State 400 Available at Walmart",
  "Sun Jul 12 2026",
  "19:00:00 GMT-0500",
  t.Atlanta,
);
const Race22 = new Race(
  "Window World 450",
  "Sun Jul 19 2026",
  "19:00:00 GMT-0500",
  t.NorthWilkesboro,
);
const Race23 = new Race(
  "Brickyard 400",
  "Sun Jul 26 2026",
  "14:00:00 GMT-0500",
  t.Indy,
);
const Race24 = new Race(
  "Iowa Corn 350 Powered by Ethanol",
  "Sun Aug 9 2026",
  "15:30:00 GMT-0500",
  t.Iowa,
);
const Race25 = new Race(
  "Cook Out 400",
  "Sat Aug 15 2026",
  "19:00:00 GMT-0500",
  t.Richmond,
);
const Race26 = new Race(
  "NASCAR Cup Series Race at New Hampshire",
  "Sun Aug 23 2026",
  "15:00:00 GMT-0500",
  t.NewHampshire,
);
const Race27 = new Race(
  "Coke Zero Sugar 400",
  "Sat Aug 29 2026",
  "19:30:00 GMT-0500",
  t.Daytona,
);
const Race28 = new Race(
  "Cook Out Southern 500",
  "Sun Sep 6 2026",
  "17:00:00 GMT-0500",
  t.Darlington,
);
const Race29 = new Race(
  "Enjoy Illinois 300",
  "Sun Sep 13 2026",
  "15:00:00 GMT-0500",
  t.WorldWideTech,
);
const Race30 = new Race(
  "Bass Pro Shops Night Race",
  "Sat Sep 19 2026",
  "19:30:00 GMT-0500",
  t.Bristol,
);
const Race31 = new Race(
  "Hollywood Casino 400",
  "Sun Sep 27 2026",
  "15:00:00 GMT-0500",
  t.Kansas,
);
const Race32 = new Race(
  "South Point 400",
  "Sun Oct 4 2026",
  "17:30:00 GMT-0500",
  t.LasVegas,
);
const Race33 = new Race(
  "Bank of America 400",
  "Sun Oct 11 2026",
  "15:00:00 GMT-0500",
  t.Charlotte,
);
const Race34 = new Race(
  "Freeway Insurance 500",
  "Sun Oct 18 2026",
  "15:00:00 GMT-0500",
  t.Phoenix,
);
const Race35 = new Race(
  "Yellawood 500",
  "Sun Oct 25 2026",
  "14:00:00 GMT-0500",
  t.Talladega,
);
const Race36 = new Race(
  "Xfinity 500",
  "Sun Nov 1 2026",
  "14:00:00 GMT-0500",
  t.Martinsville,
);
const Race37 = new Race(
  "NASCAR Cup Series Championship Race",
  "Sun Nov 8 2026",
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
