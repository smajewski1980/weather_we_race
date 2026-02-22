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
    return "this will be the function to get the weather";
  }

  getRenderData() {
    return "this will be to return the data to put on the page";
  }
}

const Daytona = new RaceTrack(
  "2.5 mile",
  "Daytona Beach, Fl",
  "image path",
  "image path",
  "image path",
  ["opened in 1959", "31deg banking in the turns, 18deg in the tri-oval"],
  "Daytona International Speedway",
);

const Atlanta = new RaceTrack(
  "1.54 mile",
  "Hampton, Ga",
  "image path",
  "image path",
  "image path",
  ["opened in 1960", "28deg banking"],
  "Echopark Speedway",
);

const schedule = [
  { date: "Sun Feb 15 2026", time: "13:30:00 GMT-0500", track: Daytona },
  { date: "Sun Feb 22 2026", time: "15:00:00 GMT-0500", track: Atlanta },
  { date: "Sun Mar 1 2026", time: "15:30:00 GMT-0500", track: COTA },
  { date: "Sun Mar 8 2026", time: "15:30:00 GMT-0500", track: Phoenix },
  { date: "Sun Mar 15 2026", time: "16:00:00 GMT-0500", track: LasVegas },
  { date: "Sun Mar 22 2026", time: "15:00:00 GMT-0500", track: Darlington },
  { date: "Sun Mar 29 2026", time: "15:30:00 GMT-0500", track: Martinsville },
];
