import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Assessment } from '../class/assessment';
import { ErrorHandlerService } from './error-handler.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class GetAssessmentService {
  constructor(
    private http: HttpClient,
    private us: UrlService,
    private errorHandler: ErrorHandlerService
  ) {}

  getAssessmentsByWeekAndBatchId(
    batchId: string,
    week: number
  ): Observable<Assessment[]> {
    return this.http
      .get<Assessment[]>(
        this.us.getUrl() + 'Assessment/assessments/' + batchId + '/' + week
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
        this.us.getUrl() + 'Assessment/assessments/' + batchId + '/' + week
      )
      .toPromise();
  }

  getAverageGradeByAssessment(assessmentId: number): Observable<number> {
    return this.http
      .get<number>(
        this.us.getUrl() + 'Assessment/assessment/grade/' + assessmentId
      )
      .pipe(
        map((resp) => resp as number),
        catchError(this.errorHandler.handleError)
      );
  }
}
