import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Weatherstation} from '../../model/weatherstation.model';
import {WeatherService} from '../../service/weather.service';
import {Languages} from '../../util/languages';

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
      city: ['', Validators.required],
      language: ['']
    });
  }

  public ngOnInit(): void {
  }

  onSubmit(value: any): void {
    if (value.city && value.city !== ''){
      if (value.language === '' || this.languages[value.language]) {
        this.result = this.weatherService.getCurrentWeatherData(value.city, this.languages[value.language]);
      }
    }
  }

  keys(): Array<string> {
    const keys = Object.keys(this.languages);
    return keys.slice(keys.length / 2);
  }

}
