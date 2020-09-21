import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/services/url.service';
import { Batch } from '../class/Batch';


@Injectable({
  providedIn: 'root'
})
export class GetBatchService {

  constructor(private url:UrlService, private http: HttpClient) { }

  getBatches():Observable<any> {
    let id: string = sessionStorage.getItem('selectedId');
    return this.http.get(this.url.getUrl() + "/Trainer/batches/" + id);
  }

  getBatchesByTrainerEmail(email : string) : Observable<string[]> {
    return this.http.post<string[]>(this.url.getUrl() + "/Batch/batches", email);
  }

  getBatchById(batchId : string) : Observable<Batch>{
    return this.http.get<Batch>(this.url.getUrl() + "/Batch/batch/"+batchId);
  }

  getPromiseBatchById(batchId : string) : Promise<Batch>{
    return this.http.get<Batch>(this.url.getUrl() + "/Batch/batch/"+batchId).toPromise();
  }

}
