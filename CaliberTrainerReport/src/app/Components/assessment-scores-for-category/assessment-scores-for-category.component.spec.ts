import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Observable, of } from 'rxjs';
import { AssessScoresByCategoryAllBatchesService } from 'src/app/services/AssessScoresByCategoryAllBatches.service';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
import { UrlService } from 'src/app/services/url.service';
import { AssessmentComponent } from '../assessment/assessment.component';

import { AssessmentScoresForCategoryComponent } from './assessment-scores-for-category.component';

interface BatchAssessment {
  batchName: string;
  assessments: number[];
}

interface Category {
  category: string;
  batchAssessments: BatchAssessment[]
}

let mockResponse: {categories: Category[]} = {
  categories: [
   {
     category: "Java",
     batchAssessments: [
       {
         batchName: "12/34/56 - Java EE",
         assessments: [30, 60]
       },
       {
        batchName: "78/90/AB - Dev Ops",
        assessments: [45, 90]
       }
     ]
   },
   {
    category: "Servlets",
    batchAssessments: [
      {
        batchName: "12/34/56 - Java EE",
        assessments: [2, 4]
      },
      {
       batchName: "78/90/AB - Dev Ops",
       assessments: [0, 0]
      }
    ]
   },
   {
    category: "Spring",
    batchAssessments: [
      {
        batchName: "12/34/56 - Java EE",
        assessments: [0, 0]
      },
      {
       batchName: "78/90/AB - Dev Ops",
       assessments: [90, 100]
      }
    ]
   },
   {
    category: "Nothing",
    batchAssessments: [
      {
        batchName: "12/34/56 - Java EE",
        assessments: [0, 0]
      },
      {
       batchName: "78/90/AB - Dev Ops",
       assessments: [0, 0]
      }
    ]
   }
  ]
};

fdescribe('AssessmentScoresForCategoryComponent', () => {
  let component: AssessmentScoresForCategoryComponent;
  let fixture: ComponentFixture<AssessmentScoresForCategoryComponent>;

  beforeEach(async(() => {
    let mockASBCABS = jasmine.createSpyObj("AssessScoresByCategoryAllBatchesService", ["getSixthGraphData"]);
    mockASBCABS.getSixthGraphData.and.returnValue(mockResponse);
    TestBed.configureTestingModule({
      declarations: [ AssessmentScoresForCategoryComponent ],
      providers: [
        { provider: AssessScoresByCategoryAllBatchesService, 
          useValue: mockASBCABS
        },
      AssessmentComponent, DisplayGraphService, HttpClient, UrlService, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentScoresForCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('test1', () => {
    expect(component).toBeTruthy();
  });

  fit('test2', () => {
    expect(component).toBeTruthy();
  });
});
