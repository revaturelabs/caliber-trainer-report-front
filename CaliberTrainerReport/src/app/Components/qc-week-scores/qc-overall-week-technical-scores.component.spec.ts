import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QCComponent } from '../qc/qc.component';

import { QcOverallWeekTechnicalScoresComponent } from './qc-overall-week-technical-scores.component';

describe('QcOverallWeekTechnicalScoresComponent', () => {
  let component: QcOverallWeekTechnicalScoresComponent;
  let fixture: ComponentFixture<QcOverallWeekTechnicalScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcOverallWeekTechnicalScoresComponent ],
      imports:[HttpClientTestingModule],
      providers:[QCComponent]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcOverallWeekTechnicalScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.thirdGraphObj = JSON.parse(`[{"category":"Java","nullCount":0,"poorCount":0,"averageCount":6,"goodCount":6,"superstarCount":0,"nullAvg":0,"poorAvg":0,"averageAvg":50,"goodAvg":50,"superstarAvg":0},{"category":"SQL","nullCount":0,"poorCount":1,"averageCount":0,"goodCount":3,"superstarCount":0,"nullAvg":0,"poorAvg":25,"averageAvg":0,"goodAvg":75,"superstarAvg":0},{"category":"JavaScript","nullCount":1,"poorCount":0,"averageCount":2,"goodCount":1,"superstarCount":0,"nullAvg":25,"poorAvg":0,"averageAvg":50,"goodAvg":25,"superstarAvg":0},{"category":"Servlet","nullCount":0,"poorCount":1,"averageCount":3,"goodCount":1,"superstarCount":0,"nullAvg":0,"poorAvg":20,"averageAvg":60,"goodAvg":20,"superstarAvg":0},{"category":"AWS","nullCount":0,"poorCount":0,"averageCount":0,"goodCount":1,"superstarCount":0,"nullAvg":0,"poorAvg":0,"averageAvg":0,"goodAvg":100,"superstarAvg":0},{"category":"Hibernate","nullCount":0,"poorCount":1,"averageCount":0,"goodCount":1,"superstarCount":0,"nullAvg":0,"poorAvg":50,"averageAvg":0,"goodAvg":50,"superstarAvg":0},{"category":"Testing","nullCount":0,"poorCount":0,"averageCount":1,"goodCount":0,"superstarCount":0,"nullAvg":0,"poorAvg":0,"averageAvg":100,"goodAvg":0,"superstarAvg":0},{"category":"REST","nullCount":0,"poorCount":0,"averageCount":0,"goodCount":1,"superstarCount":0,"nullAvg":0,"poorAvg":0,"averageAvg":0,"goodAvg":100,"superstarAvg":0},{"category":"Agile","nullCount":0,"poorCount":0,"averageCount":1,"goodCount":0,"superstarCount":0,"nullAvg":0,"poorAvg":0,"averageAvg":100,"goodAvg":0,"superstarAvg":0},{"category":"Spring","nullCount":0,"poorCount":1,"averageCount":0,"goodCount":0,"superstarCount":0,"nullAvg":0,"poorAvg":100,"averageAvg":0,"goodAvg":0,"superstarAvg":0},{"category":"Microservices","nullCount":0,"poorCount":0,"averageCount":1,"goodCount":0,"superstarCount":0,"nullAvg":0,"poorAvg":0,"averageAvg":100,"goodAvg":0,"superstarAvg":0},{"category":"JVM","nullCount":0,"poorCount":0,"averageCount":1,"goodCount":1,"superstarCount":0,"nullAvg":0,"poorAvg":0,"averageAvg":50,"goodAvg":50,"superstarAvg":0},{"category":"DevOps","nullCount":0,"poorCount":0,"averageCount":0,"goodCount":1,"superstarCount":0,"nullAvg":0,"poorAvg":0,"averageAvg":0,"goodAvg":100,"superstarAvg":0},{"category":"Performance Testing","nullCount":0,"poorCount":0,"averageCount":0,"goodCount":1,"superstarCount":0,"nullAvg":0,"poorAvg":0,"averageAvg":0,"goodAvg":100,"superstarAvg":0}]`);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // run getBatches()
  it('should call getBatches', () =>{
    let mySpy = spyOn(component, 'getBatches').and.callThrough();
    component.getBatches();
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  //run displayGraph()
  it('should call displayGraph', () =>{
    let mySpy = spyOn(component, 'displayGraph').and.callThrough();
    component.displayGraph();
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  //getXData(batch: string): string[]
  it('should call getXData', () =>{
    let mySpy = spyOn(component, 'getXData').and.callThrough();
    component.getXData("String");
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

//getSuperstarScores(batch: string): any[] {
  it('should call getSuperstarScores', () =>{
    let mySpy = spyOn(component, 'getSuperstarScores').and.callThrough();
    component.getSuperstarScores("String");
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  // getGoodScores(batch: string): any[] {
  it('should call getGoodScores', () =>{
    let mySpy = spyOn(component, 'getGoodScores').and.callThrough();
    component.getGoodScores("String");
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  // getAverageScores(batch: string): any[] {
  it('should call getAverageScores', () =>{
    let mySpy = spyOn(component, 'getAverageScores').and.callThrough();
    component.getAverageScores("String");
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  //getPoorScores(batch: string): any[] {
  it('should call getPoorScores', () =>{
    let mySpy = spyOn(component, 'getPoorScores').and.callThrough();
    component.getPoorScores("String");
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  //getNullScores(batch: string): any[] {
  it('should call getNullScores', () =>{
    let mySpy = spyOn(component, 'getNullScores').and.callThrough();
    component.getNullScores("String");
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

  //doubleClickGraph3(): void {
  it('should call doubleClickGraph3', () =>{
    let mySpy = spyOn(component, 'doubleClickGraph3').and.callThrough();
    component.doubleClickGraph3();
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  //displayErrorMassage(message: string) {
  it('should call displayErrorMassage', () =>{
    let mySpy = spyOn(component, 'displayErrorMassage').and.callThrough();
    component.displayErrorMassage("String");
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });
});
