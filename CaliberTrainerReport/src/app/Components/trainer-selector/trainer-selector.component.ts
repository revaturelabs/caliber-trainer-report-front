import { Component, OnInit, DoCheck } from '@angular/core';
import { Trainer } from '../../class/trainer';
import { Router } from '@angular/router';
import { GetTrainerService } from 'src/app/services/get-trainer.service';
import { TrainerSessionService } from 'src/app/services/trainer-session.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-trainer-selector',
  templateUrl: './trainer-selector.component.html',
  styleUrls: ['./trainer-selector.component.css'],
})
export class TrainerSelectorComponent implements OnInit, DoCheck {
  selectedValue: string;
  trainerList: Trainer[];
  constructor(
    private getTrainerServ: GetTrainerService,
    private router: Router,
    private setTrainerServ: TrainerSessionService,
    private localStorageServ: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.trainerList = [];
    this.selectedValue = this.localStorageServ.get('selectedId');

    // This function will populate the trainerList after the asynchronous call (getTrainerList()) is finished. The values for
    // trainerList are then populated for use with component initilization and storage data persistance.
    this.selectedValue = this.setTrainerServ.setTrainerList(this.trainerList);
  }

  ngDoCheck(): void {
    this.selectedValue = this.localStorageServ.get('selectedId');
  }

  getSelectedTrainer(event: any) {
    // This works, refreshes via full reload.
    this.router.navigateByUrl(this.router.url).then(() => {
      location.reload();
    });
    this.localStorageServ.set('selectedId', event.target.value);
  }
}
