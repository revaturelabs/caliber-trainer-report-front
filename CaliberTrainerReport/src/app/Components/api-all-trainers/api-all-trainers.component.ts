import { Component, OnInit } from '@angular/core';
import { GetTrainerService } from 'src/app/get-trainer.service';
import { Trainer } from 'src/app/class/trainer';
import { MockDataReturnService } from 'src/app/services/mock-data-return.service';

@Component({
  selector: 'app-api-all-trainers',
  templateUrl: './api-all-trainers.component.html',
  styleUrls: ['./api-all-trainers.component.css']
})
export class ApiAllTrainersComponent implements OnInit {

  trainers: any[];
  selectedValue;

  constructor(private trainerService: GetTrainerService, private mock : MockDataReturnService) { }

  ngOnInit(): void {
    this.getAllTrainers();
    // this.trainers = [{
    //   "id": 1,
    //   "firstName": "Mock 1223",
    //   "lastName": "Associate 1223",
    //   "email": "mock1223.employee906bb611-b2a8-4dce-b70f-94f5fd97da44@mock.com"
    // },
    // {
    //   "id": 2,
    //   "firstName": "Mock 1091",
    //   "lastName": "Associate 1091",
    //   "email": "mock1091.employee2fbe714a-d582-4c30-bbc1-298f226445ac@mock.com"
    // }];
  }

  getAllTrainers() {
    // this.trainerService.getAllTrainers().subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.trainers = response;
    //   },
    //   (response) => {
    //     console.log("Request failed");
    //   }
    // )
    this.trainers = this.mock.getAllMockTrainers();
  }

  getDataByTrainer(selected) {
    console.log(selected + " selected. Too lazy to pull data now, but it could work");
  }

}
