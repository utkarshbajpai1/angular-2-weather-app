import { Injectable } from '@angular/core';
import { WeatherItems } from './weather-data';

@Injectable()
export class WeatherService {
	getWeatherItems(){
		return WeatherItems;
	}
  constructor() { }

}
