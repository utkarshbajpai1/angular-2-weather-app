import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherService } from './weather.service';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
