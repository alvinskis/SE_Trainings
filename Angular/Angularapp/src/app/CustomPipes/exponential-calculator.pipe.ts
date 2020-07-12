import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialCalculator'
})
export class ExponentialCalculatorPipe implements PipeTransform {

  transform(result: number, numberValue: number, powerValue: number): number {
    if (powerValue === 0) {
      return result = Math.pow(numberValue, 2);
    }
    else {
      return result = Math.pow(numberValue, powerValue);
    }
  }
}
