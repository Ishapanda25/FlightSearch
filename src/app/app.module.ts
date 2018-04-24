import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FlightsearchComponent } from './FlightSearchMod/flightsearch/flightsearch.component';
import { PriceFilterComponent } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/price-filter/price-filter.component';
import { FlightdataService } from './FlightSearchMod/flightSearchService/flightdata.service';
import { PriceFilterPipe } from './FlightSearchMod/price-filter/price-filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    FlightsearchComponent,
    PriceFilterPipe,
    PriceFilterComponent

 
    
   
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
