import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAllTrainersComponent } from './api-all-trainers.component';

describe('ApiAllTrainersComponent', () => {
  let component: ApiAllTrainersComponent;
  let fixture: ComponentFixture<ApiAllTrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAllTrainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAllTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
