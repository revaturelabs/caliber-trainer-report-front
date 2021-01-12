import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UrlService } from 'src/app/services/url.service';
import { Batch } from '../class/batch';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class GetBatchService {
  constructor(
    private url: UrlService,
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  getBatches(): Observable<any> {
    let id: string = sessionStorage.getItem('selectedId');
    return this.http.get(this.url.getUrl() + '/Trainer/batches/' + id).pipe(
      map((resp) => resp as any),
      catchError(this.errorHandler.handleError)
    );
  }

  getBatchesByTrainerEmail(email: string): Observable<string[]> {
    return this.http
      .post<string[]>(this.url.getUrl() + '/Batch/batches', email)
      .pipe(
        map((resp) => resp as string[]),
        catchError(this.errorHandler.handleError)
      );
  }

  getBatchById(batchId: string): Observable<Batch> {
    return this.http
      .get<Batch>(this.url.getUrl() + '/Batch/batch/' + batchId)
      .pipe(
        map((resp) => resp as Batch),
        catchError(this.errorHandler.handleError)
      );
  }

  getPromiseBatchById(batchId: string): Promise<Batch> {
    return this.http
      .get<Batch>(this.url.getUrl() + '/Batch/batch/' + batchId)
      .toPromise();
  }
}
