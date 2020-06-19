import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploadService } from '../../file-upload.service';
import { GetTrainerService } from 'src/app/get-trainer.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {


  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  private fileName;

  constructor(private fb: FormBuilder, public fileUploadService: FileUploadService, private getTrainerServ: GetTrainerService) { }

  public onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsBinaryString(file);

      reader.onload = () => {
        this.formGroup.patchValue({
            file: reader.result
        });
      };
    }
  }

  public onSubmit(): void {
    this.fileUploadService.upload(this.fileName, this.formGroup.get('file').value);
  }

  test() {
    console.log(this.getTrainerServ.getTrainerList().pipe(first()).subscribe());
  }
}
