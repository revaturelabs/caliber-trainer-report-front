import { Injectable } from '@angular/core';
import { GetTrainerService } from './get-trainer.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TrainerSessionService {
  constructor(
    private getTrainerServ: GetTrainerService,
    private localStorageServ: LocalStorageService
  ) {}

  selectedValue: string;

  setTrainerList(trainerList): string {
    this.getTrainerServ.getTrainerList().then((resp) => {
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
