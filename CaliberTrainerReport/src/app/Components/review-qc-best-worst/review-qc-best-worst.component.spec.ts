import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewQcBestWorstComponent } from './review-qc-best-worst.component';

describe('ReviewQcBestWorstComponent', () => {
  let component: ReviewQcBestWorstComponent;
  let fixture: ComponentFixture<ReviewQcBestWorstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewQcBestWorstComponent],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewQcBestWorstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
