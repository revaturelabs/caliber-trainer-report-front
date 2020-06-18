import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SixthChartService {
  xlabels: string[];
  yAvglabels: any[];

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getSixthGraphData(): Observable<any>{
    return this.http.get(this.urlService.getUrl() + 'assessscoresbycategoryallbatches/').pipe(
      map(resp => resp)
    );
  }

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
