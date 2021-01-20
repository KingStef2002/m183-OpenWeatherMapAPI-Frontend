import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Weatherstation} from '../model/weatherstation.model';
import {environment} from '../../environments/environment';
import {getCurrentWeatherUrl} from '../util/urls';
import {Observable} from 'rxjs';
import {Languages} from '../util/languages';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getCurrentWeatherData(city: string, language: Languages): Observable<Weatherstation>{
    const params = new HttpParams()
      .set('q', city)
      .set('appid', environment.apiKey);

    if (language){
      params.set('lang', language.toString());
    }

    return this.http.get<Weatherstation>(getCurrentWeatherUrl(), {params});
  }

  public getWeatherIconByIconCode(iconcode: string): any {
    let iconurl = 'http://openweathermap.org/img/w/' + iconcode + '.png';

  }
}
