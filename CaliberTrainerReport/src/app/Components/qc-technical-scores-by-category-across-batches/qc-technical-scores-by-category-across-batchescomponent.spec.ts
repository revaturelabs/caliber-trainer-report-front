import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcTechnicalScoresByCategoryAcrossBatchesComponent } from './qc-technical-scores-by-category-across-batches.component';

describe('QcTechnicalScoresByCategoryAcrossBatchesComponent', () => {
  let component: QcTechnicalScoresByCategoryAcrossBatchesComponent;
  let fixture: ComponentFixture<QcTechnicalScoresByCategoryAcrossBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcTechnicalScoresByCategoryAcrossBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcTechnicalScoresByCategoryAcrossBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
