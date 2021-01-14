import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../class/category';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class GetCategoryService {

  constructor(private http : HttpClient, private us : UrlService) { }

  getCategoryById(id : number) : Observable<Category>{
    return this.http.get<Category>(this.us.getUrl() + "Category/category/" + id);
  }
  getPromiseCategoryById(id : number) : Promise<Category>{
    return this.http.get<Category>(this.us.getUrl() + "Category/category/" + id).toPromise();
  }
}
