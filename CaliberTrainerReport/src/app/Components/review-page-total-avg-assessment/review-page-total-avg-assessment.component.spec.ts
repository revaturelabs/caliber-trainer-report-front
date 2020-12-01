import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { ReviewPageTotalAvgAssessmentComponent } from './review-page-total-avg-assessment.component';
import { HttpClientModule } from '@angular/common/http';
import {By} from '@angular/platform-browser';


describe('ReviewPageTotalAvgAssessmentComponent', () => {
  let component: ReviewPageTotalAvgAssessmentComponent;
  let batch = {
    score: {
      poor: 4,
      average: 10,
      good: 7,
      superstar: 2
    }
  }
  let fixture: ComponentFixture<ReviewPageTotalAvgAssessmentComponent>;
  let de: DebugElement;
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ ReviewPageTotalAvgAssessmentComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageTotalAvgAssessmentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
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

  it('graph should be displayed', () =>{
    expect(component.displayGraph).toHaveBeenCalled;
  })

 


});
