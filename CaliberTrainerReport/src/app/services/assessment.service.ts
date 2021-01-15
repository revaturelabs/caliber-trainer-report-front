import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { Assessment } from '../class/assessment';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
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

  getScorePerCategory(): Observable<any> {
    return this.http
      .get(this.urlService.getUrlWithId() + 'AssessmentByCategory/')
      .pipe(
        map((resp) => resp),
        catchError(this.errorHandler.handleError)
      );
  }

  getSixthGraphData(): Observable<any> {
    console.log(
      this.urlService.getUrlWithId() + 'AssessScoresByCategoryAllBatches'
    );
    return this.http
      .get(this.urlService.getUrlWithId() + 'AssessScoresByCategoryAllBatches')
      .pipe(
        map((resp) => resp),
        catchError(this.errorHandler.handleError)
      );
  }

  getAssessmentsByWeekAndBatchId(
    batchId: string,
    week: number
  ): Observable<Assessment[]> {
    return this.http
      .get<Assessment[]>(
        this.urlService.getUrl() +
          'Assessment/assessments/' +
          batchId +
          '/' +
          week
      )
      .pipe(
        map((resp) => resp as Assessment[]),
        catchError(this.errorHandler.handleError)
      );
  }
  getPromiseAssessmentsByWeekAndBatchId(
    batchId: string,
    week: number
  ): Promise<Assessment[]> {
    return this.http
      .get<Assessment[]>(
        this.urlService.getUrl() +
          'Assessment/assessments/' +
          batchId +
          '/' +
          week
      )
      .toPromise();
  }

  getAverageGradeByAssessment(assessmentId: number): Observable<number> {
    return this.http
      .get<number>(
        this.urlService.getUrl() + 'Assessment/assessment/grade/' + assessmentId
      )
      .pipe(
        map((resp) => resp as number),
        catchError(this.errorHandler.handleError)
      );
  }
}
