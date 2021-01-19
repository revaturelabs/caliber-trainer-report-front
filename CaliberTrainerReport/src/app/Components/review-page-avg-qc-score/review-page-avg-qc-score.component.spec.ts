import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { ReviewPageAvgQcScoreComponent } from './review-page-avg-qc-score.component';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from 'src/app/services/url.service';
import { DisplayQcAverageGraphService } from 'src/app/services/display-qc-average-graph.service';
import { BatchService } from 'src/app/services/batch.service';
describe('ReviewPageAvgQcScoreComponent', () => {
  let component: ReviewPageAvgQcScoreComponent;
  let fixture: ComponentFixture<ReviewPageAvgQcScoreComponent>;
  let de: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageAvgQcScoreComponent ],
      imports: [HttpClientModule],
      providers: [BatchService, UrlService, DisplayQcAverageGraphService]
    })
    .compileComponents();
    sessionStorage.setItem('selectedId', '1');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageAvgQcScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    sessionStorage.setItem('selectedId', '1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function test_init_up_to_three(i) {
    it('will initialize the component', () => {
        let fakeData = [
          {batchId: "1", batchName: "2001 Jan1 JWA", technicalStatus: [i, i, i, i, i]}
        ];
    
        console.log(fakeData);
  
        component.batchNames = [];
        component.technicalStatus = [];
        component.batchLabel = [];
        component.bgColor = [];
        component.avgScores = [];
    
        component.initializeComponent(fakeData);
    
        expect(component.batchNames.length).toBeGreaterThan(0);
        expect(component.technicalStatus.length).toBeGreaterThan(0);
        expect(component.batchLabel.length).toBeGreaterThan(0);
        expect(component.bgColor.length).toBeGreaterThan(0);
        expect(component.avgScores.length).toBeGreaterThan(0);
        expect(component.avgQCGraph.length).toBeGreaterThan(0);
    });
  }

  for (let i = 0; i < 3; i++) {
    test_init_up_to_three(i);
  }

  it('will not display the graph given null data', () => {
    component.batchNames = [];
    component.technicalStatus = [];
    component.batchLabel = [];
    component.bgColor = [];
    component.avgScores = [];

    component.initializeComponent(null);
    expect(component.batchNames.length).toEqual(0);
    expect(component.technicalStatus.length).toEqual(0);
    expect(component.batchLabel.length).toEqual(0);
    expect(component.bgColor.length).toEqual(0);
    expect(component.avgScores.length).toEqual(0);
    expect(component.avgQCGraph.length).toEqual(0);
  });

  afterAll(() => {
    sessionStorage.setItem('selectedId', null);
  });
});
