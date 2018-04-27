import { Component, AfterViewInit,Input, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { FlightdataService } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightSearchService/flightdata.service';
import {FlightResults} from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightSearchService/flightresults';
import { FlightsearchComponent } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightsearch/flightsearch.component';
@Component({
  selector: 'app-flightview',
  templateUrl: './flightview.component.html',
  styleUrls: ['./flightview.component.css']
})
export class FlightviewComponent implements OnChanges  {
  
  
  constructor(private dataService:FlightdataService) {

  }
 @Input() userForm;
 @Input() refineRange:number=40000;
 
 subscription: Subscription;

  private flights:Array<FlightResults>;
  private flightData:Array<FlightResults>;
  originCity:string;
  destinationCity:string;
  returnDate:string;
  displayDDate:string;
  displayRDate:string;
  ngOnChanges(){
    
    if(this.userForm==undefined){
      console.log("userform is undefined", this.userForm);
    }
    else{
      if(this.userForm.controls['returnDate'].value)
        {
           this.submitQuery2(this.userForm)
        }
      else
        {
          this.submitQuery1(this.userForm)
        }  
    
    }
  }

  submitQuery1(userForm){
    if(this.refineRange==undefined){
          this.refineRange=40000;

    }

    this.displayDDate=userForm.controls['departureDate'].value;
    this.originCity = userForm.controls['originCity'].value;
    this.destinationCity = userForm.controls['destinationCity'].value;
     this.dataService.fetchDetails1(userForm).
     subscribe(flights =>this.flights=flights, error => console.log(error));
  }

  submitQuery2(userForm){
    if(this.refineRange==undefined)
    {
         this.refineRange=40000;
    }
    
    this.displayDDate=userForm.controls['departureDate'].value;
    this.displayRDate=userForm.controls['returnDate'].value;
    this.originCity = userForm.controls['originCity'].value;
    this.destinationCity = userForm.controls['destinationCity'].value;
    this.returnDate=userForm.controls['returnDate'].value;
    
    this.dataService.fetchDetails2(userForm).
  subscribe(flights =>this.flights=flights, error => console.log(error));



  }

}