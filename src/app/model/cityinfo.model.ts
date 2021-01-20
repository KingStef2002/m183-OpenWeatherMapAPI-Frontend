import {formatDate} from '@angular/common';

export class Cityinfo {
  public type: number;
  public id: number;
  public message: number;

  // Country code
  public country: string;

  // Sunrise time, unix, UTC
  public sunrise: number;

  // Sunset time, unix, UTC
  public sunset: number;
}
