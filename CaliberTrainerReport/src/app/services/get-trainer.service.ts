import { Injectable } from '@angular/core';
import { Trainer } from '../class/trainer'; // trainer class
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class GetTrainerService {
  trainerList: Trainer[];
  currentTrainers: Observable<Trainer>;
  currentTrainerSubject: BehaviorSubject<Trainer>;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':'Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Access-Control-Allow-Headers,Authorization,Accept,Content-Type,Origin,Host,Referer,X-Requested-With,X-CSRF-Token',
    'Accept':'*/*',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Credentials': 'true'
  });
  
  constructor(private http: HttpClient, private urlServe: UrlService) { }
  
  getTrainer(trainer: Trainer) {
    return trainer;
  }
  
  getTrainerId(trainer: Trainer) {
    return trainer.id;
  }
  
  async getTrainerList() {
  
    try {
      const resp = await this.http.get<Trainer>(`${environment.backEndUrl}Trainer`).toPromise();
      sessionStorage.setItem('currentTrainers', JSON.stringify(resp));
    }
    catch (msg) {
      return console.log('Error: ' + msg.status + ' ' + msg.statusText);
    }
  }


  getAllTrainers() : Observable<Trainer[]>{
    return this.http.get<Trainer[]>(this.urlServe.getUrl() + "Trainer/trainer", {headers: this.headers});
  }

}
