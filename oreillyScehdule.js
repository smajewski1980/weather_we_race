import t from "./tracks.js";
import Race from "./Race.js";

const Race1 = new Race(
  "United Rentals 300",
  "Saturday February 14, 2026",
  "17:00:00 GMT-0500",
  t.Daytona,
);
const Race2 = new Race(
  "Bennett Transportation & Logistics 250",
  "Saturday February 21, 2026",
  "17:00:00 GMT-0500",
  t.Atlanta,
);
const Race3 = new Race(
  "Focused Health 250",
  "Saturday February 28, 2026",
  "15:00:00 GMT-0500",
  t.COTA,
);
const Race4 = new Race(
  "GOVX 200",
  "Saturday March 7, 2026",
  "19:30:00 GMT-0500",
  t.Phoenix,
);
const Race5 = new Race(
  "The LiUNA!",
  "Saturday March 14, 2026",
  "17:30:00 GMT-0500",
  t.LasVegas,
);
const Race6 = new Race(
  "Sport Clips Haircuts VFW Help a Hero 200",
  "Saturday March 21, 2026",
  "17:30:00 GMT-0500",
  t.Darlington,
);
const Race7 = new Race(
  "NFPA 250",
  "Saturday March 28, 2026",
  "15:30:00 GMT-0500",
  t.Martinsville,
);
const Race8 = new Race(
  "North Carolina Education Lottery 250 Presented by Black's Tire",
  "Saturday April 4, 2026",
  "14:30:00 GMT-0500",
  t.Rockingham,
);
const Race9 = new Race(
  "Suburban Propane 300",
  "Saturday April 11, 2026",
  "19:30:00 GMT-0500",
  t.Bristol,
);
const Race10 = new Race(
  "Kansas Lottery 300",
  "Saturday April 18, 2026",
  "19:00:00 GMT-0500",
  t.Kansas,
);
const Race11 = new Race(
  "NASCAR O'Reilly Auto Parts Series Race at Talladega",
  "Saturday April 25, 2026",
  "16:00:00 GMT-0500",
  t.Talladega,
);
const Race12 = new Race(
  "Andy's Frozen Custard 340",
  "Saturday May 2, 2026",
  "15:30:00 GMT-0500",
  t.Texas,
);
const Race13 = new Race(
  "Mission 200 at The Glen",
  "Saturday May 9, 2026",
  "16:00:00 GMT-0500",
  t.WatkinsGlen,
);
const Race14 = new Race(
  "BetRivers 200",
  "Saturday May 16, 2026",
  "16:00:00 GMT-0500",
  t.Dover,
);
const Race15 = new Race(
  "Charbroil 300",
  "Saturday May 23, 2026",
  "17:00:00 GMT-0500",
  t.Charlotte,
);
const Race16 = new Race(
  "Tennessee Lottery 250",
  "Saturday May 30, 2026",
  "19:30:00 GMT-0500",
  t.Nashville,
);
const Race17 = new Race(
  "MillerTech Battery 250 presented by KOA",
  "Saturday June 13, 2026",
  "16:00:00 GMT-0500",
  t.Pocono,
);
const Race18 = new Race(
  "NASCAR O'Reilly Auto Parts Series Race at San Diego",
  "Saturday June 20, 2026",
  "17:00:00 GMT-0500",
  t.SanDiego,
);
const Race19 = new Race(
  "NASCAR O'Reilly Auto Parts Series Race at Sonoma",
  "Saturday June 27, 2026",
  "17:30:00 GMT-0500",
  t.Sonoma,
);
const Race20 = new Race(
  "NASCAR O'Reilly Auto Parts Series Race at Chicagoland",
  "Saturday July 4, 2026",
  "17:30:00 GMT-0500",
  t.Chicagoland,
);
const Race21 = new Race(
  "Focused Health 250",
  "Saturday July 11, 2026",
  "19:00:00 GMT-0500",
  t.Atlanta,
);
const Race22 = new Race(
  "NASCAR O'Reilly Auto Parts Series Race at Indianapolis",
  "Saturday July 25, 2026",
  "16:00:00 GMT-0500",
  t.Indy,
);
const Race23 = new Race(
  "NASCAR O'Reilly Auto Parts Series Race at Iowa",
  "Saturday August 8, 2026",
  "17:00:00 GMT-0500",
  t.Iowa,
);
const Race24 = new Race(
  "Wawa 250 Powered by Coca-Cola",
  "Friday August 28, 2026",
  "19:30:00 GMT-0500",
  t.Daytona,
);
const Race25 = new Race(
  "NASCAR O'Reilly Auto Parts Series Fall Race at Darlington",
  "Saturday September 5, 2026",
  "19:30:00 GMT-0500",
  t.Darlington,
);
const Race26 = new Race(
  "Nu Way 225 Sauced by Blues Hog",
  "Saturday September 12, 2026",
  "19:30:00 GMT-0500",
  t.WorldWideTech,
);
const Race27 = new Race(
  "Food City 300",
  "Friday September 18, 2026",
  "19:30:00 GMT-0500",
  t.Bristol,
);
const Race28 = new Race(
  "Focused Health 302",
  "Saturday October 3, 2026",
  "19:30:00 GMT-0500",
  t.LasVegas,
);
const Race29 = new Race(
  "Blue Cross NC 250",
  "Saturday October 10, 2026",
  "16:00:00 GMT-0500",
  t.Charlotte,
);
const Race30 = new Race(
  "NASCAR O'Reilly Auto Parts Series Chase Race at Phoenix",
  "Saturday October 17, 2026",
  "19:30:00 GMT-0500",
  t.Phoenix,
);
const Race31 = new Race(
  "The Progress Group 250",
  "Saturday October 24, 2026",
  "15:30:00 GMT-0500",
  t.Talladega,
);
const Race32 = new Race(
  "NASCAR O'Reilly Auto Parts Series Chase Race at Martinsville",
  "Saturday October 31, 2026",
  "16:00:00 GMT-0500",
  t.Martinsville,
);
const Race33 = new Race(
  "NASCAR O'Reilly Auto Parts Series Championship Race",
  "Saturday November 7, 2026",
  "17:00:00 GMT-0500",
  t.Homestead,
);

const oreillySchedule = [
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
];

export default oreillySchedule;
