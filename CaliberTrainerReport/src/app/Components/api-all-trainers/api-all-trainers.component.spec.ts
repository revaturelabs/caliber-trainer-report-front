import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAllTrainersComponent } from './api-all-trainers.component';

describe('ApiAllTrainersComponent', () => {
  let component: ApiAllTrainersComponent;
  let fixture: ComponentFixture<ApiAllTrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAllTrainersComponent ],
      imports: [HttpClientModule]
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

  it('should be loading when getting trainer', () => {
    component.trainers = [];
    component.trainers.push({email:"",firstName:"",lastName:"",trainingBatches:[]});
    component.getDataByTrainer(0);
    expect(component.mockData).toEqual('loading');
  });
});
