import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FlightResults} from './flightresults';


import { Http, Response,Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlightdataService {



  constructor (private http: Http) {}
  fetchDetails(userForm : NgForm): 
            Observable<FlightResults[]> {
              let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');    
	let myParams = new URLSearchParams();
  myParams.append('from', userForm.controls['originCity'].value);
 
  myParams.append('to', userForm.controls['destinationCity'].value);
        let options = new RequestOptions({ headers: myHeaders, params: myParams });
              return this.http.get("http://localhost:3000/flights", options)
                              .map(this.setData)
                              .catch(this.handleError );
    }

    fetchDetails2(userForm : NgForm): 
    Observable<FlightResults[]> {
      let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');    
let myParams = new URLSearchParams();
myParams.append('from', userForm.controls['originCity'].value);
myParams.append('from', userForm.controls['destinationCity'].value);
myParams.append('to', userForm.controls['originCity'].value);
myParams.append('to', userForm.controls['destinationCity'].value);
let options = new RequestOptions({ headers: myHeaders, params: myParams });
      return this.http.get("http://localhost:3000/flights", options)
                      .map(this.setData)
                      .catch(this.handleError );
}
    public setData(res:Response) {
     let results = res.json();
     return results;
     
  }
  
    private handleError (error: any) {
       
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }



}
