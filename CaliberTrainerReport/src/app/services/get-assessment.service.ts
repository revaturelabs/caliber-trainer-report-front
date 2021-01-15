import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment } from '../class/assessment';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class GetAssessmentService {

  constructor(private http : HttpClient, private us : UrlService) { }

  getAssessmentsByWeekAndBatchId(batchId : string, week : number) : Observable<Assessment[]>{
    return this.http.get<Assessment[]>(this.us.getUrl() + "Assessment/assessments/" + batchId + "/" + week);
  }
  getPromiseAssessmentsByWeekAndBatchId(batchId : string, week : number) : Promise<Assessment[]>{
    return this.http.get<Assessment[]>(this.us.getUrl() + "Assessment/assessments/" + batchId + "/" + week).toPromise();
  }

  getAverageGradeByAssessment(assessmentId : number) : Observable<number>{
    return this.http.get<number>(this.us.getUrl() + "Assessment/assessment/grade/" + assessmentId);
  }
}
