import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCBatchesIndivCategoryTechnicalStatusComponent } from './qcbatches-indiv-category-technical-status.component';

describe('QCBatchesIndivCategoryTechnicalStatusComponent', () => {
  let component: QCBatchesIndivCategoryTechnicalStatusComponent;
  let fixture: ComponentFixture<QCBatchesIndivCategoryTechnicalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCBatchesIndivCategoryTechnicalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCBatchesIndivCategoryTechnicalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
