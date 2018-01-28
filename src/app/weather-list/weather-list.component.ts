import { Component, OnInit } from '@angular/core';
import { WeatherItemComponent } from '../weather-item/weather-item.component';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'], 
  directives: [WeatherItemComponent]
})
export class WeatherListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
