import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AssessmentByCategoryService } from 'src/app/services/AssessmentByCategory.service';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
import { AssessmentComponent } from '../assessment/assessment.component';

import { AssessmentScoresAccordingToCategoryComponent } from './assessment-scores-according-to-category.component';

describe('AssessmentScoresAccordingToCategoryComponent', () => {
  let component: AssessmentScoresAccordingToCategoryComponent;
  let fixture: ComponentFixture<AssessmentScoresAccordingToCategoryComponent>;

  let mockResponse;

  beforeEach(async(() => {
    mockResponse = [
      {
        category: "Java",
        average: [10, 30.5, 50.7, 70.2, 0]
      },
      {
        category: "SQL",
        average: [10, 0, 0, 70.2, 0]
      },
      {
        category: "Nothing",
        average: [0, 0, 0, 0, 0]
      },
      {
        category: "gRPC",
        average: [0, 20, 99, 100, 99.2342312232]
      }
    ];

    let mockABCS = jasmine.createSpyObj("AssessmentByCategoryService", ["getScorePerCategory"])
    mockABCS.getScorePerCategory.and.returnValue(of(mockResponse));
    TestBed.configureTestingModule({
      declarations: [ AssessmentScoresAccordingToCategoryComponent ],
      providers: [{
        provide: AssessmentByCategoryService,
        useValue: mockABCS
      }, AssessmentComponent, DisplayGraphService],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentScoresAccordingToCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should initialize categories correctly", () => {

  });

  it("should initialize batches correctly", () => {

  });
});
