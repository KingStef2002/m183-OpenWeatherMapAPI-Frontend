import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Weatherstation} from '../../model/weatherstation.model';
import {debounceTime, map, publishReplay, refCount, startWith, switchMap} from 'rxjs/operators';
import {WeatherService} from '../../service/weather.service';
import {Languages} from '../../util/languages';
import {Cityinfo} from '../../model/cityinfo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchCityWeatherFormGroup: FormGroup;
  public result: Observable<Weatherstation>;
  private languages = Languages;

  public constructor(private fb: FormBuilder,
                     private weatherService: WeatherService) {
    this.searchCityWeatherFormGroup = this.fb.group({
      searchValue: ['London', Validators.required],
      language: ['']
    });
  }

  public ngOnInit(): void {
  }

  onSubmit(value: any): void {
    if (value.searchValue){
      this.result = this.weatherService.getCurrentWeatherData(value.searchValue, value.language);
    }
  }

  keys(): Array<string> {
    const keys = Object.keys(this.languages);
    return keys.slice(keys.length / 2);
  }

}
