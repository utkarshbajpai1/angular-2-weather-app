import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
	weatherItem: WeatherItem;

  constructor() {
  }

  ngOnInit() {
  }

}
