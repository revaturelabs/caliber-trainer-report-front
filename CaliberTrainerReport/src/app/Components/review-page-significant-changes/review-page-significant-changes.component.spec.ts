import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPageSignificantChangesComponent } from './review-page-significant-changes.component';

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
});
