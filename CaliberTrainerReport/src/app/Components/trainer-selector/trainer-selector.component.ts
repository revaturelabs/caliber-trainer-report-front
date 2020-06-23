import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Trainer } from '../../class/trainer';
import { Router } from '@angular/router';
import { GetTrainerService } from 'src/app/get-trainer.service';

@Component({
  selector: 'app-trainer-selector',
  templateUrl: './trainer-selector.component.html',
  styleUrls: ['./trainer-selector.component.css']
})
export class TrainerSelectorComponent implements OnInit, DoCheck {
  selectedValue: string;
  trainerList: Trainer[];
  constructor(private getTrainerServ: GetTrainerService, private router: Router) {
  }

  ngOnInit(): void {
    this.trainerList = [];
    this.selectedValue = sessionStorage.getItem('selectedId');

  // This function will populate the trainerList after the asynchronous call (getTrainerList()) is finished. The values for
  // trainerList are then populated for use with component initilization and storage data persistance.
    this.getTrainerServ.getTrainerList().then(resp => {
      for (const iter of JSON.parse(sessionStorage.getItem('currentTrainers'))) {
        this.trainerList.push(iter);
      }
      if (sessionStorage.getItem('currentTrainers') && !(sessionStorage.getItem('selectedId'))) {
        const ct = JSON.parse(sessionStorage.getItem('currentTrainers'));
        this.selectedValue = ct[0].id;
        sessionStorage.setItem('selectedId', ct[0].id);
      }
    });
  }

  ngDoCheck(): void {
    const trainerSelector = document.getElementById('trainer-selector') as HTMLSelectElement;
    this.selectedValue = sessionStorage.getItem('selectedId');
  }

  getSelectedTrainer(event: any) {
    // This works, refreshes via full reload.
    this.router.navigateByUrl(this.router.url).then(() => {
      location.reload();
    });
    sessionStorage.setItem('selectedId', event.target.value);
  }
}
