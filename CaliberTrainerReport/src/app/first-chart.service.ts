import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// localhost:8080/excaliber/JSONController
// localhost:8080/excaliber/TechnicalStatusPerBatch
export class FirstChartService {
  xlabels: string[]; // Push batches onto here
  yGoodlabels: any[];
  yOkaylabels: any[];
  yBadlabels: any[];
  constructor(private http: HttpClient, private urlService: UrlService) { }

  getTechnicalStatusPerBatch(): Observable<any> {
    // this.http.get(this.urlService.getUrl() + 'JSONController/');
    return this.http.get(this.urlService.getUrlWithId() + 'TechnicalStatusPerBatch/').pipe(
      map( resp => resp )
    );
  }
}
