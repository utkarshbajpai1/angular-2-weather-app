import { Component } from '@angular/core';
import { WeatherListComponent } from './weather-list/weather-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [WeatherListComponent]
})
export class AppComponent {
  title = 'app';
}
