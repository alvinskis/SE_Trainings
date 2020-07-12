import { Pipe, PipeTransform } from '@angular/core';
import { strict } from 'assert';

@Pipe({
  name: 'alphabetCounter'
})
export class AlphabetCounterPipe implements PipeTransform {

  transform(message: string): number {
    const regex = /[a-z,A-Z]/g;
    const matchedAlphabet = message.match(regex);
    return matchedAlphabet.length;
  }
}
