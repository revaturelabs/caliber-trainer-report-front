import { Component, OnInit } from '@angular/core';
import {
  faBalanceScale,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { BatchService } from 'src/app/services/batch.service';

@Component({
  selector: 'review-qc-best-worst',
  templateUrl: './review-qc-best-worst.component.html',
  styleUrls: ['./review-qc-best-worst.component.css'],
})
export class ReviewQcBestWorstComponent implements OnInit {
  public scaleIcon;
  public goodIcon;
  public badIcon;

  public categoryScores: Object = {};

  // 1 or 0 for switching view between all categories and best/worst
  public viewAllQCCategories;

  //Both Best Categories and Worst Categories are rendered in the browser
  public bestCategories: string[] = [];
  public worstCategories: string[] = [];

  //Array of CategoryScore objects sorted by score
  public sortedCategories: CategoryScore[];

  constructor(private batchService: BatchService) {
    this.scaleIcon = faBalanceScale;
    this.goodIcon = faCheckCircle;
    this.badIcon = faTimesCircle;
    this.viewAllQCCategories = 0; //default shows best/worst
  }

  //Creates a point system which corresponds to the possible results of a QC.
  // (Poor 1, Average 2, Good 3, Superstar 4)
  public calculateTotalBatchScore(batch) {
    let result =
      batch.score.poor * 1 +
      batch.score.average * 2 +
      batch.score.good * 3 +
      batch.score.superstar * 4;
    return result;
  }
  public calculateTotalBatchQuantity(batch) {
    let result =
      batch.score.poor +
      batch.score.average +
      batch.score.good +
      batch.score.superstar;
    return result;
  }
  //takes the presorted array of CategoryScore objects and returns an array of the three with the highest scores
  public findBestCategories(categories) {
    let bestCategoriesArray = [];
    if (categories.length >= 3) {
      for (let i = 0; i < 3; i++) {
        bestCategoriesArray[i] = categories[i];
      }
    } else {
      for (let cat of categories) {
        bestCategoriesArray.push(cat);
      }
    }
    return bestCategoriesArray;
  }
  //takes the presorted array of CategoryScore objects and returns an array of the three with the lowest scores
  public findWorstCategories(categories) {
    let worstCategoriesArray = [];
    let length = categories.length;
    if (length >= 3) {
      for (let i = 1; i < 4; i++) {
        worstCategoriesArray[i - 1] = categories[length - i];
      }
    } else {
      for (let i = categories.length - 1; i >= 0; i--) {
        worstCategoriesArray.push(categories[i]);
      }
    }
    return worstCategoriesArray;
  }

  //sorts CategoryScore objects by score
  public sortCategoryScores(categoryScores: Object) {
    let keys = Object.keys(categoryScores);
    let catScores = [];
    for (let key of keys) {
      let newCatScore = new CategoryScore(key, categoryScores[key]);
      newCatScore.score = parseFloat(newCatScore.score.toFixed(2));
      catScores.push(newCatScore);
    }
    catScores.sort((a, b) => (a.score < b.score ? 1 : -1));
    let sortedCats = new Array();
    for (let i = catScores.length - 1; i >= 0; i--) {
      sortedCats.push(catScores[i].category);
    }
    return catScores;
  }

  // switches the variable controlling the view all/view best & worst 3
  public toggleViewAll() {
    this.viewAllQCCategories = 1 - this.viewAllQCCategories;
  }

  ngOnInit(): void {
    this.batchService.getAvgCategoryScoresObservables().subscribe((data) => {
      //
      for (let category of data.batchByCategory) {
        let totalScores = 0;
        let totalQuantity = 0;
        let catAverage = 0;

        for (let batch of category.batches) {
          let currentBatch = batch;
          totalScores += this.calculateTotalBatchScore(currentBatch);
          totalQuantity += this.calculateTotalBatchQuantity(currentBatch);
        }
        if (totalQuantity == 0 && totalScores == 0) {
          catAverage = 0;
        } else {
          catAverage = totalScores / totalQuantity;
        }

        if (!isNaN(catAverage) && catAverage > 0) {
          let categoryName = category.categoryName;
          this.categoryScores[categoryName] = catAverage;
        }
      }
      this.sortedCategories = this.sortCategoryScores(this.categoryScores);
      this.bestCategories = this.findBestCategories(this.sortedCategories);
      this.worstCategories = this.findWorstCategories(this.sortedCategories);
    });
  }
}

// Object that combines category and score
export class CategoryScore {
  category: string;
  score: number;

  constructor(s: string, n: number) {
    this.category = s;
    this.score = n;
  }
}
