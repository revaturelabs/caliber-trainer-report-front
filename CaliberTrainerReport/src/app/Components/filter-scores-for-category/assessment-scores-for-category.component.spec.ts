import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AssessScoresByCategoryAllBatchesService } from 'src/app/services/scores-by-category-all-batches.service';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
import { UrlService } from 'src/app/services/url.service';
import { AssessmentComponent } from '../assessment/assessment.component';
import {FilterPipe} from '../../filter.pipe';
import { DebugElement, Pipe, PipeTransform } from '@angular/core';
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

describe('AssessmentScoresForCategoryComponent', () => {
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
    let allTrue = [true, true];
    let allFalse = [false, false];
    expect(component.batchFlags).toEqual(allTrue); //confirming the default values

    selectDeselectAllBatches();
    expect(component.batchFlags).toEqual(allFalse); //confirming changed values

    selectDeselectAllBatches();
    expect(component.batchFlags).toEqual(allTrue); //confirming values have changed back
  });

  it('should toggle the selected batch when called', () => {
    expect(component.batchFlags[0]).toBeTrue(); //confirming the default value
    component.toggleBatch("12/34/56 - Java EE");

    expect(component.batchFlags[0]).toBeFalse(); //confirming changed value

    component.toggleBatch("12/34/56 - Java EE");
    expect(component.batchFlags[0]).toBeTrue(); //confirming value has changed back
  });

  it('should update the graph when the window is resized', () =>{
    let secondSpy = spyOn(component, 'graphAdjust');
    window.resizeTo(1000,1000);
    window.dispatchEvent(new Event('resize'));
    let mySpy = spyOn(component, 'onResize');
    window.resizeTo(1100,1000);
    window.dispatchEvent(new Event('resize'));
    expect(mySpy).toHaveBeenCalled();
    expect(secondSpy).toHaveBeenCalled();
  });

  it('should toggle the category selected and automatically update the graph', () =>{
    let mySpy = spyOn(component, 'updateGraph');
    expect(component.categoryFlags[0]).toBeTrue();
    component.toggleCategory('Java');
    expect(component.categoryFlags[0]).toBeFalse();
    component.toggleCategory('Java');
    expect(component.categoryFlags[0]).toBeTrue();
    expect(mySpy).toHaveBeenCalled();
  });

  it('should toggle the batch selected and automatically update the graph', () =>{
    let mySpy = spyOn(component, 'updateGraph');
    console.log(component.batchFlags);
    console.log(component.batchNames);
    expect(component.batchFlags[0]).toBeTrue();
    component.toggleBatch('12/34/56 - Java EE');
    expect(component.batchFlags[0]).toBeFalse();
    component.toggleBatch('12/34/56 - Java EE');
    expect(component.batchFlags[0]).toBeTrue();
    expect(mySpy).toHaveBeenCalled();
  });

  it('should toggle the flag for the batch dropdown menu', () =>{
    expect(component.cat_dropdown_flag).toBeTrue();

    expect(component.batch_dropdown_flag).toBeTrue(); 
    component.toggleBatchDropdown();
    expect(component.batch_dropdown_flag).toBeFalse();
    component.cat_dropdown_flag = false;
    component.toggleBatchDropdown();
    expect(component.batch_dropdown_flag).toBeTrue();
    expect(component.cat_dropdown_flag).toBeTrue();

    //confirming that the function also sets the cat_dropdown_flag to true when it is false
  });

  it('should toggle the flag for the category dropdown menu', () =>{
    expect(component.batch_dropdown_flag).toBeTrue();

    expect(component.cat_dropdown_flag).toBeTrue();
    component.toggleCatDropdown();
    expect(component.cat_dropdown_flag).toBeFalse();
    component.batch_dropdown_flag = false;
    component.toggleCatDropdown();
    expect(component.cat_dropdown_flag).toBeTrue();
    expect(component.batch_dropdown_flag).toBeTrue();
  });

  it('should call emptyDoubleClick to stop event propagation when double clicked', () =>{
    let mySpy = spyOn(component, 'emptyDoubleClick').and.callThrough();
    const doubleClickEl: DebugElement[] = fixture.debugElement.queryAll(By.css("#category-dropdown"));
    doubleClickEl[0].triggerEventHandler("dblclick", new MouseEvent("dblClick"));
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  it('should use filters when the picked category is not zero', () =>{
    component.pickedCategory = 1;
    let mySpy = spyOn(component.batchFilter, 'filterBatch').and.callThrough();
    component.updateGraph();
    expect(mySpy).toHaveBeenCalled();
    component.pickedCategory = 0;
  });

  it('should interpolate/extrapolate data containing zero values', () =>{
    let mockYValues: number[] = [0, 0, 1, 1, 0, 0, 3, 0];
    let result = component.cleanYValues(mockYValues);
    console.log(result)
    expect(result[0]).toEqual(1);
    expect(result[1]).toEqual(1);
    expect(result[4]).toEqual(2);
    expect(result[5]).toEqual(2);
    expect(result[7]).toEqual(3);
  });

  it('should graph data containing zero values', () =>{
    component.pickedCategory = 1;
    let mockYValues: number[] = [0, 0, 1, 1, 0, 0, 3, 0];
    component.displayGraph(['Java'], mockYValues);
    let mySpy = spyOn(component, 'displayGraph').and.callThrough();
    component.displayGraph(['Java'], mockYValues);
    expect(mySpy).toHaveBeenCalled();
    component.pickedCategory = 0;
  });


  
});