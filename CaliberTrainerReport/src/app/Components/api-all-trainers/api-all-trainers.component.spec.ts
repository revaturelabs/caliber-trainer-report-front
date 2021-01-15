import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiAllTrainersComponent } from './api-all-trainers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiAllTrainersComponent', () => {
  let component: ApiAllTrainersComponent;
  let fixture: ComponentFixture<ApiAllTrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAllTrainersComponent],
      imports:[HttpClientTestingModule]
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
