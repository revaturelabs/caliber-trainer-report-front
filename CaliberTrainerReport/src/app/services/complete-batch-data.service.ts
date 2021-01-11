import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';
import { Batch } from '../class/batch';

@Injectable({
  providedIn: 'root'
})
export class CompleteBatchDataService {

  constructor(private http: HttpClient, private urlServe: UrlService) { }


  getCompleteBatchDataById(id: String) : Observable<any>
  {
    return this.http.get(this.urlServe.getUrl() + "/Complete/Batch/" + id);
  }

}
