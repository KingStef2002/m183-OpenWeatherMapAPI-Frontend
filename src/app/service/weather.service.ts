import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Weatherstation} from '../model/weatherstation.model';
import {environment} from '../../environments/environment';
import {getCurrentWeatherUrl} from '../util/urls';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getCurrentWeatherData(city: string): Observable<Weatherstation>{
    const params = new HttpParams()
      .set('q', city)
      .set('appid', environment.apiKey);

    return this.http.get<Weatherstation>(getCurrentWeatherUrl(), {params});
  }
}
