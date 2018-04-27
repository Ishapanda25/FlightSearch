import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FlightsearchComponent } from './FlightSearchMod/flightsearch/flightsearch.component';

import { FlightdataService } from './FlightSearchMod/flightSearchService/flightdata.service';

import { FlightviewComponent } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightview/flightview.component';




@NgModule({
  declarations: [
    AppComponent,
    FlightsearchComponent,
    
    FlightviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FlightdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
