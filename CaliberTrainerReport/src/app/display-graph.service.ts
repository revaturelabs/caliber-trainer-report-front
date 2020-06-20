import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayGraphService {

  constructor() { }

  graphAdjust(element, selectVal, isBig) {
    if (selectVal === 'all') {
      const width = window.innerWidth;
      if (width < 1281) {
        // FOR MOBILE PHONE
        isBig = false;
        element.style.width = '80vw';
      } else {
        isBig = true;
        element.style.width = '45vw';
      }
      return isBig;
    } else {
      element.style.width = '90vw';
    }
    return isBig;
    }
}
