import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPageComponent } from './review-page.component';

describe('ReviewPageComponent', () => {
  let component: ReviewPageComponent;
  let fixture: ComponentFixture<ReviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should download the PDF file', () => {
    // create spy object with a click() method
    const spyObj = jasmine.createSpyObj('a', ['click']);
    // spy on document.createElement() and return the spy object
    spyOn(document, 'createElement').and.returnValue(spyObj);

    const comp = new ReviewPageComponent();
    comp.downloadPDF();

    expect(document.createElement).toHaveBeenCalledTimes(1);
    expect(document.createElement).toHaveBeenCalledWith('a');

    expect(spyObj.href).toBe('data:pdf;charset=utf-8,ID,Name%0A1,abc%0A2,def%0A');
    expect(spyObj.target).toBe('_blank');
    expect(spyObj.download).toBe('Review Page Report.pdf');
    expect(spyObj.click).toHaveBeenCalledTimes(1);
    expect(spyObj.click).toHaveBeenCalledWith();
  });

  
});
