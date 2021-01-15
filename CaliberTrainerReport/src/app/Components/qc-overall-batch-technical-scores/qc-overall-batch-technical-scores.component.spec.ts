import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QCComponent } from '../qc/qc.component';

import { QcOverallBatchTechnicalScoresComponent } from './qc-overall-batch-technical-scores.component';

fdescribe('QcOverallBatchTechnicalScoresComponent', () => {
  let component: QcOverallBatchTechnicalScoresComponent;
  let fixture: ComponentFixture<QcOverallBatchTechnicalScoresComponent>;

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

});
