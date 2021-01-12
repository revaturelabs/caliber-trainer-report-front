import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';
import { Batch } from '../class/batch';
import { ErrorHandlerService } from './error-handler.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompleteBatchDataService {
  constructor(
    private http: HttpClient,
    private urlServe: UrlService,
    private errorHandler: ErrorHandlerService
  ) {}

  getCompleteBatchDataById(id: String): Observable<any> {
    return this.http.get(this.urlServe.getUrl() + '/Complete/Batch/' + id).pipe(
      map((resp) => resp),
      catchError(this.errorHandler.handleError)
    );
  }
}
