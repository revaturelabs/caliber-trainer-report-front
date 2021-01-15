import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from '../class/category';
import { QCNote } from '../class/QCNote';
import { ErrorHandlerService } from './error-handler.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class GetQcNoteService {
  constructor(
    private http: HttpClient,
    private us: UrlService,
    private errorHandler: ErrorHandlerService
  ) {}

  getQCNotesByBatchId(id: string): Observable<QCNote[]> {
    return this.http
      .get<QCNote[]>(this.us.getUrl() + 'QCNote/qcNotes/' + id)
      .pipe(
        map((resp) => resp as QCNote[]),
        catchError(this.errorHandler.handleError)
      );
  }

  getPromiseQCNotesByBatchId(id: string): Promise<QCNote[]> {
    return this.http
      .get<QCNote[]>(this.us.getUrl() + 'QCNote/qcNotes/' + id)
      .toPromise();
  }

  getCategoryByBatchIdAndWeek(
    batchId: string,
    week: number
  ): Observable<Category> {
    return this.http
      .get<Category>(
        this.us.getUrl() + 'QCNote/qcNote/' + batchId + '/category/' + week
      )
      .pipe(
        map((resp) => resp as Category),
        catchError(this.errorHandler.handleError)
      );
  }
}
