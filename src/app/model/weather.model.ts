// (more info Weather condition codes)
export class Weather {
  // Weather condition id
  public id: number;

  // Group of weather parameters (Rain, Snow, Extreme etc.)
  public main: string;

  // Weather condition within the group. (ist übersetzt)
  public description: string;

  // Weather icon id
  public icon: string;
}
