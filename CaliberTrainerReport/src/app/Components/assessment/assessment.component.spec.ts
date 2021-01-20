import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentComponent } from './assessment.component';

describe('AssessmentComponent', () => {
  let component: AssessmentComponent;
  let fixture: ComponentFixture<AssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    component.ngOnInit();
    expect(component.selectedValue == 'all');
    
    component.downloadPDF();

  });

});
