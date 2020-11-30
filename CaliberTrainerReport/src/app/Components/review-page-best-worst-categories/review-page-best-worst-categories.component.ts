import { Component, OnInit } from '@angular/core';
import { faBalanceScale, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { AssessmentByCategoryService } from 'src/app/services/AssessmentByCategory.service';

@Component({
  selector: 'review-page-best-worst-categories',
  templateUrl: './review-page-best-worst-categories.component.html',
  styleUrls: ['./review-page-best-worst-categories.component.css']
})

export class ReviewPageBestWorstCategoriesComponent implements OnInit {

  // Icon references
  public balanceIcon;
  public goodIcon;
  public badIcon;

  // List of all category names
  public categories: string[] = [];

  // List of computed average scrores
  public averageScores: number[] = [];

  // Best 3 and worst 3 scores stored as an object with the category and score
  public best3: CategoryScore[];
  public worst3: CategoryScore[];

  // Set icons and create reference to service
  constructor(private catAccess: AssessmentByCategoryService) {
    this.balanceIcon = faBalanceScale;
    this.goodIcon = faCheckCircle;
    this.badIcon = faTimesCircle;

  }

  ngOnInit(): void {
    // Get scores per category
    this.catAccess.getScorePerCategory().subscribe(resp => {

      // Get categories and add to list
      for (const cat of resp) {
        this.categories.push(cat.category);
      }

      // Index for categories
      let index: number = 0;

      for (const scores of resp) {

        let count: number = 0;
        let sum: number = 0;

        // Sum up scores and record number of scores
        for (let i = 0; i < 5; i++) {
          if (scores.average[i] !== 0) {
            count++;
            sum += scores.average[i];
          }
        }

        // Set the average score for the category rounded to 2 decimal places
        this.averageScores[index] = this.roundTwoDigits(sum / count);
        // Increment index for category
        index++;
      }

      // Get best 3 scores and category
      this.best3 = this.getBest3();

      // Get worst 3 scores and category
      this.worst3 = this.getWorst3()
    })
  }

  // Round number to 2 decimal places
  roundTwoDigits(val: number): number {
    return Math.round(val * 100) / 100;
  }


  // Get best 3 scores
  getBest3(): CategoryScore[] {
    let l: CategoryScore[] = [];

    // Get length of avevage scores since array will be modified
    let originalLength = this.averageScores.length;

    /* Run get worst category index 3 times or less if there are less than 3 categories remaining 
     (should not occur since there are more than 6 categories)*/
    for (let i = 0; i < Math.min(3, originalLength); i++) {
      let bc = this.getBestCategoryIndex();

      // Remove category and score from corresponding lists
      let cat: string = this.categories.splice(bc, 1)[0];
      let score: number = this.averageScores.splice(bc, 1)[0];
      // Add category with score to list
      l.push(new CategoryScore(cat, score));
    }

    return l;
  }

  // Get worst 3 scores
  getWorst3(): CategoryScore[] {
    let l: CategoryScore[] = [];

    // Get length of avevage scores since array will be modified
    let originalLength = this.averageScores.length;
    /* Run get worst category index 3 times or less if there are less than 3 categories remaining 
    (should not occur since there are more than 6 categories)*/
    for (let i = 0; i < Math.min(3, originalLength); i++) {
      let bc = this.getWorstCategoryIndex();

      // Remove category and score from corresponding lists
      let cat: string = this.categories.splice(bc, 1)[0];
      let score: number = this.averageScores.splice(bc, 1)[0];
      // Add to list
      l.push(new CategoryScore(cat, score));
    }

    return l;
  }


  // Returns index of lowest score
  getWorstCategoryIndex(): number {
    // Highest percent is 100
    let least: number = 101;
    let index: number = -1;
    // Iterate through list and return lowest score
    for (let i = 0; i < this.averageScores.length; i++) {
      if (this.averageScores[i] < least) {
        least = this.averageScores[i];
        index = i;
      }
    }
    return index;
  }

  // Return index of highest score
  getBestCategoryIndex(): number {
    // Lowest percent is 0
    let most: number = 0;
    let index: number = -1;
    // Iterate through list and return highest score
    for (let i = 0; i < this.averageScores.length; i++) {
      if (this.averageScores[i] > most) {
        most = this.averageScores[i];
        index = i;
      }
    }
    return index;
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
