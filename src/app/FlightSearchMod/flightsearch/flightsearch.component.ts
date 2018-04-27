import { Component,NgModule, Output, EventEmitter,ViewChild} from '@angular/core';
import { ModelUser } from './modelquery';
import { NgForm } from '@angular/forms';
import {FlightResults} from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightSearchService/flightresults';
import { FlightdataService } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightSearchService/flightdata.service';

import { FlightviewComponent } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightview/flightview.component';
@Component({
  selector:'app-flightsearch',
    templateUrl: 'flightsearch.component.html',
    styleUrls: ['flightsearch.component.css']
})
export class FlightsearchComponent {

  user = new ModelUser('','','','','');


@Output() fetchFlightEmitter= new EventEmitter<NgForm>();
@Output() priceRangeEmitter= new EventEmitter<string>();

constructor(private dataService:FlightdataService) {

}

private flights:FlightResults[] = [];
private errorMessage:any = '';

submitQuery1(userForm: NgForm)
{
 this.fetchFlightEmitter.emit(userForm);
}

submitQuery2(userForm: NgForm){

  this.fetchFlightEmitter.emit(userForm);
 
}

sliderChange(value:string){
  console.log("refineRange",value);
  this.priceRangeEmitter.emit(value);

}

  }
