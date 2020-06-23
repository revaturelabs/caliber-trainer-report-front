import { Component } from '@angular/core';
import { FileUploadService } from '../../file-upload.service';

// 
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressPage {
  public fileList$ = this.fileUploadService.fileList;
  constructor(private fileUploadService: FileUploadService) { }
}
