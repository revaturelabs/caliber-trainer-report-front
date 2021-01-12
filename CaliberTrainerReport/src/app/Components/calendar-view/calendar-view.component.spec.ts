import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarViewComponent } from './calendar-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CalendarViewComponent', () => {
  let component: CalendarViewComponent;
  let fixture: ComponentFixture<CalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarViewComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    fixture = TestBed.createComponent(CalendarViewComponent);
    component = fixture.componentInstance;
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  })
  
  it('should have 2019 in "year dropdown"', () => {
    const drpdn = fixture.debugElement.nativeElement.querySelector('#dates-selector');
    expect(drpdn.innerHTML).toContain('2019');
  });
});
