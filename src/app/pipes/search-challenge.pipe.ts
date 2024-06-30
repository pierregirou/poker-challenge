import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchChallenge',
  standalone: true
})
export class SearchChallengePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter((item:any)=> item.pseudoPoker.includes(...args) || item.name_challenge.includes(...args))
  }

}
