import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QCComponent } from './qc.component';

describe('QCComponent', () => {
  let component: QCComponent;
  let fixture: ComponentFixture<QCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ QCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call downloadPDF on click', () =>{
    let mySpy = spyOn(component, 'downloadPDF').and.callThrough();
    const selector: HTMLSelectElement = fixture.debugElement.query(By.css("#downloadButton")).nativeElement;
    selector.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

});
