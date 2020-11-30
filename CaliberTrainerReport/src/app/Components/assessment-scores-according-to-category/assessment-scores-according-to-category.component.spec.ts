import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Category } from 'src/app/class/category';
import { AssessmentByCategoryService } from 'src/app/services/AssessmentByCategory.service';
import { DisplayGraphService } from 'src/app/services/display-graph.service';
import { AssessmentComponent } from '../assessment/assessment.component';

import { AssessmentScoresAccordingToCategoryComponent } from './assessment-scores-according-to-category.component';

fdescribe('AssessmentScoresAccordingToCategoryComponent', () => {
  let component: AssessmentScoresAccordingToCategoryComponent;
  let fixture: ComponentFixture<AssessmentScoresAccordingToCategoryComponent>;

  let mockResponse;

  interface Category {
    name: string,
    examScore: number,
    examRawScore: number,
    verbalScore: number,
    verbalRawScore: number,
    projectScore: number,
    projectRawScore: number,
    presentationScore: number,
    presentationRawScore: number,
    otherScore: number,
    otherRawScore: number
  }

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
    let categoryNames = [];
    removeEmpty();

    for(let category of mockResponse) {
      categoryNames.push(category.category);
    }

    expect(component.categories).toEqual(categoryNames);
  });

  it("should initialize scores correctly", () => {
    let scores: Category[] = [];
    removeEmpty();

    for(const category of mockResponse) {
      scores.push({
        name: category.category,
        examScore: formatFinal(category.average[0]),
        examRawScore: formatRaw(category.average[0]),
        verbalScore: formatFinal(category.average[1]),
        verbalRawScore: formatRaw(category.average[1]),
        projectScore: formatFinal(category.average[3]),
        projectRawScore: formatRaw(category.average[3]),
        presentationScore: formatFinal(category.average[2]),
        presentationRawScore: formatRaw(category.average[2]),
        otherScore: formatFinal(category.average[4]),
        otherRawScore: formatRaw(category.average[4]),
      });
    }

    expect(component.categories).toEqual(scores.map(x => x.name));
    expect(component.examScores).toEqual(scores.map(x => x.examScore));
    expect(component.examRawScores).toEqual(scores.map(x => x.examRawScore));
    expect(component.verbalScores).toEqual(scores.map(x => x.verbalScore));
    expect(component.verbalRawScores).toEqual(scores.map(x => x.verbalRawScore));
    expect(component.projectScores).toEqual(scores.map(x => x.projectScore));
    expect(component.projectRawScores).toEqual(scores.map(x => x.projectRawScore));
    expect(component.presentationScores).toEqual(scores.map(x => x.presentationScore));
    expect(component.presentationRawScores).toEqual(scores.map(x => x.presentationRawScore));
    expect(component.otherScores).toEqual(scores.map(x => x.otherScore));
    expect(component.otherRawScores).toEqual(scores.map(x => x.otherRawScore));
  });

  function removeEmpty() {
    for(let i = mockResponse.length - 1; i >= 0; i--) {
      if(mockResponse[i].average.reduce((acc, curr) => {return acc + curr}) == 0) {
        mockResponse.splice(i, 1);
      }
    }
  }

  function formatRaw(score: number): number {
    return Math.round(score * 10) / 10;
  }

  function formatFinal(score: number): number {
    if(score === 0) {
      return 0.5;
    } else {
      return Math.round(score * 100) / 100;
    }
  }
});
