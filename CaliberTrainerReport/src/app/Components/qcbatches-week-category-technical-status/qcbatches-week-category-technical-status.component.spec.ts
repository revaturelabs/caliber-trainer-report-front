import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCBatchesWeekCategoryTechnicalStatusComponent } from './qcbatches-week-category-technical-status.component';

describe('QCBatchesWeekCategoryTechnicalStatusComponent', () => {
  let component: QCBatchesWeekCategoryTechnicalStatusComponent;
  let fixture: ComponentFixture<QCBatchesWeekCategoryTechnicalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCBatchesWeekCategoryTechnicalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCBatchesWeekCategoryTechnicalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
