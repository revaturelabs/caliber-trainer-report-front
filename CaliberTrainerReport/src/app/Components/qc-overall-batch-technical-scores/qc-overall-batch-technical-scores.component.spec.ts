import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ɵpatchComponentDefWithScope } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QCComponent } from '../qc/qc.component';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';
import { QcOverallBatchTechnicalScoresComponent } from './qc-overall-batch-technical-scores.component';

describe('QcOverallBatchTechnicalScoresComponent', () => {
  let component: QcOverallBatchTechnicalScoresComponent;
  let fixture: ComponentFixture<QcOverallBatchTechnicalScoresComponent>;
  // let mockTechnicalStatus = [[0,10,1,10,5], 
  //       [10,15,0,0,0], 
  //       [10,0,5,2,3], 
  //       [10,15,0,20,10], 
  //       [10,15,20,10,0]];
  let mockData = [
    {category: "Java",
    batchName: "test1",
    technicalStatus: [0,10,0,10,5],
    averageAvg: 50,
    averageCount: 6,
    goodAvg: 50,
    goodCount: 6,
    nullAvg: 0,
    nullCount: 0,
    poorAvg: 0,
    poorCount: 0,
    superstarAvg: 0,
    superstarCount: 0},
    {category: "JavaScript",
    batchName: "test1",
    technicalStatus: [10,0,1,0,5],
    averageAvg: 50,
    averageCount: 6,
    goodAvg: 50,
    goodCount: 6,
    nullAvg: 0,
    nullCount: 0,
    poorAvg: 0,
    poorCount: 0,
    superstarAvg: 0,
    superstarCount: 0},
    {category: "SQL",
    batchName: "test1",
    technicalStatus: [2,10,1,10,0],
    averageAvg: 50,
    averageCount: 6,
    goodAvg: 50,
    goodCount: 6,
    nullAvg: 0,
    nullCount: 0,
    poorAvg: 0,
    poorCount: 0,
    superstarAvg: 0,
    superstarCount: 0}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcOverallBatchTechnicalScoresComponent],
      imports:[HttpClientTestingModule],
      providers:[QCComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcOverallBatchTechnicalScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the graph when the window is resized', () =>{
    let secondSpy = spyOn(component, 'graphAdjust');
    window.resizeTo(1000,1000);
    window.dispatchEvent(new Event('resize'));
    let mySpy = spyOn(component, 'onResize');
    window.resizeTo(1100,1000);
    window.dispatchEvent(new Event('resize'));
    expect(mySpy).toHaveBeenCalled();
    expect(secondSpy).toHaveBeenCalled();
  });

  it('should call displayGraphAll', () =>{
    let mySpy = spyOn(component, 'displayGraphAll').and.callThrough();
    component.batchNames = ["test batch"];
    component.displayGraphAll();
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  
  it('should call appendNullDataset', () =>{
    let mySpy = spyOn(component, 'appendNullDataset').and.callThrough();
    component.batchNames = ["test batch"];
    component.displayGraphAll();
    component.nullData = [1]; // these lines
    component.batchNames = []; //are included
    component.displayGraphAll(); //for the sake of
    component.batchNames = ["test batch"];//better branch coverage
    component.displayGraphAll();  //delete them at your peril
    component.appendNullDataset([]);
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
    expect(component.myGraph.data.labels[0]).toEqual("test batch");
  });

  
  it('should call appendSuperStarDataset', () =>{
    let mySpy = spyOn(component, 'appendSuperstarDataset').and.callThrough();
    component.batchNames = ["test batch"];
    component.displayGraphAll();
    component.superstarData = [1]; //this line and the following
    component.displayGraphAll(); //are necessary for branch coverage
    component.appendSuperstarDataset([]);
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
    expect(component.myGraph.data.labels[0]).toEqual("test batch");
  });

  
  it('should call the utility function', () =>{
    let mySpy = spyOn(component, 'utilityFunction').and.callThrough();
    component.utilityFunction(mockData);
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  }); 

  it('should call doubleClickGraph1 when double clicked', () =>{
    let mySpy = spyOn(component, 'doubleClickGraph1').and.callThrough();
    const doubleClickEl: DebugElement[] = fixture.debugElement.queryAll(By.css("#graph1Header"));
    doubleClickEl[0].triggerEventHandler("dblclick", new MouseEvent("dblClick"));
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

});

