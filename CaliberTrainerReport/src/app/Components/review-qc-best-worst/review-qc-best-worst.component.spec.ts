import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewQcBestWorstComponent } from './review-qc-best-worst.component';

describe('ReviewQcBestWorstComponent', () => {
  let component: ReviewQcBestWorstComponent;
  let fixture: ComponentFixture<ReviewQcBestWorstComponent>;
  let batch = {
    score: {
      poor: 4,
      average: 10,
      good: 7,
      superstar: 2
    }
  }
  let categories = {
    Java: 3.4,
    Junit: 2.5,
    AWS: 2.0,
    Mockito: 2.3,
    REST: 3.4,
    Angular: 3.0,
    DevOps: 3.4,
    Cucumber: 2.0
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewQcBestWorstComponent ]
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

  it('should calculate total batch scores', () => {
    expect(component.calculateTotalBatchScore(batch)).toBe(53)
  })

  it('should calculate total batch quantity', () => {
    expect(component.calculateTotalBatchQuantity(batch)).toBe(23)
  })

  it('should find the categories with the best scores', () => {
    expect(component.findBestCategories(categories)).toBe(['Java','REST','DevOps'])
  })
  
  it('should find the categories with the worst scores', () => {
    expect(component.findWorstCategories(categories)).toBe(['AWS','Cucumber'])
  })
});
