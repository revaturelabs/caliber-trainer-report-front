import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AssessmentByBatchService {
  data: any[];
  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    private errorHandler: ErrorHandlerService
  ) {}

  getAssessmentByBatch(): Observable<any> {
    return this.http
      .get(this.urlService.getUrlWithId() + 'AssessmentByBatch/')
      .pipe(
        map((resp) => resp),
        catchError(this.errorHandler.handleError)
      );
  }
}
