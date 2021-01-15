import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Trainer } from '../class/trainer';
import { ErrorHandlerService } from './error-handler.service';
import { LocalStorageService } from './local-storage.service';
import { UrlService } from './url.service';

/**
 * trainer-session
 * get-trainer
 */

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  trainerList: Trainer[];
  currentTrainers: Observable<Trainer>;
  currentTrainerSubject: BehaviorSubject<Trainer>;
  selectedValue: string;

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

  // This code could probably be refactored out since it called a local method
  setTrainerList(trainerList): string {
    this.getTrainerList().then((resp) => {
      const ct = this.localStorageServ.get('currentTrainers');
      console.log('CT:');
      console.log(ct);
      for (const iter of ct) {
        trainerList.push(iter);
      }
      if (ct.length != 0 && !this.localStorageServ.get('selectedId')) {
        this.localStorageServ.set('selectedId', ct[0].id);
        this.selectedValue = ct[0].id;
      }
    });
    return this.selectedValue;
  }
}
