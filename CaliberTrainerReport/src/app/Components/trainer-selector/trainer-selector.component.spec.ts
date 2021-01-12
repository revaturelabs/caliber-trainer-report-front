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

  it('should refresh upon mouse clicks', () => {
    let event = {target: {value: 5}};
    component.getSelectedTrainer(event);
    console.log(component.selectedValue); 
    expect(component.selectedValue).toBeTruthy();
  }); 

});
