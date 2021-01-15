import { Component, OnInit, DoCheck } from '@angular/core';
import { Trainer } from '../../class/trainer';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer-selector',
  templateUrl: './trainer-selector.component.html',
  styleUrls: ['./trainer-selector.component.css'],
})
export class TrainerSelectorComponent implements OnInit, DoCheck {
  selectedValue: string;
  trainerList: Trainer[];
  constructor(
    private trainerService: TrainerService,
    private router: Router,
    private localStorageServ: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.trainerList = [];
    this.selectedValue = this.localStorageServ.get('selectedId');

    // This function will populate the trainerList after the asynchronous call (List()) is finished. The values for
    // trainerList are then populated for use with component initilization and storage data persistance.
    this.selectedValue = this.trainerService.setTrainerList(this.trainerList);
  }

  ngDoCheck(): void {
    this.selectedValue = this.localStorageServ.get('selectedId');
  }

  getSelectedTrainer(event: any) {
    this.localStorageServ.set('selectedId', event.target.value);
    // This works, refreshes via full reload.
    if (event.target.value != this.selectedValue) {
      this.router.navigateByUrl(this.router.url).then(() => {
        location.reload();
      });
    }
  }
}
