import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssessScoresByCategoryAllBatchesService {
  xlabels: string[];
  yAvglabels: any[];

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getSixthGraphData(): Observable<any>{
    console.log(this.urlService.getUrlWithId() + 'AssessScoresByCategoryAllBatches');
    return this.http.get(this.urlService.getUrlWithId() + 'AssessScoresByCategoryAllBatches').pipe( 
      );
  }



}
