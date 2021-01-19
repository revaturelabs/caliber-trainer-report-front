import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AssessmentByCategoryService {
  xlabels: string[]; // Push categories onto here
  yExamlabels: any[];
  yVerballabels: any[];
  yProjectlabels: any[];
  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    private errorHandler: ErrorHandlerService
  ) {}

  getScorePerCategory(): Observable<any> {
    return this.http
      .get(this.urlService.getUrlWithId() + 'AssessmentByCategory/')
      .pipe(
        map((resp) => resp),
        catchError(this.errorHandler.handleError)
      );
  }
}
