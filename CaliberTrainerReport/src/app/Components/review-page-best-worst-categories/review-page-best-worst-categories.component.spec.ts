import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPageBestWorstCategoriesComponent } from './review-page-best-worst-categories.component';

describe('BestWorstCategoriesComponent', () => {
  let component: ReviewPageBestWorstCategoriesComponent;
  let fixture: ComponentFixture<ReviewPageBestWorstCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewPageBestWorstCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageBestWorstCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
