import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/services/url.service';


@Injectable({
  providedIn: 'root'
})
export class GetBatchesService {

  constructor(private url:UrlService, private http: HttpClient) { }

  getBatches():Observable<any> {
    let id: string = sessionStorage.getItem('selectedId');
    return this.http.get(this.url.getUrl() + "/Trainer/batches/" + id);
  }
}
