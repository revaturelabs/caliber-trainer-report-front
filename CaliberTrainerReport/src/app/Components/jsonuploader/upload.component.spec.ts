import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { UploadComponent } from './upload.component';
import { By } from '@angular/platform-browser';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit', () =>{
    let mySpy = spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });

  it('should call onFileChange', () =>{
    let mySpy = spyOn(component, 'onFileChange').and.callThrough();
    let fileSelector: HTMLInputElement = fixture.debugElement.query(By.css("[type=file]")).nativeElement;
    fileSelector.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalled();
  });
 
});
