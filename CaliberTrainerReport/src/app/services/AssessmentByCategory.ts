import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FifthChartService {
  xlabels: string[]; // Push categories onto here
  yExamlabels: any[];
  yVerballabels: any[];
  yProjectlabels: any[];
  constructor(private http: HttpClient, private urlService: UrlService) { }

  // X-axis variables...
  getXData(): string[]{
    this.xlabels = ['Java', 'Javascript', 'SQL', 'Spring', 'Hibernate'];
    return this.xlabels;
  }

  getScorePerCategory(): Observable<any>{
    return this.http.get(this.urlService.getUrlWithId() + 'AssessmentByCategory/').pipe(
      map(resp => resp)
    );
  }

    // First column on each x-cell
  // Must match size of x-axis variables
  getYExamData(): any[]{
    this.yExamlabels = [];
    this.yExamlabels.push(14);
    this.yExamlabels.push(80);
    this.yExamlabels.push(40);
    this.yExamlabels.push(20);
    this.yExamlabels.push(60);
    return this.yExamlabels;
  }

  getYVerbalData(): any[]{
    this.yVerballabels = [];
    this.yVerballabels.push(75);
    this.yVerballabels.push(55);
    this.yVerballabels.push(89);
    this.yVerballabels.push(29);
    this.yVerballabels.push(50);
    return this.yVerballabels;
  }

  getYProjectData(): any[]{
    this.yProjectlabels = [];
    this.yProjectlabels.push(10);
    this.yProjectlabels.push(20);
    this.yProjectlabels.push(30);
    this.yProjectlabels.push(40);
    this.yProjectlabels.push(60);
    return this.yProjectlabels;
  }

}
