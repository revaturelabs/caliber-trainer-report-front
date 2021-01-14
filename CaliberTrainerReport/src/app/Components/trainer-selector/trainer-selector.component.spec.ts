import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import { TrainerSelectorComponent } from './trainer-selector.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { createPublicKey } from 'crypto';

describe('TrainerSelectorComponent', () => {
  let component: TrainerSelectorComponent;
  let fixture: ComponentFixture<TrainerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerSelectorComponent],
      imports:[HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh the window when selected value changes', () => {
    let event = {target: {value: "1"}};
    let mySpy = spyOn(component, 'getSelectedTrainer');
    component.getSelectedTrainer(event);
    console.log(mySpy);
    expect(mySpy).toHaveBeenCalled();
  }); 



  it('should not refresh the window if the selected value does not change', () => {
    let event = {target: {value: ""}};
    component.getSelectedTrainer(event);
    console.log(component.selectedValue);
    expect(component.selectedValue).toEqual("");
  }); 

});
