import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentScoresForCategoryComponent } from './assessment-scores-for-category.component';

describe('AssessmentScoresForCategoryComponent', () => {
  let component: AssessmentScoresForCategoryComponent;
  let fixture: ComponentFixture<AssessmentScoresForCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentScoresForCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentScoresForCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
