import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewQcBestWorstComponent } from './review-qc-best-worst.component';

// Object that combines category and score
export class CategoryScore {
  category: string;
  score: number;

  constructor(s: string, n: number) {
    this.category = s;
    this.score = n
  }
}

fdescribe('ReviewQcBestWorstComponent', () => {
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

  let Categories = {'SQL': 3,
                    'Java': 2,
                    'Spring': 2.5,
                    'Angular': 1,
                    'JavaScript': 3.5,
                    'Hibernate': 1.5};

  let sortedCategories = [];
  sortedCategories.push(new CategoryScore('JavaScript', 3.5));
  sortedCategories.push(new CategoryScore('SQL', 3));
  sortedCategories.push(new CategoryScore('Spring', 2.5));
  sortedCategories.push(new CategoryScore('Java', 2));
  sortedCategories.push(new CategoryScore('Hibernate', 1.5));
  sortedCategories.push(new CategoryScore('Angular', 1));

  let top3 = [];
  top3.push(new CategoryScore('JavaScript', 3.5));
  top3.push(new CategoryScore('SQL', 3));
  top3.push(new CategoryScore('Spring', 2.5));

  let bottom3 = [];
  bottom3.push(new CategoryScore('Angular', 1));
  bottom3.push(new CategoryScore('Hibernate', 1.5));
  bottom3.push(new CategoryScore('Java', 2));

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
  it('should calculate total batch scores', () => {
    expect(component.calculateTotalBatchScore(batch)).toBe(53)
  })

  it('should calculate total batch quantity', () => {
    expect(component.calculateTotalBatchQuantity(batch)).toBe(23)
  })

  it('should return an array sorted by category score', () => {
    expect(JSON.stringify(component.sortCategoryScores(Categories)) == JSON.stringify(sortedCategories)).toBeTruthy();
  })

  it('should return an array of top three CategoryScore objects sorted by score', () => {
    expect(JSON.stringify(component.findBestCategories(sortedCategories)) == JSON.stringify(top3)).toBeTruthy();
  })

  it('should return an array of bottom three CategoryScore objects sorted by score', () => {
    expect(JSON.stringify(component.findWorstCategories(sortedCategories)) == JSON.stringify(bottom3)).toBeTruthy();
  })

});
