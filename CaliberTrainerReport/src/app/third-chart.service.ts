import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThirdChartService {
  constructor(private http: HttpClient, private urlService: UrlService) { }

  getTechnicalStatusByWeek(): Observable<any>{
    return this.http.get(this.urlService.getUrlWithId() + 'TechnicalStatusByWeek').pipe(
      map(resp => resp)
    );
  }

}
