import { Component, OnInit } from '@angular/core';
import { GetTrainerService } from 'src/app/services/get-trainer.service';
import { Trainer } from 'src/app/class/trainer';
import { GetBatchService } from 'src/app/services/get-batch.service';
import { Batch } from 'src/app/class/batch';
import { GetQcNoteService } from 'src/app/services/get-qc-note.service';
import { QCNote } from 'src/app/class/QCNote';
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

  constructor(private trainerService: GetTrainerService, private batchService: GetBatchService, private qcs: GetQcNoteService, private as: GetAssessmentService, private cs: GetCategoryService, private sendJsonService : SendJSONAsStringService, private urls : UrlService) { }

  ngOnInit(): void {
    this.getAllTrainers();
  }

  getAllTrainers() {
    this.trainerService.getAllTrainers().subscribe(
      (response) => {
        this.trainers = response;
        this.trainers.push({email:"none",firstName:"Mock 2000",lastName:"Employee 2000",tier:"ROLE_LEAD_TRAINER",trainingBatches:[]})
        console.log("All trainers:");
        console.log(this.trainers);
        if (this.trainers.length == 0) {this.mockData = 'fail-no-trainers';console.log("No trainer data");}        
      },
      (response) => {
        this.mockData = 'fail-caliber-unreached';
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

    // Error Message if there is a server or client side error
    // Creates an XMLHttpRequest and attempts a get request, then reads the request status

    var request; 
    if(window.XMLHttpRequest) 
      request = new XMLHttpRequest(); 
    request.open('GET', this.urls.getUrl(), false);
    request.send();
    if (request.status < 500 && request.status > 399 ) { this.mockData = 'fail-400'; }
    else if (request.status < 600 && request.status > 499 ) { this.mockData = 'fail-500'; }
    
    try{

    
      await this.batchService.getBatchesByTrainerEmail(tempTrainer.email).toPromise().then(
        //Get the batch ids
        async (response) => {
          console.log("Response with all batch ids: ");
          console.log(response);
          batchIds = response;

          if (batchIds.length == 0 && this.mockData == 'loading') {this.mockData = 'fail-no-batches';console.log("Trainer has no batches.");}        

          let temp;
          let success: boolean = true;
          
          for (let id of batchIds) { //Get each batch by id
            await this.batchService.getPromiseBatchById(id).then(

              async (response2) => {
                let batch = response2;
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
                  async (response3) => { //Get all notes for this batch
                    let tempNotes: QCNote[] = response3;
                    let tempNote;
                    let cat;
                  
                      for (let note of tempNotes) {
                        await this.qcs.getCategoryByBatchIdAndWeek(id, note.week).toPromise().then(
                          async (response4) => { 
    
                            tempNote = note;
                            tempNote.categories = [];
                            cat = response4;
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
                          (response4) => {
                            this.mockData = 'fail-Category request';
                          }
                        );
                      }
                    

                    
                    let tempBatches: Batch[] = [];
                    for (let i = 0; i < batch.currentWeek; i++) {
                      await this.as.getPromiseAssessmentsByWeekAndBatchId(id, i + 1).then(
                        // Works
                        async (response5) => {
                          
                          let assessments: Assessment[] = response5;

                          for (let j = 0; j < assessments.length; j++) {
                            await this.cs.getPromiseCategoryById(assessments[j].assessmentCategory).then(
                              // Works
                              async (response6) => {
                                //console.log("skill category");
                                assessments[j].skillCategory = response6.skillCategory;
                                //console.log(assessments[i].skillCategory);

                                await this.as.getAverageGradeByAssessment(assessments[j].assessmentId).toPromise().then(
                                  // Does NOT work, needs more path variables?
                                  async (response7) => {
                                    
                                    assessments[j].average = response7;
                                  },
                                  async (response7) => {
                                    assessments[j].average = 0;
                                    this.mockData = 'fail-Grade average';
                                  }
                                );
                              },
                              (response6) => {
                                this.mockData = 'fail-Category request';
                              }
                            );
                            
                          }
                          for(let a of assessments){
                            temp.assessments.push(a);
                          }
                        
                        },
                        (response5) => { 
                          this.mockData = 'fail-Assessment request';
                        }
                      );
                    }
                    this.allData.batches = tempBatches;
                  },
                  (response3) => {
                    this.mockData = 'fail-QCNote';
                  }
                );
                //console.log("Temp obj");
                console.log(temp);
                this.allData.batches.push(temp);
              },
              (response2) => {
                success = false;
                this.mockData = 'fail-Batch request';
              }
            );

            if (!success) {
              break;
            }

          }
        },
        (response) => {
          this.mockData = 'fail-IDs';
        }
      );
      if (this.mockData == 'loading') {
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
      }
    } catch (miscFailure){
      this.mockData = 'fail';
    }
    
  }

}
