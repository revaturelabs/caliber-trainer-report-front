import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SixthChartService {
  xlabels: string[];
  yAvglabels: any[];

  constructor() { }

  getXData(){
    this.xlabels = ['1804 Apr16 -2', '1901 Jan06 Other', '1903 Mar04 Full Stack Java/JEE', '1909 Sep30 Other'];
    return this.xlabels;
  }

  getAverageCategoryScores(category: string): any[]{
    this.yAvglabels = [];
    if (category === 'SQL'){
      // our subscribe method eventually
        this.yAvglabels.push(100);
        this.yAvglabels.push(25);
        this.yAvglabels.push(65);
        this.yAvglabels.push(73);
      }else if (category === 'Java'){
        this.yAvglabels.push(24);
        this.yAvglabels.push(85);
        this.yAvglabels.push(32);
        this.yAvglabels.push(18);
      }
    return this.yAvglabels;
  }

}
