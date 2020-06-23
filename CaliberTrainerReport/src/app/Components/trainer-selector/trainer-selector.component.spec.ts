import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSelectorComponent } from './trainer-selector.component';

describe('TrainerSelectorComponent', () => {
  let component: TrainerSelectorComponent;
  let fixture: ComponentFixture<TrainerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
