import { Component,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightsearchComponent } from './FlightSearchMod/flightsearch/flightsearch.component';
import { FlightviewComponent } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightview/flightview.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Trivago';
  searchForm : NgForm;
  sliderRange:string;
  
  
  passData(userForm){
  
    this.searchForm=userForm;
  }
  passRange(range){
    this.sliderRange=range;
  }
  }

