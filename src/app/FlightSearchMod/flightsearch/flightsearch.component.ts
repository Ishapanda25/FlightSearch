import { Component,NgModule, Output, EventEmitter} from '@angular/core';
import { ModelUser } from './modelquery';
import { NgForm } from '@angular/forms';
import {FlightResults} from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightSearchService/flightresults';
import { FlightdataService } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightSearchService/flightdata.service';
import { PriceFilterComponent } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/price-filter/price-filter.component';
import { PriceFilterPipe } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/price-filter/price-filter.pipe';
@Component({
  selector:'app-search',
    templateUrl: 'flightsearch.component.html',
    styleUrls: ['flightsearch.component.css']
})
export class FlightsearchComponent {
user = new ModelUser('','','','','');
showResults=false;
showResults1=false;
priceMinFilter: number;
@Output() filterPrice: EventEmitter<{
  priceMin: number,
}> = new EventEmitter<{
  priceMin: number,
}>();
constructor(private dataService:FlightdataService) {

}
private flights:FlightResults[] = [];
    private errorMessage:any = '';

submitQuery1(userForm: NgForm)
{
 this.showResults=true;

  this.dataService.fetchDetails(userForm).
  subscribe(flights => this.flights=flights, error => console.log(error));
 
}
submitQuery2(userForm: NgForm)
{
 this.showResults1=true;

  this.dataService.fetchDetails2(userForm).
  subscribe(flights => this.flights=flights, error => console.log(error));
 
}
saverange(valuePrice){
   this.filterPrice.emit({
      priceMin: this.priceMinFilter
    });
}

  }
