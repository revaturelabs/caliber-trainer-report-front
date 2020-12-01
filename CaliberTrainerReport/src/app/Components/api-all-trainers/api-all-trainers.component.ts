import { Component, OnInit } from '@angular/core';
import { GetTrainerService } from 'src/app/services/get-trainer.service';
import { Trainer } from 'src/app/class/trainer';
import { MockDataReturnService } from 'src/app/services/mock-data-return.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { GetBatchService } from 'src/app/services/get-batch.service';
import { Batch } from 'src/app/class/batch';
import { GetQcNoteService } from 'src/app/services/get-qc-note.service';
import { QCNote } from 'src/app/class/QCNote';
import { Category } from 'src/app/class/category';
import { GetAssessmentService } from 'src/app/services/get-assessment.service';
import { Assessment } from 'src/app/class/assessment';
import { GetCategoryService } from 'src/app/services/get-category.service';
import { SendJSONAsStringService } from 'src/app/services/send-json-as-string.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-api-all-trainers',
  templateUrl: './api-all-trainers.component.html',
  styleUrls: ['./api-all-trainers.component.css']
})
export class ApiAllTrainersComponent implements OnInit {

  trainers: any[];
  selectedValue: any;
  allData = {
    "employee": {},
    "batches": []
  };

  mockData: string;

  constructor(private trainerService: GetTrainerService, private batchService: GetBatchService, private qcs: GetQcNoteService, private as: GetAssessmentService, private cs: GetCategoryService, private sendJsonService : SendJSONAsStringService) { }

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


  async getDataByTrainer(selected) {
    let tempTrainer: Trainer = this.trainers[selected];
    this.mockData = 'loading';


    this.allData.employee = {
      "email": tempTrainer.email,
      "firstName": tempTrainer.firstName,
      "lastName": tempTrainer.lastName
    };

    let batchIds: string[];
    let batches: Batch[] = [];

    var request; 
    if(window.XMLHttpRequest) 
      request = new XMLHttpRequest(); 
      
    request.open('GET', 'http://3.236.244.228:8081/excaliber/', false);
    request.send();
    if (request.status < 500 && request.status > 399 ) { alert("400 Level Error / Client Side Error: The page you are trying to reach is not available."); }
    else if (request.status < 600 && request.status > 499 ) { alert("500 Level Error / Server Side Error: The page you are trying to reach is not available."); }
    
    try{

    
    await this.batchService.getBatchesByTrainerEmail(tempTrainer.email).toPromise().then(
      //Get the batch ids
      async (response) => {
        console.log("Response with all batch ids: ");
        console.log(response);
        batchIds = response;
        let temp;
        let success: boolean = true;
        
        for (let id of batchIds) { //Get each batch by id
          await this.batchService.getPromiseBatchById(id).then(

            async (response) => {
              let batch = response;
              temp = {
                "id": batch.id,
                "batchId": batch.batchId,
                "name": batch.name,
                "startDate": batch.startDate,
                "endDate": batch.endDate,
                "skill": batch.skill,
                "location": batch.location,
                "type": batch.type,
                "qcNotes": [],
                "assessments": []
              }

              await this.qcs.getPromiseQCNotesByBatchId(id).then(
                async (response) => { //Get all notes for this batch
                  let tempNotes: QCNote[] = response;
                  let tempNote;
                  let cat;
                 
                    for (let note of tempNotes) {
                      await this.qcs.getCategoryByBatchIdAndWeek(id, note.week).toPromise().then(
                        async (response) => { 
  
                          tempNote = note;
                          tempNote.categories = [];
                          cat = response;
                          if (cat != null) {
                            for (let c of cat) { //For each category, add the category to the array found in the batch
                              if (c != null && !tempNote.categories.includes(c.skillCategory)) {
                                tempNote.categories.push(c.skillCategory);
                                console.log("temp note: " + JSON.stringify(tempNote));
                              }
                            }
                          }
                          await temp.qcNotes.push(tempNote);
                          // console.log("Current JSON: " + JSON.stringify(temp));
                        },
                        (response) => {
                          console.log("Category request failed");
                          this.mockData = 'fail';
                        }
                      );
                    }
                  

                  
                  let tempBatches: Batch[] = [];
                  for (let i = 0; i < batch.currentWeek; i++) {
                    await this.as.getPromiseAssessmentsByWeekAndBatchId(id, i + 1).then(
                      // Works
                      async (response) => {
                        
                        let assessments: Assessment[] = response;

                        for (let i = 0; i < assessments.length; i++) {
                           await this.cs.getPromiseCategoryById(assessments[i].assessmentCategory).then(
                            // Works
                            async (response) => {
                              console.log("skill category");
                              assessments[i].skillCategory = response.skillCategory;
                              console.log(assessments[i].skillCategory);

                              await this.as.getAverageGradeByAssessment(assessments[i].assessmentId).toPromise().then(
                                // Does NOT work, needs more path variables?
                                async (response) => {
                                  
                                  assessments[i].average = response;
                                },
                                async (response) => {
                                  assessments[i].average = 0;
                                  console.log("Grade average request failed");
                                  this.mockData = 'fail';
                                }
                              );
                            },
                            (response) => {
                              console.log("Category request failed");
                              this.mockData = 'fail';
                            }
                          );
                          
                        }
                        console.log("ASSESSMENTS: ")
                        console.log(assessments);
                        for(let a of assessments){
                          temp.assessments.push(a);
                        }
                      
                      },
                      (response) => {
                        console.log("Assessment request failed");
                        this.mockData = 'fail';
                      }
                    );
                  }
                  this.allData.batches = tempBatches;
                },
                (response) => {
                  console.log("QCNote request failed");
                  this.mockData = 'fail';
                }
              );
              console.log("Temp obj");
              console.log(temp);
              this.allData.batches.push(temp);
            },
            (response) => {
              success = false;
              console.log("Batch request failed");
              this.mockData = 'fail';
            }
          );

          if (!success) {
            break;
          }

        }
      },
      (response) => {
        console.log("IDs request failed");
        this.mockData = 'fail';
      }
    );
    console.log(this.allData);
    this.sendJsonService.sendJSON(JSON.stringify(this.allData)).subscribe(
      (response) => {
        console.log(response);
        this.mockData = 'done';
      }, 
      (response) => {
        console.log(response);
        this.mockData = 'fail';
      }
    );
    } catch (cool){
      this.mockData = 'fail';
    }
    
  }

}