import {Component, Input, OnInit} from '@angular/core';
import {Weatherstation} from '../../model/weatherstation.model';
import {Observable} from 'rxjs';
import {Utils} from '../../util/utils';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})
export class WeatherinfoComponent implements OnInit {

  @Input() public weatherstation$: Observable<Weatherstation>;

  public util = Utils;

  constructor() { }

  ngOnInit(): void {
  }

}
