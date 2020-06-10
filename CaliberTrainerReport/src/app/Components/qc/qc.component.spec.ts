import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCComponent } from './qc.component';

describe('QCComponent', () => {
  let component: QCComponent;
  let fixture: ComponentFixture<QCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
