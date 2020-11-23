import { Component, OnInit } from '@angular/core';
import { faBalanceScale, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { AssessmentByCategoryService } from 'src/app/services/AssessmentByCategory.service';

@Component({
  selector: 'review-page-best-worst-categories',
  templateUrl: './review-page-best-worst-categories.component.html',
  styleUrls: ['./review-page-best-worst-categories.component.css']
})

export class ReviewPageBestWorstCategoriesComponent implements OnInit {

  public barGraphIcon;

  public goodIcon;
  
  public badIcon;

  public categories: string[] = [];

  public averageScores: number[] = [];

  public best3: CategoryScore[];
  public worst3: CategoryScore[];

  constructor(private catAccess: AssessmentByCategoryService) {
    this.barGraphIcon = faBalanceScale;
    this.goodIcon = faCheckCircle;
    this.badIcon = faTimesCircle;

  }

  ngOnInit(): void {
    this.catAccess.getScorePerCategory().subscribe(resp => {
      //

      // get categories and compute average score
      for (const cat of resp) {
        this.categories.push(cat.category);
      }
      let index: number = 0;
      for (const scores of resp) {


        let count: number = 0;
        let sum: number = 0;
        for (let i = 0; i < 5; i++) {
          if (scores.average[i] !== 0) {
            count++;
            sum += scores.average[i];
          }
        }

        this.averageScores[index] = this.roundTwoDigits(sum / count);
        // average is 5 values
        // console.log(JSON.stringify(scores.average))
        index++;
      }
      console.log("Categories" + JSON.stringify(this.categories))

      console.log("Results" + JSON.stringify(this.averageScores))

      this.best3 = this.getBest3();

      this.worst3 = this.getWorst3()
    })
  }

  roundTwoDigits(val: number): number {
    return Math.round(val * 100) / 100;
  }

  getBest3(): CategoryScore[] {
    let l: CategoryScore[] = [];

    let originalLength = this.averageScores.length;

    for (let i = 0; i < Math.min(3, originalLength); i++) {
      console.log("best    " + this.averageScores.length + "   " + JSON.stringify(this.averageScores))
      let bc = this.getBestCategoryIndex();

      let cat: string = this.categories.splice(bc, 1)[0];
      let score: number = this.averageScores.splice(bc, 1)[0];
      l.push(new CategoryScore(cat, score));
    }

    return l;
  }

  getWorst3(): CategoryScore[] {
    let l: CategoryScore[] = [];

    let originalLength = this.averageScores.length;

    for (let i = 0; i < Math.min(3, originalLength); i++) {
      console.log("worst    " + this.averageScores.length + "   " + JSON.stringify(this.averageScores))
      let bc = this.getWorstCategoryIndex();

      let cat: string = this.categories.splice(bc, 1)[0];
      let score: number = this.averageScores.splice(bc, 1)[0];
      l.push(new CategoryScore(cat, score));
    }

    return l;
  }


  getWorstCategoryIndex(): number {
    // highest percent is 100
    let least: number = 101;
    let index: number = -1;
    for (let i = 0; i < this.averageScores.length; i++) {
      if (this.averageScores[i] < least) {
        least = this.averageScores[i];
        index = i;
      }
    }
    return index;
  }


  getBestCategoryIndex(): number {
    // highest percent is 100
    let most: number = 0;
    let index: number = -1;
    for (let i = 0; i < this.averageScores.length; i++) {
      if (this.averageScores[i] > most) {
        most = this.averageScores[i];
        index = i;
      }
    }
    return index;
  }
}

class CategoryScore {
  category: string;
  score: number;

  constructor(s: string, n: number) {
    this.category = s;
    this.score = n
  }
}
