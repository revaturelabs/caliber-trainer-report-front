import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectorRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewPageSignificantChangesComponent } from './review-page-significant-changes.component';
import { Change } from './review-page-significant-changes.component';

describe('ReviewPageSignificantChangesComponent', () => {
  let component: ReviewPageSignificantChangesComponent;
  let fixture: ComponentFixture<ReviewPageSignificantChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageSignificantChangesComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageSignificantChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Change constructor correctly', () => {
    let change = new Change("string", "string", 0, 0); 
    expect(change).toBeTruthy(change);
  });
});
