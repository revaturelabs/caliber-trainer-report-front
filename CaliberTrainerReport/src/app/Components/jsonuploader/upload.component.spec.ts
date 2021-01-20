import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { UploadComponent } from './upload.component';
import { By } from '@angular/platform-browser';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents(); 

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
 

  it('should upload a file I have selected', () => {
    
    let event = {target: {files:[{name: "countryroads.json", data: {"west virginia": "the western part of Virginia"}}]}};
    let mySpySelectJson = spyOn(component, 'onFileChange').withArgs(event).and.callThrough();
    let fileSelectorSelector: HTMLInputElement = fixture.debugElement.query(By.css("[type=file]")).nativeElement;
    fileSelectorSelector.dispatchEvent(new Event("change"));
    fixture.detectChanges();
    expect(mySpySelectJson).toHaveBeenCalled();
    expect(component.formGroup.get('file')[0]).not.toBeNull();  //that is, 

    
  //let fileSelectorSelector: HTMLInputElement = fixture.debugElement.query(By.css("[type=file]")).nativeElement;
  //fileSelectorSelector.dispatchEvent(new Event("onFileChange"));
    let mySpySubmit = spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(mySpySubmit).toHaveBeenCalled();
    
  });
  

});
