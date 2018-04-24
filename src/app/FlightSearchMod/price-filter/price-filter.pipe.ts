import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value, args?) {
 
    let [minPrice] = args;
    return value.filter(flight => {
        return flight.flightRate >= +minPrice;
    });
  }
}