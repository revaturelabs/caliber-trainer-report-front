import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    const matches = [];
    for (const m of value) {
      
      if (m.toLowerCase().includes(searchText.toLowerCase())) {
        matches.push(m);
      }
    }
    if(!searchText) {

      return value;
    }
    else {

      return matches;
    }
  }
}
