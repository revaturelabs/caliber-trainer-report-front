import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
import { Trainer } from './class/trainer';
import { TrainerService } from './services/trainer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private urlService: UrlService,
    private trainerService: TrainerService
  ) {}

  dataIsDoneLoading: any;
  title = 'CaliberTrainerReport';
  selectedValue: string;
  trainerList: Trainer[];

  ngOnInit(): void {
    this.selectedValue = '';
    this.trainerList = [];
    this.selectedValue = this.trainerService.setTrainerList(this.trainerList);
  }
}
