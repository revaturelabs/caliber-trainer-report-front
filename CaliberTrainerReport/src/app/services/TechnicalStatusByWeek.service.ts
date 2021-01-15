import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { ErrorHandlingServiceService } from './error-handling-service.service';

@Injectable({
  providedIn: 'root',
})
export class TechnicalStatusByWeekService {
  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    // private errorHandler: ErrorHandlingServiceService
  ) {}

  getTechnicalStatusByWeek(): Observable<any> {
    return this.http
      .get(this.urlService.getUrlWithId() + 'TechnicalStatusByWeek')
      .pipe(
        map((resp) => resp)
        // map((resp) => resp),
        // catchError(this.errorHandler.handleError)
      );
  }
}
