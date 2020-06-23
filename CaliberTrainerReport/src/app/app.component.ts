import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/url.service';
import { GetTrainerService } from './get-trainer.service';
import { TrainerSessionService } from './trainer-session.service';
import { Trainer } from './class/trainer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private urlService: UrlService, private getTrainerServ: GetTrainerService, private setTrainerServ: TrainerSessionService) { }

  dataIsDoneLoading: any;
  title = 'CaliberTrainerReport';
  selectedValue: string;
  trainerList: Trainer[];

  ngOnInit(): void {
    this.selectedValue = '';
    this.trainerList = [];
    this.selectedValue = this.setTrainerServ.setTrainerList(this.trainerList);
  }
}
