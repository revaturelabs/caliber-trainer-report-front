import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstChartService {
  xlabels: string[]; // Push batches onto here
  yGoodlabels: any[];
  yOkaylabels: any[];
  yBadlabels: any[];
  constructor() { }

  // X-axis variables...
  getXData(): string[]{
    this.xlabels = [];
    this.xlabels.push('Batch 745');
    this.xlabels.push('Batch 746');
    this.xlabels.push('Batch 747');
    this.xlabels.push('Batch 748');
    return this.xlabels;
  }

  // First column on each x-cell
  // Must match size of x-axis variables
  getYGoodData(): any[]{
    this.yGoodlabels = [];
    this.yGoodlabels.push(14);
    this.yGoodlabels.push(4);
    this.yGoodlabels.push(40);
    this.yGoodlabels.push(20);
    return this.yGoodlabels;
  }

  // Second column on each x-cell
  // Must match size of x-axis variables
  getYOkayData(): any[]{
    this.yOkaylabels = [];
    this.yOkaylabels.push(1);
    this.yOkaylabels.push(2);
    this.yOkaylabels.push(3);
    this.yOkaylabels.push(4);
    return this.yOkaylabels;
  }

  // Third column on each x-cell
  // Must match size of x-axis variables
  getYBadData(): any[]{
    this.yBadlabels = [];
    this.yBadlabels.push(10);
    this.yBadlabels.push(20);
    this.yBadlabels.push(30);
    this.yBadlabels.push(40);
    return this.yBadlabels;
  }
}
