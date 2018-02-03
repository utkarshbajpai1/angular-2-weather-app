import { Injectable } from '@angular/core';
import { WeatherItem } from './weather-item';
import { WeatherItems } from './weather-data';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  addWeatherItem(weatheritem: WeatherItem){
  	WeatherItems.push(weatheritem);
  }

  getWeatherItems(){
		return WeatherItems;
	}

	constructor(private _http : HttpClient) { }

	searchWeatherData(cityName: string): Observable<any>{
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + 
			'&APPID=ef004f282c3731c59b5ea610bb5449e9&units=metric')
		.map((response) => response);
	}	

}
