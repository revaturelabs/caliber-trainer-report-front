import { Component, OnInit } from '@angular/core';
import { faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons';
import { AssessmentByCategoryService } from 'src/app/services/AssessmentByCategory.service';
import { BatchTechnicalStatusBySkillCategoryService } from 'src/app/services/BatchTechnicalStatusBySkillCategory.service';

@Component({
  selector: 'review-qc-best-worst',
  templateUrl: './review-qc-best-worst.component.html',
  styleUrls: ['./review-qc-best-worst.component.css']
})
export class ReviewQcBestWorstComponent implements OnInit {

 public scaleIcon;

 public categories:Object = {};
 public bestCategories:string[] = []
 public worstCategories:string[] = []



  constructor(private QCscores:BatchTechnicalStatusBySkillCategoryService) { 
    this.scaleIcon = faBalanceScaleRight;

  }

  ngOnInit(): void {
    this.QCscores.getAvgCategoryScoresObservables().subscribe(data =>{
      //
      for(let category in data.batchByCategory){
        let totalScores = 0;
        let totalQuantity = 0;
        let catAverage = 0;
        for(let batch in data.batchByCategory[category].batches){
          let currentBatch = data.batchByCategory[category].batches[batch]
          totalScores = 
            totalScores + 
            (currentBatch.score.poor * 1 +
            currentBatch.score.average * 2 +
            currentBatch.score.good * 3 +
            currentBatch.score.superstar * 4)
          totalQuantity =
            totalQuantity + 
            (currentBatch.score.poor +
            currentBatch.score.average +
            currentBatch.score.good +
            currentBatch.score.superstar)
          catAverage = totalScores/totalQuantity
        }
        if(!isNaN(catAverage)){
          this.categories[data.batchByCategory[category].categoryName] = catAverage;
        }
      }
      let allValuesArray = Object.values(this.categories)
      let bestValue = Math.max(...allValuesArray)
      let worstValue = Math.min(...allValuesArray)
      for(let category in this.categories){
        if(this.categories[category] === bestValue){
          this.bestCategories.push(category)
        }else if(this.categories[category] === worstValue){
          this.worstCategories.push(category)
        }
      }
    })
  }
}