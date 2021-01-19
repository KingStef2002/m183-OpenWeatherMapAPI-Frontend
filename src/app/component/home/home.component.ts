import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, scheduled} from 'rxjs';
import {Weatherstation} from '../../model/weatherstation.model';
import {publishReplay, refCount, switchMap} from 'rxjs/operators';
import {WeatherService} from '../../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchCityWeatherFormGroup: FormGroup;
  public result: Observable<Weatherstation>;

  public constructor(private fb: FormBuilder,
                     private weatherService: WeatherService) {
    this.searchCityWeatherFormGroup = this.fb.group({
      searchValue: ['', Validators.required]
    });

    this.result = this.searchCityWeatherFormGroup.get('searchValue').valueChanges
      .pipe(switchMap(searchValue => this.weatherService.getCurrentWeatherData(searchValue)))
      .pipe(publishReplay())
      .pipe(refCount());
  }

  public ngOnInit(): void {

  }

}
