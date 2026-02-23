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

const tracks = {
  Daytona: new RaceTrack(
    "2.5 mile",
    "Daytona Beach, FL",
    "image path",
    "image path",
    "image path",
    ["opened in 1959", "31deg banking in the turns, 18deg in the tri-oval"],
    "Daytona International Speedway",
  ),
  Atlanta: new RaceTrack(
    "1.54 mile",
    "Hampton, GA",
    "image path",
    "image path",
    "image path",
    ["opened in 1960", "28deg banking"],
    "Echopark Speedway",
  ),
  COTA: new RaceTrack(
    "3.41 mile",
    "Austin, TX",
    "image path",
    "image path",
    "image path",
    ["opened in 2012", "has 20 turns"],
    "Circuit Of The Americas",
  ),
  Phoenix: new RaceTrack(
    "1 mile",
    "Avondale, AZ",
    "image path",
    "image path",
    "image path",
    ["opened in 1964", "reconfigured in 2018"],
    "Phoenix Raceway",
  ),
  LasVegas: new RaceTrack(
    "1.5 mile",
    "Las Vegas, NV",
    "image path",
    "image path",
    "image path",
    ["opened in 1996", "20deg banking in turns, 9-12deg on straightaways"],
    "Las Vegas Motor Speedway",
  ),
  Darlington: new RaceTrack(
    "1.366 mile",
    "Darlington, SC",
    "image path",
    "image path",
    "image path",
    ["opened in 1950", "25deg banking in 1 and 2, 23deg in 3 and 4"],
    "Darlington Raceway",
  ),
  Martinsville: new RaceTrack(
    ".526 mile",
    "Ridgeway, VA",
    "image path",
    "image path",
    "image path",
    ["opened in 1947", "12deg banking"],
    "Martinsville Speedway",
  ),
  Bristol: new RaceTrack(
    ".533 mile",
    "Bristol, TN",
    "image path",
    "image path",
    "image path",
    ["opened in 1961", "24-28deg prog banking in turns"],
    "Bristol Motor Speedway",
  ),
  Kansas: new RaceTrack(
    "1.5 mile",
    "Kansas City, KS",
    "image path",
    "image path",
    "image path",
    ["opened in 2001", "17-20deg banking in turns, 9-11deg on frontstretch"],
    "Kansas Speedway",
  ),
  Talladega: new RaceTrack(
    "2.66 mile",
    "Lincoln, AL",
    "image path",
    "image path",
    "image path",
    ["opened in 1969", "33deg banking in turns"],
    "Talledega Superspeedway",
  ),
  Texas: new RaceTrack(
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
  ),
  WatkinsGlen: new RaceTrack(
    "2.45 mile",
    "Watkins Glen, NY",
    "image path",
    "image path",
    "image path",
    ["opened in 1948", "141 ft elevation change in the esses"],
    "Watkins Glen International",
  ),
  Dover: new RaceTrack(
    "1 mile",
    "Dover, DE",
    "image path",
    "image path",
    "image path",
    ["opened in 1969", "24deg banking in turns, 9deg on straights"],
    "Dover Motor Speedway",
  ),
  Charlotte: new RaceTrack(
    "1.5 mile",
    "Concord, NC",
    "image path",
    "image path",
    "image path",
    ["opened in 1960", "24deg banking in turns, 5deg on straights"],
    "Charlotte Motor Speedway",
  ),
  Nashville: new RaceTrack(
    "1.33 mile",
    "Lebanon, TN",
    "image path",
    "image path",
    "image path",
    ["opened in 2001", "14deg banking in the turns"],
    "Nashville Superspeedway",
  ),
  Michigan: new RaceTrack(
    "2 mile",
    "Brooklyn, MI",
    "image path",
    "image path",
    "image path",
    ["opened in 1968", "18deg banking in turns 12deg on frontstretch"],
    "Michigan International Speedway",
  ),
  Pocono: new RaceTrack(
    "2.5 mile",
    "Long Pond, PA",
    "image path",
    "image path",
    "image path",
    ["opened in 1969", "14deg, 8deg, 6deg banking in turns 1, 2, 3"],
    "Pocono Raceway",
  ),
  SanDiego: new RaceTrack(
    "3.4 mile",
    "San Diego, CA",
    "image path",
    "image path",
    "image path",
    ["for the U.S. Navy's 250th anniversary", "16 turns"],
    "Naval Base Coronado",
  ),
  Sonoma: new RaceTrack(
    "2.52 mile",
    "Sonoma, CA",
    "image path",
    "image path",
    "image path",
    ["opened in 1968", "12 turns"],
    "Sonoma Raceway",
  ),
  Chicagoland: new RaceTrack(
    "1.5 mile",
    "Joliet, IL",
    "image path",
    "image path",
    "image path",
    ["opened in 2001", "18deg banking in turns, 11deg on frontstretch"],
    "Chicagoland Speedway",
  ),
  NorthWilkesboro: new RaceTrack(
    ".625 mile",
    "North Wilkesboro, NC",
    "image path",
    "image path",
    "image path",
    ["opened in 1947", "13deg banking in the turns"],
    "North Wilkesboro Speedway",
  ),
  Indy: new RaceTrack(
    "2.5 mile",
    "Speedway, IN",
    "image path",
    "image path",
    "image path",
    ["opened in 1909", "originally paved with 3.2 million bricks"],
    "The Indianapolis Motor Speedway",
  ),
  Iowa: new RaceTrack(
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
  ),
  Richmond: new RaceTrack(
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
  ),
  NewHampshire: new RaceTrack(
    "1.058 mile",
    "Loudon, NH",
    "image path",
    "image path",
    "image path",
    ["opened in 1990", "2-7deg banking in turns, 1deg on straights"],
    "New Hampshire Motor Speedway",
  ),
  WorldWideTech: new RaceTrack(
    "1.25 mile",
    "Madison, IL",
    "image path",
    "image path",
    "image path",
    ["opened in 1997", "11deg banking in 1 and 2, 9deg in 3 and 4"],
    "World Wide Technology Raceway",
  ),
  Homestead: new RaceTrack(
    "1.5 mile",
    "Homestead, FL",
    "image path",
    "image path",
    "image path",
    ["opened in 1995", "variable 18-20deg banking in turns, 3deg on straights"],
    "Homestead-Miami Speedway",
  ),
};

export default tracks;
