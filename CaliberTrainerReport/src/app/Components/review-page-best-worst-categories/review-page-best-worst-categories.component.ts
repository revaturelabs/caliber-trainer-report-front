import { Component, OnInit } from '@angular/core';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { AssessmentByCategoryService } from 'src/app/services/AssessmentByCategory.service';

@Component({
  selector: 'review-page-best-worst-categories',
  templateUrl: './review-page-best-worst-categories.component.html',
  styleUrls: ['./review-page-best-worst-categories.component.css']
})
export class ReviewPageBestWorstCategoriesComponent implements OnInit {

 public barGraphIcon;

 public categories:string[] = [];

 public scores:number[] = [];


  constructor(private catAccess:AssessmentByCategoryService) { 
    this.barGraphIcon = faBalanceScale;

  }

  ngOnInit(): void {
    this.catAccess.getScorePerCategory().subscribe(resp =>{
      //

      for (const cat of resp) {
        this.categories.push(cat.category);
      }
      for (const scores of resp) {

        // average is 5 values
        console.log(JSON.stringify(scores.average))
      }
    })
  }

}
