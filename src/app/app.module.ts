import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherService } from './weather.service';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpClientModule
  ],
  providers: [WeatherService, HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
