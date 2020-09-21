import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../class/category';
import { QCNote } from '../class/QCNote';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class GetQcNoteService {

  constructor(private http : HttpClient, private us : UrlService) { }

  getQCNotesByBatchId(id : string) : Observable<QCNote[]> {
    return this.http.get<QCNote[]>(this.us.getUrl()+"QCNote/qcNotes/"+id);
  }
  
  getPromiseQCNotesByBatchId(id : string) : Promise<QCNote[]> {
    return this.http.get<QCNote[]>(this.us.getUrl()+"QCNote/qcNotes/"+id).toPromise();
  }

  getCategoryByBatchIdAndWeek(batchId : string, week : number) : Observable<Category>{
    return this.http.get<Category>(this.us.getUrl()+"QCNote/qcNote/" + batchId + "/category/" + week);
  }
}
