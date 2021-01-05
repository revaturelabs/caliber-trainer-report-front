import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class CompleteBatchDataService {

  constructor(private http: HttpClient, private urlServe: UrlService) { }


  getCompleteBatchDataById(id: number) : Observable<Batch>
  {

  }

}
