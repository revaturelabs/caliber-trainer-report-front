import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FourthChartService {

  data: any[];
  constructor() { }

  getAvgAssessmentScores(batch: string): any[]{
    this.data = [];


    if (batch === '1804 Apr16 -2'){
    // our subscribe method eventually
      this.data.push(80); // Exam
      this.data.push(74); // Verbal
      this.data.push(60); // Project
    }else if (batch === '1901 Jan06 Other'){
      this.data.push(10);
      this.data.push(100);
      this.data.push(80);
    }else if (batch === '1903 Mar04 Full Stack Java/JEE'){
      this.data.push(60);
      this.data.push(75);
      this.data.push(90);
    }
    return this.data;
  }
}
