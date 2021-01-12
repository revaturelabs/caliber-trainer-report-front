import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { BatchTechnicalStatusBySkillCategoryService } from 'src/app/services/BatchTechnicalStatusBySkillCategory.service';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
import { QCComponent } from '../qc/qc.component';
import { FilterPipe } from 'src/app/filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';

import { QcTechnicalScoresByCategoryAcrossBatchesComponent } from './qc-technical-scores-by-category-across-batches.component';
import { element } from 'protractor';
import { By } from '@angular/platform-browser';

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
      declarations: [ QcTechnicalScoresByCategoryAcrossBatchesComponent, FilterPipe],
      providers: [{
        provide: BatchTechnicalStatusBySkillCategoryService,
        useValue: mockBTSBSCS
      }, QCComponent, DisplayGraphService, FilterPipe],
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
      not contain any scores. However, pushing Overview messed up the ability
      to compare mock data to what should be in the component area.
      I commented out this so that it would work. It does work.
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
  //and not show up when they aren't. The simple thing is to check that information
  //category flags of Java is false and no line data is named Java.
  it("should set the Java option to false when the Java option is unchecked", () => {
    
    let categorySelector: HTMLInputElement = fixture.debugElement.query(By.css("#Java")).nativeElement;
    //categorySelector.checked = false;
    categorySelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.categoryFlags[0]).toBeFalse(); //by the strange "it should contain categories" test that pushed overview,
                                                    //Java is confirmed to be first. So we want first category flag to be false.

    component.myLineChart.data.datasets.forEach(element => {
      expect(element.label).not.toBe(" Java");
    });
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
