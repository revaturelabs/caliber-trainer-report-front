import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/services/url.service';
import { Batch } from '../class/batch';
import { ErrorHandlerService } from './error-handler.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GetBatchService {
  constructor(
    private url: UrlService,
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
    private localStorageServ: LocalStorageService
  ) {}

  getBatches(): Observable<any> {
    let id: string = this.localStorageServ.get('selectedId');
    return this.http.get(this.url.getUrl() + '/Trainer/batches/' + id).pipe(
      map((resp) => resp as any),
      catchError(this.errorHandler.handleError)
    );
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
