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
  currentTrainers: Observable<Trainer>;
  currentTrainerSubject: BehaviorSubject<Trainer>;

  constructor(private http: HttpClient) { }

  getTrainer(trainer: Trainer) {
    return trainer;
  }

  getTrainerId(trainer: Trainer) {
    return trainer.id;
  }

  async getTrainerList() {
    // return this.http.get<Trainer>(`${environment.backEndUrl}Trainer`)
    //   .pipe(map(result => {
    //     // store Trainer details and jwt token in local storage to keep Trainer details in between page refreshes
    //     sessionStorage.setItem('currentTrainers', JSON.stringify(result));
    //     console.log(result);
    //     return result;
    //   }));
    try {
      const resp = await this.http.get<Trainer>(`${environment.backEndUrl}Trainer`).toPromise();
      sessionStorage.setItem('currentTrainers', JSON.stringify(resp));
    }
    catch (msg) {
      return console.log('Error: ' + msg.status + ' ' + msg.statusText);
    }
  }

  // To Reduce complexity, and reuse the function, we could try to figure out how to synchronize this function call properly
  // when added here, (instead of in the app component and trainer selector components)
  //
  // This function will populate the trainerList after the asynchronous call (getTrainerList()) is finished. The values for
  // trainerList are then populated for use with component initilization and storage data persistance.
  // RETURNS: selectedId - the id of the selected trainer from the dropdown menu. (These are the loaded JSON sets).
  // populateTrainerList(): string {
  //   this.getTrainerList().then(resp => {
  //     for (const iter of JSON.parse(sessionStorage.getItem('currentTrainers'))) {
  //       this.trainerList.push(iter);
  //     }
  //     if (sessionStorage.getItem('currentTrainers') && !(sessionStorage.getItem('selectedId'))) {
  //       const ct = JSON.parse(sessionStorage.getItem('currentTrainers'));
  //       sessionStorage.setItem('selectedId', ct[0].id);
  //     }
  //   });
  //   return sessionStorage.getItem('selectedId');
  // }
}
