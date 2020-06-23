import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetTrainerService } from './get-trainer.service';
import { Trainer } from './class/trainer';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient, private trainerServ: GetTrainerService) { }

  getUrl(): string {
    return 'http://localhost:8080/excaliber/';
  }

  // ie: ~/2/AssessmentByCategory/
  getUrlWithId() {
    return this.getUrl() + sessionStorage.getItem('selectedId') + '/';
  }
}
