import t from "./tracks.js";

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
      trackName: this.track.trackName,
      trackLocation: this.track.trackLocation,
      trackLength: this.track.trackLength,
      trackGeo: this.track.trackGeo,
    };
    return info;
  }
}

const Race1 = new Race(
  "race 1",
  "Sun Feb 15 2026",
  "13:30:00 GMT-0500",
  t.Daytona,
);
const Race2 = new Race(
  "race 2",
  "Sun Feb 22 2026",
  "15:00:00 GMT-0500",
  t.Atlanta,
);
const Race3 = new Race("race 3", "Sun Mar 1 2026", "15:30:00 GMT-0500", t.COTA);
const Race4 = new Race(
  "race 4",
  "Sun Mar 8 2026",
  "15:30:00 GMT-0500",
  t.Phoenix,
);
const Race5 = new Race(
  "race 5",
  "Sun Mar 15 2026",
  "16:00:00 GMT-0500",
  t.LasVegas,
);
const Race6 = new Race(
  "race 6",
  "Sun Mar 22 2026",
  "15:00:00 GMT-0500",
  t.Darlington,
);
const Race7 = new Race(
  "race 7",
  "Sun Mar 29 2026",
  "15:30:00 GMT-0500",
  t.Martinsville,
);
const Race8 = new Race(
  "race 8",
  "Sun Apr 12 2026",
  "15:00:00 GMT-0500",
  t.Bristol,
);
const Race9 = new Race(
  "race 9",
  "Sun Apr 19 2026",
  "14:00:00 GMT-0500",
  t.Kansas,
);
const Race10 = new Race(
  "race 10",
  "Sun Apr 26 2026",
  "15:00:00 GMT-0500",
  t.Talladega,
);
const Race11 = new Race(
  "race 11",
  "Sun May 3 2026",
  "15:30:00 GMT-0500",
  t.Texas,
);
const Race12 = new Race(
  "race 12",
  "Sun May 10 2026",
  "15:00:00 GMT-0500",
  t.WatkinsGlen,
);
const Race13 = new Race(
  "race 13",
  "Sun May 17 2026",
  "15:00:00 GMT-0500",
  t.Dover,
);
const Race14 = new Race(
  "race 14",
  "Sun May 24 2026",
  "18:00:00 GMT-0500",
  t.Charlotte,
);
const Race15 = new Race(
  "race 15",
  "Sun May 31 2026",
  "19:00:00 GMT-0500",
  t.Nashville,
);
const Race16 = new Race(
  "race 16",
  "Sun Jun 7 2026",
  "15:00:00 GMT-0500",
  t.Michigan,
);
const Race17 = new Race(
  "race 17",
  "Sun Jun 14 2026",
  "15:00:00 GMT-0500",
  t.Pocono,
);
const Race18 = new Race(
  "race 18",
  "Sun Jun 21 2026",
  "16:00:00 GMT-0500",
  t.SanDiego,
);
const Race19 = new Race(
  "race 19",
  "Sun Jun 28 2026",
  "15:30:00 GMT-0500",
  t.Sonoma,
);
const Race20 = new Race(
  "race 20",
  "Sun Jul 5 2026",
  "18:00:00 GMT-0500",
  t.Chicagoland,
);
const Race21 = new Race(
  "race 21",
  "Sun Jul 12 2026",
  "19:00:00 GMT-0500",
  t.Atlanta,
);
const Race22 = new Race(
  "race 22",
  "Sun Jul 19 2026",
  "19:00:00 GMT-0500",
  t.NorthWilkesboro,
);
const Race23 = new Race(
  "race 23",
  "Sun Jul 26 2026",
  "14:00:00 GMT-0500",
  t.Indy,
);
const Race24 = new Race(
  "race 24",
  "Sun Aug 9 2026",
  "15:30:00 GMT-0500",
  t.Iowa,
);
const Race25 = new Race(
  "race 25",
  "Sat Aug 15 2026",
  "19:00:00 GMT-0500",
  t.Richmond,
);
const Race26 = new Race(
  "race 26",
  "Sun Aug 23 2026",
  "15:00:00 GMT-0500",
  t.NewHampshire,
);
const Race27 = new Race(
  "race 27",
  "Sat Aug 29 2026",
  "19:30:00 GMT-0500",
  t.Daytona,
);
const Race28 = new Race(
  "race 28",
  "Sun Sep 6 2026",
  "17:00:00 GMT-0500",
  t.Darlington,
);
const Race29 = new Race(
  "race 29",
  "Sun Sep 13 2026",
  "15:00:00 GMT-0500",
  t.WorldWideTech,
);
const Race30 = new Race(
  "race 30",
  "Sat Sep 19 2026",
  "19:30:00 GMT-0500",
  t.Bristol,
);
const Race31 = new Race(
  "race 31",
  "Sun Sep 27 2026",
  "15:00:00 GMT-0500",
  t.Kansas,
);
const Race32 = new Race(
  "race 32",
  "Sun Oct 4 2026",
  "17:30:00 GMT-0500",
  t.LasVegas,
);
const Race33 = new Race(
  "race 33",
  "Sun Oct 11 2026",
  "15:00:00 GMT-0500",
  t.Charlotte,
);
const Race34 = new Race(
  "race 34",
  "Sun Oct 18 2026",
  "15:00:00 GMT-0500",
  t.Phoenix,
);
const Race35 = new Race(
  "race 35",
  "Sun Oct 25 2026",
  "14:00:00 GMT-0500",
  t.Talladega,
);
const Race36 = new Race(
  "race 36",
  "Sun Nov 1 2026",
  "14:00:00 GMT-0500",
  t.Martinsville,
);
const Race37 = new Race(
  "race 37",
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
