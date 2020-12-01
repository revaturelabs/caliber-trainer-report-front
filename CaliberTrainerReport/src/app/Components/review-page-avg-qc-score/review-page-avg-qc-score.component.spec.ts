import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPageAvgQcScoreComponent } from './review-page-avg-qc-score.component';

describe('ReviewPageAvgQcScoreComponent', () => {
  let component: ReviewPageAvgQcScoreComponent;
  let fixture: ComponentFixture<ReviewPageAvgQcScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageAvgQcScoreComponent ],
      imports:[HttpClientTestingModule]
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
});
