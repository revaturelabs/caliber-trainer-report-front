import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetBatchService {

  constructor(private http: HttpClient, private urlServ:UrlService) { }

  getBatchDates(): Observable<any>{
    return this.http.get(this.urlServ.getUrl()+'JSONController').pipe(
      map(resp=>resp)
    );
  }

}

