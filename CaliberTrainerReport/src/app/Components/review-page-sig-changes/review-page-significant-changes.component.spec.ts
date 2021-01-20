import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPageSignificantChangesComponent } from './review-page-significant-changes.component';
import { Change } from './review-page-significant-changes.component';

describe('ReviewPageSignificantChangesComponent', () => {
  let component: ReviewPageSignificantChangesComponent;
  let fixture: ComponentFixture<ReviewPageSignificantChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageSignificantChangesComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ReviewPageSignificantChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Change constructor correctly', () => {
    let change = new Change("string", "string", 0, 0); 
    expect(change).toBeTruthy(change);
  });

  it('should handle the datum', () => {
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
    component.handleDatum(batch);
    expect(component.changes.length).toEqual(0);

    batch = [{
      batchId: 'id',
      batchName: 'name',
      assessmentScores: [0, 20, 40, 60, 80]
    }, 
    {
      batchId: 'id2',
      batchName: 'name2',
      assessmentScores: [100, 120, 140, 160, 180]
    }]

    component.handleDatum(batch);
    expect(component.changes.length).toBeGreaterThan(0);
  });

});
