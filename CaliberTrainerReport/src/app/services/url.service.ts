import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetTrainerService } from './get-trainer.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  getUrl(): string {
    //return 'http://3.236.244.228:8081/excaliber/';
    return environment.backEndUrl;
  }

  // ie: ~/2/AssessmentByCategory/
  getUrlWithId() {
    return this.getUrl() + sessionStorage.getItem('selectedId') + '/';
  }
 
  getCaliberUrl(){
    return 'https://caliber2-mock.revaturelabs.com/mock/';
  }
}
