import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(
    private http: HttpClient,
    private localStorageServ: LocalStorageService
  ) {}

  getUrl(): string {
    return environment.backEndUrl;
  }

  // ie: ~/2/AssessmentByCategory/
  getUrlWithId() {
    return this.getUrl() + this.localStorageServ.get('selectedId') + '/';
  }

  getCaliberUrl() {
    return 'https://caliber2-mock.revaturelabs.com/mock/';
  }
}
