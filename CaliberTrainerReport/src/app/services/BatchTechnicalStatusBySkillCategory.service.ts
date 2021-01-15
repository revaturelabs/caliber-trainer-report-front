import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class BatchTechnicalStatusBySkillCategoryService {
  xlabels: string[]; // Push batches onto here

  yAvglabels: any[];
  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    private errorHandler: ErrorHandlerService
  ) {}

  getAvgCategoryScoresObservables(): Observable<any> {
    // this will be making our observable
    return this.http
      .get(
        this.urlService.getUrlWithId() + 'BatchTechnicalStatusBySkillCategory/'
      )
      .pipe(
        map((resp) => resp),
        catchError(this.errorHandler.handleError)
      );
  }
}
