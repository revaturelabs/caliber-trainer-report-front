import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainNavBarComponent } from './main-nav-bar.component';

describe('MainNavBarComponent', () => {
  let component: MainNavBarComponent;
  let fixture: ComponentFixture<MainNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open menu', () => {
    component.hamburgerOpen = true;
    component.openMenu();
    expect(component.hamburgerOpen).toBeFalse();
    component.openMenu();
    expect(component.hamburgerOpen).toBeTrue();
  });

  it('should react to resize', () => {
    const spyOnResize = spyOn(component, 'onResize').and.callThrough();
    const event = new Event('resize');
    window.dispatchEvent(event);
    expect(spyOnResize).toHaveBeenCalled();
  });

});
