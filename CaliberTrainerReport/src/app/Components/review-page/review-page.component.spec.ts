import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPageComponent } from './review-page.component';

fdescribe('ReviewPageComponent', () => {
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

    component.ngOnInit();
    expect(component.selectedValue == 'all');
    
    component.downloadPDF();
  });


  
});
