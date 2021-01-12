import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from '../class/category';
import { ErrorHandlerService } from './error-handler.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class GetCategoryService {
  constructor(
    private http: HttpClient,
    private us: UrlService,
    private errorHandler: ErrorHandlerService
  ) {}

  getCategoryById(id: number): Observable<Category> {
    return this.http
      .get<Category>(this.us.getUrl() + 'Category/category/' + id)
      .pipe(
        map((resp) => resp as Category),
        catchError(this.errorHandler.handleError)
      );
  }
  getPromiseCategoryById(id: number): Promise<Category> {
    return this.http
      .get<Category>(this.us.getUrl() + 'Category/category/' + id)
      .toPromise();
  }
}
