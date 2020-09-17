import { Component, OnInit } from '@angular/core';
import { GetTrainerService } from 'src/app/services/get-trainer.service';
import { Trainer } from 'src/app/class/trainer';
import { MockDataReturnService } from 'src/app/services/mock-data-return.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { GetBatchService } from 'src/app/services/get-batch.service';
import { Batch } from 'src/app/class/Batch';

@Component({
  selector: 'app-api-all-trainers',
  templateUrl: './api-all-trainers.component.html',
  styleUrls: ['./api-all-trainers.component.css']
})
export class ApiAllTrainersComponent implements OnInit {

  trainers: any[];
  selectedValue: any;

  constructor(private trainerService: GetTrainerService, private batchService: GetBatchService, private mock: MockDataReturnService) { }

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
    this.trainerService.getAllTrainers().subscribe(
      (response) => {
        console.log(response);
        this.trainers = response;
      },
      (response) => {
        console.log("Request failed");
      }
    )
    // this.trainers = this.mock.getAllMockTrainers();
  }

  getDataByTrainer(selected) {
    let tempTrainer: Trainer = this.trainers[selected];
    let allData = {
      "employee": {
      },
      "batches": []
    };

    allData.employee = {
      "email":tempTrainer.email,
      "firstName":tempTrainer.firstName,
      "lastName":tempTrainer.lastName
    };

    let batchIds: string[];
    let batches: Batch[] = [];
    this.batchService.getBatchesByTrainerEmail(tempTrainer.email).subscribe(
      (response) => {
        batchIds = response;
        let success: boolean = true;
        for (let id of batchIds) {
          this.batchService.getBatchById(id).subscribe(
            (response) => {
              allData.batches.push(response);
            },
            (response) => {
              success = false;
              console.log("Batch request failed")
            }
          );
          if (!success) {
            break;
          }
        }
      },
      (response) => {
        console.log("IDs request failed");
      }
    );

  }

}
