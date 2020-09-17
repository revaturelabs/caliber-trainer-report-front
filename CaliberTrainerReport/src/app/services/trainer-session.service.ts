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
      const ct = JSON.parse(sessionStorage.getItem('currentTrainers'));
      for (const iter of ct) {
        trainerList.push(iter);
      }
      if (
        ct.length != 0 &&
        !sessionStorage.getItem('selectedId')
      ) {
        sessionStorage.setItem('selectedId', ct[0].id);
        this.selectedValue = ct[0].id;
        
      }
    });
    return this.selectedValue;
  }
}
