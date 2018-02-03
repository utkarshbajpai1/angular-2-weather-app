import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item';
import { WeatherItems } from '../weather-data';
import { WeatherService } from '../weather.service';



@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
	
		
  constructor(private _weatherservice: WeatherService) { }

  onSubmit(form: any){
		this._weatherservice.searchWeatherData(form.value.name)
		.subscribe(
			data => {
				const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
				this._weatherservice.addWeatherItem(weatherItem);			
			}
		)
  }

  ngOnInit() {
  }

}
