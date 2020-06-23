import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/url.service';
import { GetTrainerService } from './get-trainer.service';
import { Trainer } from './class/trainer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private urlService: UrlService, private getTrainerServ: GetTrainerService) { }

  dataIsDoneLoading: any;
  title = 'CaliberTrainerReport';
  selectedValue: string;
  trainerList: Trainer[];

  ngOnInit(): void {
    this.selectedValue = '';
    this.trainerList = [];
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
}
