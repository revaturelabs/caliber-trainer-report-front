import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPage } from './progress.component';

describe('ProgressPage', () => {
  let component: ProgressPage;
  let fixture: ComponentFixture<ProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
