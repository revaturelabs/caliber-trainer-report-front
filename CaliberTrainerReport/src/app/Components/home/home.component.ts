import { Component} from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FileUploadService } from '../../services/file-upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  databaseIcon: any = faDatabase;

  public displayLoader: Observable<boolean> = this.fileUploadService.isLoading();
  constructor(private fileUploadService: FileUploadService) { }
}
