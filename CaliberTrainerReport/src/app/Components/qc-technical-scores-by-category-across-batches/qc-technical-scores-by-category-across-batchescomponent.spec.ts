import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { BatchTechnicalStatusBySkillCategoryService } from 'src/app/services/BatchTechnicalStatusBySkillCategory.service';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
import { QCComponent } from '../qc/qc.component';
import {FilterPipe} from '../../filter.pipe';
import { QcTechnicalScoresByCategoryAcrossBatchesComponent } from './qc-technical-scores-by-category-across-batches.component';
import { element } from 'protractor';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

let mockResponse; 

describe('QcTechnicalScoresByCategoryAcrossBatchesComponent', () => {
  let component: QcTechnicalScoresByCategoryAcrossBatchesComponent;
  let fixture: ComponentFixture<QcTechnicalScoresByCategoryAcrossBatchesComponent>;

  beforeEach(async(() => {
    mockResponse = { batchByCategory:
      [
        {
          categoryName: "Java",
          batches: [
            {
              batchName: "batch 1 12/34/5678",
              score: {
                superstar: 4,
                good: 3,
                average: 2,
                poor: 1,
                avgSuperstar: 40,
                avgGood: 30,
                avgAverage: 20,
                avgPoort: 10
              }
            },
            {
              batchName: "batch 2 00/00/0000",
              score: {
                superstar: 5,
                good: 2,
                average: 1,
                poor: 2,
                avgSuperstar: 50,
                avgGood: 20,
                avgAverage: 10,
                avgPoort: 20
              }
            }
          ]
        }, 
        {
          categoryName: "SQL",
          batches: [
            {
              batchName: "batch 1 12/34/5678",
              score: {
                superstar: 3,
                good: 0,
                average: 0,
                poor: 1,
                avgSuperstar: 75,
                avgGood: 0,
                avgAverage: 0,
                avgPoort: 25
              }
            },
            {
              batchName: "batch 2 00/00/0000",
              score: {
                superstar: 0,
                good: 0,
                average: 0,
                poor: 0,
                avgSuperstar: 0,
                avgGood: 0,
                avgAverage: 0,
                avgPoort: 0
              }
            }
          ]
        },
        {
          categoryName: "Nothing",
          batches: [
            {
              batchName: "batch 1 12/34/5678",
              score: {
                superstar: 0,
                good: 0,
                average: 0,
                poor: 0,
                avgSuperstar: 0,
                avgGood: 0,
                avgAverage: 0,
                avgPoort: 0
              }
            },
            {
              batchName: "batch 2 00/00/0000",
              score: {
                superstar: 0,
                good: 0,
                average: 0,
                poor: 0,
                avgSuperstar: 0,
                avgGood: 0,
                avgAverage: 0,
                avgPoort: 0
              }
            }
          ]
        }
      ]
    };

    let mockBTSBSCS = jasmine.createSpyObj("BatchTechnicalStatusBySkillCategoryService", ["getAvgCategoryScoresObservables"]);
    mockBTSBSCS.getAvgCategoryScoresObservables.and.returnValue(of(mockResponse));
    TestBed.configureTestingModule({
      declarations: [ QcTechnicalScoresByCategoryAcrossBatchesComponent, FilterPipe ],
      providers: [{
        provide: BatchTechnicalStatusBySkillCategoryService,
        useValue: mockBTSBSCS
      }, QCComponent, DisplayGraphService],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcTechnicalScoresByCategoryAcrossBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* Initialization tests */

  it("should initialize categories correctly", () => {
    /*
      All test initialization assumes that the last and only the last element does
      not contain any scores. 
    */
    let categoryNames = [];
    let categoryObjs = [];
    trimEmpty();

    //categoryNames.push("Overview");
    //categoryObjs.push(mockResponse.batchByCategory[0].batches);
    for(const category of mockResponse.batchByCategory) {
      categoryNames.push(category.categoryName);
      categoryObjs.push(category.batches);
    }

    expect(component.categoriesName).toEqual(categoryNames);
    expect(component.categoriesObj).toEqual(categoryObjs);
  });

  it("should initialize batches correctly", () => {
    /*
      All test initialization assumes that the last and only the last element does
      not contain any scores. 
    */
    let batchNames = [];
    let batchFlags = [];
    trimEmpty();

    for(const batch of mockResponse.batchByCategory[0].batches) {
      batchNames.push(batch.batchName);
      batchFlags.push(true);
    }

    expect(component.batchNames).toEqual(batchNames);
    expect(component.batchFlags).toEqual(batchFlags);
  });

  /* SetScoreValues() tests */
  it("", () => {

  });


  //This next part of tests will test that components show up when they are clicked
  //and not show up when they aren't.
  it("should set the Java option to false when the Java option is unchecked", () => {
    
    let categorySelector: HTMLInputElement = fixture.debugElement.query(By.css("#Java")).nativeElement;

    categorySelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.categoryFlags[0]).toBeFalse(); //by the strange "it should contain categories" test that pushed overview,
                                                    //Java is confirmed to be first. So we want first category flag to be false.

    component.myLineChart.data.datasets.forEach(element => {
      expect(element.label).not.toBe("Java");
    });
  });

  //this is to check that unchecking/checking for all options works.
  it("should set the Java option to true when the Java option is checked", () => {
    let categorySelector: HTMLInputElement = fixture.debugElement.query(By.css("#Java")).nativeElement;

    //because of the event above, it is confirmed that doing so will flip things around/
    categorySelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    categorySelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.categoryFlags[0]).toBeTrue();

    let javaIndicator: boolean = false;
    component.myLineChart.data.datasets.forEach(element => {
      if (element.label === "Java"){
        javaIndicator = true;
      }
    });

    expect(javaIndicator).toBeTrue();    
  });

  //next, you must make sure that the batches is the same.
  //the logic is the same as testing categories.
  it("should set the 'batch 1 12/34/5678' batch to false when that batch is unchecked", () =>{
    let categorySelector: HTMLInputElement = fixture.debugElement.query(By.css("[id = \"batch 1 12/34/5678\"]")).nativeElement;
    categorySelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.batchFlags[0]).toBeFalse(); //by the strange "it should contain categories" test that pushed overview,
                                                    //Java is confirmed to be first. So we want first category flag to be false.

    component.myLineChart.data.labels.forEach(element => {
      expect(element).not.toBe("batch 1 12/34/5678");
    });
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

  it('should call emptyDoubleClick to stop event propagation when double clicked', () =>{
    let mySpy = spyOn(component, 'emptyDoubleClick').and.callThrough();
    const doubleClickEl: DebugElement[] = fixture.debugElement.queryAll(By.css("#category-dropdown"));
    doubleClickEl[0].triggerEventHandler("dblclick", new MouseEvent("dblClick"));
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });



  /* This should work, but qc-graph-selector is not in qc-technical-scores
  it('should "expand" the graph into large view when I double click on the title.', () => {
    let titleSelector: HTMLDivElement = fixture.debugElement.query(By.css("#card-title")).nativeElement;
    let graphSelector: HTMLSelectElement = fixture.debugElement.query(By.css("#qc-graph-selector")).nativeElement;
    titleSelector.dispatchEvent(new Event("dblclick"));
    fixture.detectChanges();

    expect(graphSelector.value).toBe("all");
  });
  */

  //next, check that when all category option is unselected
  //all category flags are unselected and no data is shown.
  it('should uncheck all category options and remove all categories from the graph when I click on "select/deselect all categories"', () => {
    let allCategorySelector: HTMLInputElement = fixture.debugElement.query(By.css("#catSelectAll")).nativeElement;
    allCategorySelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    for (let flag of component.categoryFlags){
      expect(flag).toBeFalse();
    }
    expect(component.myLineChart.data.datasets.length).toBe(0);
  });

  //next, check that when all category flag is selected
  //all category flags are selected and all data is shown.
  it('should check all category options and add all categories from the graph when I click on "select/deselect all categories" again', () => {
    let allCategorySelector: HTMLInputElement = fixture.debugElement.query(By.css("#catSelectAll")).nativeElement;
    allCategorySelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    allCategorySelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    for (let flag of component.categoryFlags){
      expect(flag).toBeTrue();
    }
    expect(component.myLineChart.data.datasets).toBeTruthy();
  });

  //same should be done to uncheck batch options. It is assumed they are are the same
  it('should uncheck all batch options and remove all batches from the graph when I click on "select/deselect all batches"', () => {
    let allBatchesSelector: HTMLInputElement = fixture.debugElement.query(By.css("#batchSelectAll")).nativeElement;
    allBatchesSelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    for (let flag of component.batchFlags){
      expect(flag).toBeFalse();
    }

    expect(component.myLineChart.data.labels.length).toBe(0);
    expect(component.myLineChart.data.datasets.length).toBe(0);
  });

  it('should drop down categories list when I click on the categories dropdown', () => {
    let categoryDropdownSelector: HTMLDivElement = fixture.debugElement.query(By.css("#categories")).nativeElement;
    let categoryListSelector: HTMLDivElement = fixture.debugElement.query(By.css("#qc-graph2-selector")).nativeElement;

    categoryDropdownSelector.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.cat_dropdown_flag).toBeFalse();
    expect(categoryListSelector.hidden).toBeFalse();
  });

  it('should drop down batch list when I click on the batches dropdown', () => {
    let batchDropdownSelector: HTMLDivElement = fixture.debugElement.query(By.css("#batches")).nativeElement;
    let batchListSelector: HTMLDivElement = fixture.debugElement.query(By.css("#batch-list")).nativeElement;

    batchDropdownSelector.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.batch_dropdown_flag).toBeFalse();
    expect(batchListSelector.hidden).toBeFalse();
  });

  it('should close the batch dropdown when I click on the category dropdown', () => {
    let categoryDropdownSelector: HTMLDivElement = fixture.debugElement.query(By.css("#categories")).nativeElement;
    let categoryListSelector: HTMLDivElement = fixture.debugElement.query(By.css("#qc-graph2-selector")).nativeElement;
    let batchDropdownSelector: HTMLDivElement = fixture.debugElement.query(By.css("#batches")).nativeElement;
    let batchListSelector: HTMLDivElement = fixture.debugElement.query(By.css("#batch-list")).nativeElement;

    batchDropdownSelector.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    categoryDropdownSelector.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.cat_dropdown_flag).toBeFalse();
    expect(categoryListSelector.hidden).toBeFalse();
    expect(component.batch_dropdown_flag).toBeTrue();
    expect(batchListSelector.hidden).toBeTrue();
  });

  it('should close the category dropdown when I click on the batch dropdown', () => {
    let categoryDropdownSelector: HTMLDivElement = fixture.debugElement.query(By.css("#categories")).nativeElement;
    let categoryListSelector: HTMLDivElement = fixture.debugElement.query(By.css("#qc-graph2-selector")).nativeElement;
    let batchDropdownSelector: HTMLDivElement = fixture.debugElement.query(By.css("#batches")).nativeElement;
    let batchListSelector: HTMLDivElement = fixture.debugElement.query(By.css("#batch-list")).nativeElement;

    categoryDropdownSelector.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    batchDropdownSelector.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.batch_dropdown_flag).toBeFalse();
    expect(batchListSelector.hidden).toBeFalse();
    expect(component.cat_dropdown_flag).toBeTrue();
    expect(categoryListSelector.hidden).toBeTrue();
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

  function trimEmpty() {
    for(let i = mockResponse.batchByCategory.length - 1; i >= 0; i--) {
      let batchSum: number = 0;
      for(const batch of mockResponse.batchByCategory[i].batches) {
        let scores = batch.score;
        batchSum += scores.average + scores.good + scores.poor + scores.superstar;
      }
      if(batchSum == 0) {
        mockResponse.batchByCategory.splice(i, 1);
      }
    }
  }

  
});
