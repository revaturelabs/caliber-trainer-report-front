import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { TechnicalStatusByWeek } from './Classes/TechnicalStatusByWeek';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThirdChartService {
  xlabels: string[]; // Push batches onto here
  yGoodData: any[];
  yOkayData: any[];
  yBadData: any[];
  constructor(private http: HttpClient, private urlService: UrlService) { }

  // returns array of TechnicalStatusByWeek objects containing data for the graph
  getTableData(): Observable<TechnicalStatusByWeek[]>{
    return this.http.get(this.urlService.getUrl() + 'TechnicalStatusByWeek', {withCredentials: false}).pipe(
      map(resp => resp as TechnicalStatusByWeek[])
    );
  }

  // X-axis variables...
  getXData(): string[]{
    this.xlabels = [];
    this.xlabels.push('Week 1');
    this.xlabels.push('Week 2');
    this.xlabels.push('Week 3');
    this.xlabels.push('Week 4');
    this.xlabels.push('Week 5');
    this.xlabels.push('Week 6');
    this.xlabels.push('Week 7');
    this.xlabels.push('Week 8');
    return this.xlabels;
  }

  getGoodScores(batch: string): any[] {
    if (batch === 'Batch 745') {
      // First column on each x-cell
      // Must match size of x-axis variables
        this.yGoodData = [];
        this.yGoodData.push(14);
        this.yGoodData.push(4);
        this.yGoodData.push(40);
        this.yGoodData.push(20);
        this.yGoodData.push(14);
        this.yGoodData.push(4);
        this.yGoodData.push(40);
        this.yGoodData.push(20);
        return this.yGoodData;
    } else if (batch === 'Batch 746') {
        this.yGoodData = [];
        this.yGoodData.push(20);
        this.yGoodData.push(8);
        this.yGoodData.push(30);
        this.yGoodData.push(15);
        this.yGoodData.push(14);
        this.yGoodData.push(4);
        this.yGoodData.push(40);
        this.yGoodData.push(20);
        return this.yGoodData;
    } else if (batch === 'Batch 747') {
        this.yGoodData = [];
        this.yGoodData.push(18);
        this.yGoodData.push(7);
        this.yGoodData.push(28);
        this.yGoodData.push(18);
        this.yGoodData.push(14);
        this.yGoodData.push(4);
        this.yGoodData.push(40);
        this.yGoodData.push(20);
        return this.yGoodData;
    } else if (batch === 'Batch 748') {
        this.yGoodData = [];
        this.yGoodData.push(16);
        this.yGoodData.push(5);
        this.yGoodData.push(32);
        this.yGoodData.push(18);
        this.yGoodData.push(14);
        this.yGoodData.push(4);
        this.yGoodData.push(40);
        this.yGoodData.push(20);
        return this.yGoodData;
    }
  }

  getOkScores(batch: string): any[] {
    if (batch === 'Batch 745') {
      // Second column on each x-cell
      // Must match size of x-axis variables

      this.yOkayData = [];
      this.yOkayData.push(11);
      this.yOkayData.push(12);
      this.yOkayData.push(13);
      this.yOkayData.push(14);
      this.yOkayData.push(11);
      this.yOkayData.push(12);
      this.yOkayData.push(13);
      this.yOkayData.push(14);
      return this.yOkayData;
    } else if (batch === 'Batch 746') {
        this.yOkayData = [];
        this.yOkayData.push(14);
        this.yOkayData.push(13);
        this.yOkayData.push(12);
        this.yOkayData.push(11);
        this.yOkayData.push(11);
        this.yOkayData.push(12);
        this.yOkayData.push(13);
        this.yOkayData.push(14);
        return this.yOkayData;
    } else if (batch === 'Batch 747') {
        this.yOkayData = [];
        this.yOkayData.push(12);
        this.yOkayData.push(13);
        this.yOkayData.push(14);
        this.yOkayData.push(11);
        this.yOkayData.push(11);
        this.yOkayData.push(12);
        this.yOkayData.push(13);
        this.yOkayData.push(14);
        return this.yOkayData;
    } else if (batch === 'Batch 748'){
        this.yOkayData = [];
        this.yOkayData.push(13);
        this.yOkayData.push(14);
        this.yOkayData.push(11);
        this.yOkayData.push(12);
        this.yOkayData.push(11);
        this.yOkayData.push(12);
        this.yOkayData.push(13);
        this.yOkayData.push(14);
        return this.yOkayData;
    }
  }

  getBadScores(batch: string): any[] {
    if (batch === 'Batch 745') {
      // Second column on each x-cell
      // Must match size of x-axis variables

      this.yBadData = [];
      this.yBadData.push(15);
      this.yBadData.push(10);
      this.yBadData.push(11);
      this.yBadData.push(7);
      this.yBadData.push(15);
      this.yBadData.push(10);
      this.yBadData.push(11);
      this.yBadData.push(7);
      return this.yBadData;
    } else if (batch === 'Batch 746') {
        this.yBadData = [];
        this.yBadData.push(9);
        this.yBadData.push(12);
        this.yBadData.push(13);
        this.yBadData.push(15);
        this.yBadData.push(15);
        this.yBadData.push(10);
        this.yBadData.push(11);
        this.yBadData.push(7);
        return this.yBadData;
    } else if (batch === 'Batch 747') {
        this.yBadData = [];
        this.yBadData.push(11);
        this.yBadData.push(13);
        this.yBadData.push(10);
        this.yBadData.push(13);
        this.yBadData.push(15);
        this.yBadData.push(10);
        this.yBadData.push(11);
        this.yBadData.push(7);
        return this.yBadData;
    } else if (batch === 'Batch 748'){
        this.yBadData = [];
        this.yBadData.push(8);
        this.yBadData.push(16);
        this.yBadData.push(3);
        this.yBadData.push(6);
        this.yBadData.push(15);
        this.yBadData.push(10);
        this.yBadData.push(11);
        this.yBadData.push(7);
        return this.yBadData;
    }
  }

}
