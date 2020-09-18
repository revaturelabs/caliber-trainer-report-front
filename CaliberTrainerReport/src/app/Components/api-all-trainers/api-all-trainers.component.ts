import { Component, OnInit } from '@angular/core';
import { GetTrainerService } from 'src/app/services/get-trainer.service';
import { Trainer } from 'src/app/class/trainer';
import { MockDataReturnService } from 'src/app/services/mock-data-return.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { GetBatchService } from 'src/app/services/get-batch.service';
import { Batch } from 'src/app/class/Batch';
import { GetQcNoteService } from 'src/app/services/get-qc-note.service';
import { QCNote } from 'src/app/class/QCNote';
import { Category } from 'src/app/class/category';

@Component({
  selector: 'app-api-all-trainers',
  templateUrl: './api-all-trainers.component.html',
  styleUrls: ['./api-all-trainers.component.css']
})
export class ApiAllTrainersComponent implements OnInit {

  trainers: any[];
  selectedValue: any;

  constructor(private trainerService: GetTrainerService, private batchService: GetBatchService, private qcs: GetQcNoteService) { }

  ngOnInit(): void {
    this.getAllTrainers();
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

  }

  getDataByTrainer(selected) {
    let tempTrainer: Trainer = this.trainers[selected];
    let allData = {
      "employee": {},
      "batches": []
    };

    allData.employee = {
      "email": tempTrainer.email,
      "firstName": tempTrainer.firstName,
      "lastName": tempTrainer.lastName
    };

    let batchIds: string[];
    let batches: Batch[] = [];
    this.batchService.getBatchesByTrainerEmail(tempTrainer.email).subscribe(
      //Get the batch ids
      (response) => {

        batchIds = response;
        let success: boolean = true;

        for (let id of batchIds) { //Get each batch by id

          this.batchService.getBatchById(id).subscribe(

            (response) => {
              let temp = {
                "id": response.id,
                "batchId": response.batchId,
                "name": response.name,
                "startDate": response.startDate,
                "endDate": response.endDate,
                "skill": response.skill,
                "location": response.location,
                "type": response.type,
                "qcNotes": [],
                "assessments": []
              }

              this.qcs.getQCNotesByBatchId(id).subscribe(
                (response) => {
                  let tempNotes: QCNote[] = response;
                  let tempNote;
                  let cat;
                  for (let note of tempNotes) {
                    this.qcs.getCategoryByBatchIdAndWeek(id, note.week).subscribe(
                      (response) => {
                        tempNote = {
                          "noteId": note.noteId,
                          "content": note.content,
                          "week": note.week,
                          "batchId": note.batchId,
                          "associateId": note.associateId,
                          "employeeId": note.employeeId,
                          "type": note.type,
                          "technicalStatus": note.technicalStatus,
                          "createdOn": note.createdOn,
                          "lastUpdated": note.lastUpdated,
                          "categories": []
                        };
                        cat = response;
                        if (cat != null) {
                          for(let c of cat) {
                            if (c != null && !tempNote.categories.includes(c.skillCategory)) {
                              tempNote.categories.push(c.skillCategory);
                            }
                          }
                          temp.qcNotes.push(tempNote);
                        }
                        console.log("Current JSON: " + JSON.stringify(temp));
                      },
                      (response) => {
                        console.log("Category request failed");
                      }
                    );
                  }
                },
                (response) => {
                  console.log("QCNote request failed");
                }
              );

              // allData.batches.push(response);
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
