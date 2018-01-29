import { Component, OnInit } from '@angular/core';
import { WeatherItemComponent } from '../weather-item/weather-item.component';
import { WeatherItem } from '../weather-item';
// import { WeatherItems } from '../weather-data';
import { WeatherService } from '../weather.service';



@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'], 
})
export class WeatherListComponent implements OnInit {
	weatherItems:WeatherItem[];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  	this.weatherItems = this.weatherService.getWeatherItems();
  }

}
