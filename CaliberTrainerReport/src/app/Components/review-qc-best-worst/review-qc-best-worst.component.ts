import { Component, OnInit } from '@angular/core';
import { faBalanceScale, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { AssessmentByCategoryService } from 'src/app/services/AssessmentByCategory.service';
import { BatchTechnicalStatusBySkillCategoryService } from 'src/app/services/BatchTechnicalStatusBySkillCategory.service';

@Component({
  selector: 'review-qc-best-worst',
  templateUrl: './review-qc-best-worst.component.html',
  styleUrls: ['./review-qc-best-worst.component.css']
})
export class ReviewQcBestWorstComponent implements OnInit {

  public scaleIcon;

  public goodIcon;

  public badIcon;

  public categories:Object = {};

  //Both Best Categories and Worst Categories are rendederd in the browser 
  //with String Interpolation and a for directive
  public bestCategories:string[] = []
  public worstCategories:string[] = []



  constructor(private QCscores:BatchTechnicalStatusBySkillCategoryService) { 
    this.scaleIcon = faBalanceScale;
    this.goodIcon = faCheckCircle;
    this.badIcon = faTimesCircle;
  }

//Creates a point system which corresponds to the possible results of a QC.
// (Poor 1, Average 2, Good 3, Superstar 4)

  public calculateTotalBatchScore(batch){
    let result = batch.score.poor * 1 +
    batch.score.average * 2 +
    batch.score.good * 3 +
    batch.score.superstar * 4
    return result
  }
  public calculateTotalBatchQuantity(batch){
    let result = batch.score.poor +
    batch.score.average +
    batch.score.good +
    batch.score.superstar
    return result
  }
  public findBestCategories(bestScore, categories){
    let bestCategoriesArray = []
    for(let category in categories){
      if(this.categories[category] === bestScore){
        bestCategoriesArray.push(category)
      }
    }
    return bestCategoriesArray
  }
  public findWorstCategories(worstScore, categories){
    let worstCategoriesArray = []
    for(let category in categories){
      if(this.categories[category] === worstScore){
        worstCategoriesArray.push(category)
      }
    }
    return worstCategoriesArray
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
          totalScores += this.calculateTotalBatchScore(currentBatch)
          totalQuantity += this.calculateTotalBatchQuantity(currentBatch)
          catAverage = totalScores/totalQuantity
        }
        if(!isNaN(catAverage)){
          let categoryName = data.batchByCategory[category].categoryName
          this.categories[categoryName] = catAverage;
        }
      }
      let arrayOfScoresByCategory = Object.values(this.categories)
      let bestValue = Math.max(...arrayOfScoresByCategory)
      let worstValue = Math.min(...arrayOfScoresByCategory)
      this.bestCategories = this.findBestCategories(bestValue, this.categories)
      this.worstCategories = this.findWorstCategories(worstValue, this.categories)
    })
  }
}