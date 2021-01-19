import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FileUploadService } from './file-upload.service';

fdescribe('FileUploadService', () => {
  let service: FileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(FileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should upload when I call "upload()"', () => {
    let fakeFileName: string = "oneTwoFashionBlack.json";
    let fakeFileContents: string = "{ wow: \"lol, but in the League of Legends manner\"}";

    service.upload(fakeFileName, fakeFileContents);
    let fileNameExistence = false;
    service.fileList.forEach((element) => {
      if (element === fakeFileName){
        fileNameExistence = true;
      }
    })
    expect(fileNameExistence).toBeTrue();
  
  });
  
});
