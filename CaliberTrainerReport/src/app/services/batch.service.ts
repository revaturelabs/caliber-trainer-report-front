import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Batch } from '../class/batch';
import { ErrorHandlerService } from './error-handler.service';
import { LocalStorageService } from './local-storage.service';
import { UrlService } from './url.service';

/**
 *
 * TechnicalStatusByWeek
 * TechnicalStatusPerBatch
 * BatchhTechicalStatusBySkillCategory
 * get-batch
 * complete=batch-data
 *
 *
 */

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    private errorHandler: ErrorHandlerService,
    private localStorageServ: LocalStorageService
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

  getCompleteBatchDataById(id: String): Observable<any> {
    return this.http
      .get(this.urlService.getUrl() + '/Complete/Batch/' + id)
      .pipe(
        map((resp) => resp),
        catchError(this.errorHandler.handleError)
      );
  }

  getBatches(): Observable<any> {
    let id: string = this.localStorageServ.get('selectedId');
    return this.http
      .get(this.urlService.getUrl() + '/Trainer/batches/' + id)
      .pipe(
        map((resp) => resp as any),
        catchError(this.errorHandler.handleError)
      );
  }

  getBatchesByTrainerEmail(email: string): Observable<string[]> {
    return this.http.post<string[]>(
      this.urlService.getUrl() + '/Batch/batches',
      email
    );
  }

  getBatchById(batchId: string): Observable<Batch> {
    return this.http.get<Batch>(
      this.urlService.getUrl() + '/Batch/batch/' + batchId
    );
  }

  getPromiseBatchById(batchId: string): Promise<Batch> {
    return this.http
      .get<Batch>(this.urlService.getUrl() + '/Batch/batch/' + batchId)
      .toPromise();
  }

  getTechnicalStatusPerBatch(): Observable<any> {
    // this.http.get(this.urlService.getUrl() + 'JSONController/');

    return this.http
      .get(this.urlService.getUrlWithId() + 'TechnicalStatusPerBatch/')
      .pipe(
        map((resp) => resp),
        catchError(this.errorHandler.handleError)
      );
  }

  getTechnicalStatusByWeek(): Observable<any> {
    return this.http
      .get(this.urlService.getUrlWithId() + 'TechnicalStatusByWeek')
      .pipe(
        map((resp) => resp),
        catchError(this.errorHandler.handleError)
      );
  }
}
