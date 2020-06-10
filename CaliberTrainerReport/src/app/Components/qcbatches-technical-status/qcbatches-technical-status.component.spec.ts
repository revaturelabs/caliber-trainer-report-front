import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCBatchesTechnicalStatusComponent } from './qcbatches-technical-status.component';

describe('QCBatchesTechnicalStatusComponent', () => {
  let component: QCBatchesTechnicalStatusComponent;
  let fixture: ComponentFixture<QCBatchesTechnicalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCBatchesTechnicalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCBatchesTechnicalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
