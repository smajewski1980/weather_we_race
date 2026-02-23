class RaceTrack {
  constructor(
    trackLength,
    trackLocation,
    trackLogo,
    trackIcon,
    trackPhoto,
    trackFacts,
    trackName,
  ) {
    this.trackLength = trackLength;
    this.trackLocation = trackLocation;
    this.trackLogo = trackLogo;
    this.trackIcon = trackIcon;
    this.trackPhoto = trackPhoto;
    this.trackFacts = trackFacts;
    this.trackName = trackName;
  }

  getWeather() {
    return "this will be the function to get the weather for " + this.trackName;
  }

  getRenderData() {
    return (
      "this will be to return the data to put on the page for " + this.trackName
    );
  }
}

const Daytona = new RaceTrack(
  "2.5 mile",
  "Daytona Beach, FL",
  "image path",
  "image path",
  "image path",
  ["opened in 1959", "31deg banking in the turns, 18deg in the tri-oval"],
  "Daytona International Speedway",
);

const Atlanta = new RaceTrack(
  "1.54 mile",
  "Hampton, GA",
  "image path",
  "image path",
  "image path",
  ["opened in 1960", "28deg banking"],
  "Echopark Speedway",
);

const COTA = new RaceTrack(
  "3.41 mile",
  "Austin, TX",
  "image path",
  "image path",
  "image path",
  ["opened in 2012", "has 20 turns"],
  "Circuit Of The Americas",
);

const Phoenix = new RaceTrack(
  "1 mile",
  "Avondale, AZ",
  "image path",
  "image path",
  "image path",
  ["opened in 1964", "reconfigured in 2018"],
  "Phoenix Raceway",
);

const LasVegas = new RaceTrack(
  "1.5 mile",
  "Las Vegas, NV",
  "image path",
  "image path",
  "image path",
  ["opened in 1996", "20deg banking in turns, 9-12deg on straightaways"],
  "Las Vegas Motor Speedway",
);

const Darlington = new RaceTrack(
  "1.366 mile",
  "Darlington, SC",
  "image path",
  "image path",
  "image path",
  ["opened in 1950", "25deg banking in 1 and 2, 23deg in 3 and 4"],
  "Darlington Raceway",
);

const Martinsville = new RaceTrack(
  ".526 mile",
  "Ridgeway, VA",
  "image path",
  "image path",
  "image path",
  ["opened in 1947", "12deg banking"],
  "Martinsville Speedway",
);

const Bristol = new RaceTrack(
  ".533 mile",
  "Bristol, TN",
  "image path",
  "image path",
  "image path",
  ["opened in 1961", "24-28deg prog banking in turns"],
  "Bristol Motor Speedway",
);

const Kansas = new RaceTrack(
  "1.5 mile",
  "Kansas City, KS",
  "image path",
  "image path",
  "image path",
  ["opened in 2001", "17-20deg banking in turns, 9-11deg on frontstretch"],
  "Kansas Speedway",
);

const Talladega = new RaceTrack(
  "2.66 mile",
  "Lincoln, AL",
  "image path",
  "image path",
  "image path",
  ["opened in 1969", "33deg banking in turns"],
  "Talledega Superspeedway",
);

const Texas = new RaceTrack(
  "1.5 mile",
  "Fort Worth, TX",
  "image path",
  "image path",
  "image path",
  [
    "opened in 1997",
    "20deg banking in 1 and 2, 24deg in 3 and 4, 5deg on straights",
  ],
  "Texas Motor Speedway",
);

const WatkinsGlen = new RaceTrack(
  "2.45 mile",
  "Watkins Glen, NY",
  "image path",
  "image path",
  "image path",
  ["opened in 1948", "141 ft elevation change in the esses"],
  "Watkins Glen International",
);

const Dover = new RaceTrack(
  "1 mile",
  "Dover, DE",
  "image path",
  "image path",
  "image path",
  ["opened in 1969", "24deg banking in turns, 9deg on straights"],
  "Dover Motor Speedway",
);

const Charlotte = new RaceTrack(
  "1.5 mile",
  "Concord, NC",
  "image path",
  "image path",
  "image path",
  ["opened in 1960", "24deg banking in turns, 5deg on straights"],
  "Charlotte Motor Speedway",
);

const Nashville = new RaceTrack(
  "1.33 mile",
  "Lebanon, TN",
  "image path",
  "image path",
  "image path",
  ["opened in 2001", "14deg banking in the turns"],
  "Nashville Superspeedway",
);

const Michigan = new RaceTrack(
  "2 mile",
  "Brooklyn, MI",
  "image path",
  "image path",
  "image path",
  ["opened in 1968", "18deg banking in turns 12deg on frontstretch"],
  "Michigan International Speedway",
);

const Pocono = new RaceTrack(
  "2.5 mile",
  "Long Pond, PA",
  "image path",
  "image path",
  "image path",
  ["opened in 1969", "14deg, 8deg, 6deg banking in turns 1, 2, 3"],
  "Pocono Raceway",
);

const SanDiego = new RaceTrack(
  "3.4 mile",
  "San Diego, CA",
  "image path",
  "image path",
  "image path",
  ["for the U.S. Navy's 250th anniversary", "16 turns"],
  "Naval Base Coronado",
);

const Sonoma = new RaceTrack(
  "2.52 mile",
  "Sonoma, CA",
  "image path",
  "image path",
  "image path",
  ["opened in 1968", "12 turns"],
  "Sonoma Raceway",
);

const Chicagoland = new RaceTrack(
  "1.5 mile",
  "Joliet, IL",
  "image path",
  "image path",
  "image path",
  ["opened in 2001", "18deg banking in turns, 11deg on frontstretch"],
  "Chicagoland Speedway",
);

const NorthWilkesboro = new RaceTrack(
  ".625 mile",
  "North Wilkesboro, NC",
  "image path",
  "image path",
  "image path",
  ["opened in 1947", "13deg banking in the turns"],
  "North Wilkesboro Speedway",
);

const Indy = new RaceTrack(
  "2.5 mile",
  "Speedway, IN",
  "image path",
  "image path",
  "image path",
  ["opened in 1909", "originally paved with 3.2 million bricks"],
  "The Indianapolis Motor Speedway",
);

const Iowa = new RaceTrack(
  ".875 mile",
  "Newton, IA",
  "image path",
  "image path",
  "image path",
  [
    "opened in 2006",
    "variable banking 12-14deg in turns, 4-11deg on frontstretch",
  ],
  "Iowa Speedway",
);

const Richmond = new RaceTrack(
  ".75 mile",
  "Henrico County, VA",
  "image path",
  "image path",
  "image path",
  [
    "opened in 1946",
    "14deg banking in turns, 8deg on frontstretch, 2deg on backstretch",
  ],
  "Richmond Raceway",
);

const NewHampshire = new RaceTrack(
  "1.058 mile",
  "Loudon, NH",
  "image path",
  "image path",
  "image path",
  ["opened in 1990", "2-7deg banking in turns, 1deg on straights"],
  "New Hampshire Motor Speedway",
);

const WorldWideTech = new RaceTrack(
  "1.25 mile",
  "Madison, IL",
  "image path",
  "image path",
  "image path",
  ["opened in 1997", "11deg banking in 1 and 2, 9deg in 3 and 4"],
  "World Wide Technology Raceway",
);

const Homestead = new RaceTrack(
  "1.5 mile",
  "Homestead, FL",
  "image path",
  "image path",
  "image path",
  ["opened in 1995", "variable 18-20deg banking in turns, 3deg on straights"],
  "Homestead-Miami Speedway",
);

const schedule = [
  { date: "Sun Feb 15 2026", time: "13:30:00 GMT-0500", track: Daytona },
  { date: "Sun Feb 22 2026", time: "15:00:00 GMT-0500", track: Atlanta },
  { date: "Sun Mar 1 2026", time: "15:30:00 GMT-0500", track: COTA },
  { date: "Sun Mar 8 2026", time: "15:30:00 GMT-0500", track: Phoenix },
  { date: "Sun Mar 15 2026", time: "16:00:00 GMT-0500", track: LasVegas },
  { date: "Sun Mar 22 2026", time: "15:00:00 GMT-0500", track: Darlington },
  { date: "Sun Mar 29 2026", time: "15:30:00 GMT-0500", track: Martinsville },
  { date: "Sun Apr 12 2026", time: "15:00:00 GMT-0500", track: Bristol },
  { date: "Sun Apr 19 2026", time: "14:00:00 GMT-0500", track: Kansas },
  { date: "Sun Apr 26 2026", time: "15:00:00 GMT-0500", track: Talladega },
  { date: "Sun May 3 2026", time: "15:30:00 GMT-0500", track: Texas },
  { date: "Sun May 10 2026", time: "15:00:00 GMT-0500", track: WatkinsGlen },
  { date: "Sun May 17 2026", time: "15:00:00 GMT-0500", track: Dover },
  { date: "Sun May 24 2026", time: "18:00:00 GMT-0500", track: Charlotte },
  { date: "Sun May 31 2026", time: "19:00:00 GMT-0500", track: Nashville },
  { date: "Sun Jun 7 2026", time: "15:00:00 GMT-0500", track: Michigan },
  { date: "Sun Jun 14 2026", time: "15:00:00 GMT-0500", track: Pocono },
  { date: "Sun Jun 21 2026", time: "16:00:00 GMT-0500", track: SanDiego },
  { date: "Sun Jun 28 2026", time: "15:30:00 GMT-0500", track: Sonoma },
  { date: "Sun Jul 5 2026", time: "18:00:00 GMT-0500", track: Chicagoland },
  { date: "Sun Jul 12 2026", time: "19:00:00 GMT-0500", track: Atlanta },
  {
    date: "Sun Jul 19 2026",
    time: "19:00:00 GMT-0500",
    track: NorthWilkesboro,
  },
  { date: "Sun Jul 26 2026", time: "14:00:00 GMT-0500", track: Indy },
  { date: "Sun Aug 9 2026", time: "15:30:00 GMT-0500", track: Iowa },
  { date: "Sat Aug 15 2026", time: "19:00:00 GMT-0500", track: Richmond },
  { date: "Sun Aug 23 2026", time: "15:00:00 GMT-0500", track: NewHampshire },
  { date: "Sat Aug 29 2026", time: "19:30:00 GMT-0500", track: Daytona },
  { date: "Sun Sep 6 2026", time: "17:00:00 GMT-0500", track: Darlington },
  { date: "Sun Sep 13 2026", time: "15:00:00 GMT-0500", track: WorldWideTech },
  { date: "Sat Sep 19 2026", time: "19:30:00 GMT-0500", track: Bristol },
  { date: "Sun Sep 27 2026", time: "15:00:00 GMT-0500", track: Kansas },
  { date: "Sun Oct 4 2026", time: "17:30:00 GMT-0500", track: LasVegas },
  { date: "Sun Oct 11 2026", time: "15:00:00 GMT-0500", track: Charlotte },
  { date: "Sun Oct 18 2026", time: "15:00:00 GMT-0500", track: Phoenix },
  { date: "Sun Oct 25 2026", time: "14:00:00 GMT-0500", track: Talladega },
  { date: "Sun Nov 1 2026", time: "14:00:00 GMT-0500", track: Martinsville },
  { date: "Sun Nov 8 2026", time: "15:00:00 GMT-0500", track: Homestead },
];

// gets the next race, unless its race day, then returns todays race
function getNextRace() {
  let futureRaces = [];
  const today = new Date();

  schedule.forEach((race) => {
    if (new Date(race.date).toDateString() >= today.toDateString()) {
      futureRaces.push(race);
    }
  });

  return futureRaces[0];
}

console.log(getNextRace().track.getWeather());
console.log(getNextRace().track.getRenderData());
