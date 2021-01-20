// Klasse mit Details des Wetters
export class WeatherDetails {
  // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. (einstellbar in get params)
  public temp: number;

  public feels_like: number;

  // Atmospheric pressure, hPa
  public pressure: number;

  // Humidity, %
  public humidity: number;

  // Minimum temperature at the moment.
  public temp_min: number;

  // Maximum temperature at the moment.
  public temp_max: number;
}
