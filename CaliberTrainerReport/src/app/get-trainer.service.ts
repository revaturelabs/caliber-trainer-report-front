import { Injectable } from '@angular/core';
import { Trainer } from './class/trainer'; // trainer class
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetTrainerService {
  trainerList: Trainer[];
  currentTrainer: Observable<Trainer>;
  currentTrainerSubject: BehaviorSubject<Trainer>;

  constructor(private http: HttpClient) {
    // this.currentTrainerSubject = new BehaviorSubject<Trainer>(JSON.parse(localStorage.getItem('currentTrainer')));
    // this.currentTrainer = this.currentTrainerSubject.asObservable();
  }

  getTrainer(trainer: Trainer) {
    return trainer;
  }

  getTrainerId(trainer: Trainer) {
    return trainer.id;
  }

  getTrainerList(): any {
    return this.http.get<any>(`${environment.backEndUrl}Trainer`)
      .pipe(map(result => {
        // store Trainer details and jwt token in local storage to keep Trainer details in between page refreshes
        // localStorage.setItem('currentTrainer', JSON.stringify(result));
        console.log(result);
        
        // this.currentTrainerSubject.next(result[`trainer`]);
        return result;
      }));
  }
}
