import { TestBed, inject } from '@angular/core/testing';

import { FlightdataService } from './flightdata.service';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('FlightdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightdataService],
      imports:[FormsModule,HttpModule]
    });
  });

  it('should be created', inject([FlightdataService], (service: FlightdataService) => {
    expect(service).toBeTruthy();
  }));

  it('retrieves all the values', inject( [FlightdataService], ( searchService ) => {
    return searchService.fetchDetails().then( (result) => {         
       expect(result.length).toBeGreaterThan(0);
    } );       
  }) );



});
