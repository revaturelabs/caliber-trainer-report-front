import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssessmentComponent } from '../assessment/assessment.component';
import { DebugElement } from '@angular/core';
import { AssessmentScoresAccordingToBatchComponent } from './assessment-scores-according-to-batch.component';
import { By } from '@angular/platform-browser';

describe('AssessmentScoresAccordingToBatchComponent', () => {
  let component: AssessmentScoresAccordingToBatchComponent;
  let fixture: ComponentFixture<AssessmentScoresAccordingToBatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentScoresAccordingToBatchComponent],
      imports:[HttpClientTestingModule],
      providers:[AssessmentComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AssessmentScoresAccordingToBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the subscribe in the oninit', () => {
    let mySpy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(mySpy).toHaveBeenCalled();
  })

  it('should call the updateGraph', () => {
    let mySpy = spyOn(component, 'updateGraph').and.callThrough();
    component.allBatches = JSON.parse(`[{"batchId":"Ix2x2UAB","batchName":"1804  Apr16 -2","assessmentScores":[75.74875,80.53154,78.206665,0,0]},{"batchId":"2rUNwAAM","batchName":"1901 Jan06 Other","assessmentScores":[77.69572,79.13,80.45,74.78,0]},{"batchId":"2rgIVAAY","batchName":"1903 Mar04 Full Stack Java/JEE","assessmentScores":[76.84375,59.44,83.13,0,0]},{"batchId":"2ehKRAAY","batchName":"1909 Sep30 Other","assessmentScores":[77.908455,78.20637,0,79.9,91.2]}]`);
    component.batchesObj = JSON.parse(`"[75.75,80.53,78.21,0,0]"`);
    component.updateGraph();
    expect(mySpy).toHaveBeenCalled();
  })

  // setComponent()
  it('should set the component given the response from service', () => {
    let batch = [{
      batchId: 'id',
      batchName: 'name',
      assessmentScores: [1, 2, 3, 4, 5]
    },
    {
      batchId: 'id2',
      batchName: 'name2',
      assessmentScores: [5, 4, 5, 4, 5]
    }];
    component.setComponent(batch);
    expect(component.allBatches).toEqual(batch);
    expect(component.batchesObj.length).toBeGreaterThan(0);

  })

  it('should call emptyDoubleClick to stop event propagation when double clicked', () =>{
    let mySpy = spyOn(component, 'doubleClickGraph4').and.callThrough();
    const doubleClickEl: DebugElement[] = fixture.debugElement.queryAll(By.css("#graph4Header"));
    doubleClickEl[0].triggerEventHandler("dblclick", new MouseEvent("dblClick"));
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });
  // onResize() {
    it('should call onResize', () =>{
      let mySpy = spyOn(component, 'onResize').and.callThrough();
      component.onResize();
      fixture.detectChanges();
      expect(mySpy).toHaveBeenCalled();
    });
});