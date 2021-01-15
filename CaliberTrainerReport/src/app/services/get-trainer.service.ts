import { Injectable } from '@angular/core';
import { Trainer } from '../class/trainer'; // trainer class
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UrlService } from './url.service';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GetTrainerService {
  trainerList: Trainer[];
  currentTrainers: Observable<Trainer>;
  currentTrainerSubject: BehaviorSubject<Trainer>;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Access-Control-Allow-Headers,Authorization,Accept,Content-Type,Origin,Host,Referer,X-Requested-With,X-CSRF-Token',
    Accept: '*/*',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Credentials': 'true',
  });

  constructor(
    private http: HttpClient,
    private urlServe: UrlService,
    private errorHandler: ErrorHandlerService,
    private localStorageServ: LocalStorageService
  ) {}

  getTrainer(trainer: Trainer) {
    return trainer;
  }

  getTrainerId(trainer: Trainer) {
    return trainer.id;
  }

  async getTrainerList() {

    try {
      const resp = await this.http
        .get<Trainer>(`${environment.backEndUrl}Trainer`)
        .toPromise();
      this.localStorageServ.set('currentTrainers', resp);
    } catch (msg) {
      return console.log('Error: ' + msg.status + ' ' + msg.statusText);
    }
  }

  getAllTrainers(): Observable<Trainer[]> {
    return this.http
      .get<Trainer[]>(this.urlServe.getUrl() + 'Trainer/trainer', {
        headers: this.headers,
      })
      .pipe(
        map((resp) => resp as Trainer[]),
        catchError(this.errorHandler.handleError)
      );
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
