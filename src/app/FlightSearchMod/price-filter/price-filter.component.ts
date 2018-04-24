import { Component, OnInit, Input } from '@angular/core';
import { PriceFilterPipe } from 'C:/Users/isha.panda/MyApp/src/app/FlightSearchMod/price-filter/price-filter.pipe';
@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnInit {

  @Input() priceMinFilter: number;


  filterPrice(filter) {
    this.priceMinFilter = filter.priceMin;
  }
  
 
    ngOnInit() {
  }

}
