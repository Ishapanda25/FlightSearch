import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsearchComponent } from './flightsearch.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlightdataService } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightSearchService/flightdata.service';

describe('FlightsearchComponent', () => {
  let component: FlightsearchComponent;
  let fixture: ComponentFixture<FlightsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsearchComponent, ],
      imports: [
        FormsModule,HttpModule
     ],
     providers: [FlightdataService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
