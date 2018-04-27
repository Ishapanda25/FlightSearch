import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightdataService } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightSearchService/flightdata.service';
import { FlightviewComponent } from './flightview.component';
import { HttpModule } from '@angular/http';
describe('FlightviewComponent', () => {
  let component: FlightviewComponent;
  let fixture: ComponentFixture<FlightviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
     ],
      declarations: [ FlightviewComponent ],
      providers: [FlightdataService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
