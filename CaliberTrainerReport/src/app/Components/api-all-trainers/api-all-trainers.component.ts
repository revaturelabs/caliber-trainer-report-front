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
import { CompleteBatchDataService } from 'src/app/services/complete-batch-data.service';
import { map } from 'rxjs/operators';

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

  constructor(private trainerService: GetTrainerService, private batchService: GetBatchService, private qcs: GetQcNoteService, private as: GetAssessmentService, private cs: GetCategoryService, private sendJsonService : SendJSONAsStringService, private urls : UrlService, private completeBatchServ: CompleteBatchDataService) { }

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

    try{


      
      await this.batchService.getBatchesByTrainerEmail(tempTrainer.email).toPromise().then(
        //Get the batch ids
        async (response) => {
          console.log("Response with all batch ids: ");
          console.log(response);
          batchIds = response;

          if (batchIds.length == 0 && this.mockData == 'loading') {this.mockData = 'fail-no-batches';console.log("Trainer has no batches.");}        


          //let allbatches : Batch[] = new Array<Batch>();

          for(let ids of batchIds)
          {
            //this really should be a Batch object, but the typescript yells at us over qcnotes
            let newBatch: any;
            newBatch = await this.completeBatchServ.getCompleteBatchDataById(ids).toPromise();
            let temp = {
              "id": newBatch.id,
              "batchId": newBatch.batchId,
              "name": newBatch.name,
              "startDate": newBatch.startDate,
              "endDate": newBatch.endDate,
              "skill": newBatch.skill,
              "location": newBatch.location,
              "type": newBatch.type,
              "qcNotes": newBatch.qcnotes,
              "assessments": newBatch.assessments
            }
            console.log("qcnotes value",newBatch.qcnotes);
            //console.log("qcNotes value ",newBatch.qcNotes);
            console.log(temp);
            //allbatches.push(newBatch);
            this.allData.batches.push(temp);
          }
          
          console.log("recorded batches: " + JSON.stringify(this.allData.batches));
        },
        (error) => {
          console.log(error);
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
      console.log(miscFailure);
      this.mockData = 'fail';
    }
  }
}
