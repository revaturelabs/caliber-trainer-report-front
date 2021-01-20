import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { ReviewPageTotalAvgAssessmentComponent } from './review-page-total-avg-assessment.component';
import { HttpClientModule } from '@angular/common/http';
import {By} from '@angular/platform-browser';


describe('ReviewPageTotalAvgAssessmentComponent', () => {
  let component: ReviewPageTotalAvgAssessmentComponent;
  
  let fixture: ComponentFixture<ReviewPageTotalAvgAssessmentComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageTotalAvgAssessmentComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewPageTotalAvgAssessmentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
    sessionStorage.setItem('selectedId', '1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  
  it('should have a span tag of `Total Average Assessment Scores`', () =>{
    expect(de.query(By.css('span')).nativeElement.innerText).toBe('Total Average Assessment Scores');
  });

  it('chart should be undefined at start', () =>{
    expect(component.myLineChart).toBeUndefined();
  });

  it('should trigger graphAdjust method when window is resized', () => {
    const spyOnResize = spyOn(component, 'graphAdjust');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });

  it('should set the component propery following ngOnInit', () => {
    let batch = [{
      batchId: 'id',
      batchName: 'name',
      assessmentScores: [1, 2, 3, 4, 5]
    },
    {
      batchId: 'id2',
      batchName: 'name2',
      assessmentScores: [5, 4, 5, 4, 5]
    }];

    component.setComponent(batch);

    expect(component.allBatches).toEqual(batch);
    expect(component.batchesObj.length).toBeGreaterThan(0);
    expect(component.batchAverages.length).toBeGreaterThan(0);
  });

});
