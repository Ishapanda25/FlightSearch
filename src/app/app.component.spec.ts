import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FlightsearchComponent } from './FlightSearchMod/flightsearch/flightsearch.component';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlightviewComponent } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightview/flightview.component';
import { FlightdataService } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/flightSearchService/flightdata.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,FlightsearchComponent,FlightviewComponent
      ],
      imports:[FormsModule,HttpModule],
      providers: [FlightdataService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Trivago');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Trivago!');
  }));
});
