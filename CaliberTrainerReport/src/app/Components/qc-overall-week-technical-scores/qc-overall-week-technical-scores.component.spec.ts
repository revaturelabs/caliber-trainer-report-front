import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcOverallWeekTechnicalScoresComponent } from './qc-overall-week-technical-scores.component';

describe('QcOverallWeekTechnicalScoresComponent', () => {
  let component: QcOverallWeekTechnicalScoresComponent;
  let fixture: ComponentFixture<QcOverallWeekTechnicalScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcOverallWeekTechnicalScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcOverallWeekTechnicalScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
