import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { ReviewPageAvgQcScoreComponent } from './review-page-avg-qc-score.component';
import { HttpClientModule } from '@angular/common/http';
describe('ReviewPageAvgQcScoreComponent', () => {
  let component: ReviewPageAvgQcScoreComponent;
  let fixture: ComponentFixture<ReviewPageAvgQcScoreComponent>;
  let batch = {
    score: {
      poor: 4,
      average: 10,
      good: 7,
      superstar: 2
    }
  }
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageAvgQcScoreComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageAvgQcScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('chart should be undefined at start', () =>{
    expect(component.avgQCGraph).toBeUndefined();
  });

  it('graph should be displayed', () =>{
    expect(component.displayGraph).toHaveBeenCalled;
  });
});
