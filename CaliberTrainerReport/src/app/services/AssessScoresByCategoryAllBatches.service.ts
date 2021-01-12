import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AssessScoresByCategoryAllBatchesService {
  xlabels: string[];
  yAvglabels: any[];

  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    private errorHandler: ErrorHandlerService
  ) {}

  getSixthGraphData(): Observable<any> {
    return this.http
      .get(this.urlService.getUrlWithId() + 'AssessScoresByCategoryAllBatches')
      .pipe(
        map((resp) => resp),
        catchError(this.errorHandler.handleError)
      );
  }

  // getXData(){
  //   this.xlabels = ['1804 Apr16 -2', '1901 Jan06 Other', '1903 Mar04 Full Stack Java/JEE', '1909 Sep30 Other'];
  //   return this.xlabels;
  // }
}
