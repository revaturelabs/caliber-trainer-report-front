import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../file-upload.service';
import { Observable } from 'rxjs';

// 
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressPage {
  public fileList$: Observable<string[]> = this.fileUploadService.list();
  constructor(private fileUploadService: FileUploadService) { }

  // Might implement these methods hold off deleting
  // public download(fileName: string):  void {
  //   this.fileUploadService.download(fileName);
  // }

  // public remove(fileName: string):  void {
  //   this.fileUploadService.remove(fileName);
  // }

}
