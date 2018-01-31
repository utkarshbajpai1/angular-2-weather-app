import { Injectable } from '@angular/core';
import { WeatherItems } from './weather-data';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  
  getWeatherItems(){
		return WeatherItems;
	}

	constructor(private _http : HttpClient) { }

}
