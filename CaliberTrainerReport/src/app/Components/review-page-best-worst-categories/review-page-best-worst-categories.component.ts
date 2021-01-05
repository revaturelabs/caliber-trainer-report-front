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

  // For view all functionality of the categories
  public viewAll: boolean = false;
  public allCategoryScores: CategoryScore[];

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

      // Get all categories and scores
      this.allCategoryScores = this.getCategoryScores();

      // Get best 3 scores and category
      this.best3 = this.getCategoryScores(true, 3);

      // Get worst 3 scores and category
      this.worst3 = this.getCategoryScores(false, 3);
    })
  }

  // Round number to 2 decimal places
  roundTwoDigits(val: number): number {
    return Math.round(val * 100) / 100;
  }

  getCategoryScores(descending: boolean = true, numCats: number = 0): CategoryScore[] {
    let l: CategoryScore[] = [];

    for (let i = 0; i < this.averageScores.length; i++) {
      let cat: string = this.categories[i];
      let score: number = this.averageScores[i];

      l.push(new CategoryScore(cat, score));
    }
    if (descending) {
      l.sort(function (a,b) {
        return b.score - a.score;
      });
    } else {
      l.sort(function (a,b) {
        return a.score - b.score;
      })
    }

    if (numCats !== 0) l = l.slice(0,numCats);

    return l;
  }

  toggleViewAll(): void {
    this.viewAll = !this.viewAll;
  }

  //sorts CategoryScore objects by score
  sortCategoryScores(catScores: CategoryScore[]): CategoryScore[]{
    let sortedArray = catScores.sort((a, b) => (a.score > b.score) ? 1: (a.score == b.score) ? ((a.category < b.category) ? 1 : -1) : -1);
    console.log(sortedArray)
    return null;
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
