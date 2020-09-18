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
import { GetAssessmentService } from 'src/app/services/get-assessment.service';
import { Assessment } from 'src/app/class/assessment';
import { GetCategoryService } from 'src/app/services/get-category.service';

@Component({
  selector: 'app-api-all-trainers',
  templateUrl: './api-all-trainers.component.html',
  styleUrls: ['./api-all-trainers.component.css']
})
export class ApiAllTrainersComponent implements OnInit {

  trainers: any[];
  selectedValue: any;

  constructor(private trainerService: GetTrainerService, private batchService: GetBatchService, private qcs: GetQcNoteService, private as : GetAssessmentService, private cs : GetCategoryService) { }

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
        let temp;
        let success: boolean = true;

        for (let id of batchIds) { //Get each batch by id

          this.batchService.getBatchById(id).subscribe(

            (response) => {
              
              temp = {
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
                (response) => { //Get all notes for this batch
                  let tempNotes: QCNote[] = response;
                  let tempNote;
                  let cat;
                  for (let note of tempNotes) {
                    this.qcs.getCategoryByBatchIdAndWeek(id, note.week).subscribe(
                      (response) => { //Get categories by week

                        tempNote = note;
                        tempNote.categories = [];
                        cat = response;
                        if (cat != null) {
                          for (let c of cat) { //For each category, add the category to the array found in the batch
                            if (c != null && !tempNote.categories.includes(c.skillCategory)) {
                              tempNote.categories.push(c.skillCategory);
                            }
                          }
                        }
                        temp.qcNotes.push(tempNote);
                        // console.log("Current JSON: " + JSON.stringify(temp));
                      },
                      (response) => {
                        console.log("Category request failed");
                      }
                    );
                  }
                  allData.batches.push(temp);
                },
                (response) => {
                  console.log("QCNote request failed");
                }
              );

              for(let i=0; i<response.currentWeek; i++) {
                this.as.getAssessmentsByWeekAndBatchId(id, i+1).subscribe(
                  (response) => {
                    let assessments : Assessment[] = response;
                    
                    for(let i = 0; i < assessments.length; i++) {
                      this.cs.getCategoryById(assessments[i].assessmentCategory).subscribe(
                        (response) => {
                          assessments[i].skillCategory = response.skillCategory;
                        },
                        (response) => {
                          console.log("Category request failed");
                        }
                      );
                      this.as.getAverageGradeByAssessment(assessments[i].assessmentId, id, i).subscribe(
                        (response) => {
                          assessments[i].average = response;
                        },
                        (response) => {
                          console.log("Grade average request failed");
                        }
                      );
                    }
                    temp.assessments = assessments;
                  },
                  (response) => {
                    console.log("Assessment request failed");
                  }
                );
              }
            },
            (response) => {
              success = false;
              console.log("Batch request failed")
            }
          );

          if (!success) {
            break;
          }
         
          allData.batches.push(temp);
          console.log(JSON.stringify(allData));
        }
      },
      (response) => {
        console.log("IDs request failed");
      }
    );

  }

}
