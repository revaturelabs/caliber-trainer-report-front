import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    const matches = [];
    if (!value || value == null || value == undefined || value.length == 0) return value;
    if (!searchText || searchText == null || searchText == undefined || searchText.length == 0) return matches;

    for (const m of value) {
      
      if (m.toLowerCase().includes(searchText.toLowerCase())) {
        matches.push(m);
      }
    }

    return matches;
  }
}
