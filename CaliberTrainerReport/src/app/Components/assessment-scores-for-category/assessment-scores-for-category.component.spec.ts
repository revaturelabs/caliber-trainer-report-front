import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AssessScoresByCategoryAllBatchesService } from 'src/app/services/AssessScoresByCategoryAllBatches.service';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
import { UrlService } from 'src/app/services/url.service';
import { AssessmentComponent } from '../assessment/assessment.component';
import {FilterPipe} from '../../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
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
       assessments: []
      }
    ]
   },
   {
    category: "Spring",
    batchAssessments: [
      {
        batchName: "12/34/56 - Java EE",
        assessments: []
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
        assessments: []
      },
      {
       batchName: "78/90/AB - Dev Ops",
       assessments: []
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
    mockASBCABS.getSixthGraphData.and.returnValue(of(mockResponse));
    TestBed.configureTestingModule({
      declarations: [ AssessmentScoresForCategoryComponent, FilterPipe],
      providers: [
        { provide: AssessScoresByCategoryAllBatchesService, 
          useValue: mockASBCABS
        },
      AssessmentComponent, DisplayGraphService, HttpClient, UrlService, HttpHandler],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentScoresForCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* ----- ONINIT() TESTS ----- */
  /* Note: All pop() calls are done to remove the empty category for testing; this
    operates under the strict assumption that the empty category is last in the
    mock data set.
  */

  it('should populate category names correctly on init', () => {
    let titles: string[] = mockResponse.categories.map(value => value.category);
    titles.pop();
    console.log(titles);
    console.log(component.categoriesName);
    expect(component.categoriesName).toEqual(titles);
  });

  it('should populate batch names correctly on init', () => {
    let batchNames: string[] = ["12/34/56 - Java EE", "78/90/AB - Dev Ops"];

    expect(component.batchNames).toEqual(batchNames);
  });

  function getAveragesOfAssessments(batchAssessments: BatchAssessment[]): number[] {
    let yValueSet: number[] = [];
      for(const assessments of batchAssessments) {
        if(!assessments.assessments || assessments.assessments.length == 0) {
          yValueSet.push(0);
        } else {
          yValueSet.push(assessments.assessments.reduce((acc, curr) => acc + curr) / assessments.assessments.length);
        }
      }
    return yValueSet;
  }

  it('should populate cumulative y-values correctly on init', () => {
    let cumulativeYValues: number[][] = [];
    for(const category of mockResponse.categories) {
      cumulativeYValues.push(getAveragesOfAssessments(category.batchAssessments));
    }
    cumulativeYValues.pop();

    expect(component.multiGraphYValues).toEqual(cumulativeYValues);
  });

  /* ----- UPDATEGRAPH() TESTS ----- */

  function chooseOptionFromDropdown(option: number): void {
    const categorySelector: HTMLSelectElement = fixture.debugElement.query(By.css("#Java")).nativeElement;
    categorySelector.value = option+"";
    categorySelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  }

  it('should change the selected value when a category is clicked', () => {

    const filter = new FilterPipe();
    component.pickedCategory = 0;
    let yValues: number[] = [];

    expect(component.categoryFlags[0]).toBeTrue(); //confirming the default value

    chooseOptionFromDropdown(1);
    yValues = getAveragesOfAssessments(mockResponse.categories[0].batchAssessments);
    expect(component.categoryFlags[0]).toBeFalse(); //confirming changed value
    expect(component.multiGraphYValues[0]).toEqual(yValues);

    chooseOptionFromDropdown(0);
    expect(component.categoryFlags[0]).toBeTrue(); //confirming value has changed back
  });

  function selectDeselectAllCategories(): void {
    const selector: HTMLSelectElement = fixture.debugElement.query(By.css("#catSelectAll")).nativeElement;
    selector.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  }

  it('should change the selected categories when select/deselect all is clicked', () => {

    const filter = new FilterPipe();
    let allTrue = [true, true, true];
    let allFalse = [false, false, false];
    expect(component.categoryFlags).toEqual(allTrue); //confirming the default values

    selectDeselectAllCategories();
    expect(component.categoryFlags).toEqual(allFalse); //confirming changed values

    selectDeselectAllCategories();
    expect(component.categoryFlags).toEqual(allTrue); //confirming values have changed back
  });

  function selectDeselectAllBatches(): void {
    const selector: HTMLSelectElement = fixture.debugElement.query(By.css("#batchSelectAll")).nativeElement;
    selector.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  }

  it('should change the selected batches when select/deselect all is clicked', () => {

    const filter = new FilterPipe();
    let allTrue = [true, true];
    let allFalse = [false, false];
    expect(component.batchFlags).toEqual(allTrue); //confirming the default values

    selectDeselectAllBatches();
    expect(component.batchFlags).toEqual(allFalse); //confirming changed values

    selectDeselectAllBatches();
    expect(component.batchFlags).toEqual(allTrue); //confirming values have changed back
  });

  function selectDeselectOneBatch(): void {
    const selector: HTMLSelectElement = fixture.debugElement.query(By.css("#name")).nativeElement;
    console.log(selector);
    selector.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    console.log(selector);
  }

  it('should change the selected batch when ', () => {

    const filter = new FilterPipe();
    console.log(component.batchFlags);
    selectDeselectOneBatch();
    console.log(component.batchFlags);
    // expect(component.categoryFlags).toBeTrue(); //confirming the default value

    // selectDeselectOneBatch();
    // expect(component.categoryFlags[1]).toBeFalse(); //confirming changed value

    // selectDeselectOneBatch();
    // expect(component.categoryFlags).toBeTrue(); //confirming value has changed back
  });


  
});