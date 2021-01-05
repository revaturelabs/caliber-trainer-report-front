import { Component, OnInit } from '@angular/core';
import { faBalanceScale, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
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

  public categoryScores:Object = {};

  // 1 or 0 for switching view between all categories and best/worst
  public viewAllQCCategories;

  //Both Best Categories and Worst Categories are rendered in the browser 
  public bestCategories:string[] = []
  public worstCategories:string[] = []
  //Sorted array of category names
  public sortedCategories: String[];


  constructor(private QCscores:BatchTechnicalStatusBySkillCategoryService) { 
    this.scaleIcon = faBalanceScale;
    this.goodIcon = faCheckCircle;
    this.badIcon = faTimesCircle;
    this.viewAllQCCategories = 0; //default shows best/worst
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
public findBestCategories(categories){
  let arrayOfScoresByCategory = Object.values(this.categoryScores)
  let bestScore = Math.max(...arrayOfScoresByCategory)
  let bestCategoriesArray = []
  for(let category in categories){
    if(this.categoryScores[category] === bestScore){
      bestCategoriesArray.push(category)
    }
  }
  return bestCategoriesArray
}
public findWorstCategories(categories){
  let arrayOfScoresByCategory = Object.values(this.categoryScores)
  let worstScore = Math.min(...arrayOfScoresByCategory)
  let worstCategoriesArray = []
  for(let category in categories){
    if(this.categoryScores[category] === worstScore){
      worstCategoriesArray.push(category)
    }
  }
  return worstCategoriesArray
}

//sorts CategoryScore objects by score
public sortCategoryScores(categoryScores: Object){
  let keys = Object.keys(categoryScores);
  let catScores = [];
  for(let key of keys){
    let newCatScore = new CategoryScore(key, categoryScores[key]);
    console.log(newCatScore);
    catScores.push(newCatScore);
  }
  catScores.sort((a,b) => (a.score > b.score) ? 1 : -1);
  console.log(catScores)
  let sortedCats: String[];
  return sortedCats;
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
          this.categoryScores[categoryName] = catAverage 
        }
      }
      this.bestCategories = this.findBestCategories(this.categoryScores)
      this.worstCategories = this.findWorstCategories(this.categoryScores)
      console.log(this.categoryScores);
      console.log(Object.values(this.categoryScores));
      console.log(Object.keys(this.categoryScores));
      console.log(this.categoryScores['SQL']);
      let dummy = this.sortCategoryScores(this.categoryScores);
      console.log(dummy);
    })
  }
}

// Object that combines category and score
export class CategoryScore {
  category: string;
  score: number;

  constructor(s: string, n: number) {
    this.category = s;
    this.score = n
  }
}