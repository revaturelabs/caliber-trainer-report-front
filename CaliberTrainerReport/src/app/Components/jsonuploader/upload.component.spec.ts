import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  ReactiveFormsModule } from '@angular/forms';

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


  /*
  it('should upload a file I have selected', () => {
    let fileSelectorSelector: HTMLInputElement = fixture.debugElement.query(By.css("[type=file]")).nativeElement;
    let submitSelector: HTMLInputElement = fixture.debugElement.query(By.css("[type=submit]")).nativeElement;

    fileSelectorSelector.dispatchEvent(new Event("onFileChange"));
    fixture.detectChanges();
    expect(component.)
  });
  */
 
});
