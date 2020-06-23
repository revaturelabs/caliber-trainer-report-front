import { Injectable } from '@angular/core';
import { GetTrainerService } from './get-trainer.service';

@Injectable({
  providedIn: 'root',
})
export class TrainerSessionService {
  constructor(private getTrainerServ: GetTrainerService) {}

  selectedValue: string;

  setTrainerList(trainerList): string{
    this.getTrainerServ.getTrainerList().then((resp) => {
      for (const iter of JSON.parse(
        sessionStorage.getItem('currentTrainers')
      )) {
        trainerList.push(iter);
      }
      if (
        sessionStorage.getItem('currentTrainers') &&
        !sessionStorage.getItem('selectedId')
      ) {
        const ct = JSON.parse(sessionStorage.getItem('currentTrainers'));
        sessionStorage.setItem('selectedId', ct[0].id);
        this.selectedValue = ct[0].id;
      }
    });
    return this.selectedValue;
  }
}
