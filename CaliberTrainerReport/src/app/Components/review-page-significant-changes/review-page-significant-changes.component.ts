import { Component, OnInit } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { AssessmentByBatchService } from "../../services/AssessmentByBatch.service"

@Component({
  selector: 'review-page-significant-changes',
  templateUrl: './review-page-significant-changes.component.html',
  styleUrls: ['./review-page-significant-changes.component.css']
})
export class ReviewPageSignificantChangesComponent implements OnInit {
  lineGraphIcon = faChartLine;

  //threshold is the absolute difference in scores which can be considered a "significant" change
  public threshold: number = 15;
  public categories: string[] = ["exam", "verbal", "presentation", "project", "other"];
  public changes: Change[] = [];
  
  constructor(private retrieve: AssessmentByBatchService) { }

  ngOnInit(): void {
    this.retrieve.getAssessmentByBatch().subscribe((datum) => {
      //datum is an array of batches, whose fields are batchName/batchId and assessmentScores
      //assessmentScores is an array of 5 numbers, representing the scores in the following categories:
      //exam, verbal, presentation, project, other

      //iterate through each batch in the array
      for(let i=0; i<datum.length; i++) {
        //ignore the case where i==0, as there's no previous batch to compare to
        if(i!=0) {
          //iterate through each category's score, comparing it to the batch previous
          for(let j=0; j<datum[i].assessmentScores.length; j++) {
            let oldScore = datum[i-1].assessmentScores[j];
            let newScore = datum[i].assessmentScores[j];
            //if the difference exceeds our threshold, add it to this.changes
            //scores of 0 are assumed to be errors, and as such are discarded
            if(Math.abs(newScore-oldScore)>this.threshold && oldScore!=0 && newScore !=0) {
              let change = new Change(datum[i].batchName, this.categories[j], oldScore, newScore);
              this.changes.push(change);
            }
          }
        }
      }
    })
  }
}

export class Change {
  public batchName: string;
  public category: string;
  public oldScore: number;
  public newScore: number;

  public increase: string;
  public difference: string;

  constructor(name: string, cat: string, oldScore: number, newScore: number){
    this.batchName = name;
    this.category = cat;
    this.oldScore = oldScore;
    this.newScore = newScore;

    this.increase = this.newScore>this.oldScore?"up":"down";
    this.difference = Math.abs(this.newScore-this.oldScore).toFixed(2);
  }
}