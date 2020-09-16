import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BatchTechnicalStatusBySkillCategoryService {
  xlabels: string[]; // Push batches onto here

  yAvglabels: any[];
  constructor(private http: HttpClient, private urlService: UrlService) { }

  getAvgCategoryScoresObservables(): Observable<any>{
    // this will be making our observable
    return this.http.get(this.urlService.getUrlWithId() + 'BatchTechnicalStatusBySkillCategory/').pipe(
      map(resp => resp)
    );
  }

  // X-axis variables...
  getXData(): string[] {
    this.xlabels = [];
    this.xlabels.push('Batch 745');
    this.xlabels.push('Batch 746');
    this.xlabels.push('Batch 747');
    this.xlabels.push('Batch 748');
    return this.xlabels;
  }

  getAvgCategoryScores(category: string): any[] {

    this.yAvglabels = [];


    if (category === 'SQL'){
    // our subscribe method eventually
      this.yAvglabels.push(0);
      this.yAvglabels.push(1);
      this.yAvglabels.push(2);
      this.yAvglabels.push(3);
    }else if (category === 'Java'){
      this.yAvglabels.push(2);
      this.yAvglabels.push(0);
      this.yAvglabels.push(3);
      this.yAvglabels.push(1);
    }
    return this.yAvglabels;
  }

}
