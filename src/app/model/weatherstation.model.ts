import {Weather} from './weather.model';
import {WeatherDetails} from './weather.details.model';
import {Cityinfo} from './cityinfo.model';

export class Weatherstation {
  // City ID
  public id: number;

  // City name
  public name: string;

  // Internal parameter
  public cod: number;

  // Internal parameter
  public base: string;

  public weather: Weather[];
  public main: WeatherDetails;
  public sys: Cityinfo;
  public visibility: number;

  public coord: {
    // City geo location, longitude
    lon: number,
    // City geo location, latitude
    lat: number
  };

  public wind: {
    // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    speed: number,
    // Wind direction, degrees
    deg: number
  };

  public clouds: {
    // Cloudiness, %
    all: number
  };
}

